import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import CustomLink from '../components/CustomLink';


const SignupScreen = ({ navigation }) => {
//   const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <NavigationEvents onWillFocus={clearErrorMessage} /> */}
      <AuthForm
        headerText="Creaza-ti cont:"
        // errorMessage={state.errorMessage}
        submitButtonText="Creaza Cont"
        // onSubmit={signup}
        onSubmit={() => {
            navigation.navigate('AccountType')
        }}
      />
      <CustomLink
        routeName="Signin"
        text="Deja ai cont? Conecteaza-te."
      />
      <CustomLink
        routeName="projectsList"
        text="SKIP>>"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 250
    padding: 32,
    backgroundColor: '#dbdbdb'
  }
});

export default SignupScreen;
