// Replace your-framework with the name of your framework
import Card from '@/components/Input/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    label: '안녕하세요',
  },
};
