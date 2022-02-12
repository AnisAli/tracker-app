import React from 'react';
import { StyleSheet, View } from  'react-native';
import MapView from 'react-native-maps';

const Map = ({children}: any) => {
    return <MapView 
        style={styles.map}
        initialRegion={{
            latitude: 45.45271512797409,
            longitude: -75.46706801910273,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        />
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;
