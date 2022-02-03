import React, { Component } from 'react';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native';

const ProgressReportScreen = props => {

    const navigation = useNavigation();

    // Gathering the data for the chart
    let past30 = [];

    return (
        <SafeAreaView  style={styles.container}>
                <View style={styles.graph}>
                    <View>

                    </View>
                    <View>

                    </View>
                    <View>
                        
                    </View>
                </View>
                <Button
                    title="Back"
                    onPress={() => navigation.navigate('Home')}
                />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    graph: {
        height: 220.0,
        width: 340.0,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
    },
});

export default ProgressReportScreen;