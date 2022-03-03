

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { InsertLog } from './modals/InsertLogModal';
import { SwipeRow } from 'react-native-swipe-list-view';
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const LogHistoryScreen = props => {
    const navigation = useNavigation();

    const [insertVisible, setInsertVisible] = useState(false);

    const logs = props.logs.filter(log => log.meterId === props.selectedMeter);
    logs.sort(function (a, b) {
        return a.dateValue - b.dateValue;
    });
    logs.reverse();
    const meterLogs = logs.map(log => {
        let month;
        switch (log.month) {
            case 1:
                month = 'January';
                break;
            case 2:
                month = 'February';
                break;
            case 3:
                month = 'March';
                break;
            case 4:
                month = 'April';
                break;
            case 5:
                month = 'May';
                break;
            case 6:
                month = 'June';
                break;
            case 7:
                month = 'July';
                break;
            case 8:
                month = 'August';
                break;
            case 9:
                month = 'September';
                break;
            case 10:
                month = 'October';
                break;
            case 11:
                month = 'November';
                break;
            default:
                month = 'December';
                break;
        }

        let day;
        switch (log.day) {
            case 1:
            case 21:
            case 31:
                day = log.day + 'st';
                break;
            case 2:
            case 22:
                day = log.day + 'nd';
                break;
            case 3:
            case 23:
                day = log.day + 'rd';
                break;
            default:
                day = log.day + 'th';
                break;
        }

        return (
            <SwipeRow rightOpenValue={-100}>
                <View style={styles.deleteView}>
                    <TouchableOpacity
                        style={styles.deleteTouchable}
                        onPress={() => props.deleteTimeLog(log.dateValue, log.meterId)}
                    >
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logView}>
                    <Text style={styles.logText}>{month} {day}, 20{log.year} @ {log.hour}:{log.minutes}</Text>
                    <Text style={styles.logText}>{log.hoursRecorded} hours {log.minutesRecorded} minutes</Text>
                </View>
            </SwipeRow>
        )
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
            <InsertLog
                visible={insertVisible}
                toggleModal={setInsertVisible}
                createTimeLog={props.createTimeLog}
                logs={props.logs}
                meterId={props.selectedMeter}
            />

            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={{ position: 'absolute', top: -20.0 }}
                    onPress={() => navigation.navigate('Progress Report')}
                >
                    <Text style={{ marginLeft: 15.0, color: 'white', fontSize: 16.0 }}>{'< Back'}</Text>
                </TouchableOpacity>
                <ScrollView style={{ marginBottom: 80.0, width: '100%' }}>
                    {meterLogs}
                </ScrollView>
                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => setInsertVisible(!insertVisible)}>
                        <Text style={styles.btnText}>Insert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                            var data = logs;
                            var ws = XLSX.utils.json_to_sheet(data);
                            var wb = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(wb, ws, "Logs");
                            const wbout = XLSX.write(wb, {
                                type: 'base64',
                                bookType: "xlsx"
                            });
                            const uri = FileSystem.cacheDirectory + 'logs.xlsx';
                            //     console.log(`Writing to ${JSON.stringify(uri)} with text: ${wbout}`);
                            await FileSystem.writeAsStringAsync(uri, wbout, {
                                encoding: FileSystem.EncodingType.Base64
                            });

                            await Sharing.shareAsync(uri, {
                                mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                dialogTitle: 'Log data',
                                UTI: 'com.microsoft.excel.xlsx'
                            });
                        }}>
                        <Text style={styles.btnText}>Export</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>

    );
}

export default LogHistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80.0,
    },
    logView: {
        paddingHorizontal: 40.0,
        paddingVertical: 20,
        backgroundColor: '#282828',
    },
    logText: {
        fontSize: 22.0,
        color: 'white'
    },
    buttonsView: {
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30.0,
    },
    btnText: {
        fontSize: 20.0,
        textAlign: 'center',
        marginHorizontal: 40.0,
        marginBottom: 10.0,
        color: 'white'
    },
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    deleteTouchable: {
        backgroundColor: '#ed1f37',
        height: '100%',
        justifyContent: 'center'
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 18,
        width: 100
    }
})