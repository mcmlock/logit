import React, { Component } from 'react';
import StackNavigator from './StackNavigator';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idTracker: 0,
            progressMeters: [],
            logs: [],
        };
    };

    render() {

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

        const recordTime = (meterId, hoursRecorded, minutesRecorded, positive) => {
            const meter = this.state.progressMeters.filter(meter => meter.id === meterId)[0];

            let totalHours = Number(hoursRecorded) + Number((minutesRecorded / 60).toFixed(2));
            console.log(totalHours);
            let record;
            if (positive) {
                record = meter.progressMade + totalHours;
            }
            else {
                record = meter.progressMade - totalHours;
                if (record < 0) {
                    record = 0;
                }
            }
            const updatedEvent = {...meter, progressMade: record};
            this.state.progressMeters = this.state.progressMeters.filter(meter => meter.id !== meterId);
            this.state.progressMeters.push(updatedEvent);
            this.setState({ progressMeters: this.state.progressMeters});
            console.log(this.state.progressMeters);
        } 

        return (
            <StackNavigator
                progressMeters={this.state.progressMeters}
                logs={this.state.logs}
                createProgressMeter={createProgressMeter}
                createTimeLog={createTimeLog}
                recordTime={recordTime}
            />
        );
    };
};

export default Main;