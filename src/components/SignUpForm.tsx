import React from 'react';
 import { View } from 'react-native';
 import { Headline , TextInput, Button } from 'react-native-paper';
 import { Formik } from 'formik';
import Spacer from './Spacer';
 
 const SignUpForm = ({onSubmit, buttonText}: any) => (
   <Formik
     initialValues={{ email: '', password: '' }}
     onSubmit={values => {
         console.log(values);
         onSubmit(values);
        } }
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <Spacer>
                <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    label="Email"
                />
            </Spacer> 
            <Spacer>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    label="Password"
                />
            </Spacer>
                
            <Spacer>
                <Button 
                 onPress={handleSubmit}   
                 icon="login"
                 mode="contained">
                   {buttonText}
                </Button>
            </Spacer>

       </View>
     )}
   </Formik>
 );

 export default SignUpForm;
