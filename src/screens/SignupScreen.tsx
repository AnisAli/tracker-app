import React  from 'react';
import { StyleSheet, TouchableOpacity } from  'react-native';
import { Headline , TextInput, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';
import { Text, SafeAreaView } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, signUpUser, tryLocalSignIn } from '../features/auth/authSlice';
import { IAuthState } from '../models/app,model';

const SignupScreen = ({navigation}: any) => {
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

      
    return (
        <>
        <SafeAreaView style={styles.container}>
            <Spacer>
                <Headline>Sign Up Tracker</Headline>
            </Spacer>
            { authState.error ? <Text style={styles.error}> {authState.error} </Text> :  null }
            <SignUpForm 
                buttonText="Register"
                onSubmit={(values: any) => {
                    dispatch(signUpUser(values));
                } 
            }/>
            <Spacer>
                <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
                    <Text> Already have an account? Sign In instead.</Text>
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

export default SignupScreen;
