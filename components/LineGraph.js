import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const Point = props => {
    if (props.value) {
        return (
            <View
                style={{
                    width: 0.85 * width / (props.length + 1),
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: props.value / props.yScale * height * .25
                }}
            >
                <TouchableOpacity style={{ padding: 10.0 }} onPress={() => {
                    const pointLogs = props.logs.filter(log => log.dateValue === props.dateValue).map(log => {
                        return (
                            <View>
                                <Text>{log.hoursRecorded} hours {log.minutesRecorded} minutes on {log.month}/{log.year}/{log.day}
                                    @ {log.hour}:{log.minutes}</Text>
                            </View>
                        );
                    });
                    props.setLogs(pointLogs);
                    props.selectPoint(props.dateValue)
                }}>
                    <View style={styles.point} />
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View
            style={{
                width: 0.85 * width / (props.length + 1),
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: props.value / props.yScale * height * .25
            }}
        />
    );
}

export const PlotPoints = ({ dateValue, yMax, setYMax, selectPoint, dateRange, logs, setLogs }) => {

    const findDayLogs = daysFromEnd => {
        return logs.filter(log => log.dateValue === dateValue - (1440 * daysFromEnd));
    }
    const calcDayTotal = day => {
        let value = 0;
        for (i = 0; i < day.length; i++) {
            value += day[i].hoursRecorded + (day[i].minutesRecorded / 60);
            if (value > yMax) { setYMax(value) };
        }
        return value;
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
    } else if (yMax < 5000) {
        yScale = (Math.floor(yMax / 500) + 1) * 500;
    } else {
        yScale = (Math.floor(yMax / 1000) + 1) * 1000;
    }

    const values = [];
    for (let i = 1; i <= dateRange; i++) {
        let day = findDayLogs(dateRange - i);
        values.unshift(calcDayTotal(day));
    }

    const pointsData = [];
    for (let i = 0; i < values.length; i++) {
        pointsData.unshift(
            {
                value: values[i],
                dateValue: dateValue - 1440 * i,
            }
        );
    }
    const points = pointsData.map(point => {
        return (
            <Point value={point.value} yScale={yScale} dateValue={point.dateValue} selectPoint={selectPoint} logs={logs} setLogs={setLogs} length={values.length} />
        );
    });

    return (
        <View style={styles.container}>
            {points}
            <View style={{ width: 0.85 * width / (values.length + 1) }} />
        </View>
    );
}

export const LineGraph = ({ logs, dateRange, dateValue, yMax }) => {
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
    } else if (yMax < 5000) {
        yScale = (Math.floor(yMax / 500) + 1) * 500;
    } else {
        yScale = (Math.floor(yMax / 1000) + 1) * 1000;
    }

    const determineHeight = (leftVal, rightVal) => {
        if (rightVal > leftVal) {
            return (rightVal / yScale * height * .25) - (leftVal / yScale * height * .25);
        } else if (leftVal > rightVal) {
            return (leftVal / yScale * height * .25) - (rightVal / yScale * height * .25);
        } else {
            return 1.8; // Width of the stroke
        }
    };
    const determineBottomOffset = (leftVal, rightVal) => {
        if (rightVal >= leftVal) {
            return leftVal / yScale * (height * .25);
        } else {
            return rightVal / yScale * (height * .25);
        }
    }
    const drawLine = (leftVal, rightVal, length) => {
        if (rightVal > leftVal) {
            return <Line x1={0} y1={determineHeight(leftVal, rightVal)} x2={1 / (length + 1) * width * .85} y2={0} stroke="#666" strokeWidth="2" />
        } else if (leftVal > rightVal) {
            return <Line x1={0} y1={0} x2={1 / (length + 1) * width * .85} y2={determineHeight(leftVal, rightVal)} stroke="#666" strokeWidth="2" />
        } else {
            if (leftVal !== 0 && rightVal !== 0) {
                return <Line x1={0} y1={0} x2={1 / (length + 1) * width * .85} y2={0} stroke="#666" strokeWidth="2" />
            }
        }
    }
    const GraphLine = props => {
        return (
            <Svg
                height={determineHeight(props.value1, props.value2)}
                width={width * .85 / (props.length + 1)}
                style={{
                    position: 'absolute',
                    left: (props.position / (props.length + 1) * width * .85),
                    bottom: determineBottomOffset(props.value1, props.value2),
                }}
            >
                {drawLine(props.value1, props.value2, props.length)}
            </Svg>
        );
    }

    const findDayLogs = daysFromEnd => {
        return logs.filter(log => log.dateValue === dateValue - (1440 * daysFromEnd));
    }
    const calcDayTotal = day => {
        let value = 0;
        for (i = 0; i < day.length; i++) {
            value += day[i].hoursRecorded + (day[i].minutesRecorded / 60);
        }
        return value;
    }

    const values = [];
    for (let i = 0; i < dateRange; i++) {
        let day = findDayLogs(i);
        values.unshift(calcDayTotal(day));
    }

    const linesData = [];
    for (let i = 0; i < values.length - 1; i++) {
        linesData.push(
            {
                startPoint: values[i],
                endPoint: values[i + 1],
                position: i + 1
            }
        );
    }

    const lines = linesData.map(line => {
        return (
            <GraphLine value1={line.startPoint} value2={line.endPoint} position={line.position} length={values.length} />
        );
    })

    return (
        <View style={styles.container}>
            {lines}
            <View style={{ width: 0.85 * width / (values.length + 1) }} />
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
        top: -4.0,
        right: -4.0,
        marginLeft: 'auto',
        backgroundColor: 'black',
        height: 8.0,
        width: 8.0,
        borderRadius: 5,
    }
});