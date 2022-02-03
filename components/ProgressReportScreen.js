import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native';
import { PlotPoints, LineGraph } from './LineGraph';

const ProgressReportScreen = props => {

    const navigation = useNavigation();
    const [yMax, setYMax] = useState(1);

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
    const past30 = props.logs.filter(log => log.meterId === props.selectedMeter && log.dateValue >= dateValue - (1440 * 30));
    let yMaxScale = 1;
    if (yMax === 1) {
        yMaxScale = 1;
    } else if (yMax < 50) {
        yMaxScale = (Math.floor(yMax / 5) + 1) * 5;
    } else if (yMax < 100) {
       yMaxScale = (Math.floor(yMax / 25) + 1) * 25;
    } else if (yMax < 500) {
        yMaxScale = (Math.floor(yMax / 50) + 1) * 50;
    } else if (yMax < 1000) {
        yMaxScale = (Math.floor(yMax / 100) + 1) * 100;
    } else {
        yMaxScale = (Math.floor(yMax / 1000) + 1) * 1000;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: 340.0, marginBottom: 12.0, alignItems: 'flex-start' }}>
                <Text style={{fontSize: 20.0}}>{yMaxScale}</Text>
            </View>
            <View style={styles.graph}>
                <PlotPoints past30={past30} dateValue={dateValue} yMax={yMax} setYMax={setYMax} />
                <LineGraph past30={past30} dateValue={dateValue} yMax={yMax} />
            </View>
            <Button
                title="Back"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 100.0
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