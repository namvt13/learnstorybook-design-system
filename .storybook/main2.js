// .storybook/main.js

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  refs: {
    'design-system': {
      title: 'My design system',
      // The url provided by Chromatic when it was deployed
      url: 'https://your-published-url.chromatic.com'
    },
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ]
}