import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContractsScreen = props => {

    return (
        <View style={styles.screen}><Text>ContractsScreen</Text></View>
    );
};

ContractsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Oferte',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ContractsScreen;
