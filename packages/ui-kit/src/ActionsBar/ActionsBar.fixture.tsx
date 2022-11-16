import { ActionsBar, ActionsBarBTN } from '.';

export default (
  <div style={{ height: '50vh' }}>
    <ActionsBar>
      <ActionsBarBTN>Test</ActionsBarBTN>
      <ActionsBarBTN>Test</ActionsBarBTN>
      <ActionsBarBTN active>Test</ActionsBarBTN>
      <ActionsBarBTN size="small-xs">Test Small</ActionsBarBTN>
      <ActionsBarBTN size="small-xs">Test Small</ActionsBarBTN>
      <ActionsBarBTN size="small-xs">Test Small</ActionsBarBTN>
      <ActionsBarBTN>Test</ActionsBarBTN>
    </ActionsBar>
  </div>
);
