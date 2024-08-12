import { useState, useRef, useEffect } from 'react';
import cn from 'clsx';
import BreadcrumbItem from './BreadcrumbItem'; // Import the new BreadcrumbItem component
import styles from './style.module.css';
import type { ReactElement } from 'react';

interface BreadcrumbBase {
  label: string;
  value: string;
}

interface BreadcrumbsProps<T extends BreadcrumbBase> {
  items: T[];
  separator?: string | ReactElement;
  onClick?: (item: T) => void;
  active?: string | null;
  classes?: {
    breadcrumbs: string;
  };
}

const ellipsis = '...';
const ellipsisWidth = 35; // Approximate width of the `... >` element

const Breadcrumbs = <T extends BreadcrumbBase>({ items, separator, active, onClick, classes }: BreadcrumbsProps<T>) => {
  const [displayItems, setDisplayItems] = useState<T[]>(items);
  const [itemWidths, setItemWidths] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const olRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (!olRef.current) return;
    const widths = Array.from(olRef.current.children).map((child) => (child as HTMLElement).offsetWidth);
    setItemWidths(widths);
  }, [items]);

  useEffect(() => {
    const calculateBreadcrumbs = () => {
      if (!olRef.current || itemWidths.length === 0) return;

      const olComputedStyle = window.getComputedStyle(olRef.current);
      const paddingLeft = parseFloat(olComputedStyle.paddingLeft);
      const paddingRight = parseFloat(olComputedStyle.paddingRight);
      const containerWidth = olRef.current.clientWidth - paddingLeft - paddingRight;

      const totalWidth = itemWidths.reduce((acc, width) => acc + width, 0);

      if (totalWidth <= containerWidth) {
        return;
      } else {
        let start = 0;
        let end = items.length - 1;
        let displayedWidth = itemWidths[end];

        while (start < end && displayedWidth + ellipsisWidth <= containerWidth) {
          if (displayedWidth + itemWidths[start] + ellipsisWidth <= containerWidth) {
            displayedWidth += itemWidths[start];
            start++;
          }

          if (start < end && displayedWidth + itemWidths[end - 1] + ellipsisWidth <= containerWidth) {
            displayedWidth += itemWidths[end - 1];
            end--;
          } else {
            break;
          }
        }

        const newDisplayItems = [
          ...items.slice(0, start),
          {
            label: ellipsis,
            value: ellipsis,
          } as T,
          ...items.slice(end),
        ];
        setDisplayItems(newDisplayItems);
      }
      setIsVisible(true);
    };

    calculateBreadcrumbs();
    const observer = new ResizeObserver(() => {
      calculateBreadcrumbs();
    });

    if (olRef.current) {
      observer.observe(olRef.current);
    }

    return () => {
      if (olRef.current) {
        observer.unobserve(olRef.current);
      }
    };
  }, [itemWidths, items]);

  function onItemClick(item: T) {
    if (item.value !== ellipsis) {
      onClick && onClick(item);
    }
  }

  return (
    <nav aria-label="breadcrumb" className={`${styles.breadcrumbsContainer} ${isVisible ? styles.visible : ''}`}>
      <ol ref={olRef} className={cn(styles.breadcrumbs, classes?.breadcrumbs)}>
        {displayItems.map((crumb, index) => (
          <BreadcrumbItem
            key={index}
            label={crumb.label}
            value={crumb.value}
            active={active === crumb.value}
            onClick={() => onItemClick(crumb)}
            separator={separator}
            isLastItem={index === displayItems.length - 1}
          />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
