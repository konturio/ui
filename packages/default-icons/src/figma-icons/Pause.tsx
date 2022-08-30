import { SVGProps, memo } from 'react';

const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.4286 6C14.7466 6 14.0925 6.18964 13.6103 6.52721C13.1281 6.86477 12.8571 7.32261 12.8571 7.8V16.2C12.8571 16.6774 13.1281 17.1352 13.6103 17.4728C14.0925 17.8104 14.7466 18 15.4286 18C16.1106 18 16.7646 17.8104 17.2468 17.4728C17.7291 17.1352 18 16.6774 18 16.2V7.8C18 7.32261 17.7291 6.86477 17.2468 6.52721C16.7646 6.18964 16.1106 6 15.4286 6ZM16.2857 16.2C16.2857 16.3591 16.1954 16.5117 16.0347 16.6243C15.8739 16.7368 15.6559 16.8 15.4286 16.8C15.2012 16.8 14.9832 16.7368 14.8225 16.6243C14.6617 16.5117 14.5714 16.3591 14.5714 16.2V7.8C14.5714 7.64087 14.6617 7.48826 14.8225 7.37574C14.9832 7.26321 15.2012 7.2 15.4286 7.2C15.6559 7.2 15.8739 7.26321 16.0347 7.37574C16.1954 7.48826 16.2857 7.64087 16.2857 7.8V16.2ZM8.57143 6C7.88944 6 7.23539 6.18964 6.75315 6.52721C6.27092 6.86477 6 7.32261 6 7.8V16.2C6 16.6774 6.27092 17.1352 6.75315 17.4728C7.23539 17.8104 7.88944 18 8.57143 18C9.25341 18 9.90747 17.8104 10.3897 17.4728C10.8719 17.1352 11.1429 16.6774 11.1429 16.2V7.8C11.1429 7.32261 10.8719 6.86477 10.3897 6.52721C9.90747 6.18964 9.25341 6 8.57143 6ZM9.42857 16.2C9.42857 16.3591 9.33827 16.5117 9.17752 16.6243C9.01677 16.7368 8.79876 16.8 8.57143 16.8C8.3441 16.8 8.12608 16.7368 7.96534 16.6243C7.80459 16.5117 7.71429 16.3591 7.71429 16.2V7.8C7.71429 7.64087 7.80459 7.48826 7.96534 7.37574C8.12608 7.26321 8.3441 7.2 8.57143 7.2C8.79876 7.2 9.01677 7.26321 9.17752 7.37574C9.33827 7.48826 9.42857 7.64087 9.42857 7.8V16.2Z"
      fill="currentColor"
    />
  </svg>
);

Pause.displayName = 'Pause';
const Memo = memo(Pause);
export default Memo;
