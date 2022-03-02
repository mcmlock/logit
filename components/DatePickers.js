import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { fonts } from 'react-native-elements/dist/config';
import { TextInput } from 'react-native-gesture-handler';
import { calcDateValue } from '../resources/dateFunctions';

const { width, height } = Dimensions.get('window');

const setDay = (day, setsEndDate, startDateValue, endDateValue, month, year, setYMax, setDay, isInsert) => {
    if (setsEndDate) {
        if (isInsert || calcDateValue(month, day, year) > startDateValue) {
            setYMax(1);
            setDay(day);
        }
    } else {
        if (calcDateValue(month, day, year) < endDateValue) {
            setYMax(1);
            setDay(day);
        }
    }
}

export const DayPicker = props => {

    let showRow = true;
    let show30 = true;
    let show31 = true;
    let lastDay = 31;
    switch (props.month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            showRow = true;
            show30 = true;
            show31 = true;
            lastDay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            showRow = true;
            show30 = true;
            show31 = false;
            lastDay = 30;
            break;
        case 2:
            if (props.year % 4 === 0) {
                showRow = true;
                show30 = false;
                show31 = false;
                lastDay = 29;
            } else {
                showRow = false;
                show30 = false;
                show31 = false;
                lastDay = 28;
            }
            break;
    }

    return (
        <View style={props.setsEndDate ? styles.endDatePicker : styles.startDatePicker}>
            <View style={styles.dayRow}>
                <Button
                    title='01'
                    onPress={() => {
                        setDay(1, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='02'
                    onPress={() => {
                        setDay(2, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='03'
                    onPress={() => {
                        setDay(3, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='04'
                    onPress={() => {
                        setDay(4, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='05'
                    onPress={() => {
                        setDay(5, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='06'
                    onPress={() => {
                        setDay(6, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='07'
                    onPress={() => {
                        setDay(7, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='08'
                    onPress={() => {
                        setDay(8, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='09'
                    onPress={() => {
                        setDay(9, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='10'
                    onPress={() => {
                        setDay(10, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='11'
                    onPress={() => {
                        setDay(11, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='12'
                    onPress={() => {
                        setDay(12, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='13'
                    onPress={() => {
                        setDay(13, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='14'
                    onPress={() => {
                        setDay(14, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='15'
                    onPress={() => {
                        setDay(15, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='16'
                    onPress={() => {
                        setDay(16, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='17'
                    onPress={() => {
                        setDay(17, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='18'
                    onPress={() => {
                        setDay(18, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='19'
                    onPress={() => {
                        setDay(19, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='20'
                    onPress={() => {
                        setDay(20, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='21'
                    onPress={() => {
                        setDay(21, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='22'
                    onPress={() => {
                        setDay(22, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='23'
                    onPress={() => {
                        setDay(23, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='24'
                    onPress={() => {
                        setDay(24, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='25'
                    onPress={() => {
                        setDay(25, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='26'
                    onPress={() => {
                        setDay(26, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='27'
                    onPress={() => {
                        setDay(27, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
                <Button
                    title='28'
                    onPress={() => {
                        setDay(28, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                    }} />
            </View>
            {showRow &&
                <View style={styles.dayRow}>
                    <Button
                        title='29'
                        onPress={() => {
                            setDay(29, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                        }} />
                    {show30 && <Button
                        title='30'
                        onPress={() => {
                            setDay(30, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                        }} />}
                    {show31 && <Button
                        title='31'
                        onPress={() => {
                            setDay(31, props.setsEndDate, props.startDateValue, props.endDateValue, props.month, props.year, props.setYMax, props.setDay, props.isInsert);
                        }} />}
                </View>}
        </View>
    );
};


export const MonthPicker = props => {
    let lastDay = 31;
    switch (props.month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            lastDay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            lastDay = 30;
            break;
        case 2:
            if (props.year % 4 === 0) {
                lastDay = 29;
            } else {
                lastDay = 28;
            }
            break;
    }

    const adjustLastDay = lastDay => {
        if (lastDay < props.day) {
            props.setDay(lastDay);
        };
    }

    return (
        <View style={props.setsEndDate ? styles.endDatePicker : styles.startDatePicker}>
            <View style={styles.monthRow}>
                <Button
                    title='1'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(1, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(1);
                                adjustLastDay(31);
                            }
                        } else {
                            if (props.calcDateValue(1, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(1);
                                adjustLastDay(31);
                            }
                        }
                    }} />
                <Button
                    title='2'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(2, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(2);
                                if (props.year % 4 === 0) {
                                    adjustLastDay(29);
                                } else {
                                    adjustLastDay(28);
                                }
                            }
                        } else {
                            if (props.calcDateValue(2, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(2);
                                if (props.year % 4 === 0) {
                                    adjustLastDay(29);
                                } else {
                                    adjustLastDay(28);
                                }
                            }
                        }
                    }} />
                <Button
                    title='3'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(3, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(3);
                                adjustLastDay(31);
                            }
                        } else {
                            if (props.calcDateValue(3, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(3);
                                adjustLastDay(31);
                            }
                        }
                    }} />
                <Button
                    title='4'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(4, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(4);
                                adjustLastDay(30);
                            }
                        } else {
                            if (props.calcDateValue(1, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(4);
                                adjustLastDay(30);
                            }
                        }
                    }} />
            </View>
            <View style={styles.monthRow}>
                <Button
                    title='5'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(5, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(5);
                                adjustLastDay(31);
                            }
                        } else {
                            if (props.calcDateValue(5, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(5);
                                adjustLastDay(31);
                            }
                        }
                    }}
                />
                <Button
                    title='6'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(6, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(6);
                                adjustLastDay(30);
                            }
                        } else {
                            if (props.calcDateValue(6, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(6);
                                adjustLastDay(30);
                            }
                        }
                    }}
                />
                <Button
                    title='7'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(7, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(7);
                                adjustLastDay(31);
                            }
                        } else {
                            if (props.calcDateValue(7, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(7);
                                adjustLastDay(31);
                            }
                        }
                    }}
                />
                <Button
                    title='8'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(8, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(8);
                                adjustLastDay(31);
                            }
                        } else {
                            if (props.calcDateValue(8, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(8);
                                adjustLastDay(31);
                            }
                        }
                    }}
                />
            </View>
            <View style={styles.monthRow}>
                <Button
                    title='9'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(9, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(9);
                                adjustLastDay(30);
                            }
                        } else {
                            if (props.calcDateValue(9, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(9);
                                adjustLastDay(30);
                            }
                        }
                    }}
                />
                <Button
                    title='10'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(10, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(10);
                                adjustLastDay(31);
                            }
                        } else {
                            if (props.calcDateValue(10, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(10);
                                adjustLastDay(31);
                            }
                        }
                    }}
                />
                <Button
                    title='11'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(11, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(11);
                                adjustLastDay(30);
                            }
                        } else {
                            if (props.calcDateValue(11, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(11);
                                adjustLastDay(30);
                            }
                        }
                    }}
                />
                <Button
                    title='12'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.isInsert || props.calcDateValue(12, props.day, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setMonth(12);
                                adjustLastDay(31);
                            }
                        } else {
                            if (props.calcDateValue(12, props.day, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(12);
                                adjustLastDay(31);
                            }
                        }
                    }}
                />
            </View>
        </View>
    );
};

export const YearInput = props => {

    const [year, setYear] = useState(new Date().getFullYear() - 2000);

    return (
        <View style={props.setsEndDate ? styles.endDatePicker : styles.startDatePicker}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 24, paddingVertical: 10}}>20</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='YY'
                    keyboardType='number-pad'
                    value={props.year}
                    onChangeText={(value) => {
                        props.setYMax(1);
                        setYear(parseInt(value, 10));
                    }}
                />
                <TouchableOpacity 
                style={{ alignSelf: 'center' }}
                onPress={() => {
                    if (props.setsEndDate) {
                        if (props.isInsert || props.calcDateValue(props.month, props.day, year) > props.startDateValue) {
                            props.setYMax(1);
                            props.setYear(year);
                            if (year % 4 === 0 && props.month === 2 && props.day > 28) {
                                adjustLastDay(28);
                            }
                        }
                    } else {
                        if (props.calcDateValue(props.month, props.day, year) < props.endDateValue) {
                            props.setYMax(1);
                            props.setYear(year);
                            if (year % 4 === 0 && props.month === 2 && props.day > 28) {
                                adjustLastDay(28);
                            }
                        }
                    }
                }}>
                    <Text style={{ fontSize: 24.0, color: 'white' }}>Set</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const DateButton = props => (
    <View style={{ borderWidth: 1, padding: 5.0, margin: 3.0, borderColor: 'white' }}>
        <Text style={{ fontSize: 18.0, color: 'white' }}>{props.dateValue}</Text>
    </View>
);

const styles = StyleSheet.create({
    monthSelectView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthRow: {
        flexDirection: 'row'
    },
    daySelectView: {
        alignItems: 'center',
    },
    dayRow: {
        flexDirection: 'row'
    },
    endDatePicker: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderRightWidth: 2,
        width: width * .70,
        height: 150.0,
        marginTop: 5.0,
        marginBottom: 20.0,
    },
    startDatePicker: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderLeftWidth: 2,
        width: width * .70,
        height: 150.0,
        marginTop: 5.0,
        marginBottom: 20.0
    },
    textInput: {
        paddingHorizontal: 3.0,
        marginLeft: 4.0,
        marginRight: 12.0,
        alignSelf: 'center',
        borderRadius: 4.0,
        fontSize: 24.0,
        height: 40.0,
        borderStyle: 'solid',
        borderColor: "white",
        borderWidth: 1,
        color: 'white'
    }
})