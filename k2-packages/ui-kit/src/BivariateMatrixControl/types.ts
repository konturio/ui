export type BivariateMatrixQuotientType = {
  id: [string, string];
  label?: string;
  quality?: number;
};

export type BivariateMatrixPositionType = { x: number | null; y: number | null };

export type BivariateMatrixHeadingType = {
  label: string;
  selectedQuotient: BivariateMatrixQuotientType;
  quality?: number;
  quotients: BivariateMatrixQuotientType[];
};
