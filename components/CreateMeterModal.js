import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableHighlight, View, Text, TextInput, SafeAreaView, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DayPicker, MonthPicker } from './DatePickers';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const calcDateValue = (month, day, year) => {
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
    return monthValue + dayValue + yearValue;
}

const CreateProgressMeter = props => {

    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showDayPicker, setShowDayPicker] = useState(false);

    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear() - 2000;

    const [title, setTitle] = useState('');
    const [goal, setGoal] = useState(1);
    const [month, setMonth] = useState(currentMonth + 1 > 12 ? 1 : currentMonth + 1);
    const [day, setDay] = useState(currentDay);
    const [year, setYear] = useState(currentMonth === 12 ? currentYear + 1 : currentYear);
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
                                <ColorPicker color='#1fbaed' />
                                <ColorPicker color='#1fedce' />
                                <ColorPicker color='#901fed' />
                                <ColorPicker color='#1f4fed' />

                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 16.0 }}>
                                <ColorPicker color='#ed1f37' />
                                <ColorPicker color='#ed9e1f' />
                                <ColorPicker color='#eddf1f' />
                                <ColorPicker color='#ed1fce' />
                            </View>
                        </View>
                        <View style={styles.btnView}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.toggleModal();
                                    resetModal();
                                }}
                                style={{marginHorizontal: 10.0}}
                            >
                                <View style={{ width: 80.0, height: 30, alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 24.0 }}>Discard</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    const barProperties = {
                                        title: title,
                                        goal: goal,
                                        month: month,
                                        day: day,
                                        year: year,
                                        color: meterColor
                                    };

                                    let dueDateValid = false;
                                    if (calcDateValue(month, day, year) > calcDateValue(currentMonth, currentDay, currentYear)) {
                                        dueDateValid = true;
                                    }

                                    if (barProperties.title !== '' && goal !== '' && dueDateValid) {
                                        props.createProgressMeter(barProperties);
                                        props.toggleModal();
                                        resetModal();
                                    }
                                }}
                                style={{marginHorizontal: 10.0}}
                            >
                                <View style={{ width: 80.0, height: 30, alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 24.0 }}>Create</Text>
                                </View>
                            </TouchableOpacity>
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
        marginTop: 14.0,
        alignItems: 'center'
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30.0
    }
});

export default CreateProgressMeter;