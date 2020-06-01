import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import SendOfferScreen from '../screens/SendOfferScreen';
import OffersScreen from '../screens/OffersScreen';
import ContractsScreen from '../screens/ContractsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import HandleAuthScreen from '../screens/HandleAuthScreen';
import SigninScreen from '../screens/LoginScreen';
import AccountTypeScreen from '../screens/AccountTypeSceen';




const projectsListFlow = createStackNavigator(
    {
        Projects: ProjectsScreen,
        ProjectDetails: ProjectDetailsScreen,
        SendOffer: SendOfferScreen
    }, {
        navigationOptions: {
            drawerLabel: 'Toate Proiectele', 
            labelStyle: {
                color: '#fff'
            }
        }
    }
);
projectsListFlow.navigationOptions = {
    title: 'Proiecte',
    tabBarIcon: <AntDesign name="filetext1" size={24} color="#6e7c7d" />,
    tabBarColor: '#1e9974'
}

const offersListFlow = createStackNavigator(
    {
        Offers: OffersScreen
    }
);
offersListFlow.navigationOptions = {
    title: 'Oferte',
    tabBarIcon: <MaterialIcons name="local-offer" size={24}  color="#6e7c7d" />,
}

const contractsListFlow = createStackNavigator(
    {
        Contracts: ContractsScreen
    }
);
contractsListFlow.navigationOptions = {
    title: 'Contracte',
    tabBarIcon: <FontAwesome5 name="file-contract" size={24} color="#6e7c7d" />,
}

const messagesFlow = createStackNavigator(
    {
        Messages: MessagesScreen
    }
);
messagesFlow.navigationOptions = {
    title: 'Mesaje',
    tabBarIcon: <Entypo name="message" size={24} color="#6e7c7d" />,

}

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


// mainFlow.navigationOptions = {
//     tabBarOptions: {
//         // labelStyle: {
//         //     fontFamily: 'open-sans-bold'
//         // },
//         activeTintColor: '#fff'
//     }
// }


    const projectsFlow = createBottomTabNavigator({
        projectsListFlow,
        offersListFlow,
        contractsListFlow,
        messagesFlow
    }, {
        tabBarOptions: {
            activeTintColor: '#1e9974'
        } 
    })


const profileFlow = createDrawerNavigator({
    projectsList: projectsFlow,
    ProfileOverview:  ProfileNavigator
}, 
{
    drawerBackgroundColor: '#6e7c7d',
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

const mainAppContainer = createSwitchNavigator({
    HandleAuth: HandleAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen,
        AccountType: AccountTypeScreen
    }),
    mainFlow: projectsFlow,
    profile: profileFlow,

}, {
    initialRouteName: 'loginFlow'
})

export default createAppContainer(mainAppContainer);