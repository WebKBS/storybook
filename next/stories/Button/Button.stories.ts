// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: '안녕하세요',
  },
};
