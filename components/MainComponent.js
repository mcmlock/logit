import React, { Component, useEffect } from 'react';
import StackNavigator from './StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const load = async (obj) => {
    try {
        let state = await AsyncStorage.getItem("State");
        
        if (state !== null) {
            obj.setState(JSON.parse(state))
        }
    } catch (err) {
        alert(err);
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idTracker: 1,
            selectedMeter: null,
            progressMeters: [
                {
                    id: 0,
                    title: 'Learn Programming',
                    units: 'hours',
                    goal: 500,
                    customUnits: '',
                    month: 4,
                    day: 4,
                    year: 22
                }
            ],
            logs: [],
        };
    };

    componentDidMount() {
        load(this);
    };

    render() {

        const save = async () => {
            try {
                await AsyncStorage.setItem("State", JSON.stringify(this.state));
            } catch (err) {
                alert(err);
            }
        }

        const selectMeter = meterId => {
            this.setState({ selectedMeter: meterId })
        }

        const createProgressMeter = barProperties => {
            const progressMeter = {
                id: this.state.idTracker,
                title: barProperties.title,
                progressMade: barProperties.progressMade,
                goal: barProperties.goal,
                month: barProperties.month,
                day: barProperties.day,
                year: barProperties.year
            };
            this.state.progressMeters.push(progressMeter);
            this.setState({ idTracker: (this.state.progressMeters.length + 1), progressMeter: this.state.progressMeters });
            save();
        }

        const deleteProgressMeter = meterId => {
            this.state.progressMeters = this.state.progressMeters.filter(meter => meter.id !== meterId);
            this.state.logs = this.state.logs.filter(log => log.meterId !== meterId);
            this.setState({ progressMeters: this.state.progressMeters, logs: this.state.logs});
            save();
        }

        const createTimeLog = (meterId, hoursRecorded, minutesRecorded, month, day, year, hour, minutes) => {

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
                month: month,
                day: day,
                year: year,
                hour: hour,
                minutes: minutes,
                dateValue: dateValue
            }
            this.state.logs.push(newLog);
            this.setState({ logs: this.state.logs });
            save();
        }

        return (
            <StackNavigator
                progressMeters={this.state.progressMeters}
                logs={this.state.logs}
                selectMeter={selectMeter}
                selectedMeter={this.state.selectedMeter}
                createProgressMeter={createProgressMeter}
                deleteProgressMeter={deleteProgressMeter}
                createTimeLog={createTimeLog}
            />
        );
    };
};

export default Main;