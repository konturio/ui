import { SVGProps, memo } from 'react';

const Trash16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.01001 2.77523C5.01001 1.9468 5.68158 1.27523 6.51001 1.27523H9.48987C10.3183 1.27523 10.9899 1.9468 10.9899 2.77523V3.76506H12.3573H12.8573H13.6021C13.8783 3.76506 14.1021 3.98892 14.1021 4.26506C14.1021 4.5412 13.8783 4.76506 13.6021 4.76506H12.8573V13.2248C12.8573 14.0532 12.1858 14.7248 11.3573 14.7248H4.64258C3.81415 14.7248 3.14258 14.0532 3.14258 13.2248V4.76506H2.39746C2.12132 4.76506 1.89746 4.5412 1.89746 4.26506C1.89746 3.98892 2.12132 3.76506 2.39746 3.76506H3.14258H3.64258H5.01001V2.77523ZM6.01001 3.76506H9.98987V2.77523C9.98987 2.49909 9.76601 2.27523 9.48987 2.27523H6.51001C6.23387 2.27523 6.01001 2.49909 6.01001 2.77523V3.76506ZM4.14258 4.76506V13.2248C4.14258 13.5009 4.36644 13.7248 4.64258 13.7248H11.3573C11.6335 13.7248 11.8573 13.5009 11.8573 13.2248V4.76506H4.14258ZM7.25513 6.87752V7.37752V11.1124V11.6124H6.25513V11.1124V7.37752V6.87752H7.25513ZM9.74487 7.37752V6.87752H8.74487V7.37752V11.1124V11.6124H9.74487V11.1124V7.37752Z"
      fill="currentColor"
    />
  </svg>
);

Trash16.displayName = 'Trash16';
const Memo = memo(Trash16);
export default Memo;