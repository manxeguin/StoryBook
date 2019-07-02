import { storiesOf } from '@storybook/html';

import Button from '../components/Button/Button';


const primaryButton = new Button().withText('Hello World!');
const secondaryButton = new Button().withText('Hello World!').withColor('secondary');
const disabledButton = new Button().withText('Not clickable').withStatus('disabled');

storiesOf('Button', module)
  .add('primary with text', () => primaryButton.render())
  .add('secondary with text', () => secondaryButton.render())
  .add('disabled', () => disabledButton.render());