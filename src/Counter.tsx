import * as React from 'react';

interface ICounterProps {
  label: string;
  initialCount?: number;
  buttonLabel?: string;
}

interface ICounterState {
  count: number;
}

export default class Counter extends React.Component<ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);

    // Bind methods
    this.increment = this.increment.bind(this);

    // Set initial state
    this.state = {
      count: this.props.initialCount ? this.props.initialCount : 0,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <b>{this.props.label}:</b> {this.state.count}
        <button onClick={this.increment}>{this.props.buttonLabel ? this.props.buttonLabel : '➕'}</button>
      </div>
    );
  }

  public increment(): void {
    this.setState({
      count: this.state.count + 1,
    });
  }
}
