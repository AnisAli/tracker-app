import React from 'react';
import { StyleSheet, Text } from  'react-native';
import { useDispatch } from 'react-redux';
import { tryLocalSignIn } from '../features/auth/authSlice';


const SplashScreen = () => {
    const dispatch = useDispatch();
     //run only one time
     React.useEffect(() => {
        dispatch(tryLocalSignIn());
     }, []);

     return null;
     
    // return (
    //     <>
    //         <Text> Loading..... </Text>
    //     </>
    // );
}

const styles = StyleSheet.create({});

export default SplashScreen;
