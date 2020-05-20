import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import AuthScreen from '../screens/AuthScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import SendOfferScreen from '../screens/SendOfferScreen';
import OffersScreen from '../screens/OffersScreen';
import ContractsScreen from '../screens/ContractsScreen';
import MessagesScreen from '../screens/MessagesScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: 'fff'
    },
    // headerTitleStyle: {
    //     fontFamily: 'open-sans-bold',
    // },
    // headerbackTitleStyle: {
    //     fontFamily: 'open-sans',
    // },
    headerTintColor: '000'
}

const ProjectsNavigator = createStackNavigator(
    {
        Projects: ProjectsScreen,
        ProjectDetails: ProjectDetailsScreen,
        SendOffer: SendOfferScreen
    }, {
        navigationOptions: {
            drawerLabel: 'Toate Proiectele'
        }, 
        labelStyle: {
            color: '#fff'
        }
    }
);

const OffersNavigator = createStackNavigator(
    {
        Offers: OffersScreen
    }
);

const ContractsNavigator = createStackNavigator(
    {
        Contracts: ContractsScreen
    }
);

const MessagesNavigator = createStackNavigator(
    {
        Messages: MessagesScreen
    }
);

const ProfileNavigator = createStackNavigator({
    Profile: ProfileScreen
}, {
    navigationOptions: {
        drawerLabel: 'Profilul Meu',
        labelStyle: {
            color: '#fff'
        }
    }
})

const tabScreenConfig =  {
    ProjectsTab: { 
        screen: ProjectsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<AntDesign name="filetext1" size={24} color="#fff" />);
            },
            tabBarColor: '#1e9974',
            // tabBarLabel: Platform.OS === 'android' ? <Text>Proiecte</Text> : 'Proiecte'
            tabBarLabel: 'Proiecte'
        }
    },
    OffersTab: {
        screen: OffersNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<MaterialIcons name="local-offer" size={24} color="#fff" />);
            },
            tabBarColor: '#1e9974',
            //you can add style to the text label below
            // tabBarLabel: Platform.OS === 'android' ? <Text>Oferte</Text> : 'Oferte'
            tabBarLabel: 'Oferte'
        }
    },
    ContractsTab: {
        screen: ContractsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<FontAwesome5 name="file-contract" size={24} color="#fff" />);
            },
            tabBarColor: '#1e9974',
            //you can add style to the text label below
            tabBarLabel: Platform.OS === 'android' ? <Text>Contracte</Text> : 'Contracte'
        }
    },
    MessagesTab: {
        screen: MessagesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Entypo name="message" size={24} color="#fff" />);
            },
            tabBarColor: '#1e9974',
            //you can add style to the text label below
            tabBarLabel: Platform.OS === 'android' ? <Text>Mesaje</Text> : 'Mesaje'
        }
    },

}

const TabNavigator = 
        Platform.OS === 'android' 

        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: '#fff',
            shifting: true
        }) 

        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                // labelStyle: {
                //     fontFamily: 'open-sans-bold'
                // },
                activeTintColor: '#fff'
            }
});

const DrawerNavigator = createDrawerNavigator({
    ProjectsOverview: TabNavigator,
    ProfileOverview:  ProfileNavigator
}, 
{
    drawerBackgroundColor: '#1e9974',
    contentOptions: {
        labelStyle: {
            color: '#fff'
        },
        activeTintColor: '#fff'
    },
    contentComponent: props => {
        return (
            <DrawerItems {...props} />
        );
    }       
})


export default createAppContainer(DrawerNavigator);