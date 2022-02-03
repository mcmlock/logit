import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native';

const ProgressReportScreen = props => {

    const navigation = useNavigation();

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
    console.log(dateValue);

    // Gathering the data for the chart
    const past30 = props.logs.filter(log => log.meterId === props.selectedMeter && log.dateValue >= dateValue - (1440 * 30));
    const day30 = past30.filter(log => log.dateValue === dateValue);
    console.log(past30);
    let value30 = 0;
    for (i = 0; i < day30.length; i++) {
        if (day30[i].positive) {
            value30 += day30[i].hoursRecorded + (day30[i].minutesRecorded / 60);
        } else {
            value30 -= (day30[i].hoursRecorded + (day30[i].minutesRecorded / 60));
            if (value30 < 0) {
                value30 = 0;
            }
        }
    }
    const day29 = past30.filter(log => log.dateValue === dateValue - 1440);
    let value29 = 0;
    for (i = 0; i < day29.length; i++) {
        if (day29[i].positive) {
            value29 += day29[i].hoursRecorded + (day29[i].minutesRecorded / 60);
        } else {
            value29 -= (day29[i].hoursRecorded + (day29[i].minutesRecorded / 60));
            if (value29 < 0) {
                value29 = 0;
            }
        }
    }
    const day28 = past30.filter(log => log.dateValue === dateValue - (1440 * 2));
    let value28 = 0;
    for (i = 0; i < day28.length; i++) {
        if (day28[i].positive) {
            value28 += day28[i].hoursRecorded + (day28[i].minutesRecorded / 60);
        } else {
            value28 -= (day28[i].hoursRecorded + (day28[i].minutesRecorded / 60));
            if (value28 < 0) {
                value28 = 0;
            }
        }
    }
    const day27 = past30.filter(date => date === dateValue - (1440 * 3));
    let value27 = 0;
    for (i = 0; i < day27.length; i++) {
        if (day27[i].positive) {
            value27 += day27[i].hoursRecorded + (day27[i].minutesRecorded / 60);
        } else {
            value27 -= (day27[i].hoursRecorded + (day27[i].minutesRecorded / 60));
            if (value27 < 0) {
                value27 = 0;
            }
        }
    }
    console.log(value30, value29, value28, value27);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.graph}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        borderWidth: 1,
                        height: value28 / 5 * 220
                    }}
                >

                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        borderWidth: 1,
                        height: value29 / 5 * 220
                    }}
                >

                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        borderWidth: 1,
                        height: value30 / 5 * 220
                    }}
                >

                </View>
            </View>
            <Button
                title="Back"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    graph: {
        height: 220.0,
        width: 340.0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderLeftWidth: 2,
        borderBottomWidth: 2,
    },
});

export default ProgressReportScreen;