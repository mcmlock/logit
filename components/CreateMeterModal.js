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
    const [month, setMonth] = useState((new Date().getMonth() + 2) > 12 ? 1 : new Date().getMonth() + 2);
    const [day, setDay] = useState((new Date().getDate()));
    const [year, setYear] = useState((new Date().getFullYear() - 2000));

    const resetModal = () => {
        setTitle('');
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
                            style={styles.textInput}
                            onChangeText={value => setTitle(value)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='10000'
                            textAlign='center'
                            onChangeText={value => setGoal(Number(value))}
                        />
                        <Text style={styles.labelText}>Hours</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.labelText}>Due Date</Text>
                        <View style={{flexDirection: 'row'}}>
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
    textInput: {
        margin: 10.0,
        padding: 5.0,
        fontSize: 20.0,
        borderStyle: 'solid',
        borderColor: "#666",
        borderWidth: 1,
    }
});

export default CreateProgressMeter;