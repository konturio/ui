import { CSSProperties, ElementType, ForwardedRef, forwardRef, HTMLProps, ReactNode } from 'react';
import { AccessibilityAttributes } from '../utils/accessibility';
import { ComponentWithFactory, NodeValue } from '../utils/types';
import { nanoid } from 'nanoid';

export interface BoxProps extends Omit<HTMLProps<HTMLBaseElement>, 'ref'> {
  /** Override render tag for box. Div is default. */
  component?: ElementType;

  /** Accessibility behavior if overridden by the user. */
  accessibility?: AccessibilityAttributes;

  children?: ReactNode;
  className?: string;
  style?: CSSProperties | undefined;
}

const BoxComponent = forwardRef(({ component, accessibility, children, className, style, ...rest }: BoxProps, ref) => {
  const ComponentTag = component || 'div';

  return (
    <ComponentTag className={className} style={style} ref={ref} {...accessibility} {...rest}>
      {children}
    </ComponentTag>
  );
});

BoxComponent.displayName = 'Box';

export const Box = BoxComponent as ComponentWithFactory<typeof BoxComponent, BoxProps, NodeValue<unknown>>;

/** Box fabric. */
Box.create = (
  content: NodeValue<unknown>,
  props: BoxProps & { ref?: ForwardedRef<unknown> } = {},
  generateKey = false,
) => {
  if (generateKey) {
    props['key'] = nanoid(4);
  }
  return <Box {...props}>{content}</Box>;
};
