import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text style={styles.text} h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={
          <AntDesign name="mail" size={24} color='#6e7c7d' />
        }
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Parola"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={
          <Fontisto name="locked" size={24} color='#6e7c7d' />
        }
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          titleStyle={{color: 'white'}}
          buttonStyle={{backgroundColor: '#1e9974'}}
          type="outline"
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%'
  },
  text: {
    color: '#6e7c7d',
    alignSelf: 'center',
    marginBottom: 16
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;
