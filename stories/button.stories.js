import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/html';

import Button from '../components/Button/Button';

storiesOf('Button', module)
  .add('primary with text', () => new Button().withText('Hello World!').render())
  .add('secondary with text', () => new Button().withText('Hello World!').withColor('secondary').render())
  .add('disabled', () => new Button().withText('Not clickable').withStatus('disabled').render())
  .addDecorator(withKnobs)
  .add('to play with', () => {
    const labelText = 'Text';
    const defaultText = 'Hello World';
    const valueText = text(labelText, defaultText);

    const labelColor = 'Colors';
    const options = {
      Primary: 'primary',
      Secondary: 'secondary',
    };
    const defaultColor = 'primary';
    const valueColor = select(labelColor, options, defaultColor);

    const labelDisabled = 'Disabled?';
    const defaultDisabled = false;
    const valueDisabled = boolean(labelDisabled, defaultDisabled);

    const editableButton = new Button();
    editableButton.withText(valueText).withColor(valueColor);
    if (valueDisabled) {
      editableButton.withStatus('disabled');
    }

    return editableButton.render();
  });