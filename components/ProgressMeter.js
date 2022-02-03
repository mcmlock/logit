import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TimeLogger } from './AddProgressModal';

const ProgressMeter = props => {

    const logs = props.logs.filter(log => log.meterId === props.meter.id);
    let hoursOutput = 0;
    for (i = 0; i < logs.length; i++) {
        if (logs[i].positive) {
            hoursOutput += logs[i].hoursRecorded + (logs[i].minutesRecorded / 60);
        } else {
            hoursOutput -= (logs[i].hoursRecorded + (logs[i].minutesRecorded / 60));
            if (hoursOutput < 0) {
                hoursOutput = 0;
            }
        }
    }
    let totalHours = Number(hoursOutput).toFixed(2);
    let progress = (totalHours / props.meter.goal) * 260;

    const [timeLogOpen, setTimeLogOpen] = useState(false);
    const toggleTimeLog = () => {
        setTimeLogOpen(!timeLogOpen);
    }

    return (
        <View>
            <View style={styles.container}>
                <TimeLogger
                    visible={timeLogOpen}
                    toggleTimeLog={toggleTimeLog}
                    meterId={props.meter.id}
                    createTimeLog={props.createTimeLog}
                    recordTime={props.recordTime}
                />

                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>{props.meter.title}</Text>
                    {props.meter.hasDueDate &&
                        <Text style={styles.titleText}>{props.meter.month}/{props.meter.day}/{props.meter.year}</Text>
                    }
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.outerLayer}>
                        <View style={{ width: progress, height: 36, backgroundColor: 'blue' }} />
                        <Text style={styles.progress}>{totalHours} / {props.meter.goal}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Icon
                            name="plus"
                            type='font-awesome'
                            onPress={() => toggleTimeLog()}
                        />
                        <Icon
                            name="eye"
                            type='font-awesome'
                            onPress={() => {
                                props.selectMeter(props.meter.id);
                                props.viewProgressReport();
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24.0,
        marginVertical: 16.0,
        paddingHorizontal: 6.0,
        paddingVertical: 10.0,
        borderWidth: 1.0,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 14.0
    },
    titleText: {
        fontSize: 26.0
    },
    outerLayer: {
        marginVertical: 0,
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 40.0,
        width: 260.0,
        borderWidth: 2.0,
        borderRadius: 4.0
    },
    progress: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingRight: 12.0,
        fontSize: 16.0
    }
});

export default ProgressMeter;