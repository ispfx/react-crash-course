import * as React from 'react';

interface IGreetingProps {
  name: string;
}

export default class Greeting extends React.Component<IGreetingProps> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Hello, {this.props.name}.</h1>
      </div>
    )
  }
}
