//import '../_mockLocations';
import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView } from  'react-native';
import { Headline } from 'react-native-paper';
import Map from '../components/MapView';
import Spacer from '../components/Spacer';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
    
    const locationEvent = (location: any) => {
        console.log('newLocation', location);
    }

    const [ err ] = useLocation(locationEvent);

    return (
        <>
            <SafeAreaView>
            <Spacer>
                <Headline>Create Track</Headline>
            </Spacer>
            <Map />
            { err ? <Text style={styles.error}> Please enable location services</Text> : null }
 
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    error:{
        color: 'red',
        fontSize:18
    }
});

export default TrackCreateScreen;
