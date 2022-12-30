const colors = {
  colorful: 'url(#paint0_linear)',
  dark: 'black',
  light: 'white',
  contrast: 'black',
  grey: '#848C94',
};

export function Logo({
  compact = false,
  palette = 'colorful',
  height = 52,
  id = 'kontur_logo_svg_id',
}: {
  compact?: boolean;
  palette?: 'colorful' | 'dark' | 'light' | 'contrast' | 'grey';
  height?: number;
  id?: string;
}) {
  const compactWidth = Math.round(height * 1.041237113);
  const width = Math.round(height * 3.340206186);
  return (
    <a href="https://www.kontur.io/" target="_blank" title="kontur.io" rel="noreferrer">
      {compact ? (
        <svg
          width={compactWidth}
          height={height}
          viewBox="0 0 101 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
          id={id}
        >
          <rect
            x="15"
            y="15"
            width="71"
            height="67"
            rx="1"
            fill="white"
            fillOpacity={palette === 'contrast' ? 0.48 : 0}
          />
          <path
            d="M64.6106 0.389522C64.8599 0.638928 65 0.977196 65 1.32991V8H8V65.9999H1.3296C0.976967 65.9999 0.638779 65.8598 0.38943 65.6104C0.140082 65.361 0 65.0227 0 64.67V1.32991C0 0.977196 0.140082 0.638928 0.38943 0.389522C0.638779 0.140115 0.976967 0 1.3296 0H63.6704C64.023 0 64.3612 0.140115 64.6106 0.389522Z"
            fill="white"
            fillOpacity={palette === 'contrast' ? 0.48 : 0}
          />
          <path
            d="M36.3894 96.6104C36.1401 96.361 36 96.0227 36 95.67L36 88.9999L93 88.9999L93 31L99.6704 31C100.023 31 100.361 31.1401 100.611 31.3895C100.86 31.6389 101 31.9772 101 32.3299L101 95.67C101 96.0227 100.86 96.361 100.611 96.6104C100.361 96.8598 100.023 96.9999 99.6704 96.9999L37.3296 96.9999C36.977 96.9999 36.6388 96.8598 36.3894 96.6104Z"
            fill="white"
            fillOpacity={palette === 'contrast' ? 0.48 : 0}
          />
          <path
            d="M56.6805 31.9021L43.6962 46.0324C43.6028 46.1359 43.4802 46.2084 43.3447 46.2404C43.2091 46.2725 43.067 46.2624 42.9373 46.2117C42.8076 46.1609 42.6964 46.0718 42.6186 45.9562C42.5407 45.8407 42.4999 45.7042 42.5016 45.5649V32.7645C42.5016 32.2547 42.2991 31.7658 41.9387 31.4053C41.5784 31.0448 41.0896 30.8423 40.5799 30.8423H37.5987C37.089 30.8423 36.6002 31.0448 36.2399 31.4053C35.8795 31.7658 35.677 32.2547 35.677 32.7645V64.3187C35.6729 64.5732 35.7196 64.826 35.8144 65.0623C35.9093 65.2985 36.0503 65.5134 36.2293 65.6944C36.4083 65.8754 36.6217 66.0188 36.8568 66.1162C37.092 66.2136 37.3442 66.263 37.5987 66.2616H40.5695C40.8214 66.263 41.071 66.2145 41.3041 66.1191C41.5372 66.0236 41.7492 65.883 41.9277 65.7053C42.1063 65.5277 42.248 65.3165 42.3447 65.0839C42.4414 64.8512 42.4912 64.6018 42.4912 64.3499V57.399C42.578 56.9071 42.7616 56.4374 43.0314 56.0171C43.3998 55.617 43.8483 55.299 44.3477 55.0837C44.8472 54.8684 45.3863 54.7607 45.9301 54.7675C46.4739 54.7744 47.0101 54.8957 47.504 55.1235C47.9978 55.3513 48.4382 55.6806 48.7964 56.0899L56.6701 65.0979C56.9806 65.4589 57.3645 65.7495 57.7962 65.9501C58.2279 66.1508 58.6975 66.257 59.1735 66.2616H63.1311C63.3952 66.2745 63.6571 66.2084 63.8834 66.0717C64.1098 65.935 64.2902 65.7339 64.4017 65.4941C64.5132 65.2544 64.5507 64.9868 64.5094 64.7256C64.4681 64.4644 64.3499 64.2214 64.1699 64.0278L50.6662 49.2845C50.4789 49.0907 50.3743 48.8318 50.3743 48.5624C50.3743 48.2929 50.4789 48.034 50.6662 47.8403L64.1699 33.0866C64.3499 32.8929 64.4681 32.6499 64.5094 32.3887C64.5507 32.1275 64.5132 31.86 64.4017 31.6202C64.2902 31.3804 64.1098 31.1793 63.8834 31.0426C63.6571 30.9059 63.3952 30.8398 63.1311 30.8527H59.1216C58.6643 30.8497 58.2114 30.9414 57.7913 31.122C57.3712 31.3026 56.993 31.5682 56.6805 31.9021V31.9021Z"
            fill={colors[palette]}
          />
          <path
            d="M12 64.6701V12.5299C12 12.3894 12.0558 12.2546 12.1552 12.1552C12.2545 12.0558 12.3893 12 12.5298 12H63.6704C63.845 12 64.0179 11.9656 64.1792 11.8988C64.3405 11.8319 64.4871 11.734 64.6106 11.6105C64.734 11.487 64.832 11.3404 64.8988 11.179C64.9656 11.0177 65 10.8447 65 10.6701V7.32991C65 6.9772 64.8599 6.63893 64.6106 6.38952C64.3612 6.14012 64.023 6 63.6704 6H7.3296C6.97697 6 6.63878 6.14012 6.38943 6.38952C6.14008 6.63893 6 6.9772 6 7.32991V64.6701C6 65.0228 6.14008 65.3611 6.38943 65.6105C6.63878 65.8599 6.97697 66 7.3296 66H10.6704C11.0222 65.9973 11.3588 65.8563 11.6076 65.6075C11.8563 65.3587 11.9973 65.022 12 64.6701Z"
            fill={colors[palette]}
          />
          <path
            d="M89 32.3299V84.4701C89 84.6106 88.9442 84.7454 88.8448 84.8448C88.7455 84.9442 88.6107 85 88.4702 85H37.3296C36.977 85 36.6388 85.1401 36.3894 85.3895C36.1401 85.6389 36 85.9772 36 86.3299V89.6701C36 90.0228 36.1401 90.3611 36.3894 90.6105C36.6388 90.8599 36.977 91 37.3296 91H93.6704C94.023 91 94.3612 90.8599 94.6106 90.6105C94.8599 90.3611 95 90.0228 95 89.6701V32.3299C95 31.9772 94.8599 31.6389 94.6106 31.3895C94.3612 31.1401 94.023 31 93.6704 31H90.3296C89.977 31 89.6388 31.1401 89.3894 31.3895C89.1401 31.6389 89 31.9772 89 32.3299Z"
            fill={colors[palette]}
          />
          <defs>
            <linearGradient id="paint0_linear" x1="6" y1="6.5" x2="94.5" y2="89.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D2FF" />
              <stop offset="1" stopColor="#2CB3FF" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width={width}
          height={height}
          viewBox="0 0 325 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
          id={id}
        >
          <g clipPath="url(#clip0)">
            <path
              d="M317.13 32.3281V89.809H39.645V97H324.344V32.3281H317.13Z"
              fill="white"
              fillOpacity={palette === 'contrast' ? 0.48 : 0}
            />
            <path
              d="M7.21388 64.6563V7.19095H284.699V0H0V64.6563H7.21388Z"
              fill="white"
              fillOpacity={palette === 'contrast' ? 0.48 : 0}
            />
            <path
              d="M18.019 17.9618H306.325V79.0382H18.019V17.9618Z"
              fill="white"
              fillOpacity={palette === 'contrast' ? 0.48 : 0}
            />
            <path d="M309.931 32.3281V82.6181H39.645V89.809H317.13V32.3281H309.931Z" fill={colors[palette]} />
            <path d="M14.4121 64.6563V14.3663H284.699V7.19095H7.21387V64.6563H14.4121Z" fill={colors[palette]} />
            <path
              d="M147.651 59.1464L138.438 33.3087C138.186 32.6018 137.72 31.9902 137.105 31.5581C136.49 31.126 135.755 30.8948 135.003 30.8962H129.116C128.637 30.8941 128.162 30.9864 127.719 31.1678C127.276 31.3491 126.873 31.6159 126.534 31.9529C126.194 32.2898 125.925 32.6903 125.741 33.1313C125.557 33.5724 125.462 34.0452 125.462 34.5228V63.2243C125.462 63.7156 125.658 64.1867 126.007 64.5341C126.355 64.8814 126.828 65.0766 127.321 65.0766H130.194C130.439 65.0786 130.682 65.0322 130.909 64.9401C131.137 64.8479 131.343 64.7118 131.518 64.5396C131.692 64.3674 131.83 64.1625 131.924 63.9368C132.019 63.711 132.067 63.4689 132.067 63.2243V48.6868V36.9509C132.068 36.8306 132.112 36.7145 132.19 36.6229C132.268 36.5312 132.376 36.4699 132.495 36.4495C132.614 36.4291 132.737 36.451 132.841 36.5114C132.945 36.5717 133.025 36.6667 133.067 36.7797L142.295 62.6484C142.549 63.3582 143.017 63.9724 143.635 64.4071C144.252 64.8417 144.99 65.0755 145.746 65.0766H151.601C152.571 65.0724 153.501 64.6853 154.186 63.9997C154.87 63.3142 155.255 62.3862 155.255 61.4188V48.6868V32.7795C155.255 32.2883 155.059 31.8172 154.711 31.4698C154.362 31.1225 153.889 30.9273 153.397 30.9273H150.524C150.031 30.9273 149.558 31.1225 149.21 31.4698C148.861 31.8172 148.666 32.2883 148.666 32.7795V59.0063C148.669 59.1329 148.626 59.2565 148.544 59.3533C148.462 59.4501 148.347 59.5132 148.221 59.5306C148.095 59.548 147.967 59.5183 147.862 59.4474C147.757 59.3765 147.681 59.2693 147.651 59.1464V59.1464Z"
              fill={colors[palette]}
            />
            <path
              d="M110.582 43.5815C110.578 41.8494 110.288 40.1297 109.723 38.4918C109.199 36.9229 108.36 35.477 107.256 34.2426C102.431 28.7949 88.9244 28.7949 84.084 34.2426C82.9977 35.4693 82.1647 36.8974 81.6325 38.4451C81.062 40.0978 80.7718 41.8337 80.7737 43.5815V43.5815V52.4535C80.7718 54.2013 81.062 55.9372 81.6325 57.5899C82.1662 59.1416 82.999 60.5745 84.084 61.8079C88.9088 67.2401 102.431 67.2401 107.256 61.8079C108.349 60.578 109.188 59.1444 109.723 57.5899C110.288 55.952 110.578 54.2323 110.582 52.5002V43.5815ZM104.07 51.3639C104.071 52.4567 103.929 53.5449 103.649 54.6014C101.884 61.4811 89.4866 61.4655 87.6753 54.6014C87.4157 53.626 87.2793 52.6221 87.2693 51.613V44.6711C87.269 43.5783 87.4107 42.4901 87.6909 41.4336V41.4336C89.4553 34.5539 101.853 34.5695 103.665 41.4336C103.916 42.4105 104.053 43.4135 104.07 44.422V51.3639Z"
              fill={colors[palette]}
            />
            <path
              d="M170.416 37.3556H179.363C179.499 37.3556 179.633 37.3822 179.758 37.4338C179.883 37.4854 179.996 37.5611 180.092 37.6565C180.188 37.7519 180.264 37.8651 180.316 37.9897C180.367 38.1144 180.394 38.248 180.394 38.3829V63.2866C180.394 63.7778 180.59 64.2489 180.938 64.5963C181.287 64.9436 181.759 65.1388 182.252 65.1388H184.969C185.462 65.1388 185.934 64.9436 186.283 64.5963C186.631 64.2489 186.827 63.7778 186.827 63.2866V38.3829C186.827 38.1104 186.936 37.8491 187.129 37.6565C187.322 37.4638 187.584 37.3556 187.858 37.3556H196.742C197.235 37.3556 197.708 37.1604 198.056 36.8131C198.405 36.4657 198.6 35.9946 198.6 35.5034V32.7795C198.6 32.2883 198.405 31.8172 198.056 31.4698C197.708 31.1224 197.235 30.9273 196.742 30.9273H170.354C169.886 30.9627 169.449 31.1733 169.13 31.5169C168.811 31.8605 168.635 32.3116 168.636 32.7795V35.4722C168.628 35.9556 168.809 36.4232 169.142 36.7751C169.474 37.127 169.932 37.3353 170.416 37.3556Z"
              fill={colors[palette]}
            />
            <path
              d="M276.376 56.9673C276.278 56.8499 276.207 56.7117 276.17 56.5631C276.132 56.4146 276.129 56.2595 276.161 56.1096C276.192 55.9598 276.258 55.819 276.352 55.6979C276.446 55.5769 276.566 55.4787 276.704 55.4108C279.195 54.3318 281.277 52.4911 282.65 50.1548C284.023 47.8185 284.614 45.1077 284.34 42.4141C283.699 36.0948 277.485 30.9896 271.114 30.9896H257.483C256.99 30.9896 256.517 31.1847 256.169 31.5321C255.82 31.8794 255.625 32.3505 255.625 32.8418V63.2243C255.625 63.7156 255.82 64.1867 256.169 64.534C256.517 64.8814 256.99 65.0765 257.483 65.0765H260.371C260.864 65.0765 261.337 64.8814 261.685 64.534C262.034 64.1867 262.229 63.7156 262.229 63.2243V57.4498C262.227 57.3143 262.253 57.1798 262.304 57.0542C262.355 56.9286 262.43 56.8145 262.527 56.7187C262.623 56.6229 262.737 56.5473 262.863 56.4964C262.989 56.4455 263.124 56.4204 263.26 56.4225H265.79C266.376 56.4193 266.957 56.5381 267.494 56.7712C268.032 57.0044 268.515 57.3468 268.912 57.7766L274.69 64.0026C274.99 64.3271 275.355 64.5859 275.761 64.7628C276.166 64.9396 276.605 65.0305 277.048 65.0298H280.904C281.155 65.029 281.401 64.9556 281.611 64.8184C281.821 64.6813 281.986 64.4862 282.087 64.2571C282.188 64.028 282.22 63.7746 282.179 63.5277C282.138 63.2808 282.026 63.051 281.857 62.8663L276.376 56.9673ZM271.38 49.8074H263.213C263.077 49.8095 262.942 49.7844 262.816 49.7335C262.69 49.6826 262.576 49.607 262.48 49.5112C262.384 49.4154 262.308 49.3013 262.257 49.1758C262.206 49.0502 262.18 48.9156 262.183 48.7802V38.5074C262.183 38.2349 262.291 37.9736 262.484 37.781C262.678 37.5883 262.94 37.4801 263.213 37.4801H271.567C272.485 37.4918 273.389 37.7051 274.215 38.1049C275.041 38.5046 275.768 39.0809 276.345 39.7928C276.922 40.5047 277.335 41.3347 277.553 42.2236C277.772 43.1125 277.791 44.0385 277.61 44.9356C277.296 46.3403 276.504 47.5933 275.368 48.4815C274.232 49.3697 272.823 49.8382 271.38 49.8074Z"
              fill={colors[palette]}
            />
            <path
              d="M61.927 31.939L49.4354 45.5738C49.3444 45.6749 49.2247 45.746 49.0922 45.7776C48.9597 45.8093 48.8206 45.8 48.6936 45.751C48.5665 45.702 48.4574 45.6157 48.3807 45.5034C48.304 45.3911 48.2634 45.2583 48.2643 45.1224V32.7795C48.2643 32.2883 48.0685 31.8172 47.7201 31.4698C47.3716 31.1225 46.899 30.9273 46.4062 30.9273H43.455C42.9622 30.9273 42.4896 31.1225 42.1412 31.4698C41.7927 31.8172 41.5969 32.2883 41.5969 32.7795V63.2243C41.5969 63.7156 41.7927 64.1867 42.1412 64.534C42.4896 64.8814 42.9622 65.0765 43.455 65.0765H46.3437C46.8365 65.0765 47.3091 64.8814 47.6576 64.534C48.0061 64.1867 48.2018 63.7156 48.2018 63.2243V56.547C48.2833 56.0713 48.4585 55.6164 48.7171 55.2084C49.0727 54.8213 49.5064 54.5136 49.9898 54.3055C50.4732 54.0973 50.9953 53.9935 51.5218 54.0009C52.0483 54.0082 52.5673 54.1266 53.0447 54.3481C53.522 54.5696 53.9469 54.8894 54.2915 55.2863L61.927 63.9714C62.2279 64.3172 62.5996 64.5947 63.017 64.7853C63.4345 64.9759 63.888 65.0752 64.3472 65.0765H68.1571C68.4082 65.0758 68.6536 65.0023 68.8635 64.8651C69.0735 64.728 69.2389 64.533 69.3398 64.3038C69.4407 64.0747 69.4726 63.8213 69.4318 63.5744C69.3909 63.3275 69.279 63.0977 69.1096 62.913L56.0091 48.6868C55.8357 48.4975 55.7396 48.2504 55.7396 47.9941C55.7396 47.7378 55.8357 47.4908 56.0091 47.3015L69.1096 33.0597C69.2801 32.8779 69.3936 32.6503 69.4361 32.405C69.4785 32.1597 69.4481 31.9074 69.3485 31.6792C69.249 31.4509 69.0846 31.2566 68.8757 31.1203C68.6668 30.9839 68.4224 30.9114 68.1727 30.9118H64.3004C63.8551 30.9108 63.4145 31.0015 63.006 31.1783C62.5976 31.3551 62.2302 31.6141 61.927 31.939V31.939Z"
              fill={colors[palette]}
            />
            <path
              d="M238.901 30.9273H236.122C235.874 30.9211 235.627 30.9644 235.397 31.0547C235.166 31.145 234.955 31.2804 234.778 31.453C234.6 31.6257 234.459 31.832 234.363 32.0598C234.267 32.2876 234.217 32.5323 234.217 32.7795V51.3639C234.218 52.4517 234.077 53.5348 233.795 54.5859V54.5859C232.031 61.4655 219.633 61.4499 217.822 54.5859C217.578 53.6075 217.441 52.6053 217.416 51.5974V32.7795C217.416 32.5296 217.366 32.2822 217.267 32.0523C217.169 31.8223 217.025 31.6146 216.844 31.4415C216.663 31.2685 216.449 31.1337 216.215 31.0453C215.98 30.957 215.73 30.9168 215.48 30.9273H212.685C212.192 30.9273 211.719 31.1225 211.371 31.4698C211.022 31.8172 210.827 32.2883 210.827 32.7795V52.3912C210.82 54.1445 211.11 55.8863 211.685 57.5432C212.22 59.0977 213.059 60.5313 214.152 61.7612C218.977 67.1934 232.499 67.1934 237.324 61.7612C238.426 60.547 239.28 59.13 239.838 57.5899C240.414 55.933 240.704 54.1912 240.697 52.4379V32.7795C240.697 32.2989 240.51 31.837 240.175 31.4914C239.84 31.1457 239.383 30.9435 238.901 30.9273V30.9273Z"
              fill={colors[palette]}
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="324.344" height="97" fill="white" />
            </clipPath>
            <linearGradient id="paint0_linear" x1="6" y1="6.5" x2="94.5" y2="89.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D2FF" />
              <stop offset="1" stopColor="#2CB3FF" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </a>
  );
}
