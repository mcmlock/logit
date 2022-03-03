import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Alert, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { LineGraph } from './LineGraph';
import { SelectedPointInfo } from './SelectedPointInfoComponent';
import { DayPicker, MonthPicker, YearInput, DateButton } from './DatePickers';
import CreateProgressMeter from './modals/CreateMeterModal';
import { calcDueDateValue, calcDateValue } from '../resources/dateFunctions';

const { width, height } = Dimensions.get('window');

// Calculating current day value
let month = new Date().getMonth() + 1;
let day = new Date().getDate();
let year = new Date().getFullYear() - 2000;
const dateValue = calcDateValue(month, day, year);

// Finding the date from two weeks ago
let sDay = day - 13;
let sMonth = month;
let sYear = year;
if (sDay <= 0) {
    if (month === 1) {
        sMonth = 12;
        sDay = 31 + sDay;
        sYear -= 1;
    } else {
        sMonth = month - 1;
        switch (sMonth) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                sDay = 31 + sDay;
                break;
            case 2:
                if (year % 4 === 0) {
                    sDay = 29 + sDay;
                } else {
                    sDay = 28 + sDay;
                }
                break;
        }
    }
} else {
    sMonth = month;
    sYear = year;
}

const ProgressReportScreen = props => {

    const navigation = useNavigation();

    const [yMax, setYMax] = useState(1);
    const [highestValue, setHighestValue] = useState(1);
    const [point, selectPoint] = useState(dateValue);
    const [startMonth, setStartMonth] = useState(sMonth);
    const [startDay, setStartDay] = useState(sDay);
    const [startYear, setStartYear] = useState(sYear);
    const [endMonth, setEndMonth] = useState(month);
    const [endDay, setEndDay] = useState(day);
    const [endYear, setEndYear] = useState(year);
    // For the date pickers
    const [startMonthPicker, showStartMonthPicker] = useState(false);
    const [startDayPicker, showStartDayPicker] = useState(false);
    const [startYearInput, showStartYearInput] = useState(false);
    const [endMonthPicker, showEndMonthPicker] = useState(false);
    const [endDayPicker, showEndDayPicker] = useState(false);
    const [endYearInput, showEndYearInput] = useState(false);
    // Calculating the time between the start and end dates for the graph header
    const startDateValue = calcDateValue(startMonth, startDay, startYear);
    const endDateValue = calcDateValue(endMonth, endDay, endYear);
    const dateRange = ((endDateValue - startDateValue) / 1440) + 1;
    // Adjusting view when keyboard is open
    const [keyboardSpacer, setKeyboardSpacer] = useState(0);
    // For editing the meter
    const [createOpen, setCreateOpen] = useState(false);
    const toggleCreateModal = () => {
        setCreateOpen(!createOpen);
    };

    useEffect(() => {
        const punchUpView = Keyboard.addListener('keyboardWillShow', () => {
            setKeyboardSpacer(200);
        });

        const lowerView = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardSpacer(0);
        });
    })

    const findDayLogs = (endDateValue, daysFromEnd) => {
        return logsInRange.filter(log => log.dateValue - (log.dateValue % 1440) === endDateValue - (1440 * daysFromEnd));
    }
    const calcDayTotal = day => {
        let hours = 0;
        for (i = 0; i < day.length; i++) {
            hours += day[i].hoursRecorded + (day[i].minutesRecorded / 60);
            if (hours > yMax) { 
                setYMax(hours);
                setHighestValue(hours); 
            };
        }
        return hours;
    }

    // Gathering the data for the chart
    const logsInRange = props.logs.filter(log => log.meterId === props.selectedMeter && log.dateValue >= startDateValue && log.dateValue - 1439 <= endDateValue);

    const values = [];
    for (let i = 1; i <= dateRange; i++) {
        let day = findDayLogs(endDateValue, dateRange - i);
        values.push(calcDayTotal(day));
    }

    const pointsToHide = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] === 0) {
            pointsToHide.push(i);
        }
    }

    let yScale = 1;
    if (yMax === 1) {
        yScale = 1;
    } else if (yMax <= 10) {
        yScale = Math.floor(yMax) + 1;
    } else if (yMax < 22) {
        yScale = (Math.floor(yMax / 2) + 1) * 2;
    } else {
        yScale = 24;
    }

    // Finding the time recorded in the date range
    const timeInRange = (logsInRange.reduce((prevVal, currentVal) => prevVal + currentVal.hoursRecorded + (currentVal.minutesRecorded / 60), 0)).toFixed(2);
    let hoursInRange = Math.floor(timeInRange);
    let minutesInRange = Math.round((timeInRange - hoursInRange) * 60);
    if (minutesInRange === 60) {
        hoursInRange++;
        minutesInRange = 0;
    }

    // Finding the average in a date range
    const avgTime = (timeInRange / dateRange).toFixed(2);
    let avgHours = Math.floor(avgTime);
    let avgMinutes = Math.round((avgTime - avgHours) * 60);
    if (avgMinutes === 60) {
        hoursInRange++;
        avgMinutes = 0;
    }

    // Calculating the remaining time
    const pastEver = props.logs.filter(log => log.meterId === props.selectedMeter);
    const totalTimeLogged = (pastEver.reduce((prevVal, currentVal) => prevVal + currentVal.hoursRecorded + (currentVal.minutesRecorded / 60), 0)).toFixed(2);
    const totalHoursLogged = Math.floor(totalTimeLogged);
    const totalMinutesLogged = Math.round((totalTimeLogged - totalHoursLogged) * 60);
    const remainingTime = props.goal - totalTimeLogged;
    const remainingHours = Math.floor(remainingTime);
    const remainingMinutes = Math.round((remainingTime - remainingHours) * 60);

    // Making the goal string
    const goalString = `${props.goal} Hours by ${props.dueMonth}/${props.dueDay}/${props.dueYear}`;

    // Calculating the daily target
    const daysLeft = (calcDueDateValue(props.dueMonth, props.dueDay, props.dueYear) - dateValue) / 1440;
    const dailyTargetDec = (props.goal - totalTimeLogged) / daysLeft;
    let dailyTargetHr = Math.floor(dailyTargetDec);
    const minutesDec = dailyTargetDec - dailyTargetHr;
    let dailyTargetMin = Math.ceil(minutesDec * 60);
    if (dailyTargetMin % 60 === 0) {
        dailyTargetHr += 1;
        dailyTargetMin = 0;
    }

    return (

        <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
            <CreateProgressMeter
                visible={createOpen}
                toggleModal={toggleCreateModal}
                editProgressMeter={props.editProgressMeter}
                editing={true}
                meter={props.progressMeters.filter(meter => meter.id === props.selectedMeter)[0]}
                id={props.selectedMeter}
                title={props.meterTitle}
                goal={props.goal}
                dueMonth={props.dueMonth}
                dueDay={props.dueDay}
                dueYear={props.dueYear}
                color={props.color}
            />

            <SafeAreaView style={styles.container}>
                <View style={{ position: 'absolute', top: -20.0, width: width }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={{ marginLeft: 15.0, color: 'white', fontSize: 16.0 }}>{'< Home'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Log History');
                            }}>
                            <Text style={{ marginRight: 15.0, color: 'white', fontSize: 16.0 }}>{'History >'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.header}>
                    <Text style={{ fontSize: 32.0, paddingBottom: 2.0, textAlign: 'center', color: 'white' }}>{props.meterTitle}</Text>
                    <Text style={{ fontSize: 24.0, paddingBottom: 2.0, textAlign: 'center', color: 'white' }}>{goalString}</Text>
                    <Text style={{ fontSize: 24.0, textAlign: 'center', color: 'white' }}>{daysLeft} Days Left</Text>
                </View>
                <ScrollView
                    style={{ marginBottom: 80.0 }} contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center' }}
                 /*   ref={ref => { this.scrollView = ref }}
                    onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}*/
                >
                    <View style={{ marginTop: 15.0 }}>
                        <Text style={styles.range}>{hoursInRange} H {minutesInRange} M Tracked</Text>
                        <Text style={styles.range}>From {startMonth}/{startDay}/{startYear} to {endMonth}/{endDay}/{endYear}</Text>
                        <Text style={{ fontSize: 20.0, letterSpacing: 1.2, color: 'white' }}>Averaged Daily: {avgHours} H {avgMinutes} M</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: (height * .25) }}>
                        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View style={{ flex: 1, marginTop: 20.0, marginRight: 12 }}>
                                <Text style={{ fontSize: 20.0, color: 'white' }}>{yScale}</Text>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'center' }}>
                                <Text style={{ transform: [{ rotate: '270deg' }], fontSize: 18.0, width: 60, height: 20, letterSpacing: 1.2, color: 'white' }}>Hours</Text>
                            </View>
                        </View>
                        <View style={styles.graphContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={false} style={{ borderRadius: 8, backgroundColor: props.color }} contentContainerStyle={styles.graph}>
                                <View style={{ marginHorizontal: -20 }}>
                                    <LineGraph selectPoint={selectPoint} highestValue={highestValue} yScale={yScale} startDateValue={startDateValue} values={values} pointsToHide={pointsToHide} color={props.color} />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30.0, marginBottom: 8.0 }}>
                        <TouchableOpacity onPress={() => {
                            showStartMonthPicker(!startMonthPicker)
                            showStartDayPicker(false);
                            showStartYearInput(false);
                            showEndMonthPicker(false);
                            showEndDayPicker(false);
                            showEndYearInput(false);
                        }}>
                            <DateButton dateValue={startMonth} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20.0, color: 'white' }}>/</Text>
                        <TouchableOpacity onPress={() => {
                            showStartMonthPicker(false)
                            showStartDayPicker(!startDayPicker);
                            showStartYearInput(false);
                            showEndMonthPicker(false);
                            showEndDayPicker(false);
                            showEndYearInput(false);
                        }}>
                            <DateButton dateValue={startDay} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20.0, color: 'white' }}>/</Text>
                        <TouchableOpacity onPress={() => {
                            showStartMonthPicker(false)
                            showStartDayPicker(false);
                            showStartYearInput(!startYearInput)
                            showEndMonthPicker(false);
                            showEndDayPicker(false);
                            showEndYearInput(false);
                        }}>
                            <DateButton dateValue={startYear} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20.0, color: 'white' }}> - </Text>
                        <TouchableOpacity onPress={() => {
                            showStartMonthPicker(false)
                            showStartDayPicker(false);
                            showStartYearInput(false);
                            showEndMonthPicker(!endMonthPicker);
                            showEndDayPicker(false);
                            showEndYearInput(false);
                        }}>
                            <DateButton dateValue={endMonth} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20.0, color: 'white' }}>/</Text>
                        <TouchableOpacity onPress={() => {
                            showStartMonthPicker(false)
                            showStartDayPicker(false);
                            showStartYearInput(false);
                            showEndMonthPicker(false);
                            showEndDayPicker(!endDayPicker);
                            showEndYearInput(false);
                        }}>
                            <DateButton dateValue={endDay} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20.0, color: 'white' }}>/</Text>
                        <TouchableOpacity
                            onPress={() => {
                                showStartMonthPicker(false)
                                showStartDayPicker(false);
                                showStartYearInput(false)
                                showEndMonthPicker(false);
                                showEndDayPicker(false);
                                showEndYearInput(!endYearInput);
                            }}>
                            <DateButton dateValue={endYear} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        {startMonthPicker &&
                            <View>
                                <MonthPicker
                                    visible={startMonthPicker}
                                    setVisible={showStartMonthPicker}
                                    month={startMonth}
                                    setMonth={setStartMonth}
                                    day={startDay}
                                    year={startYear}
                                    setDay={setStartDay}
                                    setYMax={setYMax}
                                    setsEndDate={false}
                                    calcDateValue={calcDateValue}
                                    endDateValue={endDateValue}
                                />
                            </View>
                        }
                        {startDayPicker &&
                            <View>
                                <DayPicker
                                    visible={startDayPicker}
                                    setVisible={showStartDayPicker}
                                    month={startMonth}
                                    year={startYear}
                                    setDay={setStartDay}
                                    setYMax={setYMax}
                                    setsEndDate={false}
                                    calcDateValue={calcDateValue}
                                    endDateValue={endDateValue}
                                />
                            </View>
                        }
                        {startYearInput &&
                            <YearInput
                                visible={startYearInput}
                                setVisible={showStartYearInput}
                                setYMax={setYMax}
                                month={startMonth}
                                day={startDay}
                                setDay={setStartDay}
                                calcDateValue={calcDateValue}
                                setsEndDate={false}
                                endDateValue={endDateValue}
                                setYear={setStartYear}
                            />
                        }
                        {endMonthPicker &&
                            <View>
                                <MonthPicker
                                    visible={endMonthPicker}
                                    setVisible={showEndMonthPicker}
                                    month={endMonth}
                                    setMonth={setEndMonth}
                                    day={endDay}
                                    year={endYear}
                                    setDay={setEndDay}
                                    setYMax={setYMax}
                                    setsEndDate={true}
                                    calcDateValue={calcDateValue}
                                    startDateValue={startDateValue}
                                />
                            </View>
                        }
                        {endDayPicker &&
                            <View>
                                <DayPicker
                                    visible={endDayPicker}
                                    setVisible={showEndDayPicker}
                                    month={endMonth}
                                    year={endYear}
                                    setDay={setEndDay}
                                    setYMax={setYMax}
                                    setsEndDate={true}
                                    calcDateValue={calcDateValue}
                                    startDateValue={startDateValue}
                                />
                            </View>
                        }
                        {endYearInput &&
                            <YearInput
                                visible={endYearInput}
                                setVisible={showEndYearInput}
                                setYMax={setYMax}
                                month={endMonth}
                                day={endDay}
                                setDay={setEndDay}
                                calcDateValue={calcDateValue}
                                setsEndDate={true}
                                startDateValue={startDateValue}
                                setYear={setEndYear}

                            />
                        }
                    </View>
                    <SelectedPointInfo point={point + 1440} logs={props.logs.filter(log => log.meterId === props.selectedMeter)} />
                    <View style={{ alignSelf: 'flex-start', marginTop: 10.0, marginLeft: '10%', width: '85%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 15.0 }}>
                            <Text style={styles.dataText}>Total Time Logged:</Text>
                            <Text style={styles.dataText}>{totalHoursLogged} H {totalMinutesLogged} M</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 15.0 }}>
                            <Text style={styles.dataText}>Time Remaining:</Text>
                            <Text style={styles.dataText}>{remainingHours} H {remainingMinutes} M</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 15.0 }}>
                            <Text style={styles.dataText}>Advised Daily Contribution: </Text>
                            <Text style={styles.dataText}>{dailyTargetHr} H {dailyTargetMin} M</Text>
                        </View>
                    </View>
                    <View style={{ height: keyboardSpacer }} />
                </ScrollView>
                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => toggleCreateModal()}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                "Confirm Deletion",
                                "This cannot be undone",
                                [
                                    {
                                        text: "Cancel",
                                        style: "cancel"
                                    },
                                    {
                                        text: "OK",
                                        onPress: () => {
                                            navigation.navigate('Home');
                                            props.deleteProgressMeter(props.selectedMeter);
                                        }
                                    }
                                ]
                            );
                        }}
                    >
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80.0,
        backgroundColor: '#2b2b2b',
    },
    header: {
        marginTop: 15.0,
        alignSelf: 'center',
        width: '85%',
        paddingBottom: 15.0,
        borderBottomWidth: 1.4,
        borderBottomColor: 'white'
    },
    range: {
        textAlign: 'center',
        fontSize: 22.0,
        letterSpacing: 0.4,
        color: 'white'
    },
    graphContainer: {
        width: (width * .85),
        marginTop: 40.0,
        marginBottom: 10.0,
        marginRight: 20.0,
        height: (height * .25)
    },
    graph: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    logs: {
        width: (width * .8),
        borderWidth: 1
    },
    avgText: {
        fontSize: 20.0,
        textAlign: 'center'
    },
    dateInput: {
        borderWidth: 0.8,
        borderRadius: 4,
        fontSize: 20.0
    },
    dataText: {
        fontSize: 20.0,
        paddingVertical: 2.0,
        color: 'white'
    },
    buttonsView: {
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30.0,
    },
    buttonText: {
        fontSize: 20.0,
        textAlign: 'center',
        marginHorizontal: 40.0,
        marginBottom: 20.0,
        color: 'white'
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
});

export default ProgressReportScreen;