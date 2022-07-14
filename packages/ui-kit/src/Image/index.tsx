import { CSSProperties, forwardRef } from 'react';
import cn from 'clsx';
import styles from './style.module.css';
import { ComponentWithFactory } from '../utils/types';
import { nanoid } from 'nanoid';
import { AccessibilityAttributes } from '../utils/accessibility';

interface ImageProps {
  /** Alternative text. */
  alt?: string;

  'aria-label'?: string;

  /** Accessibility behavior if overridden by the user. */
  accessibility?: AccessibilityAttributes;

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar?: boolean;

  /** An image can appear circular. */
  circular?: boolean;

  /** An image can take up the width of its container. */
  fluid?: boolean;

  /** Image source URL. */
  src: string;

  className?: string;
  style?: CSSProperties | undefined;
  width?: string;
  height?: string;
  avatarRadius?: string;
  avatarSize?: string;
  circularRadius?: string;
}

const ImageComponent = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      accessibility,
      alt,
      'aria-label': ariaLabel,
      avatar,
      circular,
      className,
      fluid,
      style,
      width,
      height,
      avatarRadius = '32px',
      avatarSize,
      circularRadius,
    }: ImageProps,
    ref,
  ) => {
    const dynamicClasses = cn({
      [styles.img]: true,
      [styles.avatar]: avatar,
      [styles.circular]: circular,
      [styles.fluid]: fluid,
      className,
    });

    const dynamicStyles = style ? style : {};
    if (width) {
      dynamicStyles.width = width;
    }
    if (height) {
      dynamicStyles.height = height;
    }
    if (circular && circularRadius) {
      dynamicStyles.borderRadius = circularRadius;
    }
    if (avatar) {
      if (!fluid && avatarSize) {
        dynamicStyles.width = avatarSize;
      }
      if (avatarRadius) {
        dynamicStyles.borderRadius = avatarRadius;
      }
    }

    const dynamicProps: Record<string, unknown> = {
      alt,
      'aria-label': ariaLabel,
      'aria-hidden': alt || ariaLabel ? undefined : 'true',
      ...accessibility,
    };

    return <img {...dynamicProps} style={{ ...style, ...dynamicStyles }} className={dynamicClasses} ref={ref} />;
  },
);

ImageComponent.displayName = 'Image';

export const Image = ImageComponent as ComponentWithFactory<typeof ImageComponent, ImageProps, string>;

/** Image fabric. */
Image.create = (src: string, props: Omit<ImageProps, 'src'> = {}, generateKey = false) => {
  if (generateKey) {
    props['key'] = nanoid(4);
  }
  return <Image {...props} src={src} />;
};
