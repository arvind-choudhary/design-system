import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './Tab';

const meta = {
  component: Tab,
  args: {
    children: <>Tab</>
  }
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    theme: 'secondary'
  }
};

export const Alternative: Story = {
  args: {
    theme: 'alternative'
  }
};