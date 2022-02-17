import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';


const LogHistoryScreen = props => {
    const navigation = useNavigation();

    const logs = props.logs.filter(log => log.meterId === props.selectedMeter);
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
            <View style={styles.logView}>
                <Text style={styles.logText}>{month} {day}, 20{log.year} @ {log.hour}:{log.minutes}</Text>
                <Text style={styles.logText}>{log.hoursRecorded} hours {log.minutesRecorded} minutes</Text>
            </View>
        );
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{marginBottom: 80.0, width: '100%'}}>
                {meterLogs}
            </ScrollView>
            <View style={styles.buttonsView}>
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
                    console.log(`Writing to ${JSON.stringify(uri)} with text: ${wbout}`);
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
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Progress Report')
                }}>
                    <Text style={styles.btnText}>Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

export default LogHistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    logView: {
        marginHorizontal: 40.0,
        marginVertical: 20
    },
    logText: {
        fontSize: 22.0
    },
    buttonsView: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30.0,
    },
    btnText: {
        fontSize: 20.0,
        textAlign: 'center',
        marginBottom: 10.0
    }
})
