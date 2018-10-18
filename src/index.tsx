import * as React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Hello, React.</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
