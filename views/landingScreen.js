import React from 'react';
import {View, Text, Button} from 'react-native';

export default function LandingScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Landing Screen
      </Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}  
      />
       <Button  
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  ); 
}