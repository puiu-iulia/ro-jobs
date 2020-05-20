import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessagesScreen = props => {

    return (
        <View style={styles.screen}><Text>MessagesScreen</Text></View>
    );
};

MessagesScreen.navigationOptions = (navigationData) => {
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

export default MessagesScreen;
