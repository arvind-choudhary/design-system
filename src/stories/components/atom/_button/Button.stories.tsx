import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const Text = () => <span>Label</span>

const meta = {
  component: Button,
  args: {
    children: <Text />,
    theme: 'secondary',
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'primary',
  }
};

export const PrimaryDisabled: Story = {
  args: {
    theme: 'primary',
    disabled: true
  }
};

export const PrimaryDark: Story = {
  args: {
    theme: 'primary',
    colorType: 'dark'
  }
};

export const PrimaryDarkDisabled: Story = {
  args: {
    theme: 'primary',
    colorType: 'dark',
    disabled: true
  }
};

export const Alternative: Story = {
  args: {
    theme: 'alternative',
  }
};

export const AlternativeDisabled: Story = {
  args: {
    theme: 'alternative',
    disabled: true
  }
};

export const AlternativeDark: Story = {
  args: {
    theme: 'alternative',
    colorType: 'dark'
  }
};

export const AlternativeDarkDisabled: Story = {
  args: {
    theme: 'alternative',
    colorType: 'dark',
    disabled: true
  }
};

export const Secondary: Story = {};

export const SecondaryDisabled: Story = {
  args: {
    theme: 'secondary',
    disabled: true
  }
};

export const SecondaryDark: Story = {
  args: {
    theme: 'secondary',
    colorType: 'dark'
  }
};

export const SecondaryDarkDisabled: Story = {
  args: {
    theme: 'secondary',
    colorType: 'dark',
    disabled: true
  }
};
