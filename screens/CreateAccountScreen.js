import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateAccountScreen = props => {

    return (
        <View style={styles.screen}><Text>CreateAccountScreen</Text></View>
    );
};

CreateAccountScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Creeare Cont',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CreateAccountScreen;
