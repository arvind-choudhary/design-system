import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const Text = () => <span>Text</span>

const meta = {
  component: Button,
  args: {
    children: <Text />
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {}
};