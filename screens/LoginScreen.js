import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import CustomLink from '../components/CustomLink';
import { Context } from '../context/AuthContext';

const LoginScreen = () => {
  // const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      {/* <NavigationEvents onWillFocus={clearErrorMessage} /> */}
      <AuthForm
        headerText="Conecteaza-te:"
        // errorMessage={state.errorMessage}
        // onSubmit={signin}
        submitButtonText="Conecteaza-te"
      />
      <CustomLink
        text="Nu ai cont? Creaza cont."
        routeName="Signup"
      />
    </View>
  );
};

LoginScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 250,
    padding: 32,
    backgroundColor: '#dbdbdb'
  }
});

export default LoginScreen;
