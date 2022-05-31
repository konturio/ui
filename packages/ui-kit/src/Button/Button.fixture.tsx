import { EyeBallIcon } from '@kontur-ui/default-icons';

import { Button, ButtonProps } from '.';

const rowStyle = {
  margin: '1em',
  gap: '1em',
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
};

const columnStyle = {
  margin: '1em',
  gap: '1em',
  display: 'flex',
  flexDirection: 'column' as React.CSSProperties['flexDirection'],
};

export default {
  regular: (
    <div style={{ margin: '1em', gap: '1em', display: 'flex', flexFlow: 'row nowrap' }}>
      <Button onClick={console.log} size="medium">
        Enabled
      </Button>
      <Button onClick={console.log} size="medium" disabled>
        Disabled
      </Button>
      <Button onClick={console.log} size="medium" active>
        Pressed
      </Button>
    </div>
  ),
  'invert-outline': (
    <div style={rowStyle}>
      <Button onClick={console.log} size="medium" variant="invert-outline">
        Enabled
      </Button>
      <Button onClick={console.log} size="medium" variant="invert-outline" disabled>
        Disabled
      </Button>
      <Button onClick={console.log} size="medium" variant="invert-outline" active>
        Pressed
      </Button>
    </div>
  ),
  invert: (
    <div style={rowStyle}>
      <Button onClick={console.log} size="medium" variant="invert">
        Enabled
      </Button>
      <Button onClick={console.log} size="medium" variant="invert" disabled>
        Disabled
      </Button>
      <Button onClick={console.log} size="medium" variant="invert" active>
        Pressed
      </Button>
    </div>
  ),
  transparent: (
    <div style={columnStyle}>
      Invert
      <div style={rowStyle}>
        <Button transparent onClick={console.log} size="medium" variant="invert">
          Enabled
        </Button>
        <Button transparent onClick={console.log} size="medium" variant="invert" disabled>
          Disabled
        </Button>
        <Button transparent onClick={console.log} size="medium" variant="invert" active>
          Pressed
        </Button>
      </div>
      Invert Outline
      <div style={rowStyle}>
        <Button transparent onClick={console.log} size="medium" variant="invert-outline">
          Enabled
        </Button>
        <Button transparent onClick={console.log} size="medium" variant="invert-outline" disabled>
          Disabled
        </Button>
        <Button transparent onClick={console.log} size="medium" variant="invert-outline" active>
          Pressed
        </Button>
      </div>
    </div>
  ),
  'all-types-light': (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <h3>Primary</h3>
        {getAllCasesByType(false, 'primary')}
        <h3>Invert Outline</h3>
        {getAllCasesByType(false, 'invert-outline')}
        <h3>Invert</h3>
        {getAllCasesByType(false, 'invert')}
      </div>
    </>
  ),
  'all-types-dark': (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <h3>Primary</h3>
        {getAllCasesByType(true, 'primary')}
        <h3>Invert Outline</h3>
        {getAllCasesByType(true, 'invert-outline')}
        <h3>Invert</h3>
        {getAllCasesByType(true, 'invert')}
      </div>
    </>
  ),
};

function getAllCasesByType(dark: ButtonProps['dark'] = false, variant: ButtonProps['variant']) {
  return (
    <div style={{ display: 'flex', gap: '4em' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Medium</b>
        {getAllCasesByTypeSize(dark, variant, 'medium')}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Small</b>
        {getAllCasesByTypeSize(dark, variant, 'small')}
      </div>
    </div>
  );
}

function getAllCasesByTypeSize(dark: ButtonProps['dark'], variant: ButtonProps['variant'], size: ButtonProps['size']) {
  return (
    <>
      <div style={rowStyle}>
        <Button dark={dark} onClick={console.log} size={size} variant={variant}>
          Enabled
        </Button>
        <Button dark={dark} onClick={console.log} size={size} variant={variant} disabled>
          Disabled
        </Button>
        <Button dark={dark} onClick={console.log} size={size} variant={variant} active>
          Pressed
        </Button>
      </div>
      <div style={rowStyle}>
        <Button dark={dark} onClick={console.log} iconBefore={<EyeBallIcon />} size={size} variant={variant}>
          Enabled
        </Button>
        <Button dark={dark} onClick={console.log} iconBefore={<EyeBallIcon />} size={size} variant={variant} disabled>
          Disabled
        </Button>
        <Button dark={dark} onClick={console.log} iconBefore={<EyeBallIcon />} size={size} variant={variant} active>
          Pressed
        </Button>
      </div>

      <div style={rowStyle}>
        <Button dark={dark} onClick={console.log} iconAfter={<EyeBallIcon />} size={size} variant={variant}>
          Enabled
        </Button>
        <Button dark={dark} onClick={console.log} iconAfter={<EyeBallIcon />} size={size} variant={variant} disabled>
          Disabled
        </Button>
        <Button dark={dark} onClick={console.log} iconAfter={<EyeBallIcon />} size={size} variant={variant} active>
          Pressed
        </Button>
      </div>

      <div style={rowStyle}>
        <Button dark={dark} onClick={console.log} size={size} variant={variant} iconAfter={<EyeBallIcon />} />
        <Button dark={dark} onClick={console.log} size={size} variant={variant} disabled iconAfter={<EyeBallIcon />} />
        <Button dark={dark} onClick={console.log} size={size} variant={variant} active iconAfter={<EyeBallIcon />} />
      </div>
    </>
  );
}
