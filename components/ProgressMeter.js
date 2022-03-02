import React, { useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TimeLogger } from './modals/AddProgressModal';

const { width, height } = Dimensions.get('window');

const ProgressMeter = props => {

    const logs = props.logs.filter(log => log.meterId === props.meter.id);
    let hoursOutput = 0;
    for (i = 0; i < logs.length; i++) {
        hoursOutput += logs[i].hoursRecorded + (logs[i].minutesRecorded / 60);
    }
    let totalHours = hoursOutput.toFixed(2);
    let progress;
    if (progress > props.meter.goal) {
        progress = (width - 48) * .92 - 4
    } else {
        progress = (totalHours / props.meter.goal) * (width - 48) * .92 - 4;
    }

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

                <View style={styles.meter}>
                    <View style={{ width: progress, height: 32, backgroundColor: props.meter.color }} />
                    <Text style={styles.progress}>{totalHours} / {props.meter.goal}</Text>
                </View>
                <View style={styles.bottomRow}>
                    <Text style={styles.titleText}>{props.meter.title}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Icon
                            name="plus"
                            type='font-awesome'
                            color='white'
                            size={20}
                            onPress={() => toggleTimeLog()}
                        />
                        <Icon
                            name="angle-right"
                            type='font-awesome'
                            color="white"
                            size={28}
                            onPress={() => {
                                props.selectMeter(props.meter.id);
                                props.viewProgressReport();
                            }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>


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
        paddingVertical: 14.0,
        borderWidth: 1.8,
        borderColor: 'white',
        borderRadius: 16.0,
        backgroundColor: '#1f1e1e'
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '96%',
        marginHorizontal: '2%'
    },
    titleText: {
        fontSize: 22.0,
        color: 'white',
        width: '75%',
        letterSpacing: .9
    },
    meter: {
        marginBottom: 10,
        marginLeft: '2%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 36.0,
        width: '96%',
        borderWidth: 2.0,
        borderRadius: 4.0,
        borderColor: 'white',
        backgroundColor: '#212020'
    },
    progress: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingRight: 12.0,
        fontSize: 16.0,
        color: 'white',
    }
});

export default ProgressMeter;