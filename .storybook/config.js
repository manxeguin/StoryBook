import { configure, addParameters } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import odfTheme from './odfTheme.js';

addParameters({ 
  viewport: { 
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    theme: odfTheme,
  }
});

function loadStories() {
  require('../stories/button.stories');
  require('../stories/hamburger.stories');
}

configure(loadStories, module);