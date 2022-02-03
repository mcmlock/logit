import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProgressReportScreen from './ProgressReportScreen';

const Stack = createStackNavigator();

const StackNavigator = props => {
    const HomeComponent = () => (
        <HomeScreen
            progressMeters={props.progressMeters}
            logs={props.logs}
            selectMeter={props.selectMeter}
            createProgressMeter={props.createProgressMeter}
            createTimeLog={props.createTimeLog}
        />
    );

    const ProgressReportComponent = () => (
        <ProgressReportScreen
            selectedMeter={props.selectedMeter}
            logs={props.logs}
        />
    );

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ animationEnabled: false }}>
            <Stack.Screen name="Home" component={HomeComponent} options={{ headerShown: false }} />
            <Stack.Screen name="Progress Report" component={ProgressReportComponent} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;