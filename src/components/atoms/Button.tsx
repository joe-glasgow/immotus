import React, {FC} from 'react';
import { default as MuiButton, ButtonProps } from '@mui/material/Button'

/**
 * Primary UI component for user interaction
 */
export const Button:FC<ButtonProps> = (props) => {
  return (
    <MuiButton {...props} />
  );
};
