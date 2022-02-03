import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';

export const TimeLogger = props => {

    const [hourInput, setHourInput] = useState(0);
    const [minuteInput, setMinuteInput] = useState(0);

    return (
        <Modal
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.modal}>
                <View style={{borderWidth: 1, paddingHorizontal: 40.0, paddingVertical: 15.0, borderRadius: 5.0}}>
                    <View style={styles.inputRow}>
                        <TextInput
                            placeholder='HH'
                            style={styles.textInput}
                            value={hourInput}
                            onChangeText={value => setHourInput(value)}
                        />
                        <Text style={{fontSize: 26.0, fontWeight: 'bold', paddingHorizontal: 5.0}}>:</Text>
                        <TextInput
                            placeholder='MM'
                            style={styles.textInput}
                            value={minuteInput}
                            onChangeText={value => setMinuteInput(value)}
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginHorizontal: 50.0, justifyContent: 'space-between', paddingBottom: 40}}>
                        <Icon
                            name='minus'
                            type='font-awesome'
                            onPress={() => {
                                const month = new Date().getMonth() + 1;
                                const day = new Date().getDate();
                                const year = new Date().getFullYear() - 2000;
                                const hour = new Date().getHours();
                                const minute = new Date().getMinutes();
                                const hoursRecorded = Number(hourInput);
                                const minutesRecorded = Number((Number(minuteInput) / 60).toFixed(2));
                                props.createTimeLog(props.meterId, hoursRecorded, minutesRecorded, false, month, day, year, hour, minute);
                            }}
                        />
                        <Icon
                            name='plus'
                            type='font-awesome'
                            onPress={() => {
                                const month = new Date().getMonth() + 1;
                                const day = new Date().getDate();
                                const year = new Date().getFullYear() - 2000;
                                const hour = new Date().getHours();
                                const minute = new Date().getMinutes();
                                props.createTimeLog(props.meterId, Number(hourInput), Number(minuteInput), true, month, day, year, hour, minute);
                                props.recordTime(props.meterId, Number(hourInput), Number(minuteInput), true);
                            }}
                        />
                    </View>
                    <Button
                        title="Back"
                        onPress={() => props.toggleTimeLog()}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50.0,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20.0
    },
    textInput: {
        height: 50.0,
        width: 80.0,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 26.0,
        borderRadius: 10.0
    }
})