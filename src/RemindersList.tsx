import * as React from 'react';
import Reminder from './Reminder';

interface IRemindersListProps {
  listName: string;
}

interface IRemindersListState {
  reminders: string[];
  newReminderLabel: string;
}

export default class RemindersList extends React.Component<IRemindersListProps, IRemindersListState> {
  constructor(props: IRemindersListProps) {
    super(props);

    // Bind methods
    this.updateNewReminderLabel = this.updateNewReminderLabel.bind(this);
    this.addNewReminder = this.addNewReminder.bind(this);
    this.updateReminder = this.updateReminder.bind(this);

    // Set initial state
    this.state = {
      reminders: [
        'Make a Sandwich',
        'Make a Pie',
      ],
      newReminderLabel: '',
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <h2>{this.props.listName}</h2>
        <ul>
          {this.state.reminders.map((reminder, i) => {
            return (
              <li key={i}>
                <Reminder reminder={reminder} updateReminder={(value: string) => this.updateReminder(i, value)} deleteReminder={() => this.deleteReminder(i)} />
              </li>
            );
          })}
        </ul>

        <input type="text" value={this.state.newReminderLabel} onChange={this.updateNewReminderLabel} />
        <button onClick={this.addNewReminder}>➕</button>
      </div>
    );
  }

  public updateNewReminderLabel(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      newReminderLabel: event.currentTarget.value,
    });
  }

  public addNewReminder(): void {
    if (!this.state.newReminderLabel.length) return;

    this.setState({
      reminders: [...this.state.reminders, this.state.newReminderLabel],
      newReminderLabel: '',
    });
  }

  public updateReminder(index: number, value: string): void {
    const updatedReminders = this.state.reminders;
    updatedReminders[index] = value;

    this.setState({
      reminders: updatedReminders,
    });
  }

  public deleteReminder(index: number): void {
    const updatedReminders = this.state.reminders;
    updatedReminders.splice(index, 1);

    this.setState({
      reminders: updatedReminders,
    });
  }
}
