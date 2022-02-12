//import '../_mockLocations';
import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView } from  'react-native';
import { Headline } from 'react-native-paper';
import Map from '../components/MapView';
import Spacer from '../components/Spacer';
import { requestForegroundPermissionsAsync , watchPositionAsync, Accuracy } from 'expo-location';
import { catchError } from 'rxjs';

const TrackCreateScreen = () => {
    const [err, setErr] =  useState(null);

    const startWatching = async ()=>{
        try{
            const { granted} = await requestForegroundPermissionsAsync();
            if (!granted){
                throw new Error('Location permission not grated');
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location)=> {
                console.log(location);
            })

        } catch(e:any) {
            setErr(e);
        }
    }
    
    useEffect(()=>{
        startWatching();
    }, []);

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
