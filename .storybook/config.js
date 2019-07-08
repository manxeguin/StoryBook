import { configure } from '@storybook/html';

function loadStories() {
  require('../stories/button.stories');
  require('../stories/hamburger.stories');
}

configure(loadStories, module);