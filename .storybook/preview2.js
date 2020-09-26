// .storybook/preview.js

import React from 'react';

// The styles imported from the design system.
import { global as designSystemGlobal } from '<your-username>-learnstorybook-design-system';

// Adds a global decorator to include the imported styles from the design system.
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]

// Declare the parameters to be used by other addons
export const parameters = {
  actions: { argsTypesRegex: '^on[A-Z].*' }
}