import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export const TimeLogger = props => {

    const [hourInput, setHourInput] = useState(0);
    const [minuteInput, setMinuteInput] = useState(0);

    return (
        <Modal
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.modal}>
                <SafeAreaView>
                    <View style={styles.inputRow}>
                        <TextInput
                            placeholder='HH'
                            style={styles.textInput}
                            value={hourInput}
                            onChangeText={value => setHourInput(value)}
                        />
                        <Text>:</Text>
                        <TextInput
                            placeholder='MM'
                            style={styles.textInput}
                            value={minuteInput}
                            onChangeText={value => setMinuteInput(value)}
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginHorizontal: 50.0, justifyContent: 'space-between'}}>
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
                                const hoursRecorded = Number(hourInput);
                                const minutesRecorded = Number((Number(minuteInput) / 60).toFixed(2));
                                props.createTimeLog(props.meterId, hoursRecorded, minutesRecorded, true, month, day, year, hour, minute);
                            }}
                        />
                    </View>
                    <Button
                        title="Back"
                        onPress={() => props.toggleTimeLog()}
                    />
                </SafeAreaView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        width: 100.0,
        borderWidth: 1
    }
})