import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const TodoViewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: "560px",
  height: "560px"
  ,maxHeight: '400px',
  backgroundColor: 'grey',
  borderRadius: "5px",
});

const TodoTitle = style({
  color: vars.colors.primary.white,
  fontSize: '40px'
});

export {
  TodoTitle,
  TodoViewWrapper
}