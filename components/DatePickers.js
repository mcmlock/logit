import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 1, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(1);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 1, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(1);
                            }
                        }
                    }} />
                <Button
                    title='02'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 2, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(2);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 2, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(2);
                            }
                        }
                    }} />
                <Button
                    title='03'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 3, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(3);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 3, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(3);
                            }
                        }
                    }} />
                <Button
                    title='04'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 4, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(4);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 4, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(4);
                            }
                        }
                    }} />
                <Button
                    title='05'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 5, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(5);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 5, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(5);
                            }
                        }
                    }} />
                <Button
                    title='06'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 6, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(6);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 6, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(6);
                            }
                        }
                    }} />
                <Button
                    title='07'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 7, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(7);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 7, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(7);
                            }
                        }
                    }} />
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='08'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 8, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(8);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 8, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(8);
                            }
                        }
                    }} />
                <Button
                    title='09'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 9, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(9);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 9, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(9);
                            }
                        }
                    }} />
                <Button
                    title='10'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 10, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(10);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 10, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(10);
                            }
                        }
                    }} />
                <Button
                    title='11'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 11, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(11);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 11, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(11);
                            }
                        }
                    }} />
                <Button
                    title='12'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 12, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(12);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 12, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(12);
                            }
                        }
                    }} />
                <Button
                    title='13'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 13, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(13);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 13, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(13);
                            }
                        }
                    }} />
                <Button
                    title='14'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 14, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(14);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 14, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(14);
                            }
                        }
                    }} />
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='15'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 15, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(15);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 15, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(15);
                            }
                        }
                    }} />
                <Button
                    title='16'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 16, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(16);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 16, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(16);
                            }
                        }
                    }} />
                <Button
                    title='17'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 17, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(17);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 17, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(17);
                            }
                        }
                    }} />
                <Button
                    title='18'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 18, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(18);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 18, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(18);
                            }
                        }
                    }} />
                <Button
                    title='19'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 19, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(19);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 19, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(19);
                            }
                        }
                    }} />
                <Button
                    title='20'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 20, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(20);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 20, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(20);
                            }
                        }
                    }} />
                <Button
                    title='21'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 21, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(21);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 21, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(21);
                            }
                        }
                    }} />
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='22'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 22, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(22);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 22, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(22);
                            }
                        }
                    }} />
                <Button
                    title='23'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 23, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(23);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 23, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(23);
                            }
                        }
                    }} />
                <Button
                    title='24'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 24, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(24);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 24, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(24);
                            }
                        }
                    }} />
                <Button
                    title='25'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 25, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(25);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 25, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(25);
                            }
                        }
                    }} />
                <Button
                    title='26'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 26, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(26);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 26, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(26);
                            }
                        }
                    }} />
                <Button
                    title='27'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 27, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(27);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 27, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(27);
                            }
                        }
                    }} />
                <Button
                    title='28'
                    onPress={() => {
                        if (props.setsEndDate) {
                            if (props.calcDateValue(props.month, 28, props.year) > props.startDateValue) {
                                props.setYMax(1);
                                props.setDay(28);
                            }
                        } else {
                            if (props.calcDateValue(props.month, 2, props.year) < props.endDateValue) {
                                props.setYMax(1);
                                props.setMonth(28);
                            }
                        }
                    }} />
            </View>
            {showRow &&
                <View style={styles.dayRow}>
                    <Button
                        title='29'
                        onPress={() => {
                            if (props.setsEndDate) {
                                if (props.calcDateValue(props.month, 29, props.year) > props.startDateValue) {
                                    props.setYMax(1);
                                    props.setDay(29);
                                }
                            } else {
                                if (props.calcDateValue(props.month, 29, props.year) < props.endDateValue) {
                                    props.setYMax(1);
                                    props.setMonth(29);
                                }
                            }
                        }} />
                    {show30 && <Button
                        title='30'
                        onPress={() => {
                            if (props.setsEndDate) {
                                if (props.calcDateValue(props.month, 30, props.year) > props.startDateValue) {
                                    props.setYMax(1);
                                    props.setDay(30);
                                }
                            } else {
                                if (props.calcDateValue(props.month, 30, props.year) < props.endDateValue) {
                                    props.setYMax(1);
                                    props.setMonth(30);
                                }
                            }
                        }} />}
                    {show31 && <Button
                        title='31'
                        onPress={() => {
                            if (props.setsEndDate) {
                                if (props.calcDateValue(props.month, 31, props.year) > props.startDateValue) {
                                    props.setYMax(1);
                                    props.setDay(31);
                                }
                            } else {
                                if (props.calcDateValue(props.month, 31, props.year) < props.endDateValue) {
                                    props.setYMax(1);
                                    props.setMonth(31);
                                }
                            }
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
                            if (props.calcDateValue(1, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(2, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(3, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(4, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(5, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(6, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(7, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(8, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(9, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(10, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(11, props.day, props.year) > props.startDateValue) {
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
                            if (props.calcDateValue(12, props.day, props.year) > props.startDateValue) {
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
    return (
        <TextInput
            style={styles.textInput}
            placeholder='YY'
            value={props.year}
            onChangeText={(value) => {
                props.setYMax(1);
                props.setYear(parseInt(value, 10));
            }}
        />
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
        borderColor: 'white',
        borderRightWidth: 2,
        marginTop: 5.0,
        marginBottom: 20.0,
        paddingHorizontal: 30.0
    },
    startDatePicker: {
        borderColor: 'white',
        borderLeftWidth: 2,
        marginTop: 5.0,
        marginBottom: 20.0,
        paddingHorizontal: 30.0
    }
})