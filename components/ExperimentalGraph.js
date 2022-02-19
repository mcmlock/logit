import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

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

const Experiment = props => {

    const [yMax, setYMax] = useState(1);
    const [startMonth, setStartMonth] = useState(sMonth);
    const [startDay, setStartDay] = useState(sDay);
    const [startYear, setStartYear] = useState(sYear);
    const [endMonth, setEndMonth] = useState(month);
    const [endDay, setEndDay] = useState(day);
    const [endYear, setEndYear] = useState(year);

    const findDayLogs = daysFromEnd => {
        return props.logs.filter(log => log.dateValue === dateValue - (1440 * daysFromEnd));
    }
    const calcDayTotal = day => {
        let value = 0;
        for (i = 0; i < day.length; i++) {
            value += day[i].hoursRecorded + (day[i].minutesRecorded / 60);
            if (value > yMax) { setYMax(value) };
        }
        return value;
    }

    // Calculating the time between the start and end dates for the graph header
    const startDateValue = calcDateValue(startMonth, startDay, startYear);
    const endDateValue = calcDateValue(endMonth, endDay, endYear);
    const dateRange = ((endDateValue - startDateValue) / 1440) + 1;

    // Gathering the data for the chart
    //  const logsInRange = props.logs.filter(log => log.meterId === props.selectedMeter && log.dateValue >= startDateValue && log.dateValue <= endDateValue);
    const values = [];
    for (let i = 1; i <= dateRange; i++) {
        let day = findDayLogs(dateRange - i);
        values.unshift(calcDayTotal(day));
    }
    const pointsToHide = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] === 0) {
            pointsToHide.push(i);
        }
    }
    console.log(pointsToHide);

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

    return (
        <SafeAreaView>
            <Text>Bezier Line Chart</Text>
            <ScrollView horizontal={true}>
                <LineChart
                    fromZero={true}
                    onDataPointClick={value => console.log(value.value)} // Jackpot BAE-BEE!!
                    segments={2}
                    withInnerLines={false}
                    withOuterLines={false}
                    withHorizontalLines={false}
                    withVerticalLines={false}
                    formatYLabel={() => ''}

                    data={{
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={1000} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}

                />
            </ScrollView>

            <View style={{ flexDirection: 'row', alignItems: 'center', height: (height * .25) }}>

                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <View style={{ flex: 1, marginTop: 20.0, marginRight: 10.0 }}>
                        <Text style={{ fontSize: 20.0 }}>{yScale}</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'flex-start' }}>
                        <Text style={{ transform: [{ rotate: '270deg' }], fontSize: 18.0, width: 50 }}>Hours</Text>
                    </View>

                </View>

                <View style={styles.graphContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={false} style={{ borderRadius: 8, backgroundColor: '#fb8c00'}} contentContainerStyle={styles.graph}>
                        <LineChart
                            fromZero={true}
                            onDataPointClick={value => console.log(value.value)} // Jackpot BAE-BEE!!
                            segments={2}
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
                            width={(values.length * 50)} // from react-native
                            height={height * .25}
                            chartConfig={{
                                backgroundGradientFrom: "#fb8c00",
                                backgroundGradientTo: "#fb8c00",
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
                                paddingTop: 15,
                            }}

                        />
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
})

export default Experiment;