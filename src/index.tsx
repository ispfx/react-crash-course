import * as React from 'react';
import { render } from 'react-dom';
import Greeting from './Greeting';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <Greeting name="John" />
        <Greeting name="Jane" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
