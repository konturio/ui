export type PanelCustomControl = {
  icon: React.ReactElement;
  disabled?: boolean;
  className?: string;
  onWrapperClick: React.MouseEventHandler<HTMLButtonElement>;
};

export interface Panel extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  header?: string | React.ReactElement | React.ReactElement[];
  headerIcon?: React.ReactElement;
  isOpen?: boolean;
  onHeaderClick?: React.MouseEventHandler<HTMLDivElement>;
  classes?: {
    header?: string;
    headerTitle?: string;
    closeBtn?: string;
    modal?: string;
  };
  modal?: {
    onModalClick: () => void;
    showInModal: boolean;
  };
  contentHeight?: number | string;
  minContentHeight?: number | string;
  maxContentHeight?: number | string;
  contentContainerRef?: (node: HTMLDivElement) => void;
  contentClassName?: string;
  resize?: 'vertical' | 'horizontal' | 'both' | 'none';
  customControls?: PanelCustomControl[];
}
