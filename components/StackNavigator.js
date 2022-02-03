import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProgressViewerScreen from './ProgressViewerScreen';

const Stack = createStackNavigator();

const StackNavigator = props => {
    const HomeComponent = () => (
        <HomeScreen
        progressMeters={props.progressMeters}
        logs={props.logs}
        createProgressMeter={props.createProgressMeter}
        createTimeLog={props.createTimeLog}
        recordTime={props.recordTime}
        />
    );

    const ProgressViewerComponent = () => (
        <ProgressViewerScreen

        />
    );

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{animationEnabled: false}}>
            <Stack.Screen name="Home" component={HomeComponent} options={{ headerShown: false }} />
            <Stack.Screen name="Progress Viewer" component={ProgressViewerComponent} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;