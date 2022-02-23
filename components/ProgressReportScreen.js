import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { DayPicker, MonthPicker, YearInput } from './DatePickers';

const { width, height } = Dimensions.get('window');

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

const SelectedPointInfo = props => {
    let selectedMonth;
    let selectedDay;
    let minutesLeft = props.point;
    const year = Math.floor(minutesLeft / (1440 * 365));
    minutesLeft -= (year * 1440 * 365);
    const leapYears = Math.floor(year / 4);
    minutesLeft -= leapYears * 1440;
    if (year / 4 === 0) {
        if (minutesLeft > 482400) {
            selectedMonth = 'Dec';
            minutesLeft -= 482400;
        } else if (minutesLeft > 439200) {
            selectedMonth = 'Nov';
            minutesLeft -= 439200;
        } else if (minutesLeft > 394560) {
            selectedMonth = 'Oct';
            minutesLeft -= 394560;
        } else if (minutesLeft > 351360) {
            selectedMonth = 'Sep';
            minutesLeft -= 351360;
        } else if (minutesLeft > 306720) {
            selectedMonth = 'Aug';
            minutesLeft -= 306720;
        } else if (minutesLeft > 262080) {
            selectedMonth = 'July';
            minutesLeft -= 262080;
        } else if (minutesLeft > 218880) {
            selectedMonth = 'June';
            minutesLeft -= 218880;
        } else if (minutesLeft > 174240) {
            selectedMonth = 'May';
            minutesLeft -= 174240;
        } else if (minutesLeft > 131040) {
            selectedMonth = 'Apr';
            minutesLeft -= 131040;
        } else if (minutesLeft > 86400) {
            selectedMonth = 'Mar';
            minutesLeft -= 86400;
        } else if (minutesLeft > 44640) {
            selectedMonth = 'Feb';
            minutesLeft -= 44640
        } else {
            selectedMonth = 'Jan';
        }
    } else {
        if (minutesLeft > 480960) {
            selectedMonth = 'Dec';
            minutesLeft -= 480960;
        } else if (minutesLeft > 437760) {
            selectedMonth = 'Nov';
            minutesLeft -= 437760;
        } else if (minutesLeft > 393120) {
            selectedMonth = 'Oct';
            minutesLeft -= 393120;
        } else if (minutesLeft > 349920) {
            selectedMonth = 'Sep';
            minutesLeft -= 349920;
        } else if (minutesLeft > 305280) {
            selectedMonth = 'Aug';
            minutesLeft -= 305280;
        } else if (minutesLeft > 260640) {
            selectedMonth = 'July';
            minutesLeft -= 260640;
        } else if (minutesLeft > 217440) {
            selectedMonth = 'June';
            minutesLeft -= 217440;
        } else if (minutesLeft > 172800) {
            selectedMonth = 'May';
            minutesLeft -= 172800;
        } else if (minutesLeft > 129600) {
            selectedMonth = 'Apr';
            minutesLeft -= 129600;
        } else if (minutesLeft > 84960) {
            selectedMonth = 'Mar';
            minutesLeft -= 84960;
        } else if (minutesLeft > 44640) {
            selectedMonth = 'Feb';
            minutesLeft -= 44640
        } else {
            selectedMonth = 'Jan';
        }
    }
    selectedDay = minutesLeft / 1440;

    const dayLogs = props.logs.filter(log => log.dateValue === props.point - 1440);
    const daysContribution = (dayLogs.reduce((prevVal, currentVal) => prevVal + currentVal.hoursRecorded + (currentVal.minutesRecorded / 60), 0)).toFixed(2);
    const hours = Math.floor(daysContribution);
    const minutesDec = daysContribution - hours;
    const minutes = Math.round(minutesDec * 60);

    switch (selectedDay) {
        case 1:
        case 21:
        case 31:
            selectedDay = selectedDay + 'st';
            break;
        case 2:
        case 22:
            selectedDay = selectedDay + 'nd';
            break;
        case 3:
        case 23:
            selectedDay = selectedDay + 'rd';
            break;
        default:
            selectedDay = selectedDay + 'th';
            break;
    }

    return (
        <View style={{ alignSelf: 'center', marginBottom: 10.0 }}>
            <Text style={{ fontSize: 22.0, letterSpacing: 1.2, color: 'white' }}>{selectedMonth} {selectedDay}, 20{year}: {hours} H {minutes} M</Text>
        </View>
    );
}

// Calculating current day value
let month = new Date().getMonth() + 1;
let day = new Date().getDate();
let year = new Date().getFullYear() - 2000;
let dateValue = calcDateValue(month, day, year);

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
    const [point, selectPoint] = useState(dateValue);
    const [logs, setLogs] = useState(dateValue);
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

    const findDayLogs = (endDateValue, daysFromEnd) => {
        return logsInRange.filter(log => log.dateValue === endDateValue - (1440 * daysFromEnd));
    }
    const calcDayTotal = day => {
        let hours = 0;
        for (i = 0; i < day.length; i++) {
            hours += day[i].hoursRecorded + (day[i].minutesRecorded / 60);
            if (hours > yMax) { setYMax(hours) };
        }
        return hours;
    }

    // Gathering the data for the chart
    const logsInRange = props.logs.filter(log => log.meterId === props.selectedMeter && log.dateValue >= startDateValue && log.dateValue <= endDateValue);

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
    let dueMonthValue;
    switch (props.dueMonth) {
        case 2:
            dueMonthValue = 31 * 1440;
            break;
        case 3:
            dueMonthValue = 59 * 1440;
            break;
        case 4:
            dueMonthValue = 90 * 1440;
            break;
        case 5:
            dueMonthValue = 120 * 1440;
            break;
        case 6:
            dueMonthValue = 151 * 1440;
            break;
        case 7:
            dueMonthValue = 181 * 1440;
            break;
        case 8:
            dueMonthValue = 212 * 1440;
            break;
        case 9:
            dueMonthValue = 242 * 1440;
            break;
        case 10:
            dueMonthValue = 273 * 1440;
            break;
        case 11:
            dueMonthValue = 303 * 1440;
            break;
        case 12:
            dueMonthValue = 334 * 1440;
            break;
        default:
            dueMonthValue = 0;
            break;
    }
    let dueDayValue;
    if (props.dueDay > 1) {
        dueDayValue = (props.dueDay - 1) * 1440;
    } else {
        dueDayValue = 0;
    }
    let dueYearValue = props.dueYear * 1440 * 365;
    const dueLeapYears = Math.floor(props.dueYear / 4);
    dueYearValue += dueLeapYears * 1440;
    let dueDateValue = dueMonthValue + dueDayValue + dueYearValue;
    const daysLeft = (dueDateValue - dateValue) / 1440;
    const dailyTargetDec = (props.goal - totalTimeLogged) / daysLeft;
    let dailyTargetHr = Math.floor(dailyTargetDec);
    const minutesDec = dailyTargetDec - dailyTargetHr;
    let dailyTargetMin = Math.round(minutesDec * 60);
    if (dailyTargetMin % 60 === 0) {
        dailyTargetHr += 1;
        dailyTargetMin = 0;
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: -20,
                        right: 15.0,
                    }}
                    onPress={() => {
                        navigation.navigate('Log History');
                    }}>
                    <Text style={{ color: 'white' }}>History</Text>
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={{ fontSize: 32.0, paddingBottom: 2.0, textAlign: 'center', color: 'white' }}>{props.meterTitle}</Text>
                    <Text style={{ fontSize: 24.0, paddingBottom: 2.0, textAlign: 'center', color: 'white' }}>{goalString}</Text>
                    <Text style={{ fontSize: 24.0, textAlign: 'center', color: 'white' }}>{daysLeft} Days Left</Text>
                </View>
                <ScrollView style={{ marginBottom: 80.0 }} contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center' }}>
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
                                    <LineChart
                                        fromZero={true}
                                        onDataPointClick={value => {
                                            selectPoint(value.index * 1440 + startDateValue)

                                        }}
                                        segments={1}
                                        withInnerLines={false}
                                        withOuterLines={false}
                                        withHorizontalLines={false}
                                        withVerticalLines={false}
                                        formatYLabel={() => ''}
                                        hidePointsAtIndex={pointsToHide}

                                        data={{
                                            datasets: [
                                                {
                                                    data: values
                                                }
                                            ]
                                        }}
                                        width={(values.length * 50)}
                                        height={height * .25}
                                        chartConfig={{
                                            backgroundGradientFrom: props.color,
                                            backgroundGradientTo: props.color,
                                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

                                            propsForDots: {
                                                r: "6",
                                                strokeWidth: "2",
                                            }
                                        }}
                                        bezier
                                        style={{
                                            paddingBottom: -15,
                                            marginLeft: -15,
                                        }}

                                    />
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
                            <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                <Text style={{ fontSize: 18.0, color: 'white' }}>{startMonth}</Text>
                            </View>
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
                            <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                <Text style={{ fontSize: 18.0, color: 'white' }}>{startDay}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20.0, color: 'white' }}>/</Text>
                        <TouchableOpacity>
                            <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                <Text style={{ fontSize: 18.0, color: 'white' }}>{startYear}</Text>
                            </View>
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
                            <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                <Text style={{ fontSize: 18.0, color: 'white' }}>{endMonth}</Text>
                            </View>
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
                            <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                <Text style={{ fontSize: 18.0, color: 'white' }}>{endDay}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20.0, color: 'white' }}>/</Text>
                        <TouchableOpacity>
                            <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
                                <Text style={{ fontSize: 18.0, color: 'white' }}>{endYear}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {startMonthPicker &&
                            <View style={{ marginTop: -10.0, marginBottom: 10.0 }}>
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
                            <View style={{ marginTop: -10.0, marginBottom: 10.0 }}>
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
                            />
                        }
                        {endMonthPicker &&
                            <View style={{ marginTop: -10.0, marginBottom: 10.0 }}>
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
                            <View style={{ marginTop: -10.0, marginBottom: 10.0 }}>
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
                </ScrollView>
                <View style={styles.buttonsView}>
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonText}>Home</Text>
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
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30.0,
    },
    buttonText: {
        fontSize: 20.0,
        textAlign: 'center',
        marginBottom: 10.0,
        color: 'white'
    }
});

export default ProgressReportScreen;