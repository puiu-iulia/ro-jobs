import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProjectDetailsScreen = props => {

    return (
        <View style={styles.screen}><Text>ProjectDetailsScreen</Text></View>
    );
};

ProjectDetailsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Detalii Proiect',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProjectDetailsScreen;
