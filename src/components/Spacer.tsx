import React from 'react';
import { StyleSheet, View } from  'react-native';


const Spacer = ({children}: any) => {
    return <View style={styles.container}>
            {children}
        </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    }
});

export default Spacer;
