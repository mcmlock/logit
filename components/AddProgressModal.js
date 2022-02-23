import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export const TimeLogger = props => {

    const [hourInput, setHourInput] = useState(0);
    const [minuteInput, setMinuteInput] = useState(0);

    const resetModal = () => {
        setHourInput(0);
        setMinuteInput(0);
    }

    return (
        <Modal
            visible={props.visible}
        >
            <View style={styles.modal}>
                <View style={{borderWidth: 1, paddingHorizontal: 40.0, paddingVertical: 20.0, borderRadius: 5.0, borderColor: 'white'}}>
                    <View style={styles.inputRow}>
                        <TextInput
                            placeholder='HH'
                            placeholderTextColor="#444"
                            keyboardType='number-pad'
                            style={styles.textInput}
                            value={hourInput}
                            onChangeText={value => setHourInput(value)}
                        />
                        <Text style={{fontSize: 26.0, paddingHorizontal: 8.0, fontWeight: 'bold', color: 'white'}}>:</Text>
                        <TextInput
                            placeholder='MM'
                            placeholderTextColor="#444"
                            keyboardType='number-pad'
                            style={styles.textInput}
                            value={minuteInput}
                            onChangeText={value => setMinuteInput(value)}
                        />
                    </View>
                    <View style={{marginHorizontal: 50.0, justifyContent: 'center', marginBottom: 30}}>
                        <Icon
                            name='plus'
                            type='font-awesome'
                            size={30}
                            color='white'
                            onPress={() => {
                                const month = new Date().getMonth() + 1;
                                const day = new Date().getDate();
                                const year = new Date().getFullYear() - 2000;
                                const hour = new Date().getHours();
                                const minute = new Date().getMinutes();
                                props.createTimeLog(props.meterId, Number(hourInput), Number(minuteInput), month, day, year, hour, minute);
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            resetModal();
                            props.toggleTimeLog()
                        }}
                    >
                        <Text style={{color: 'white', fontSize: 20.0, alignSelf: 'center'}}>Back</Text>
                    </TouchableOpacity>
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
        paddingHorizontal: 50.0,
        backgroundColor: '#2b2b2b'
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30.0,
    },
    textInput: {
        paddingHorizontal: 8.0,
        paddingVertical: 6.0,
        borderRadius: 4.0,
        fontSize: 25.0,
        borderStyle: 'solid',
        borderColor: "white",
        borderWidth: 1,
        color: 'white'
    }
})