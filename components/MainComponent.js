import React, { Component } from 'react';
import StackNavigator from './StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { calcDateValueWithTime } from '../resources/dateFunctions';

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
            selectedMeter: 0,
            progressMeters: [
                {
                    id: 0,
                    title: 'Test Progress Bar',
                    goal: 100,
                    month: 4,
                    day: 4,
                    year: 22,
                    color: '#1fbaed'
                }
            ],
            logs: [
                {
                    meterId: 0,
                    hoursRecorded: 4,
                    minutesRecorded: 30,
                    month: 2,
                    day: 2,
                    year: 22,
                    hour: 12,
                    minutes: 58,
                    dateValue: 11636640 - (1440 * 15)
                },
                {
                    meterId: 0,
                    hoursRecorded: 1,
                    minutesRecorded: 55,
                    month: 2,
                    day: 6,
                    year: 22,
                    hour: 16,
                    minutes: 7,
                    dateValue: 11636640 - (1440 * 10)
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 10,
                    month: 2,
                    day: 7,
                    year: 22,
                    hour: 11,
                    minutes: 30,
                    dateValue: 11636640 - (1440 * 9)
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 25,
                    month: 2,
                    day: 8,
                    year: 22,
                    hour: 12,
                    minutes: 18,
                    dateValue: 11636640 - (1440 * 8)
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 57,
                    month: 2,
                    day: 9,
                    year: 22,
                    hour: 15,
                    minutes: 30,
                    dateValue: 11636640 - (1440 * 7)
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 0,
                    month: 2,
                    day: 12,
                    year: 22,
                    hour: 13,
                    minutes: 54,
                    dateValue: 11636640 - (1440 * 4)
                },
                {
                    meterId: 0,
                    hoursRecorded: 1,
                    minutesRecorded: 5,
                    month: 2,
                    day: 13,
                    year: 22,
                    hour: 10,
                    minutes: 10,
                    dateValue: 11636640 - (1440 * 3)
                },
                {
                    meterId: 0,
                    hoursRecorded: 1,
                    minutesRecorded: 45,
                    month: 2,
                    day: 14,
                    year: 22,
                    hour: 8,
                    minutes: 35,
                    dateValue: 11636640 - (1440 * 2)
                },
                {
                    meterId: 0,
                    hoursRecorded: 0,
                    minutesRecorded: 45,
                    month: 2,
                    day: 15,
                    year: 22,
                    hour: 12,
                    minutes: 20,
                    dateValue: 11636640 - 1440
                },
                {
                    meterId: 0,
                    hoursRecorded: 2,
                    minutesRecorded: 22,
                    month: 2,
                    day: 16,
                    year: 22,
                    hour: 17,
                    minutes: 47,
                    dateValue: 11636640
                }
            ],
            order: []
        };
    };

    componentDidMount() {
        load(this);
    // AsyncStorage.clear();
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
                goal: barProperties.goal,
                month: barProperties.month,
                day: barProperties.day,
                year: barProperties.year,
                color: barProperties.color
            };
            this.state.progressMeters.push(progressMeter);
            this.setState({ idTracker: (this.state.idTracker + 1), progressMeter: this.state.progressMeters });
            save();
        }

        const editProgressMeter = (meter, barProperties) => {
            const insertPoint = this.state.progressMeters.indexOf(meter);
            const progressMeter = {
                id: barProperties.id,
                title: barProperties.title,
                goal: barProperties.goal,
                month: barProperties.month,
                day: barProperties.day,
                year: barProperties.year,
                color: barProperties.color
            };
            this.state.progressMeters.splice(insertPoint, 1, progressMeter);
            this.setState({ progressMeter: this.state.progressMeters });
            save();
        }

        const deleteProgressMeter = meterId => {
            this.state.progressMeters = this.state.progressMeters.filter(meter => meter.id !== meterId);
            this.state.logs = this.state.logs.filter(log => log.meterId !== meterId);
            this.setState({ progressMeters: this.state.progressMeters, logs: this.state.logs });
            save();
        }

        const createTimeLog = (meterId, hoursRecorded, minutesRecorded, month, day, year, hour, minute) => {

            const dateValue = calcDateValueWithTime(month, day, year, hour, minute)

            const newLog = {
                meterId: meterId,
                hoursRecorded: hoursRecorded,
                minutesRecorded: minutesRecorded,
                month: month,
                day: day,
                year: year,
                hour: hour,
                minutes: minute,
                dateValue: dateValue
            }
            this.state.logs.push(newLog);
            this.setState({ logs: this.state.logs });
            save();
        }

        const deleteTimeLog = (dateValue, meterId) => {
            this.state.logs = this.state.logs.filter(log => log.dateValue !== dateValue || log.meterId !== meterId );
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
                editProgressMeter={editProgressMeter}
                deleteProgressMeter={deleteProgressMeter}
                createTimeLog={createTimeLog}
                deleteTimeLog={deleteTimeLog}
            />
        );
    };
};

export default Main;