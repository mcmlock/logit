import React from 'react';
import { View, Text } from 'react-native';
import { addDaySuffix } from '../resources/dateFunctions';

export const SelectedPointInfo = props => {
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
    selectedDay = addDaySuffix(selectedDay);

    const dayLogs = props.logs.filter(log => log.dateValue === props.point - 1440);
    const daysContribution = (dayLogs.reduce((prevVal, currentVal) => prevVal + currentVal.hoursRecorded + (currentVal.minutesRecorded / 60), 0)).toFixed(2);
    const hours = Math.floor(daysContribution);
    const minutesDec = daysContribution - hours;
    const minutes = Math.round(minutesDec * 60);


    return (
        <View style={{ alignSelf: 'center', marginBottom: 10.0 }}>
            <Text style={{ fontSize: 22.0, letterSpacing: 1.2, color: 'white' }}>{selectedMonth} {selectedDay}, 20{year}: {hours} H {minutes} M</Text>
        </View>
    );
}