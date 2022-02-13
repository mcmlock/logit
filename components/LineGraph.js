import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const Point = props => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: props.value / props.yScale * height * .25
            }}
        >
            <View style={styles.point} />
        </View>
    )
}

export const PlotPoints = ({ past30, dateValue, yMax, setYMax }) => {

    const findDayLogs = daysFromToday => {
        return past30.filter(log => log.dateValue === dateValue - (1440 * daysFromToday))
    }
    const calcDayTotal = day => {
        let value = 0;
        for (i = 0; i < day.length; i++) {
            value += day[i].hoursRecorded + (day[i].minutesRecorded / 60);
            if (value > yMax) { setYMax(value) };
        }
        return value;
    }

    const day30 = findDayLogs(0);
    const value30 = calcDayTotal(day30);
    const day29 = findDayLogs(1);
    const value29 = calcDayTotal(day29);
    const day28 = findDayLogs(2);
    const value28 = calcDayTotal(day28);
    const day27 = findDayLogs(3);
    const value27 = calcDayTotal(day27);
    const day26 = findDayLogs(4);
    const value26 = calcDayTotal(day26);
    const day25 = findDayLogs(5);
    const value25 = calcDayTotal(day25);
    const day24 = findDayLogs(6);
    const value24 = calcDayTotal(day24);
    const day23 = findDayLogs(7);
    const value23 = calcDayTotal(day23);
    const day22 = findDayLogs(8);
    const value22 = calcDayTotal(day22);
    const day21 = findDayLogs(9);
    const value21 = calcDayTotal(day21);
    const day20 = findDayLogs(10);
    const value20 = calcDayTotal(day20);
    const day19 = findDayLogs(11);
    const value19 = calcDayTotal(day19);
    const day18 = findDayLogs(12);
    const value18 = calcDayTotal(day18);
    const day17 = findDayLogs(13);
    const value17 = calcDayTotal(day17);
    const day16 = findDayLogs(14);
    const value16 = calcDayTotal(day16);
    const day15 = findDayLogs(15);
    const value15 = calcDayTotal(day15);
    const day14 = findDayLogs(16);
    const value14 = calcDayTotal(day14);
    const day13 = findDayLogs(17);
    const value13 = calcDayTotal(day13);
    const day12 = findDayLogs(18);
    const value12 = calcDayTotal(day12);
    const day11 = findDayLogs(19);
    const value11 = calcDayTotal(day11);
    const day10 = findDayLogs(20);
    const value10 = calcDayTotal(day10);
    const day9 = findDayLogs(21);
    const value9 = calcDayTotal(day9);
    const day8 = findDayLogs(22);
    const value8 = calcDayTotal(day8);
    const day7 = findDayLogs(23);
    const value7 = calcDayTotal(day7);
    const day6 = findDayLogs(24);
    const value6 = calcDayTotal(day6);
    const day5 = findDayLogs(25);
    const value5 = calcDayTotal(day5);
    const day4 = findDayLogs(26);
    const value4 = calcDayTotal(day4);
    const day3 = findDayLogs(27);
    const value3 = calcDayTotal(day3);
    const day2 = findDayLogs(28);
    const value2 = calcDayTotal(day2);
    const day1 = findDayLogs(29);
    const value1 = calcDayTotal(day1);

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
            <Point value={value1} yScale={yScale} />
            <Point value={value2} yScale={yScale} />
            <Point value={value3} yScale={yScale} />
            <Point value={value4} yScale={yScale} />
            <Point value={value5} yScale={yScale} />
            <Point value={value6} yScale={yScale} />
            <Point value={value7} yScale={yScale} />
            <Point value={value8} yScale={yScale} />
            <Point value={value9} yScale={yScale} />
            <Point value={value10} yScale={yScale} />
            <Point value={value11} yScale={yScale} />
            <Point value={value12} yScale={yScale} />
            <Point value={value13} yScale={yScale} />
            <Point value={value14} yScale={yScale} />
            <Point value={value15} yScale={yScale} />
            <Point value={value16} yScale={yScale} />
            <Point value={value17} yScale={yScale} />
            <Point value={value18} yScale={yScale} />
            <Point value={value19} yScale={yScale} />
            <Point value={value20} yScale={yScale} />
            <Point value={value21} yScale={yScale} />
            <Point value={value22} yScale={yScale} />
            <Point value={value23} yScale={yScale} />
            <Point value={value24} yScale={yScale} />
            <Point value={value25} yScale={yScale} />
            <Point value={value26} yScale={yScale} />
            <Point value={value27} yScale={yScale} />
            <Point value={value28} yScale={yScale} />
            <Point value={value29} yScale={yScale} />
            <Point value={value30} yScale={yScale} />
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
    const GraphLine = props => {
        return (
            <Svg
                height={determineHeight(props.value1, props.value2)}
                width={1 / 31 * width * .85}
                style={{
                    position: 'absolute',
                    left: (props.position / 31 * width * .85),
                    bottom: determineBottomOffset(props.value1, props.value2),
                }}
            >
                {drawLine(props.value1, props.value2)}
            </Svg>
        );
    }

    const findDayLogs = daysFromToday => {
        return past30.filter(log => log.dateValue === dateValue - (1440 * daysFromToday))
    }
    const calcDayTotal = day => {
        let value = 0;
        for (i = 0; i < day.length; i++) {
            value += day[i].hoursRecorded + (day[i].minutesRecorded / 60);
        }
        return value;
    }

    const day30 = findDayLogs(0);
    const value30 = calcDayTotal(day30);
    const day29 = findDayLogs(1);
    const value29 = calcDayTotal(day29);
    const day28 = findDayLogs(2);
    const value28 = calcDayTotal(day28);
    const day27 = findDayLogs(3);
    const value27 = calcDayTotal(day27);
    const day26 = findDayLogs(4);
    const value26 = calcDayTotal(day26);
    const day25 = findDayLogs(5);
    const value25 = calcDayTotal(day25);
    const day24 = findDayLogs(6);
    const value24 = calcDayTotal(day24);
    const day23 = findDayLogs(7);
    const value23 = calcDayTotal(day23);
    const day22 = findDayLogs(8);
    const value22 = calcDayTotal(day22);
    const day21 = findDayLogs(9);
    const value21 = calcDayTotal(day21);
    const day20 = findDayLogs(10);
    const value20 = calcDayTotal(day20);
    const day19 = findDayLogs(11);
    const value19 = calcDayTotal(day19);
    const day18 = findDayLogs(12);
    const value18 = calcDayTotal(day18);
    const day17 = findDayLogs(13);
    const value17 = calcDayTotal(day17);
    const day16 = findDayLogs(14);
    const value16 = calcDayTotal(day16);
    const day15 = findDayLogs(15);
    const value15 = calcDayTotal(day15);
    const day14 = findDayLogs(16);
    const value14 = calcDayTotal(day14);
    const day13 = findDayLogs(17);
    const value13 = calcDayTotal(day13);
    const day12 = findDayLogs(18);
    const value12 = calcDayTotal(day12);
    const day11 = findDayLogs(19);
    const value11 = calcDayTotal(day11);
    const day10 = findDayLogs(20);
    const value10 = calcDayTotal(day10);
    const day9 = findDayLogs(21);
    const value9 = calcDayTotal(day9);
    const day8 = findDayLogs(22);
    const value8 = calcDayTotal(day8);
    const day7 = findDayLogs(23);
    const value7 = calcDayTotal(day7);
    const day6 = findDayLogs(24);
    const value6 = calcDayTotal(day6);
    const day5 = findDayLogs(25);
    const value5 = calcDayTotal(day5);
    const day4 = findDayLogs(26);
    const value4 = calcDayTotal(day4);
    const day3 = findDayLogs(27);
    const value3 = calcDayTotal(day3);
    const day2 = findDayLogs(28);
    const value2 = calcDayTotal(day2);
    const day1 = findDayLogs(29);
    const value1 = calcDayTotal(day1);

    return (
        <View style={styles.container}>
            <GraphLine value1={value1} value2={value2} position={1} />
            <GraphLine value1={value2} value2={value3} position={2} />
            <GraphLine value1={value3} value2={value4} position={3} />
            <GraphLine value1={value4} value2={value5} position={4} />
            <GraphLine value1={value5} value2={value6} position={5} />
            <GraphLine value1={value6} value2={value7} position={6} />
            <GraphLine value1={value7} value2={value8} position={7} />
            <GraphLine value1={value8} value2={value9} position={8} />
            <GraphLine value1={value9} value2={value10} position={9} />
            <GraphLine value1={value10} value2={value11} position={10} />
            <GraphLine value1={value11} value2={value12} position={11} />
            <GraphLine value1={value12} value2={value13} position={12} />
            <GraphLine value1={value13} value2={value14} position={13} />
            <GraphLine value1={value14} value2={value15} position={14} />
            <GraphLine value1={value15} value2={value16} position={15} />
            <GraphLine value1={value16} value2={value17} position={16} />
            <GraphLine value1={value17} value2={value18} position={17} />
            <GraphLine value1={value18} value2={value19} position={18} />
            <GraphLine value1={value19} value2={value20} position={19} />
            <GraphLine value1={value20} value2={value21} position={20} />
            <GraphLine value1={value21} value2={value22} position={21} />
            <GraphLine value1={value22} value2={value23} position={22} />
            <GraphLine value1={value23} value2={value24} position={23} />
            <GraphLine value1={value24} value2={value25} position={24} />
            <GraphLine value1={value25} value2={value26} position={25} />
            <GraphLine value1={value26} value2={value27} position={26} />
            <GraphLine value1={value27} value2={value28} position={27} />
            <GraphLine value1={value28} value2={value29} position={28} />
            <GraphLine value1={value29} value2={value30} position={29} />
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