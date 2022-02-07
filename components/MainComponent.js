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
                    hasDueDate: true,
                    month: 4,
                    day: 4,
                    year: 22
                }
            ],
            logs: [
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 13,
                    year: 22,
                    hour: 1,
                    minutes: 13,
                    dateValue: 11589120
                },
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 14,
                    year: 22,
                    hour: 1,
                    minutes: 13,
                    dateValue: 11590560
                },
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 18,
                    year: 22,
                    hour: 1,
                    minutes: 13,
                    dateValue: 11596320
                },
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 19,
                    year: 22,
                    hour: 1,
                    minutes: 13,
                    dateValue: 11597760
                },
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 20,
                    year: 22,
                    hour: 0,
                    minutes: 59,
                    dateValue: 11599200
                },
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 21,
                    year: 22,
                    hour: 3,
                    minutes: 40,
                    dateValue: 11600640
                },
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 22,
                    year: 22,
                    hour: 3,
                    minutes: 40,
                    dateValue: 11602080
                },
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 24,
                    year: 22,
                    hour: 0,
                    minutes: 40,
                    dateValue: 11603520
                },
                {
                    meterId: 0,
                    hoursRecorded: 1,
                    minutesRecorded: 55,
                    month: 1,
                    day: 25,
                    year: 22,
                    hour: 2,
                    minutes: 30,
                    dateValue: 11604960
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 2,
                    month: 1,
                    day: 26,
                    year: 22,
                    hour: 0,
                    minutes: 20,
                    dateValue: 11606400
                },
                {
                    meterId: 0,
                    hoursRecorded: 7,
                    minutesRecorded: 8,
                    month: 1,
                    day: 27,
                    year: 22,
                    hour: 1,
                    minutes: 45,
                    dateValue: 11607840
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 35,
                    month: 1,
                    day: 30,
                    year: 22,
                    hour: 5,
                    minutes: 30,
                    dateValue: 11612160
                },
                {
                    meterId: 0,
                    hoursRecorded: 6,
                    minutesRecorded: 35,
                    month: 1,
                    day: 31,
                    year: 22,
                    hour: 3,
                    minutes: 40,
                    dateValue: 11613600
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 15,
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
                    month: 2,
                    day: 3,
                    year: 22,
                    hour: 8,
                    minutes: 10,
                    dateValue: 11617920
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 44,
                    month: 2,
                    day: 4,
                    year: 21,
                    hour: 7,
                    minutes: 15,
                    dateValue: 11619360
                }
            ],
        };
    };

    componentDidMount() {
        load(this);
    }

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