import React from 'react';
import { SafeAreaView, StyleSheet, Text } from  'react-native';
import { Headline , TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Spacer from '../components/Spacer';
import { signOutUser } from '../features/auth/authSlice';

const AccountScreen = () => {
    const dispatch = useDispatch();
    return (
        <>
         <SafeAreaView>
            <Spacer>
                <Headline>Account Screen</Headline>
            </Spacer>
            <Spacer>
                <Button 
                    onPress={()=>dispatch(signOutUser())}   
                    icon="logout"
                    mode="contained">
                        Sign out
                    </Button>
            </Spacer>
          </SafeAreaView>    
        </>
    );
}

const styles = StyleSheet.create({});

export default AccountScreen;
