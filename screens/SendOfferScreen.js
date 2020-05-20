import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SendOfferScreen = props => {

    return (
        <View style={styles.screen}><Text>SendOfferScreen</Text></View>
    );
};

SendOfferScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Trimite Oferte',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SendOfferScreen;
