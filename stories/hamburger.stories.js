import { storiesOf } from '@storybook/html';
import { withKnobs, array} from '@storybook/addon-knobs/html';

import Hamburger from '../components/Hamburger/Hamburger';

storiesOf('Hamburguer', module)
  .add('Basic Hamburguer', () => new Hamburger().withList(['Home', 'About', 'Login']).render())
  .addDecorator(withKnobs)
  .add('To play with', () => {
    const label = 'Options';
    const defaultValue = ['Home', 'About', 'Login'];

    const value = array(label, defaultValue);

    return new Hamburger().withList(value).render();
  });