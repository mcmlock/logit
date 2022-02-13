import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { PlotPoints, LineGraph } from './LineGraph';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const SelectedPointInfo = props => {
    if (props.point !== 0) {
        let selectedMonth;
        let selectedDay;
        let minutesLeft = props.point;
        const year = Math.floor(minutesLeft / (1440 * 365));
        minutesLeft -= (year * 1440 * 365);
        const leapYears = Math.floor(year / 4);
        minutesLeft -= leapYears * 1440;
        if (year / 4 === 0) {
            if (minutesLeft > 482400) {
                selectedMonth = 12;
                minutesLeft -= 482400;
            } else if (minutesLeft > 439200) {
                selectedMonth = 11;
                minutesLeft -= 439200;
            } else if (minutesLeft > 394560) {
                selectedMonth = 10;
                minutesLeft -= 394560;
            } else if (minutesLeft > 351360) {
                selectedMonth = 9;
                minutesLeft -= 351360;
            } else if (minutesLeft > 306720) {
                selectedMonth = 8;
                minutesLeft -= 306720;
            } else if (minutesLeft > 262080) {
                selectedMonth = 7;
                minutesLeft -= 262080;
            } else if (minutesLeft > 218880) {
                selectedMonth = 6;
                minutesLeft -= 218880;
            } else if (minutesLeft > 174240) {
                selectedMonth = 5;
                minutesLeft -= 174240;
            } else if (minutesLeft > 131040) {
                selectedMonth = 4;
                minutesLeft -= 131040;
            } else if (minutesLeft > 86400) {
                selectedMonth = 3;
                minutesLeft -= 86400;
            } else if (minutesLeft > 44640) {
                selectedMonth = 2;
                minutesLeft -= 44640
            } else {
                selectedMonth = 1;
            }
        } else {
            if (minutesLeft > 480960) {
                selectedMonth = 12;
                minutesLeft -= 480960;
            } else if (minutesLeft > 437760) {
                selectedMonth = 11;
                minutesLeft -= 437760;
            } else if (minutesLeft > 393120) {
                selectedMonth = 10;
                minutesLeft -= 393120;
            } else if (minutesLeft > 349920) {
                selectedMonth = 9;
                minutesLeft -= 349920;
            } else if (minutesLeft > 305280) {
                selectedMonth = 8;
                minutesLeft -= 305280;
            } else if (minutesLeft > 260640) {
                selectedMonth = 7;
                minutesLeft -= 260640;
            } else if (minutesLeft > 217440) {
                selectedMonth = 6;
                minutesLeft -= 217440;
            } else if (minutesLeft > 172800) {
                selectedMonth = 5;
                minutesLeft -= 172800;
            } else if (minutesLeft > 129600) {
                selectedMonth = 4;
                minutesLeft -= 129600;
            } else if (minutesLeft > 84960) {
                selectedMonth = 3;
                minutesLeft -= 84960;
            } else if (minutesLeft > 44640) {
                selectedMonth = 2;
                minutesLeft -= 44640
            } else {
                selectedMonth = 1;
            }
        }
        selectedDay = minutesLeft / 1440;

        const dayLogs = props.logs.filter(log => log.dateValue === props.point);
        const daysContribution = (dayLogs.reduce((prevVal, currentVal) => prevVal + currentVal.hoursRecorded + (currentVal.minutesRecorded / 60), 0)).toFixed(2);

        return (
            <View style={{alignSelf: 'flex-start', marginLeft: (width * .1), marginBottom: 10.0}}>
                <Text style={{fontSize: 18.0}}>{daysContribution} Hours Logged on {selectedMonth}/{selectedDay}</Text>
            </View>
        );
    };
    return <View />
}

const ProgressReportScreen = props => {

    // Getting logs for the selected meter
    const allLogs = props.logs.filter(log => log.meterId === props.selectedMeter).map(log => {
        return (
            <View>
                <Text>{log.hoursRecorded} hours {log.minutesRecorded} minutes on {log.month}/{log.year}/{log.day}
                    @ {log.hour}:{log.minutes}</Text>
            </View>
        )
    });

    const navigation = useNavigation();
    const [yMax, setYMax] = useState(1);
    const [point, selectPoint] = useState(0);
    const [logs, setLogs] = useState(allLogs);

    // Calculating current day value
    let month = new Date().getMonth() + 1;
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
    let day = new Date().getDate();
    let dayValue;
    if (day > 1) {
        dayValue = (day - 1) * 1440;
    } else {
        dayValue = 0;
    }
    let year = new Date().getFullYear() - 2000;
    let yearValue = year * 1440 * 365;
    const leapYears = Math.floor(year / 4);
    yearValue += leapYears * 1440;
    let dateValue = monthValue + dayValue + yearValue;

    // Gathering the data for the chart
    const past30 = props.logs.filter(log => log.meterId === props.selectedMeter && log.dateValue >= dateValue - (1440 * 29));
    let yScale = 1;
    if (yMax === 1) {
        yScale = 1;
    } else if (yMax < 50) {
        yScale = (Math.floor(yMax / 5) + 1) * 5;
    } else if (yMax < 100) {
        yScale = (Math.floor(yMax / 25) + 1) * 25;
    } else if (yMax < 500) {
        yScale = (Math.floor(yMax / 50) + 1) * 50;
    } else if (yMax < 1000) {
        yScale = (Math.floor(yMax / 100) + 1) * 100;
    } else if (yMax < 5000) {
        yScale = (Math.floor(yMax / 500) + 1) * 500;
    } else {
        yScale = (Math.floor(yMax / 1000) + 1) * 1000;
    }

    // Caculating the 7, 30, and All Time averages
    /*
    const past7 = props.logs.filter(log => log.meterId === props.selectedMeter && log.dateValue >= dateValue - (1440 * 6));
    const sevenDayAvg = (past7.reduce((prevVal, currentVal) => prevVal + currentVal.hoursRecorded + (currentVal.minutesRecorded / 60), 0) / 7).toFixed(2);
    const thirtyDayAvg = (past30.reduce((prevVal, currentVal) => prevVal + currentVal.hoursRecorded + (currentVal.minutesRecorded / 60), 0) / 30).toFixed(2);
    const pastEver = props.logs.filter(log => log.meterId === props.selectedMeter);
    // This way the divisor will always be at least one
    let oldestDateValue = dateValue - 1440;
    for (let i = 0; i < pastEver.length; i++) {
        if (oldestDateValue > pastEver[i].dateValue) {
            oldestDateValue = pastEver[i].dateValue;
        }
    }
    const divisor = (dateValue - oldestDateValue) / 1440;
    const allTimeAvg = (pastEver.reduce((prevVal, currentVal) => prevVal + currentVal.hoursRecorded + (currentVal.minutesRecorded / 60), 0) / divisor).toFixed(2);
<View style={styles.averagesView}>
                <View>
                    <Text style={styles.avgText}>{allTimeAvg}</Text>
                    <Text>All Time Avg</Text>
                </View>
                <View>
                    <Text style={styles.avgText}>{thirtyDayAvg}</Text>
                    <Text>30 Day Avg</Text>
                </View>
                <View>
                    <Text style={styles.avgText}>{sevenDayAvg}</Text>
                    <Text>7 Time Avg</Text>
                </View>
            </View>
    */

    // Finding the date from a month ago
    let lastMonth = month - 1;
    if (lastMonth === 0) { lastMonth = 12 };
    let lastDay = day - 29;
    const findLastDay = lastDay => {
        switch (lastMonth) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (lastDay !== 0) {
                    return 31 + lastDay;
                } else {
                    return 31;
                }
                break;
            case 2:
                if (year % 4 === 0) {
                    if (lastDay !== 0) {
                        return 29 + lastDay;
                    } else {
                        return 29;
                    }
                } else {
                    if (lastDay !== 0) {
                        return 28 + lastDay;
                    } else {
                        return 28;
                    }
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (lastDay !== 0) {
                    return 30 + lastDay;
                } else {
                    return 30;
                }
                break;
        }
    }
    if (lastDay <= 0) {
        lastDay = findLastDay(lastDay);
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            selectPoint(0);
            setLogs(allLogs);
        }}>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.header}>Past 30 Days</Text>
                </View>
                <View style={{ width: '85%', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20.0 }}>{yScale}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ transform: [{ rotate: '270deg' }], fontSize: 18.0 }}>Hours</Text>
                    </View>
                    <View style={styles.graph}>
                        <LineGraph past30={past30} dateValue={dateValue} yMax={yMax} />
                        <PlotPoints past30={past30} dateValue={dateValue} yMax={yMax} setYMax={setYMax} logs={props.logs.filter(log => log.meterId === props.selectedMeter)} setLogs={setLogs} selectPoint={selectPoint} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 18.0, marginBottom: 20.0 }}>{lastMonth}/{lastDay} - {month}/{day}</Text>
                </View>
                {point > 0 && <SelectedPointInfo point={point + 1440} logs={props.logs.filter(log => log.meterId === props.selectedMeter)}/>}
                <ScrollView style={styles.logs}>
                    {logs}
                </ScrollView>
                <Button
                    title="Delete"
                    onPress={() => {
                        props.deleteProgressMeter(props.selectedMeter);
                        navigation.navigate('Home');
                    }}
                />
                <Button
                    title="Back"
                    onPress={() => navigation.navigate('Home')}
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 100.0,
    },
    header: {
        fontSize: 24.0,
    },
    graph: {
        marginTop: 15.0,
        marginBottom: 10.0,
        width: (width * .85),
        height: (height * .25),
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderLeftWidth: 2,
        borderBottomWidth: 2,
    },
    averagesView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: (width * .85),
    },
    logs: {
        width: (width * .8),
        borderWidth: 1
    },
    avgText: {
        fontSize: 20.0,
        textAlign: 'center'
    }
});

export default ProgressReportScreen;