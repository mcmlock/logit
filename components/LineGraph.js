import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

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
    const day27 = past30.filter(date => date === dateValue - (1440 * 3));
    let value27 = 0;
    for (i = 0; i < day27.length; i++) {
        value27 += day27[i].hoursRecorded + (day27[i].minutesRecorded / 60);
        if (value27 > yMax) { setYMax(value27) };
    }

    // Caculatindg the scale of the graph
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
                    height: value28 / yScale * 220
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: value29 / yScale * 220
                }}
            >
                <View style={styles.point} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: value29 / yScale * 220,
                    paddingTop: (value29 / yScale * 220) - (value30 / yScale * 220),
                }}
            >
                <View style={styles.point} />
            </View>
            <View style={{ flex: 1 }} />
        </View>
    );
}

export const LineGraph = ({ past30, dateValue, yMax }) => {
    // Caculatindg the scale of the graph
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
            return (rightVal / yScale * 220) - (leftVal / yScale * 220);
        } else if (leftVal > rightVal) {
            return (leftVal / yScale * 220) - (rightVal / yScale * 220);
        } else {
            return 1.6; // Width of the stroke
        }
    };
    const determineBottomOffset = (leftVal, rightVal) => {
        if (rightVal >= leftVal) {
            return leftVal / yScale * 220 - 2.5;
        } else {
            return rightVal / yScale * 220 - 2.5;
        }
    }
    const drawLine = (leftVal, rightVal) => {
        if (rightVal >= leftVal) {
            return <Line x1={0} y1={determineHeight(leftVal, rightVal)} x2={1 / 4 * 340} y2={0} stroke="#666" strokeWidth="1.6" />
        } else if (leftVal >= rightVal) {
            return <Line x1={0} y1={0} x2={1 / 4 * 340} y2={determineHeight(leftVal, rightVal)} stroke="#666" strokeWidth="1.6" />
        } else {
            return <Line x1={0} y1={0} x2={1 / 4 * 340} y2={0} stroke="#666" strokeWidth="1.6" />
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
    const day27 = past30.filter(date => date === dateValue - (1440 * 3));
    let value27 = 0;
    for (i = 0; i < day27.length; i++) {
        value27 += day27[i].hoursRecorded + (day27[i].minutesRecorded / 60);
    }

    return (
        <View style={styles.container}>
            <Svg
                height={determineHeight(value28, value29)}
                width={1 / 4 * 340}
                style={{
                    position: 'absolute',
                    left: (1 / 4 * 340 - 2.5),
                    bottom: determineBottomOffset(value28, value29),
                }}
            >
                {drawLine(value28, value29)}
            </Svg>
            <Svg
                height={determineHeight(value29, value30)}
                width={1 / 4 * 340}
                style={{
                    position: 'absolute',
                    left: (2 / 4 * 340 - 2.5),
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
        height: 220.0,
        width: 340.0,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    point: {
        borderWidth: 1,
        marginLeft: 'auto',
        backgroundColor: 'black',
        height: 5.0,
        width: 5.0,
        borderRadius: 5
    }
})