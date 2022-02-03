import React, { Component } from 'react';
import StackNavigator from './StackNavigator';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idTracker: 0,
            selectedMeter: null,
            progressMeters: [
                {
                    id: 0,
                    title: 'Learn Programming',
                    units: 'hours',
                    goal: 500,
                    customUnits: '',
                    hasDueDate: true,
                    month: 4,
                    day: 4,
                    year: 22
                }
            ],
            logs: [
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 15,
                    positive: true,
                    month: 2,
                    day: 2,
                    year: 22,
                    hour: 3,
                    minutes: 40
                },
                {
                    meterId: 0,
                    hoursRecorded: 1,
                    minutesRecorded: 5,
                    positive: false,
                    month: 2,
                    day: 2,
                    year: 22,
                    hour: 6,
                    minutes: 23
                },
                {
                    meterId: 0,
                    hoursRecorded: 3,
                    minutesRecorded: 0,
                    positive: true,
                    month: 2,
                    day: 3,
                    year: 22,
                    hour: 5,
                    minutes: 20
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 44,
                    positive: true,
                    month: 2,
                    day: 4,
                    year: 22,
                    hour: 8,
                    minutes: 10
                }
            ],
        };
    };

    render() {

        const selectMeter = meterId => {
            this.setState({ selectedMeter: meterId })
        }

        const createProgressMeter = barProperties => {
            const progressMeter = {
                id: this.state.idTracker,
                title: barProperties.title,
                units: barProperties.units,
                progressMade: barProperties.progressMade,
                goal: barProperties.goal,
                customUnits: barProperties.customUnits,
                hasDueDate: barProperties.hasDueDate,
                month: barProperties.month,
                day: barProperties.day,
                year: barProperties.year
            };
            this.state.progressMeters.push(progressMeter);
            this.setState({ idTracker: (this.state.idTracker + 1), progressMeter: this.state.progressMeters });
        }

        const createTimeLog = (meterId, hoursRecorded, minutesRecorded, positive, month, day, year, hour, minutes) => {
            const newLog = {
                meterId: meterId,
                hoursRecorded: hoursRecorded,
                minutesRecorded: minutesRecorded,
                positive: positive,
                month: month,
                day: day,
                year: year,
                hour: hour,
                minutes: minutes
            }
            this.state.logs.push(newLog);
            this.setState({ logs: this.state.logs });
        }

        return (
            <StackNavigator
                progressMeters={this.state.progressMeters}
                logs={this.state.logs}
                selectMeter={selectMeter}
                createProgressMeter={createProgressMeter}
                createTimeLog={createTimeLog}
            />
        );
    };
};

export default Main;