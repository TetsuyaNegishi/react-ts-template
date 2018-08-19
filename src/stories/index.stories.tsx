import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add(
    'with text',
    withInfo()(() => <button onClick={action('clicked')}>Hello Button</button>)
  )
  .add(
    'with some emoji',
    withInfo()(() => (
      <button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </button>
    ))
  );
