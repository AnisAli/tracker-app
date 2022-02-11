import React from 'react';
import { StyleSheet, TouchableOpacity } from  'react-native';
import { Headline , TextInput, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';
import { Text, SafeAreaView } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, signInUser, signUpUser } from '../features/auth/authSlice';
import { IAuthState } from '../models/app,model';

const SigninScreen = ({navigation}: any) => {
    const authState: IAuthState = useSelector((state: any)=> state.auth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
          // The screen is focused
          // Call any action
          dispatch(clearErrorMessage());
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return ()=> { 
            unsubscribe.remove(); 
        };
      }, [navigation]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
      }, [navigation]);

    return (
        <>
        <SafeAreaView style={styles.container}>
            <Spacer>
                <Headline>Sign In for Tracker</Headline>
            </Spacer>
            { authState.error ? <Text style={styles.error}> {authState.error} </Text> :  null }
            <SignUpForm
                buttonText="Sign In"
                onSubmit={(values: any) => {
                dispatch(signInUser(values));
                 } 
            }/>
            <Spacer>
                <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                    <Text> Don't have an account? Go back to sign up.</Text>
                </TouchableOpacity>
            </Spacer>
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
    },
    error: {
        color: 'red',
        marginLeft: 20,
        marginTop: 20
    }
  });

export default SigninScreen;
