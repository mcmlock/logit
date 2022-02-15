import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableHighlight, View, Text, TextInput, SafeAreaView, Button } from 'react-native';
import { DayPicker, MonthPicker } from './DatePickers';

const CreateProgressMeter = props => {

    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showDayPicker, setShowDayPicker] = useState(false);

    const [title, setTitle] = useState('');
    const [units, setUnits] = useState('hours');
    const [progressMade, setProgressMade] = useState(0);
    const [goal, setGoal] = useState(1);
    const [customUnits, setCustomUnits] = useState('');
    const [hasDueDate, setHasDueDate] = useState(false);
    const [month, setMonth] = useState((new Date().getMonth() + 1));
    const [day, setDay] = useState((new Date().getDate()));
    const [year, setYear] = useState((new Date().getFullYear() - 2000));

    const resetModal = () => {
        setTitle('');
        setUnits('hours');
        setHasDueDate(false);
        setShowMonthPicker(false);
        setShowDayPicker(false);
    }


    return (
        <Modal
            visible={props.visible}
        >
            <View style={styles.modal}>
                <SafeAreaView>
                    <View style={styles.titleRow}>
                        <TextInput
                            placeholder='Title Me'
                            value={title}
                            style={styles.titleTextInput}
                            onChangeText={value => setTitle(value)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            style={styles.hoursTextInput}
                            placeholder='10000'
                            textAlign='center'
                            onChangeText={value => setGoal(Number(value))}
                        />
                        <Text style={styles.labelText}>Hours</Text>
                    </View>
                    <View style={styles.dateRow}>
                        <TouchableHighlight
                            style={{ flex: 1 }}
                            onPress={() => {
                                setHasDueDate(!hasDueDate);
                                setShowMonthPicker(false);
                                setShowDayPicker(false);
                            }}
                        >
                            <Text style={styles.labelText}>Due Date</Text>
                        </TouchableHighlight>
                        {hasDueDate &&
                            <View style={styles.dateButtons}>
                                <TouchableHighlight
                                    style={{ justifyContent: 'center' }}
                                    onPress={() => {
                                        setShowMonthPicker(!showMonthPicker);
                                        setShowDayPicker(false);
                                    }}>
                                    <Text style={styles.dateText}>{month}/</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={{ justifyContent: 'center' }}
                                    onPress={() => {
                                        setShowMonthPicker(false);
                                        setShowDayPicker(!showDayPicker);
                                    }}
                                >
                                    <Text style={styles.dateText}>{day}/</Text>
                                </TouchableHighlight>
                                <TextInput
                                    value={`${year}`}
                                    style={styles.yearTextInput}
                                    onChangeText={value => setYear(value)}
                                />
                            </View>
                        }
                    </View>
                    {showMonthPicker &&
                        <MonthPicker
                            setMonth={setMonth}
                            setDay={setDay}
                            dayValue={day}
                            yearValue={year}
                        />
                    }
                    {showDayPicker &&
                        <DayPicker
                            setDay={setDay}
                            monthValue={month}
                            yearValue={year}
                        />
                    }
                    {/*<View style={styles.colorRow}>
                        <Button
                            title=""
                        />
                        <Button
                            title=""
                        />
                        <Button
                            title=""
                        />
                        <Button
                            title=""
                        />
                        <Button
                            title=""
                        />
                        <Button
                            title=""
                        />
                </View>*/}
                    <View style={styles.btnView}>
                        <Button
                            title="Discard"
                            onPress={() => {
                                props.toggleModal();
                                resetModal();
                            }}
                        />
                        <Button
                            title="Create"
                            onPress={() => {
                                const barProperties = {
                                    title: title,
                                    progressMade: progressMade,
                                    goal: goal,
                                    hasDueDate: hasDueDate,
                                    month: month,
                                    day: day,
                                    year: year
                                };
                                props.createProgressMeter(barProperties);
                                props.toggleModal();
                                resetModal();
                            }}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleTextInput: {
        margin: 10.0,
        padding: 5.0,
        width: '85%',
        fontSize: 32.0,
        borderStyle: 'solid',
        borderColor: "#666",
        borderBottomWidth: 1.2,
        backgroundColor: 'rgb(235, 235, 235)'
    },
    goalView: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'row',
    },
    dateRow: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 70
    },
    dateButtons: {
        flex: 1,
        flexDirection: 'row'
    },
    colorRow: {
        flexDirection: 'row'
    },
    labelText: {
        margin: 20,
        padding: 5,
        fontSize: 26,
    },
    hoursTextInput: {
        margin: 10.0,
        width: '30%',
        fontSize: 26.0,
        height: 44.0,
        borderStyle: 'solid',
        borderColor: "#666",
        borderBottomWidth: 1.2,
        backgroundColor: 'rgb(235, 235, 235)'
    },
    btnView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dateText: {
        fontSize: 26.0
    },
    yearTextInput: {
        margin: 10.0,
        padding: 5.0,
        fontSize: 22.0,
        height: 52,
        width: 40,
        textAlign: 'center',
        borderRadius: 4.0,
        borderStyle: 'solid',
        borderColor: "#000",
        borderWidth: 1
    },
})

export default CreateProgressMeter;