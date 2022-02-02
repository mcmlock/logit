import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView, SafeAreaView, Text } from 'react-native';
import CreateProgressMeter from './CreateProgressMeterComponent';
import ProgressMeter from './ProgressMeter';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idTracker: 0,
            progressMeters: [],
            logs: [],
            createModalOpen: false
        };
    };

    render() {

        const toggleCreateModal = () => {
            this.setState({ createModalOpen: !this.state.createModalOpen });
        };

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
            console.log(this.state.logs);
        }

        const progressMeters = this.state.progressMeters.map(meter => {
            return (
                <ProgressMeter
                    meter={meter}
                    createTimeLog={createTimeLog}
                />
            );
        });

        return (
            <View style={styles.container}>
                <CreateProgressMeter
                    visible={this.state.createModalOpen}
                    toggleModal={toggleCreateModal}
                    createProgressMeter={createProgressMeter}
                />
                <SafeAreaView>
                    <ScrollView style={{ height: '100%' }}>
                        {progressMeters}
                    </ScrollView>
                    <View style={styles.createBtn}>
                        <Button
                            title="Open Modal"
                            onPress={() => toggleCreateModal()}
                        />
                    </View>
                </SafeAreaView>

            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    createBtn: {
        position: 'absolute',
        bottom: 70.0,
        right: 10.0,
        zIndex: 1
    }
})

export default Main;