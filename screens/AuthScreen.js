import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthScreen = props => {

    return (
        <View style={styles.screen}><Text>AuthScreen</Text></View>
    );
};

AuthScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Conectare',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AuthScreen;
