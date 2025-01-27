import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const NavBarHeader = style({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '100%',
  top: '0px',
  height: '70px',
  position: 'sticky',
});

const NavBarWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: vars.colors.primary.accent,
  backgroundSize: 'cover',
  padding: '0 30px ',
  color: vars.colors.base.white,
});

const NavBarTime = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const DropDownButton = style({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
});

const TaskStatusNavigator = style({
  color: vars.colors.base.white,

});

const DropDownList = style({
  transition: 'all 0.3s ease-in-out',
  height: 'fit-content',
  width: '10rem',
  position: 'absolute',
  right: '1rem',
  top: '3rem',
  borderRadius: '10px',
  background: vars.colors.base.white,
  boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',


});
const DropDownItems = style({
  padding: '8px ',
  cursor: 'pointer',
  width: '100%',

});

export { NavBarWrapper, TaskStatusNavigator, DropDownButton, DropDownList, DropDownItems, NavBarHeader, NavBarTime };
