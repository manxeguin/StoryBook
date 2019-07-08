import { configure } from '@storybook/html';

function loadStories() {
  require('../stories/button.stories');
}

configure(loadStories, module);