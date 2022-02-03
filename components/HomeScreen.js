import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Button, ScrollView, SafeAreaView} from 'react-native';
import CreateProgressMeter from './CreateMeterModal';
import ProgressMeter from './ProgressMeter';

const HomeScreen = props => {

    const navigation = useNavigation();
    const [createOpen, setCreateOpen] = useState(false);

    const toggleCreateModal = () => {
        setCreateOpen(!createOpen);
    };

    const viewProgressReport = () => {navigation.navigate('Progress Report')}

    const progressMeters = props.progressMeters.map(meter => {
        return (
            <ProgressMeter
                logs={props.logs}
                meter={meter}
                selectMeter={props.selectMeter}
                viewProgressReport={viewProgressReport}
                createTimeLog={props.createTimeLog}
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