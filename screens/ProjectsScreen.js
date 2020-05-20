import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButton';

const ProjectsScreen = props => {

    return (
        <View style={styles.screen}><Text>ProjectsScreen</Text></View>
    );
};

ProjectsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Proiecte',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                color={'#1e9974'}
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }}
                />
          </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProjectsScreen;
