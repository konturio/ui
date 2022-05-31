import { ActionsBar, ActionsBarBTN } from '.';

export default (
  <div style={{ height: '50vh' }}>
    <ActionsBar>
      <ActionsBarBTN>Test</ActionsBarBTN>
      <ActionsBarBTN>Test</ActionsBarBTN>
      <ActionsBarBTN active>Test</ActionsBarBTN>
    </ActionsBar>
  </div>
);
