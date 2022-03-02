import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProgressReportScreen from './ProgressReportScreen';
import LogHistoryScreen from './LogHistoryScreen';

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
            progressMeters={props.progressMeters}
            meterTitle={props.progressMeters.filter(meter => meter.id === props.selectedMeter)[0].title}
            goal={props.progressMeters.filter(meter => meter.id === props.selectedMeter)[0].goal}
            dueDay={props.progressMeters.filter(meter => meter.id === props.selectedMeter)[0].day}
            dueMonth={props.progressMeters.filter(meter => meter.id === props.selectedMeter)[0].month}
            dueYear={props.progressMeters.filter(meter => meter.id === props.selectedMeter)[0].year}
            color={props.progressMeters.filter(meter => meter.id === props.selectedMeter)[0].color}
            selectedMeter={props.selectedMeter}
            logs={props.logs}
            deleteProgressMeter={props.deleteProgressMeter}
            editProgressMeter={props.editProgressMeter}
        />
    );

    const LogHistoryComponent = () => (
        <LogHistoryScreen
            logs={props.logs}
            selectedMeter={props.selectedMeter}
            createTimeLog={props.createTimeLog}
        />
    );

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ animationEnabled: false }}>
            <Stack.Screen name="Home" component={HomeComponent} options={{ headerShown: false }} />
            <Stack.Screen name="Progress Report" component={ProgressReportComponent} options={{ headerShown: false }} />
            <Stack.Screen name="Log History" component={LogHistoryComponent} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;