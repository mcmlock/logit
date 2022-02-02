import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TimeLogger } from './AddProgressModalComponents';

const ProgressMeter = props => {

    let progress = (props.meter.progressMade / props.meter.goal) * 280;

    const [timeLogOpen, setTimeLogOpen] = useState(false);
    const toggleTimeLog = () => {
        setTimeLogOpen(!timeLogOpen);
    }

    return (
        <View>
            <View>
                <TimeLogger
                    visible={timeLogOpen}
                    toggleTimeLog={toggleTimeLog}
                    meterId={props.meter.id}
                    createTimeLog={props.createTimeLog}
                />

                <View style={styles.titleRow}>
                    <Text>{props.meter.title}</Text>
                    {props.meter.hasDueDate &&
                        <Text>{props.meter.month}/{props.meter.day}/{props.meter.year}</Text>
                    }
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.outerLayer}> 
                        <View style={{ width: progress, height: 32, backgroundColor: 'blue' }} />
                        <Text style={styles.progress} >{props.meter.progressMade} / {props.meter.goal}</Text>
                    </View>
                    <View>
                        <Icon
                            name="plus"
                            type='font-awesome'
                            onPress={() => toggleTimeLog()}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    outerLayer: {
        marginVertical: 0,
        marginHorizontal: 0,
        height: 36.0,
        width: 280.0,
        borderWidth: 2.0,
        borderRadius: 4.0
    },
    progress: {
        position: 'absolute'
    }
});

export default ProgressMeter;