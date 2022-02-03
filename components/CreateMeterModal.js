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
                        <Text style={styles.labelText}>Title</Text>
                        <TextInput
                            value={title}
                            style={styles.textInput}
                            onChangeText={value => setTitle(value)}
                        />
                    </View>
                    <View style={styles.unitsRow}>
                        <Text style={styles.labelText}>Units</Text>
                        <Button
                            title="HH:MM"
                            onPress={() => setUnits('hours')}
                        />
                        <Button
                            title="$"
                           // onPress={() => setUnits('dollars')}
                        />
                        <Button
                            title="Custom"
                           // onPress={() => setUnits('custom')}
                        />
                    </View>
                    <View style={styles.goalView}>
                        <Text style={styles.labelText}>Goal</Text>
                        {units === 'hours' &&
                            <View style={styles.goalRow}>
                                <TextInput 
                                    style={styles.textInput} 
                                    onChangeText={value => setGoal(Number(value))}
                                />
                                <Text style={styles.labelText}>Hours</Text>
                            </View>
                        }
                        {units === 'dollars' &&
                            <View style={styles.goalRow}>
                                <TextInput style={styles.textInput} />
                                <Text style={styles.labelText}>Dollars</Text>
                            </View>
                        }
                        {units === 'custom' &&
                            <View style={styles.goalRow}>
                                <TextInput style={styles.textInput} />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="units"
                                />
                            </View>
                        }
                    </View>
                    <View style={styles.dateRow}>
                        <TouchableHighlight
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
                                    style={styles.textInput}
                                    onChangeText={value => setTitle(value)}
                                />
                            </View>
                        }
                    </View>
                    {showMonthPicker &&
                        <MonthPicker
                            setMonth={setMonth}
                        />
                    }
                    {showDayPicker &&
                        <DayPicker
                            setDay={setDay}
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
                                    // id:
                                    title: title,
                                    units: units,
                                    progressMade: progressMade,
                                    goal: goal,
                                    customUnits: customUnits,
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
        marginVertical: '30%',
        marginHorizontal: 10.0,
        justifyContent: 'center',
        alignContent: 'center',
    },
    titleRow: {
        alignItems: 'center',
        borderWidth: 1,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    unitsRow: {
        alignItems: 'center',
        borderWidth: 1,
        height: 100,
        flexDirection: 'row'
    },
    goalView: {
        alignItems: 'center',
        borderWidth: 1,
        height: 100,
        flexDirection: 'row'
    },
    goalRow: {
        flexDirection: 'row'
    },
    dateRow: {
        alignItems: 'center',
        borderWidth: 1,
        height: 100,
        flexDirection: 'row'
    },
    dateButtons: {
        flexDirection: 'row'
    },
    colorRow: {
        flexDirection: 'row'
    },
    labelText: {
        margin: 10,
        padding: 5,
        fontSize: 26,
    },
    textInput: {
        margin: 10.0,
        padding: 5.0,
        width: 170.0,
        fontSize: 26.0,
        borderStyle: 'solid',
        borderColor: "#000",
        borderWidth: 1
    },
    btnView: {
        alignItems: 'center',
        borderWidth: 1,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dateText: {
        fontSize: 26.0
    }
})

export default CreateProgressMeter;