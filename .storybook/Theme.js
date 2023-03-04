import { create } from '@storybook/theming';
import logo from './babel-logo-light.svg';

export default create({
  base: 'light',
  brandTitle: 'Babel - UI Components with React/Typescript',
  brandImage: logo,
  brandTarget: '_self',
  appBg: 'rgb(81, 46, 145)',
  textColor: 'white'
});