## Default icons

This module contain React components which contain SVG element.

SVG elements based on
[Material design icons](https://material.io/resources/icons)
and exported with [Figma](https://www.figma.com/) design tool from icon font.

### How to add new icon manually

- Create SVG icon and export it
- Open SVG file with text editor or IDE
- Copy content
- Create `{NewName}Icon.tsx` file in `src/icons` directory
- Past content from SVG file to `{NewName}Icon.tsx`
- and bring to the following form:

```typescript jsx
import React, { FC } from 'react';

const CloseIcon: FC = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" {...props}>
    <path
      d="M13.9844 1.42188L8.40625 7L13.9844 12.5781L12.5781 13.9844L7 8.40625L1.42188 13.9844L0.015625 12.5781L5.59375 7L0.015625 1.42188L1.42188 0.015625L7 5.59375L12.5781 0.015625L13.9844 1.42188Z"
      fill="currentColor"
    />
  </svg>
);

export default React.memo(CloseIcon);
```

### Alternatives

#### Material icons

You can get all icons from external packages as [Material icons](https://material-ui.com/components/material-icons/)

#### React Icons

Include popular icons in your React projects easly with [react-icons](https://react-icons.netlify.com/), which utilizes ES6 imports that allows you to include only the icons that your project is using.

#### SVGR

It can help you to transform SVGs into React components.

You can choose the way you prefer:

- SVGR can be run from the [CLI](https://react-svgr.com/docs/cli/)
- SVGR can be used as a [webpack loader](https://react-svgr.com/docs/webpack/), this way you can import your SVG directly as a React Component

### Export icons from Figma

Before export icons, you will need to generate a Personal Access Token in Figma.

1. Open [Figma Files](https://www.figma.com/files)
2. Click your name at the top left and go to the Settings tab.
3. Under Personal Access Tokens, click Create a new personal access token.
4. Copy this token. This is your Figma API key.

Copy the token. Now you can start export!

`export FIGMA_TOKEN=<personalAccessToken>`
`npm run figma:export`

You also can save this token in `.env.local` file in the root with content
`FIGMA_TOKEN=<personalAccessToken>`

So next time you need to export icons you can run another command to reuse this token
`npm run figma:export-env`
