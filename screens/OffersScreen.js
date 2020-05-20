import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OffersScreen = props => {

    return (
        <View style={styles.screen}><Text>OffersScreen</Text></View>
    );
};

OffersScreen.navigationOptions = (navigationData) => {
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

export default OffersScreen;
