import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Button> = (
  // eslint-disable-next-line react/prop-types
  { children, ...rest },
  // eslint-disable-next-line react/jsx-props-no-spreading
) => <Button {...rest}>{children}</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'contained',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'outlined',
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'contained',
  size: 'small',
  children: 'Button',
};
