import * as React from 'react';
import { render } from 'react-dom';
import Greeting from './Greeting';
import Counter from './Counter';
import RemindersList from './RemindersList';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <Greeting name="John" />
        <Greeting name="Jane" />
        <Counter label="Eggs" initialCount={12} buttonLabel="🥚" />
        <Counter label="Bread" buttonLabel="🍞" />
        <RemindersList listName="Things to Do" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
