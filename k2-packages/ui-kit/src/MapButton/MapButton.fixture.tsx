import { MapButton } from "."

export default (
  <div style={{ margin: '1em', gap: '1em', display: 'flex', flexFlow: 'row nowrap'}}>
    <MapButton onClick={console.log}> Map button </MapButton>
    <MapButton onClick={console.log} disabled> Disabled </MapButton>
  </div>
)