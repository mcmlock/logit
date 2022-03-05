import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Button, ScrollView, SafeAreaView} from 'react-native';
import { Icon } from 'react-native-elements';
import CreateProgressMeter from './modals/CreateMeterModal';
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
                key={meter.id}
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
                editing={false}
            />

            
            <SafeAreaView style={{flex: 1}}>
                <ScrollView style={{ marginBottom: 60.0 }}>
                    {progressMeters}
                    <View style={{ height: 40}} />
                </ScrollView>
                <View style={styles.createBtn}>
                    <Icon
                        name="plus-circle"
                        type="font-awesome"
                        color="white"
                        size={36}
                        onPress={() => toggleCreateModal()}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b'
    },
    createBtn: {
        position: 'absolute',
        bottom: 35.0,
        right: 40.0,
        zIndex: 1
    }
});

export default HomeScreen;
