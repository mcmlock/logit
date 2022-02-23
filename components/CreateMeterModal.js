import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableHighlight, View, Text, TextInput, SafeAreaView, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DayPicker, MonthPicker } from './DatePickers';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const CreateProgressMeter = props => {

    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showDayPicker, setShowDayPicker] = useState(false);

    const [title, setTitle] = useState('');
    const [units, setUnits] = useState('hours');
    const [progressMade, setProgressMade] = useState(0);
    const [goal, setGoal] = useState(1);
    const [month, setMonth] = useState((new Date().getMonth() + 2) > 12 ? 1 : new Date().getMonth() + 2);
    const [day, setDay] = useState((new Date().getDate()));
    const [year, setYear] = useState((new Date().getFullYear() - 2000));
    const [meterColor, setMeterColor] = useState('#1fbaed');

    const resetModal = () => {
        setTitle('');
        setShowMonthPicker(false);
        setShowDayPicker(false);
    }

    const ColorPicker = color => {
        return (
            <TouchableOpacity
                style={{ marginHorizontal: 12.0 }}
                onPress={() => {
                    setMeterColor(color.color)
                }}>
                <View style={meterColor === color.color ? { width: 45.0, height: 45.0, backgroundColor: color.color, borderWidth: 1.4, borderColor: 'white' } : { width: 45.0, height: 45.0, backgroundColor: color.color }} />
            </TouchableOpacity>
        );
    }

    return (
        <Modal
            visible={props.visible}
        >
            <DismissKeyboard>
                <View style={styles.modal}>
                    <SafeAreaView>
                        <View style={styles.titleRow}>
                            <TextInput
                                placeholder='Title Me'
                                placeholderTextColor='#444'
                                value={title}
                                style={styles.titleTextInput}
                                onChangeText={value => setTitle(value)}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20.0 }}>
                            <Text style={styles.hoursLabel}>Hours</Text>
                            <TextInput
                                style={styles.hoursTextInput}
                                placeholder='10000'
                                placeholderTextColor='#444'
                                keyboardType='number-pad'
                                textAlign='center'
                                onChangeText={value => setGoal(Number(value))}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.labelText}>Due Date</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    value={`${month}`}
                                    style={styles.textInput}
                                    onChangeText={value => setMonth(Number(value))}
                                />
                                <TextInput
                                    value={`${day}`}
                                    style={styles.textInput}
                                    onChangeText={value => setDay(Number(value))}
                                />
                                <TextInput
                                    value={`${year}`}
                                    style={styles.textInput}
                                    onChangeText={value => setYear(Number(value))}
                                />
                            </View>
                        </View>
                        <View style={styles.colorSelect}>
                            <View style={{ flexDirection: 'row' }}>
                                <ColorPicker color='#1f4fed' />
                                <ColorPicker color='#901fed' />
                                <ColorPicker color='#1fedce' />
                                <ColorPicker color='#1fbaed' />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <ColorPicker color='#ed1f37' />
                                <ColorPicker color='#ed9e1f' />
                                <ColorPicker color='#eddf1f' />
                                <ColorPicker color='#ed1fce' />
                            </View>
                        </View>
                        <View style={styles.btnView}>
                            <Button
                                title="Create"
                                onPress={() => {
                                    const barProperties = {
                                        title: title,
                                        progressMade: progressMade,
                                        goal: goal,
                                        month: month,
                                        day: day,
                                        year: year,
                                        color: meterColor
                                    };
                                    props.createProgressMeter(barProperties);
                                    props.toggleModal();
                                    resetModal();
                                }}
                            />
                            <Button
                                title="Discard"
                                onPress={() => {
                                    props.toggleModal();
                                    resetModal();
                                }}
                            />
                        </View>
                    </SafeAreaView>
                </View>
            </DismissKeyboard>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b2b2b'
    },
    titleRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleTextInput: {
        width: '88%',
        paddingHorizontal: 8.0,
        fontSize: 28.0,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        borderRadius: 4.0
    },
    hoursTextInput: {
        marginLeft: 12.0,
        paddingHorizontal: 8.0,
        paddingVertical: 6.0,
        borderRadius: 4.0,
        fontSize: 25.0,
        borderStyle: 'solid',
        borderColor: "white",
        borderWidth: 1,
        color: 'white'
    },
    hoursLabel: {
        color: 'white',
        fontSize: 25.0
    },
    colorSelect: {
        marginTop: 14.0
    }
});

export default CreateProgressMeter;