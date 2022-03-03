import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableOpacity, View, Text, TextInput, SafeAreaView, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';;
import { DayPicker, MonthPicker, YearInput } from '../DatePickers';
import { DismissKeyboard } from '../../resources/keyboard';
import { calcDateValue } from '../../resources/dateFunctions';

const CreateProgressMeter = props => {

    const [monthPicker, showMonthPicker] = useState(false);
    const [dayPicker, showDayPicker] = useState(false);
    const [yearInput, showYearInput] = useState(false);
    const [yMax, setYMax] = useState(1);

    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear() - 2000;

    const [title, setTitle] = props.editing ? useState(props.title) : useState('');
    const [goal, setGoal] = props.editing ? useState(props.goal) : useState(0);
    const [month, setMonth] = props.editing ? useState(props.dueMonth) : useState(currentMonth + 1 > 12 ? 1 : currentMonth + 1);
    const [day, setDay] = props.editing ? useState(props.dueDay) : useState(currentDay);
    const [year, setYear] = props.editing ? useState(props.dueYear) : useState(currentMonth === 12 ? currentYear + 1 : currentYear);
    const [meterColor, setMeterColor] = props.editing ? useState(props.color) : useState('#1fbaed');

    const submitBtnText = props.editing ? 'Save' : 'Create';

    const resetModal = () => {
        if (props.editing) {
            setTitle(props.title);
            setGoal(props.goal);
            setMonth(props.dueMonth);
            setDay(props.dueDay);
            setYear(props.dueYear);
            setMeterColor('#1fbaed');
            showMonthPicker(false);
            showDayPicker(false);
            showYearInput(false);
        } else {
            setTitle('');
            setGoal(0);
            setMonth(currentMonth + 1 > 12 ? 1 : currentMonth + 1);
            setDay(currentDay);
            setYear(currentMonth === 12 ? currentYear + 1 : currentYear);
            setMeterColor('#1fbaed');
            showMonthPicker(false);
            showDayPicker(false);
            showYearInput(false);
        }
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
                                value={goal ? goal.toString() : ''}
                                placeholder='10000'
                                placeholderTextColor='#444'
                                keyboardType='number-pad'
                                textAlign='center'
                                onChangeText={value => setGoal(Number(value))}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20.0 }}>
                            <Text style={styles.dateLabel}>Due Date</Text>
                            <View style={{ marginLeft: 10.0, flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                                        />
                                    </View>
                                }
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
                                style={{ marginHorizontal: 10.0 }}
                            >
                                <View style={{ width: 80.0, height: 30, alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 24.0 }}>Discard</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    const barProperties = {
                                        id: props.editing ? props.meter.id : null,
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
                                        if (props.editing) {
                                            props.editProgressMeter(props.meter, barProperties);
                                        } else {
                                            props.createProgressMeter(barProperties);
                                            props.toggleModal();
                                        }
                                    }
                                }}
                                style={{ marginHorizontal: 10.0 }}
                            >
                                <View style={{ width: 80.0, height: 30, alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 24.0 }}>{submitBtnText}</Text>
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
    dateLabel: {
        color: 'white',
        fontSize: 22.0
    },
    colorSelect: {
        marginTop: 14.0,
        alignItems: 'center'
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60.0
    }
});

export default CreateProgressMeter;