import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Button, ScrollView, SafeAreaView} from 'react-native';
import CreateProgressMeter from './CreateMeterModal';
import ProgressMeter from './ProgressMeter';

const HomeScreen = props => {

    const [createOpen, setCreateOpen] = useState(false);

    const toggleCreateModal = () => {
        setCreateOpen(!createOpen);
    };

    const progressMeters = props.progressMeters.map(meter => {
        return (
            <ProgressMeter
                meter={meter}
                createTimeLog={props.createTimeLog}
                recordTime={props.recordTime}
            />
        );
    });

    return (
        <View style={styles.container}>
            <CreateProgressMeter
                visible={createOpen}
                toggleModal={toggleCreateModal}
                createProgressMeter={props.createProgressMeter}
            />
            <SafeAreaView>
                <ScrollView style={{ height: '100%' }}>
                    {progressMeters}
                </ScrollView>
                <View style={styles.createBtn}>
                    <Button
                        title="Create"
                        onPress={() => toggleCreateModal()}
                    />
                </View>
            </SafeAreaView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    createBtn: {
        position: 'absolute',
        bottom: 70.0,
        right: 30.0,
        zIndex: 1
    }
});

export default HomeScreen;