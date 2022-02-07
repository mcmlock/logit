import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export const PlotPoints = ({ past30, dateValue, yMax, setYMax }) => {

    const day30 = past30.filter(log => log.dateValue === dateValue);
    let value30 = 0;
    for (i = 0; i < day30.length; i++) {
        value30 += day30[i].hoursRecorded + (day30[i].minutesRecorded / 60);
        if (value30 > yMax) { setYMax(value30) };
    }
    const day29 = past30.filter(log => log.dateValue === dateValue - 1440);
    let value29 = 0;
    for (i = 0; i < day29.length; i++) {
        value29 += day29[i].hoursRecorded + (day29[i].minutesRecorded / 60);
        if (value29 > yMax) { setYMax(value29) };
    }
    const day28 = past30.filter(log => log.dateValue === dateValue - (1440 * 2));
    let value28 = 0;
    for (i = 0; i < day28.length; i++) {
        value28 += day28[i].hoursRecorded + (day28[i].minutesRecorded / 60);
        if (value28 > yMax) { setYMax(value28) };
    }
    const day27 = past30.filter(log => log.dateValue === dateValue - (1440 * 3));
    let value27 = 0;
    for (i = 0; i < day27.length; i++) {
        value27 += day27[i].hoursRecorded + (day27[i].minutesRecorded / 60);
        if (value27 > yMax) { setYMax(value27) };
    }
    const day26 = past30.filter(log => log.dateValue === dateValue - (1440 * 4));
    let value26 = 0;
    for (i = 0; i < day26.length; i++) {
        value26 += day26[i].hoursRecorded + (day26[i].minutesRecorded / 60);
        if (value26 > yMax) { setYMax(value26) };
    }
    const day25 = past30.filter(log => log.dateValue === dateValue - (1440 * 5));
    let value25 = 0;
    for (i = 0; i < day25.length; i++) {
        value25 += day25[i].hoursRecorded + (day25[i].minutesRecorded / 60);
        if (value25 > yMax) { setYMax(value25) };
    }
    const day24 = past30.filter(log => log.dateValue === dateValue - (1440 * 6));
    let value24 = 0;
    for (i = 0; i < day24.length; i++) {
        value24 += day24[i].hoursRecorded + (day24[i].minutesRecorded / 60);
        if (value24 > yMax) { setYMax(value24) };
    }
    const day23 = past30.filter(log => log.dateValue === dateValue - (1440 * 7));
    let value23 = 0;
    for (i = 0; i < day23.length; i++) {
        value23 += day23[i].hoursRecorded + (day23[i].minutesRecorded / 60);
        if (value23 > yMax) { setYMax(value23) };
    }
    const day22 = past30.filter(log => log.dateValue === dateValue - (1440 * 8));
    let value22 = 0;
    for (i = 0; i < day22.length; i++) {
        value22 += day22[i].hoursRecorded + (day22[i].minutesRecorded / 60);
        if (value22 > yMax) { setYMax(value22) };
    }
    const day21 = past30.filter(log => log.dateValue === dateValue - (1440 * 9));
    let value21 = 0;
    for (i = 0; i < day21.length; i++) {
        value21 += day21[i].hoursRecorded + (day21[i].minutesRecorded / 60);
        if (value21 > yMax) { setYMax(value21) };
    }
    const day20 = past30.filter(log => log.dateValue === dateValue - (1440 * 10));
    let value20 = 0;
    for (i = 0; i < day20.length; i++) {
        value20 += day20[i].hoursRecorded + (day20[i].minutesRecorded / 60);
        if (value20 > yMax) { setYMax(value20) };
    }
    const day19 = past30.filter(log => log.dateValue === dateValue - (1440 * 11));
    let value19 = 0;
    for (i = 0; i < day19.length; i++) {
        value19 += day19[i].hoursRecorded + (day19[i].minutesRecorded / 60);
        if (value19 > yMax) { setYMax(value19) };
    }
    const day18 = past30.filter(log => log.dateValue === dateValue - (1440 * 12));
    let value18 = 0;
    for (i = 0; i < day18.length; i++) {
        value18 += day18[i].hoursRecorded + (day18[i].minutesRecorded / 60);
        if (value18 > yMax) { setYMax(value18) };
    }
    const day17 = past30.filter(log => log.dateValue === dateValue - (1440 * 13));
    let value17 = 0;
    for (i = 0; i < day17.length; i++) {
        value17 += day17[i].hoursRecorded + (day17[i].minutesRecorded / 60);
        if (value17 > yMax) { setYMax(value17) };
    }
    const day16 = past30.filter(log => log.dateValue === dateValue - (1440 * 14));
    let value16 = 0;
    for (i = 0; i < day16.length; i++) {
        value16 += day16[i].hoursRecorded + (day16[i].minutesRecorded / 60);
        if (value16 > yMax) { setYMax(value16) };
    }
    const day15 = past30.filter(log => log.dateValue === dateValue - (1440 * 15));
    let value15 = 0;
    for (i = 0; i < day15.length; i++) {
        value15 += day15[i].hoursRecorded + (day15[i].minutesRecorded / 60);
        if (value15 > yMax) { setYMax(value15) };
    }
    const day14 = past30.filter(log => log.dateValue === dateValue - (1440 * 16));
    let value14 = 0;
    for (i = 0; i < day14.length; i++) {
        value14 += day14[i].hoursRecorded + (day14[i].minutesRecorded / 60);
        if (value14 > yMax) { setYMax(value14) };
    }
    const day13 = past30.filter(log => log.dateValue === dateValue - (1440 * 17));
    let value13 = 0;
    for (i = 0; i < day13.length; i++) {
        value13 += day13[i].hoursRecorded + (day13[i].minutesRecorded / 60);
        if (value13 > yMax) { setYMax(value13) };
    }
    const day12 = past30.filter(log => log.dateValue === dateValue - (1440 * 18));
    let value12 = 0;
    for (i = 0; i < day12.length; i++) {
        value12 += day12[i].hoursRecorded + (day12[i].minutesRecorded / 60);
        if (value12 > yMax) { setYMax(value12) };
    }
    const day11 = past30.filter(log => log.dateValue === dateValue - (1440 * 19));
    let value11 = 0;
    for (i = 0; i < day11.length; i++) {
        value11 += day11[i].hoursRecorded + (day11[i].minutesRecorded / 60);
        if (value11 > yMax) { setYMax(value11) };
    }
    const day10 = past30.filter(log => log.dateValue === dateValue - (1440 * 20));
    let value10 = 0;
    for (i = 0; i < day10.length; i++) {
        value10 += day10[i].hoursRecorded + (day10[i].minutesRecorded / 60);
        if (value10 > yMax) { setYMax(value10) };
    }
    const day9 = past30.filter(log => log.dateValue === dateValue - (1440 * 21));
    let value9 = 0;
    for (i = 0; i < day9.length; i++) {
        value9 += day9[i].hoursRecorded + (day9[i].minutesRecorded / 60);
        if (value9 > yMax) { setYMax(value9) };
    }
    const day8 = past30.filter(log => log.dateValue === dateValue - (1440 * 22));
    let value8 = 0;
    for (i = 0; i < day8.length; i++) {
        value8 += day8[i].hoursRecorded + (day8[i].minutesRecorded / 60);
        if (value8 > yMax) { setYMax(value8) };
    }
    const day7 = past30.filter(log => log.dateValue === dateValue - (1440 * 23));
    let value7 = 0;
    for (i = 0; i < day7.length; i++) {
        value7 += day7[i].hoursRecorded + (day7[i].minutesRecorded / 60);
        if (value7 > yMax) { setYMax(value7) };
    }
    const day6 = past30.filter(log => log.dateValue === dateValue - (1440 * 24));
    let value6 = 0;
    for (i = 0; i < day6.length; i++) {
        value6 += day6[i].hoursRecorded + (day6[i].minutesRecorded / 60);
        if (value6 > yMax) { setYMax(value6) };
    }
    const day5 = past30.filter(log => log.dateValue === dateValue - (1440 * 25));
    let value5 = 0;
    for (i = 0; i < day5.length; i++) {
        value5 += day5[i].hoursRecorded + (day5[i].minutesRecorded / 60);
        if (value5 > yMax) { setYMax(value5) };
    }
    const day4 = past30.filter(log => log.dateValue === dateValue - (1440 * 26));
    let value4 = 0;
    for (i = 0; i < day4.length; i++) {
        value4 += day4[i].hoursRecorded + (day4[i].minutesRecorded / 60);
        if (value4 > yMax) { setYMax(value4) };
    }
    const day3 = past30.filter(log => log.dateValue === dateValue - (1440 * 27));
    let value3 = 0;
    for (i = 0; i < day3.length; i++) {
        value3 += day3[i].hoursRecorded + (day3[i].minutesRecorded / 60);
        if (value3 > yMax) { setYMax(value3) };
    }
    const day2 = past30.filter(log => log.dateValue === dateValue - (1440 * 28));
    let value2 = 0;
    for (i = 0; i < day2.length; i++) {
        value2 += day2[i].hoursRecorded + (day2[i].minutesRecorded / 60);
        if (value2 > yMax) { setYMax(value2) };
    }
    const day1 = past30.filter(log => log.dateValue === dateValue - (1440 * 29));
    let value1 = 0;
    for (i = 0; i < day1.length; i++) {
        value1 += day1[i].hoursRecorded + (day1[i].minutesRecorded / 60);
        if (value1 > yMax) { setYMax(value1) };
    }

    let yScale;
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
    } else {
        yScale = (Math.floor(yMax / 1000) + 1) * 1000;
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value1 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value2 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value3 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value4 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value5 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value6 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value7 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value8 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value9 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value10 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value11 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value12 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value13 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value14 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value15 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value16 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value17 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value18 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value19 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value20 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value21 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value22 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value23 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value24 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value25 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value26 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value27 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: value28 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: value29 / yScale * height * .25
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: value30 / yScale * height * .25,
                }}
            >
                <View style={styles.point} />
            </View>
            <View style={{ flex: 1 }} />
        </View>
    );
}

export const LineGraph = ({ past30, dateValue, yMax }) => {
    // Caculating the scale of the graph
    let yScale;
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
    } else {
        yScale = (Math.floor(yMax / 1000) + 1) * 1000;
    }

    const determineHeight = (leftVal, rightVal) => {
        if (rightVal > leftVal) {
            return (rightVal / yScale * height * .25) - (leftVal / yScale * height * .25);
        } else if (leftVal > rightVal) {
            return (leftVal / yScale * height * .25) - (rightVal / yScale * height * .25);
        } else {
            return 1.6; // Width of the stroke
        }
    };
    const determineBottomOffset = (leftVal, rightVal) => {
        if (rightVal >= leftVal) {
            return leftVal / yScale * (height * .25);
        } else {
            return rightVal / yScale * (height * .25);
        }
    }
    const drawLine = (leftVal, rightVal) => {
        if (rightVal >= leftVal) {
            return <Line x1={0} y1={determineHeight(leftVal, rightVal)} x2={1 / 31 * width * .85} y2={0} stroke="#666" strokeWidth="1.6" />
        } else if (leftVal >= rightVal) {
            return <Line x1={0} y1={0} x2={1 / 31 * width * .85} y2={determineHeight(leftVal, rightVal)} stroke="#666" strokeWidth="1.6" />
        } else {
            return <Line x1={0} y1={0} x2={1 / 31 * width * .85} y2={0} stroke="#666" strokeWidth="1.6" />
        }
    }

    const day30 = past30.filter(log => log.dateValue === dateValue);
    let value30 = 0;
    for (i = 0; i < day30.length; i++) {
        value30 += day30[i].hoursRecorded + (day30[i].minutesRecorded / 60);
    }
    const day29 = past30.filter(log => log.dateValue === dateValue - 1440);
    let value29 = 0;
    for (i = 0; i < day29.length; i++) {
        value29 += day29[i].hoursRecorded + (day29[i].minutesRecorded / 60);
    }
    const day28 = past30.filter(log => log.dateValue === dateValue - (1440 * 2));
    let value28 = 0;
    for (i = 0; i < day28.length; i++) {
        value28 += day28[i].hoursRecorded + (day28[i].minutesRecorded / 60);
    }
    const day27 = past30.filter(log => log.dateValue === dateValue - (1440 * 3));
    let value27 = 0;
    for (i = 0; i < day27.length; i++) {
        value27 += day27[i].hoursRecorded + (day27[i].minutesRecorded / 60);
    }
    const day26 = past30.filter(log => log.dateValue === dateValue - (1440 * 4));
    let value26 = 0;
    for (i = 0; i < day26.length; i++) {
        value26 += day26[i].hoursRecorded + (day26[i].minutesRecorded / 60);
    }
    const day25 = past30.filter(log => log.dateValue === dateValue - (1440 * 5));
    let value25 = 0;
    for (i = 0; i < day25.length; i++) {
        value25 += day25[i].hoursRecorded + (day25[i].minutesRecorded / 60);
    }
    const day24 = past30.filter(log => log.dateValue === dateValue - (1440 * 6));
    let value24 = 0;
    for (i = 0; i < day24.length; i++) {
        value24 += day24[i].hoursRecorded + (day24[i].minutesRecorded / 60);
    }
    const day23 = past30.filter(log => log.dateValue === dateValue - (1440 * 7));
    let value23 = 0;
    for (i = 0; i < day23.length; i++) {
        value23 += day23[i].hoursRecorded + (day23[i].minutesRecorded / 60);
    }
    const day22 = past30.filter(log => log.dateValue === dateValue - (1440 * 8));
    let value22 = 0;
    for (i = 0; i < day22.length; i++) {
        value22 += day22[i].hoursRecorded + (day22[i].minutesRecorded / 60);
    }
    const day21 = past30.filter(log => log.dateValue === dateValue - (1440 * 9));
    let value21 = 0;
    for (i = 0; i < day21.length; i++) {
        value21 += day21[i].hoursRecorded + (day21[i].minutesRecorded / 60);
    }
    const day20 = past30.filter(log => log.dateValue === dateValue - (1440 * 10));
    let value20 = 0;
    for (i = 0; i < day20.length; i++) {
        value20 += day20[i].hoursRecorded + (day20[i].minutesRecorded / 60);
    }
    const day19 = past30.filter(log => log.dateValue === dateValue - (1440 * 11));
    let value19 = 0;
    for (i = 0; i < day19.length; i++) {
        value19 += day19[i].hoursRecorded + (day19[i].minutesRecorded / 60);
    }
    const day18 = past30.filter(log => log.dateValue === dateValue - (1440 * 12));
    let value18 = 0;
    for (i = 0; i < day18.length; i++) {
        value18 += day18[i].hoursRecorded + (day18[i].minutesRecorded / 60);
    }
    const day17 = past30.filter(log => log.dateValue === dateValue - (1440 * 13));
    let value17 = 0;
    for (i = 0; i < day17.length; i++) {
        value17 += day17[i].hoursRecorded + (day17[i].minutesRecorded / 60);
    }
    const day16 = past30.filter(log => log.dateValue === dateValue - (1440 * 14));
    let value16 = 0;
    for (i = 0; i < day16.length; i++) {
        value16 += day16[i].hoursRecorded + (day16[i].minutesRecorded / 60);
    }
    const day15 = past30.filter(log => log.dateValue === dateValue - (1440 * 15));
    let value15 = 0;
    for (i = 0; i < day15.length; i++) {
        value15 += day15[i].hoursRecorded + (day15[i].minutesRecorded / 60);
    }
    const day14 = past30.filter(log => log.dateValue === dateValue - (1440 * 16));
    let value14 = 0;
    for (i = 0; i < day14.length; i++) {
        value14 += day14[i].hoursRecorded + (day14[i].minutesRecorded / 60);
    }
    const day13 = past30.filter(log => log.dateValue === dateValue - (1440 * 17));
    let value13 = 0;
    for (i = 0; i < day13.length; i++) {
        value13 += day13[i].hoursRecorded + (day13[i].minutesRecorded / 60);
    }
    const day12 = past30.filter(log => log.dateValue === dateValue - (1440 * 18));
    let value12 = 0;
    for (i = 0; i < day12.length; i++) {
        value12 += day12[i].hoursRecorded + (day12[i].minutesRecorded / 60);
    }
    const day11 = past30.filter(log => log.dateValue === dateValue - (1440 * 19));
    let value11 = 0;
    for (i = 0; i < day11.length; i++) {
        value11 += day11[i].hoursRecorded + (day11[i].minutesRecorded / 60);
    }
    const day10 = past30.filter(log => log.dateValue === dateValue - (1440 * 20));
    let value10 = 0;
    for (i = 0; i < day10.length; i++) {
        value10 += day10[i].hoursRecorded + (day10[i].minutesRecorded / 60);
    }
    const day9 = past30.filter(log => log.dateValue === dateValue - (1440 * 21));
    let value9 = 0;
    for (i = 0; i < day9.length; i++) {
        value9 += day9[i].hoursRecorded + (day9[i].minutesRecorded / 60);
    }
    const day8 = past30.filter(log => log.dateValue === dateValue - (1440 * 22));
    let value8 = 0;
    for (i = 0; i < day8.length; i++) {
        value8 += day8[i].hoursRecorded + (day8[i].minutesRecorded / 60);
    }
    const day7 = past30.filter(log => log.dateValue === dateValue - (1440 * 23));
    let value7 = 0;
    for (i = 0; i < day7.length; i++) {
        value7 += day7[i].hoursRecorded + (day7[i].minutesRecorded / 60);
    }
    const day6 = past30.filter(log => log.dateValue === dateValue - (1440 * 24));
    let value6 = 0;
    for (i = 0; i < day6.length; i++) {
        value6 += day6[i].hoursRecorded + (day6[i].minutesRecorded / 60);
    }
    const day5 = past30.filter(log => log.dateValue === dateValue - (1440 * 25));
    let value5 = 0;
    for (i = 0; i < day5.length; i++) {
        value5 += day5[i].hoursRecorded + (day5[i].minutesRecorded / 60);
    }
    const day4 = past30.filter(log => log.dateValue === dateValue - (1440 * 26));
    let value4 = 0;
    for (i = 0; i < day4.length; i++) {
        value4 += day4[i].hoursRecorded + (day4[i].minutesRecorded / 60);
    }
    const day3 = past30.filter(log => log.dateValue === dateValue - (1440 * 27));
    let value3 = 0;
    for (i = 0; i < day3.length; i++) {
        value3 += day3[i].hoursRecorded + (day3[i].minutesRecorded / 60);
    }
    const day2 = past30.filter(log => log.dateValue === dateValue - (1440 * 28));
    let value2 = 0;
    for (i = 0; i < day2.length; i++) {
        value2 += day2[i].hoursRecorded + (day2[i].minutesRecorded / 60);
    }
    const day1 = past30.filter(log => log.dateValue === dateValue - (1440 * 29));
    let value1 = 0;
    for (i = 0; i < day1.length; i++) {
        value1 += day1[i].hoursRecorded + (day1[i].minutesRecorded / 60);
    }

    return (
        <View style={styles.container}>
            <Svg
                height={determineHeight(value1, value2)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (1 / 31 * width * .85),
                    bottom: determineBottomOffset(value1, value2),
                }}
            >
                {drawLine(value1, value2)}
            </Svg>
            <Svg
                height={determineHeight(value2, value3)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (2 / 31 * width * .85),
                    bottom: determineBottomOffset(value2, value3),
                }}
            >
                {drawLine(value2, value3)}
            </Svg>
            <Svg
                height={determineHeight(value3, value4)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (3 / 31 * width * .85),
                    bottom: determineBottomOffset(value3, value4),
                }}
            >
                {drawLine(value3, value4)}
            </Svg>
            <Svg
                height={determineHeight(value4, value5)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (4 / 31 * width * .85),
                    bottom: determineBottomOffset(value4, value5),
                }}
            >
                {drawLine(value4, value5)}
            </Svg>
            <Svg
                height={determineHeight(value5, value6)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (5 / 31 * width * .85),
                    bottom: determineBottomOffset(value5, value6),
                }}
            >
                {drawLine(value5, value6)}
            </Svg>
            <Svg
                height={determineHeight(value6, value7)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (6 / 31 * width * .85),
                    bottom: determineBottomOffset(value6, value7),
                }}
            >
                {drawLine(value6, value7)}
            </Svg>
            <Svg
                height={determineHeight(value7, value8)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (7 / 31 * width * .85),
                    bottom: determineBottomOffset(value7, value8),
                }}
            >
                {drawLine(value7, value8)}
            </Svg>
            <Svg
                height={determineHeight(value8, value9)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (8 / 31 * width * .85),
                    bottom: determineBottomOffset(value8, value9),
                }}
            >
                {drawLine(value8, value9)}
            </Svg>
            <Svg
                height={determineHeight(value9, value10)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (9 / 31 * width * .85),
                    bottom: determineBottomOffset(value9, value10),
                }}
            >
                {drawLine(value9, value10)}
            </Svg>
            <Svg
                height={determineHeight(value10, value11)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (10 / 31 * width * .85),
                    bottom: determineBottomOffset(value10, value11),
                }}
            >
                {drawLine(value10, value11)}
            </Svg>
            <Svg
                height={determineHeight(value11, value12)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (11 / 31 * width * .85),
                    bottom: determineBottomOffset(value11, value12),
                }}
            >
                {drawLine(value11, value12)}
            </Svg>
            <Svg
                height={determineHeight(value12, value13)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (12 / 31 * width * .85),
                    bottom: determineBottomOffset(value12, value13),
                }}
            >
                {drawLine(value12, value13)}
            </Svg>
            <Svg
                height={determineHeight(value13, value14)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (13 / 31 * width * .85),
                    bottom: determineBottomOffset(value13, value14),
                }}
            >
                {drawLine(value13, value14)}
            </Svg>
            <Svg
                height={determineHeight(value14, value15)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (14 / 31 * width * .85),
                    bottom: determineBottomOffset(value14, value15),
                }}
            >
                {drawLine(value14, value15)}
            </Svg>
            <Svg
                height={determineHeight(value15, value16)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (15 / 31 * width * .85),
                    bottom: determineBottomOffset(value15, value16),
                }}
            >
                {drawLine(value15, value16)}
            </Svg>
            <Svg
                height={determineHeight(value16, value17)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (16 / 31 * width * .85),
                    bottom: determineBottomOffset(value16, value17),
                }}
            >
                {drawLine(value16, value17)}
            </Svg>
            <Svg
                height={determineHeight(value17, value18)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (17 / 31 * width * .85),
                    bottom: determineBottomOffset(value17, value18),
                }}
            >
                {drawLine(value17, value18)}
            </Svg>
            <Svg
                height={determineHeight(value18, value19)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (18 / 31 * width * .85),
                    bottom: determineBottomOffset(value18, value19),
                }}
            >
                {drawLine(value18, value19)}
            </Svg>
            <Svg
                height={determineHeight(value19, value20)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (19 / 31 * width * .85),
                    bottom: determineBottomOffset(value19, value20),
                }}
            >
                {drawLine(value19, value20)}
            </Svg>
            <Svg
                height={determineHeight(value20, value21)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (20 / 31 * width * .85),
                    bottom: determineBottomOffset(value20, value21),
                }}
            >
                {drawLine(value20, value21)}
            </Svg>
            <Svg
                height={determineHeight(value21, value22)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (21 / 31 * width * .85),
                    bottom: determineBottomOffset(value21, value22),
                }}
            >
                {drawLine(value21, value22)}
            </Svg>
            <Svg
                height={determineHeight(value22, value23)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (22 / 31 * width * .85),
                    bottom: determineBottomOffset(value22, value23),
                }}
            >
                {drawLine(value22, value23)}
            </Svg>
            <Svg
                height={determineHeight(value23, value24)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (23 / 31 * width * .85),
                    bottom: determineBottomOffset(value23, value24),
                }}
            >
                {drawLine(value23, value24)}
            </Svg>
            <Svg
                height={determineHeight(value24, value25)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (24 / 31 * width * .85),
                    bottom: determineBottomOffset(value24, value25),
                }}
            >
                {drawLine(value24, value25)}
            </Svg>
            <Svg
                height={determineHeight(value25, value26)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (25 / 31 * width * .85),
                    bottom: determineBottomOffset(value25, value26),
                }}
            >
                {drawLine(value25, value26)}
            </Svg>
            <Svg
                height={determineHeight(value26, value27)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (26 / 31 * width * .85),
                    bottom: determineBottomOffset(value26, value27),
                }}
            >
                {drawLine(value26, value27)}
            </Svg>
            <Svg
                height={determineHeight(value27, value28)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (27 / 31 * width * .85),
                    bottom: determineBottomOffset(value27, value28),
                }}
            >
                {drawLine(value27, value28)}
            </Svg>
            <Svg
                height={determineHeight(value28, value29)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (28 / 31 * width * .85),
                    bottom: determineBottomOffset(value28, value29),
                }}
            >
                {drawLine(value28, value29)}
            </Svg>
            <Svg
                height={determineHeight(value29, value30)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (29 / 31 * width * .85),
                    bottom: determineBottomOffset(value29, value30),
                }}
            >
                {drawLine(value29, value30)}
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: (height * .25),
        width: (width * .85),
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    point: {
        position: 'absolute',
        top: -1.5,
        right: -1.5,
        marginLeft: 'auto',
        backgroundColor: 'black',
        height: 3.0,
        width: 3.0,
        borderRadius: 5,
    }
})