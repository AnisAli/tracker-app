import React from 'react';
import { StyleSheet } from  'react-native';
import { Headline , TextInput, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';
import { Text, SafeAreaView } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../features/auth/authSlice';

const SignupScreen = ({navigation}: any) => {
    const authState = useSelector((state:any)=> state.auth);
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
      }, [navigation]);

    return (
        <>
        <SafeAreaView style={styles.container}>
            <Spacer>
                <Headline>Sign Up Tracker</Headline>
            </Spacer>
            <SignUpForm onSubmit={(values: any) => {
                dispatch(signUp("Value"));
                console.log(authState);
                navigation.navigate('Signin');
                } 
            }/>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 150
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    }
  });

export default SignupScreen;
