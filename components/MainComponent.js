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
                    day: 1,
                    year: 22,
                    hour: 3,
                    minutes: 40,
                    dateValue: 11615040
                },
                {
                    meterId: 0,
                    hoursRecorded: 1,
                    minutesRecorded: 5,
                    positive: true,
                    month: 2,
                    day: 2,
                    year: 22,
                    hour: 6,
                    minutes: 23,
                    dateValue: 11616480
                },
                {
                    meterId: 0,
                    hoursRecorded: 3,
                    minutesRecorded: 0,
                    positive: true,
                    month: 2,
                    day: 2,
                    year: 22,
                    hour: 5,
                    minutes: 20,
                    dateValue: 11616480
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 44,
                    positive: true,
                    month: 2,
                    day: 3,
                    year: 22,
                    hour: 8,
                    minutes: 10,
                    dateValue: 11617920
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

            // Calculating the day value
            let monthValue;
            switch (month) {
                case 2:
                    monthValue = 31 * 1440;
                    break;
                case 3:
                    monthValue = 59 * 1440;
                    break;
                case 4:
                    monthValue = 90 * 1440;
                    break;
                case 5:
                    monthValue = 120 * 1440;
                    break;
                case 6:
                    monthValue = 151 * 1440;
                    break;
                case 7:
                    monthValue = 181 * 1440;
                    break;
                case 8:
                    monthValue = 212 * 1440;
                    break;
                case 9:
                    monthValue = 242 * 1440;
                    break;
                case 10:
                    monthValue = 273 * 1440;
                    break;
                case 11:
                    monthValue = 303 * 1440;
                    break;
                case 12:
                    monthValue = 334 * 1440;
                    break;
                default:
                    monthValue = 0;
                    break;
            }
            let dayValue;
            if (day > 1) {
                dayValue = (day - 1) * 1440;
            } else {
                dayValue = 0;
            }
            let yearValue = year * 1440 * 365;
            const leapYears = Math.floor(year / 4);
            yearValue += leapYears * 1440;
            const dateValue = monthValue + dayValue + yearValue;

            const newLog = {
                meterId: meterId,
                hoursRecorded: hoursRecorded,
                minutesRecorded: minutesRecorded,
                positive: positive,
                month: month,
                day: day,
                year: year,
                hour: hour,
                minutes: minutes,
                dateValue: dateValue
            }
            this.state.logs.push(newLog);
            this.setState({ logs: this.state.logs });
        }

        return (
            <StackNavigator
                progressMeters={this.state.progressMeters}
                logs={this.state.logs}
                selectMeter={selectMeter}
                selectedMeter={this.state.selectedMeter}
                createProgressMeter={createProgressMeter}
                createTimeLog={createTimeLog}
            />
        );
    };
};

export default Main;