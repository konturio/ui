import { Legend } from '.';

const renderCustomAxisLabel = (_axis, className) => {
  return <div className={className}> Custom Label!</div>;
};

export default (
  <>
    <Legend
      showSteps={true}
      showArrowHeads={true}
      showAxisLabels={true}
      size={4}
      cells={[
        { label: 'A1', color: 'silver' },
        { label: 'B1', color: 'gray' },
        { label: 'C1', color: 'gray' },
        { label: 'D1', color: 'silver' },
        { label: 'A2', color: 'gray' },
        { label: 'B2', color: 'silver' },
        { label: 'C2', color: 'silver' },
        { label: 'D2', color: 'gray' },
        { label: 'A3', color: 'gray' },
        { label: 'B3', color: 'silver' },
        { label: 'C3', color: 'silver' },
        { label: 'D3', color: 'gray' },
        { label: 'A4', color: 'silver' },
        { label: 'B4', color: 'gray' },
        { label: 'C4', color: 'gray' },
        { label: 'D4', color: 'silver' },
      ]}
      axis={{
        x: {
          label: 'X axis',
          quality: 3,
          quotient: ['quotient1', 'quotient2'],
          steps: [
            {
              value: 0,
            },
            {
              value: 3,
            },
            {
              value: 6,
            },
            {
              value: 9,
            },
            {
              value: 12,
            },
          ],
        },
        y: {
          label: 'Y axis',
          quality: 3,
          quotient: ['quotient1', 'quotient2'],
          steps: [
            {
              value: 0.0,
            },
            {
              value: 0.3,
            },
            {
              value: 0.6,
            },
            {
              value: 0.9,
            },
            {
              value: 1.2,
            },
          ],
        },
      }}
      title={'Title'}
    />

    <Legend
      showSteps={true}
      showArrowHeads={true}
      showAxisLabels={true}
      size={3}
      cells={[
        { label: 'A1', color: 'gray' },
        { label: 'B1', color: 'silver' },
        { label: 'C1', color: 'gray' },
        { label: 'A2', color: 'silver' },
        { label: 'B2', color: 'gray' },
        { label: 'C2', color: 'silver' },
        { label: 'A3', color: 'gray' },
        { label: 'B3', color: 'silver' },
        { label: 'C3', color: 'gray' },
        { label: 'A4', color: 'silver' },
        { label: 'B4', color: 'gray' },
        { label: 'C4', color: 'gray' },
      ]}
      axis={{
        x: {
          label: 'X axis',
          quality: 3,
          quotient: ['quotient1', 'quotient2'],
          steps: [
            {
              value: 0,
            },
            {
              value: 3,
            },
            {
              value: 6,
            },
            {
              value: 9,
            },
          ],
        },
        y: {
          label: 'Y axis',
          quality: 3,
          quotient: ['quotient1', 'quotient2'],
          steps: [
            {
              value: 0.0,
            },
            {
              value: 0.3,
            },
            {
              value: 0.6,
            },
            {
              value: 0.9,
            },
          ],
        },
      }}
      title={'Title'}
    />

    <Legend
      showSteps={true}
      showArrowHeads={true}
      showAxisLabels={true}
      size={2}
      cells={[
        { label: 'A1', color: 'gray' },
        { label: 'B1', color: 'silver' },

        { label: 'A2', color: 'silver' },
        { label: 'B2', color: 'gray' },

        { label: 'A3', color: 'gray' },
        { label: 'B3', color: 'silver' },

        { label: 'A4', color: 'silver' },
        { label: 'B4', color: 'gray' },
      ]}
      axis={{
        x: {
          label: 'X axis',
          quality: 2,
          quotient: ['quotient1', 'quotient2'],
          steps: [
            {
              value: 0,
            },
            {
              value: 3,
            },
            {
              value: 6,
            },
          ],
        },
        y: {
          label: 'Y axis',
          quality: 3,
          quotient: ['quotient1', 'quotient2'],
          steps: [
            {
              value: 0.0,
            },
            {
              value: 0.3,
            },
            {
              value: 0.6,
            },
          ],
        },
      }}
      title={'Title'}
    />

    <Legend
      showSteps={true}
      showArrowHeads={true}
      showAxisLabels={true}
      renderXAxisLabel={renderCustomAxisLabel}
      renderYAxisLabel={renderCustomAxisLabel}
      size={2}
      cells={[
        { label: 'A1', color: 'gray' },
        { label: 'B1', color: 'silver' },

        { label: 'A2', color: 'silver' },
        { label: 'B2', color: 'gray' },

        { label: 'A3', color: 'gray' },
        { label: 'B3', color: 'silver' },

        { label: 'A4', color: 'silver' },
        { label: 'B4', color: 'gray' },
      ]}
      axis={{
        x: {
          label: 'X axis',
          quality: 2,
          quotient: ['quotient1', 'quotient2'],
          steps: [
            {
              value: 0,
            },
            {
              value: 3,
            },
            {
              value: 6,
            },
          ],
        },
        y: {
          label: 'Y axis',
          quality: 3,
          quotient: ['quotient1', 'quotient2'],
          steps: [
            {
              value: 0.0,
            },
            {
              value: 0.3,
            },
            {
              value: 0.6,
            },
          ],
        },
      }}
      title={'Custom Axis Labels'}
    />
  </>
);
