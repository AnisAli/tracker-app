import React from 'react';
import { StyleSheet, Text } from  'react-native';
import { Headline , TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../features/auth/authSlice';

const AccountScreen = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Text> AccountScreen </Text>
            <Button 
                 onPress={()=>dispatch(signOutUser())}   
                 icon="logout"
                 mode="contained">
                    Sign out
                </Button>
        </>
    );
}

const styles = StyleSheet.create({});

export default AccountScreen;
