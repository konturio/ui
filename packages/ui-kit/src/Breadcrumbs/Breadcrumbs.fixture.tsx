import { useState } from 'react';
import Breadcrumbs from './index';

const crumbs = [
  { label: 'Product 1', value: 'product1_0' },
  { label: 'Product 2', value: 'product2_1' },
  { label: 'Product 3', value: 'product3_2' },
  { label: 'Product 4', value: 'product4_3' },
  { label: 'Product 5', value: 'product5_4' },
  { label: 'Product 6', value: 'product6_5' },
  { label: 'Product 7', value: 'product7_6' },
  { label: 'Product 8', value: 'product8_7' },
  { label: 'Product 9', value: 'product9_8' },
];

const style = `
.breadcrumbsComp {
  max-width: 500px;
}`;

const classes = {
  breadcrumbs: 'breadcrumbsComp',
};

const BreadcrumbsContainer = () => {
  const [activeCrumb, setActiveCrumb] = useState<string | null>(null);

  const handleClick = (item: { label: string; value: string }) => {
    setActiveCrumb(item.value);
  };

  return (
    <>
      <style>{style}</style>
      <div style={{ width: '50%' }}>
        <Breadcrumbs items={crumbs} onClick={handleClick} classes={classes} active={activeCrumb} />
      </div>
    </>
  );
};

export default BreadcrumbsContainer;
