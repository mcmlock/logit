import React, { useState } from 'react';
import { Dimensions, StyleSheet, Modal, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { DayPicker, MonthPicker, YearInput } from '../DatePickers';
import { DismissKeyboard } from '../../resources/keyboard';
import { calcDateValue, calcDateValueWithTime } from '../../resources/dateFunctions';

const { width } = Dimensions.get('window');

export const InsertLog = props => {

    const [hourInput, setHourInput] = useState(0);
    const [minuteInput, setMinuteInput] = useState(0);

    // ts stands for timestamp
    const [tsHourInput, setTSHourInput] = useState(0);
    const [tsMinuteInput, setTSMinuteInput] = useState(0);
    const [am, setAM] = useState(true);
    const [monthPicker, showMonthPicker] = useState(false);
    const [dayPicker, showDayPicker] = useState(false);
    const [yearInput, showYearInput] = useState(false);
    const [yMax, setYMax] = useState(1);

    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear() - 2000;

    const [month, setMonth] = useState(currentMonth);
    const [day, setDay] = useState(currentDay);
    const [year, setYear] = useState(currentYear);


    const resetModal = () => {
        setHourInput(0);
        setMinuteInput(0);
    }

    return (

        <Modal
            visible={props.visible}
        >
            <DismissKeyboard>
                <View style={styles.modal}>

                    <View style={{ borderWidth: 1, width: width * .8, paddingHorizontal: 20.0, paddingVertical: 20.0, borderRadius: 5.0, borderColor: 'white' }}>
                        <View style={styles.inputRow}>
                            <TextInput
                                placeholder='HH'
                                placeholderTextColor="#444"
                                keyboardType='number-pad'
                                style={styles.textInput}

                                onChangeText={value => setHourInput(value)}
                            />
                            <Text style={{ fontSize: 26.0, paddingHorizontal: 8.0, fontWeight: 'bold', color: 'white' }}>:</Text>
                            <TextInput
                                placeholder='MM'
                                placeholderTextColor="#444"
                                keyboardType='number-pad'
                                style={styles.textInput}
                                onChangeText={value => setMinuteInput(value)}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 15.0 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    placeholder='HH'
                                    placeholderTextColor="#444"
                                    keyboardType='number-pad'
                                    style={styles.tsTextInput}

                                    onChangeText={value => setTSHourInput(value)}
                                />
                                <Text style={{ fontSize: 18.0, fontWeight: 'bold', color: 'white' }}>:</Text>
                                <TextInput
                                    placeholder='MM'
                                    placeholderTextColor="#444"
                                    keyboardType='number-pad'
                                    style={styles.tsTextInput}
                                    onChangeText={value => setTSMinuteInput(value)}
                                />
                                <TouchableOpacity onPress={() => setAM(!am)}>
                                    <View style={{ borderWidth: 1, padding: 5.0, marginLeft: 3.0, marginRight: 15.0, borderColor: 'white', borderRadius: 4.0 }}>
                                        <Text style={{ fontSize: 18.0, color: 'white' }}>{am ? 'am' : 'pm'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    showMonthPicker(!monthPicker)
                                    showDayPicker(false);
                                    showYearInput(false);
                                }}>
                                    <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                        <Text style={{ fontSize: 18.0, color: 'white' }}>{month}</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20.0, color: 'white' }}>/</Text>
                                <TouchableOpacity onPress={() => {
                                    showMonthPicker(false)
                                    showDayPicker(!dayPicker);
                                    showYearInput(false);
                                }}>
                                    <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                        <Text style={{ fontSize: 18.0, color: 'white' }}>{day}</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20.0, color: 'white' }}>/</Text>
                                <TouchableOpacity onPress={() => {
                                    showMonthPicker(false);
                                    showDayPicker(false);
                                    showYearInput(!yearInput);
                                }}>
                                    <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                        <Text style={{ fontSize: 18.0, color: 'white' }}>{year}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                {monthPicker &&
                                    <View style={{ marginBottom: 10.0 }}>
                                        <MonthPicker
                                            visible={monthPicker}
                                            setVisible={showMonthPicker}
                                            month={month}
                                            setMonth={setMonth}
                                            day={day}
                                            year={year}
                                            setDay={setDay}
                                            setsEndDate={true}
                                            calcDateValue={calcDateValue}
                                            startDateValue={calcDateValue(currentMonth, currentDay, currentYear)}
                                            setYMax={setYMax}
                                            isInsert={true}
                                        />
                                    </View>
                                }
                                {dayPicker &&
                                    <View style={{ marginBottom: 10.0 }}>
                                        <DayPicker
                                            visible={dayPicker}
                                            setVisible={showDayPicker}
                                            month={month}
                                            year={year}
                                            setDay={setDay}
                                            setsEndDate={true}
                                            calcDateValue={calcDateValue}
                                            startDateValue={calcDateValue(currentMonth, currentDay, currentYear)}
                                            setYMax={setYMax}
                                            isInsert={true}
                                        />
                                    </View>
                                }
                                {yearInput &&
                                    <View style={{ marginBottom: 10.0 }}>
                                        <YearInput
                                            visible={yearInput}
                                            setVisible={showYearInput}
                                            setYMax={setYMax}
                                            month={month}
                                            day={day}
                                            setDay={setDay}
                                            calcDateValue={calcDateValue}
                                            setsEndDate={true}
                                            startDateValue={calcDateValue(currentMonth, currentDay, currentYear)}
                                            setYear={setYear}
                                            isInsert={true}
                                        />
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Icon
                                name='plus'
                                type='font-awesome'
                                size={30}
                                color='white'
                                onPress={() => {
                                    const meterLogs = props.logs.filter(log => log.meterId === props.meterId);
                                    if (!am) {
                                        if (tsHourInput < 24 && (hourInput > 0 || minuteInput > 0) && (tsHourInput > 0 || tsMinuteInput > 0)) {
                                            const sameDateAndTime = meterLogs.filter(log => log.dateValue === calcDateValueWithTime(month, day, year, (Number(tsHourInput) + 12), Number(tsMinuteInput)));
                                            if (sameDateAndTime.length === 0) {
                                                props.createTimeLog(props.meterId, Number(hourInput), Number(minuteInput), month, day, year, (Number(tsHourInput) + 12), Number(tsMinuteInput));
                                            }
                                        }
                                    } else {
                                        if (tsHourInput < 24 && (hourInput > 0 || minuteInput > 0) && (tsHourInput > 0 || tsMinuteInput > 0)) {
                                            const sameDateAndTime = meterLogs.filter(log => log.dateValue === calcDateValueWithTime(month, day, year, Number(tsHourInput), Number(tsMinuteInput)));
                                            if (sameDateAndTime.length === 0) {
                                                props.createTimeLog(props.meterId, Number(hourInput), Number(minuteInput), month, day, year, Number(tsHourInput), Number(tsMinuteInput));
                                            }
                                        }
                                    }
                                }}
                            />
                            <TouchableOpacity
                                style={{marginLeft: 20.0}}
                                onPress={() => {
                                    resetModal();
                                    props.toggleModal(!props.visible);
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 20.0, alignSelf: 'center' }}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

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
        backgroundColor: '#2b2b2b',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15.0,
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
    },
    tsTextInput: {
        margin: 3.0,
        paddingHorizontal: 4.0,
        paddingVertical: 6.0,
        borderRadius: 4.0,
        fontSize: 18.0,
        borderStyle: 'solid',
        borderColor: "white",
        borderWidth: 1,
        color: 'white'
    }
})