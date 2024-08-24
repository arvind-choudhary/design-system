import React from 'react';
import type { Preview } from "@storybook/react";
import "../src/styles/global.scss";

const TailwindWrapper = (Story) => (
  <div className="bg-slate-50 dark:bg-slate-900">
    <Story />
  </div>
);


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [TailwindWrapper],
};

export default preview;
