import React, { useState, useEffect, useCallback } from 'react';
import { Selector, Legend, AxisControl, Rotator } from '@k2-packages/ui-kit';
import style from './style.styl';
import {
  Stat,
  Table,
  DenominatorSelector,
  NumeratorSelector,
  parseStat,
  generateBivariateStyleForAxis,
  extractColors,
  Theme,
} from '@k2-packages/bivariate-tools';
import { updateTableOnClick } from './handlers';
import MapboxMap from '@k2-packages/mapbox-map';
import selectedAxis from './axis.json';

const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken: 'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

const TILES_URL = 'http://localhost:8080/tiles/stats/';
type Option = { label: string; value: string };
const PLACEHOLDER = { label: 'No options', value: 'not-selected' };
const createOptions = (strings: string[]) => strings.map((d) => ({ label: d, value: d }));

export default function Bivariate(): JSX.Element {
  const [stats, setStats] = useState<Stat>();

  useEffect(() => {
    fetch('/tiles/stats/stat.json')
      .then((response) => response.json())
      .then((json) => {
        setStats(json);
      })
      .catch((e) => console.error(e));
  }, []);

  /* Set available denominators */
  const [availableDenominators, setAvailableDenominators] = useState<{ x: Option[]; y: Option[] }>({
    x: [PLACEHOLDER],
    y: [PLACEHOLDER],
  });

  const [availableColorThemes, setAvailableColorThemes] = useState<Theme[]>([]);

  const [denominatorsSelector, setDenominatorsSelector] = useState<DenominatorSelector>();

  useEffect(() => {
    if (stats === undefined) return;
    const { xDenominators, yDenominators, onSelectDenominators } = parseStat(stats);

    setAvailableDenominators({
      x: createOptions(xDenominators),
      y: createOptions(yDenominators),
    });

    const colorThemes = extractColors(stats);
    setAvailableColorThemes(colorThemes);
    setDenominatorsSelector(() => onSelectDenominators);
  }, [stats]);

  /* Selected denominator */
  const [xDenominator, setXDenominator] = useState<Option['value']>();
  const [yDenominator, setYDenominator] = useState<Option['value']>();

  // Set defaults
  useEffect(() => {
    if (availableDenominators === undefined) return;
    setXDenominator(availableDenominators.x[0].value);
    setYDenominator(availableDenominators.y[0].value);
  }, [availableDenominators]);

  /* Generate Table */
  const [numeratorsSelector, setNumeratorsSelector] = useState<NumeratorSelector>();
  const [table, setTable] = useState<Table>();
  useEffect(() => {
    if (denominatorsSelector !== undefined && xDenominator !== undefined && yDenominator !== undefined) {
      const result = denominatorsSelector(xDenominator, yDenominator);
      if (result !== null) {
        const { table, selectNumerators } = result;
        setTable(table);
        setNumeratorsSelector(() => selectNumerators);
      }
    }
  }, [xDenominator, yDenominator]);

  const clickHandler = useCallback(
    (e, { x, y }) => {
      setTable((table) => updateTableOnClick(table, { x, y }));
    },
    [setTable],
  );

  const [selectedAxises, setSelectedAxis] = useState<{ x: Stat['axis'][0]; y: Stat['axis'][0] }>();
  useEffect(() => {
    // TODO: fix test app to work with new table heading signature
    const selectedX: any = undefined;
    const selectedY: any = undefined;
    //const selectedX = table?.x.find((x) => x.selected);
    //const selectedY = table?.y.find((y) => y.selected);
    if (selectedX !== undefined && selectedY !== undefined && numeratorsSelector !== undefined) {
      const selection = numeratorsSelector(selectedX.id, selectedY.id);
      if (selection) {
        setSelectedAxis(selection);
      }
    }
  }, [table]);

  const [mapStyle, setMapStyle] = useState({
    version: 8,
    layers: [] as any[],
  });
  useEffect(() => {
    if (selectedAxises === undefined || availableColorThemes.length === 0) {
      return;
    }

    const bivariateStyle = generateBivariateStyleForAxis({
      id: `${selectedAxises.x.quotient.join('&')}|${selectedAxises.y.quotient.join('&')}`,
      x: selectedAxises.x,
      y: selectedAxises.y,
      colors: availableColorThemes[0],
      sourceLayer: 'stats',
      source: {
        type: 'vector',
        tiles: [`${TILES_URL}{z}/{x}/{y}.mvt`],
        maxzoom: stats?.meta.max_zoom,
        minzoom: 0,
      },
    });

    setMapStyle({
      version: 8,
      layers: [bivariateStyle],
    });
  }, [selectedAxises, stats?.meta]);

  return (
    <div className={style.root}>
      <MapboxMap
        style={mapboxConfig.style}
        mapStyle={mapStyle}
        accessToken={mapboxConfig.accessToken}
        className={style.Map}
        onClick={console.log}
        onLoad={console.log}
      />
      <div>
        <div style={{ height: '40px', zIndex: 40, position: 'relative' }}>
          <Selector
            selected={xDenominator}
            small={true}
            collapse={true}
            onChange={(value): void => setXDenominator(value)}
            options={availableDenominators.x}
          />
          <Selector
            selected={yDenominator}
            small={true}
            collapse={true}
            onChange={(value): void => setYDenominator(value)}
            options={availableDenominators.y}
          />
        </div>
        {table !== undefined && (
          <Rotator angle={-45}>
            <AxisControl
              angle={-45}
              matrix={table.matrix}
              xHeadings={[]}
              yHeadings={[]}
              onSelectCell={clickHandler}
              legend={(angle) => (
                <Legend
                  size={3}
                  angle={-45}
                  axis={selectedAxis}
                  cells={new Array(9).fill(0).map((c, i) => ({
                    color: `hsl(${(360 / 9) * i}, 50%, 50%)`,
                    label: String(i),
                  }))}
                />
              )}
            />
          </Rotator>
        )}
      </div>
    </div>
  );
}
