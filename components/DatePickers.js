import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
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
        <View>
            <View style={styles.dayRow}>
                <Button
                    title='01'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(1);
                    }}/>
                <Button
                    title='02'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(2);
                     }}/>
                <Button
                    title='03'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(3);
                     }}/>
                <Button
                    title='04'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(4);
                     }}/>
                <Button
                    title='05'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(5);
                     }}/>
                <Button
                    title='06'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(6)
                    }}/>
                <Button
                    title='07'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(7)
                    }}/>
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='08'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(8)
                    }}/>
                <Button
                    title='09'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(9)
                    }}/>
                <Button
                    title='10'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(10)
                    }}/>
                <Button
                    title='11'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(11)
                    }}/>
                <Button
                    title='12'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(12)
                    }}/>
                <Button
                    title='13'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(13)
                    }}/>
                <Button
                    title='14'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(14)
                    }}/>
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='15'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(15)
                    }}/>
                <Button
                    title='16'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(16)
                    }}/>
                <Button
                    title='17'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(17)
                    }}/>
                <Button
                    title='18'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(18)
                    }}/>
                <Button
                    title='19'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(19)
                    }}/>
                <Button
                    title='20'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(20)
                    }}/>
                <Button
                    title='21'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(21)
                    }}/>
            </View>
            <View style={styles.dayRow}>
                <Button
                    title='22'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(22)
                    }}/>
                <Button
                    title='23'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(23)
                    }}/>
                <Button
                    title='24'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(24)
                    }}/>
                <Button
                    title='25'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(25)
                    }}/>
                <Button
                    title='26'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(26)
                    }}/>
                <Button
                    title='27'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(27)
                    }}/>
                <Button
                    title='28'
                    onPress={() => {
                        props.setYMax(1);
                        props.setDay(28)
                    }}/>
            </View>
            {showRow &&
                <View style={styles.dayRow}>
                    <Button
                        title='29'
                        onPress={() => {
                            props.setYMax(1);
                            props.setDay(29)
                        }}/>
                    {show30 && <Button
                        title='30'
                        onPress={() => {
                            props.setYMax(1);
                            props.setDay(30)
                        }}/>}
                    {show31 && <Button
                        title='31'
                        onPress={() => {
                            props.setYMax(1);
                            props.setDay(30)
                        }}/>}
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
            if (props.yearValue % 4 === 0) {
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
        <View style={styles.monthSelectView}>
            <View style={styles.monthRow}>
                <Button
                    title='1'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(1);
                        adjustLastDay(31);
                    }} />
                <Button
                    title='2'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(2);
                        if (props.yearValue % 4 === 0) {
                            adjustLastDay(29);
                        } else {
                            adjustLastDay(28);
                        }
                    }} />
                <Button
                    title='3'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(3);
                        adjustLastDay(31);
                    }} />
                <Button
                    title='4'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(4)
                        adjustLastDay(30);
                    }} />
            </View>
            <View style={styles.monthRow}>
                <Button
                    title='5'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(5)
                        adjustLastDay(31);
                    }}
                />
                <Button
                    title='6'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(6)
                        adjustLastDay(30);
                    }}
                />
                <Button
                    title='7'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(7)
                        adjustLastDay(31);
                    }}
                />
                <Button
                    title='8'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(8)
                        adjustLastDay(31);
                    }}
                />
            </View>
            <View style={styles.monthRow}>
                <Button
                    title='9'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(9)
                        adjustLastDay(30);
                    }}
                />
                <Button
                    title='10'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(10)
                        adjustLastDay(31);
                    }}
                />
                <Button
                    title='11'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(11)
                        adjustLastDay(30);
                    }}
                />
                <Button
                    title='12'
                    onPress={() => {
                        props.setYMax(1);
                        props.setMonth(12)
                        adjustLastDay(31);
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
    }
})