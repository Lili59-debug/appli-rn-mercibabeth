import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Accueil from '../Components/Accueil'
import Qui from '../Components/Qui'
import Adherer from '../Components/Adherer'
import Contact from '../Components/Contact'
import Rayon from '../Components/Rayon'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const StackAccueil = createStackNavigator();
const StackContact = createStackNavigator();
const Tab = createBottomTabNavigator();

function NavAccueil() {
    return (

        <StackAccueil.Navigator initialRouteName="Accueil">
            <StackAccueil.Screen
                name="Accueil"
                component={Accueil}
                options={{
                    title: 'Merci Babeth !',
                    headerStyle: {
                        backgroundColor: '#d69262',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}

            />
            <StackAccueil.Screen
                name="Qui"
                component={Qui}
                options={{
                    title: 'Qui sommes-nous ?',
                    headerStyle: {
                        backgroundColor: '#d69262',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <StackAccueil.Screen
                name="Rayon"
                component={Rayon}
                options={{
                    title: 'Nos produits',
                    headerStyle: {
                        backgroundColor: '#d69262',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <StackAccueil.Screen
                name="Adherer"
                component={Adherer}
                options={{
                    title: 'Adhérer à l\'association',
                    headerStyle: {
                        backgroundColor: '#d69262',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </StackAccueil.Navigator>


    )
}

function NavContact() {
    return (
        <StackContact.Navigator initialRouteName="Contact">
            <StackAccueil.Screen
                name="Contact"
                component={Contact}
                options={{
                    title: 'Nous contacter',
                    headerStyle: {
                        backgroundColor: '#d69262',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}

            />
        </StackContact.Navigator>
    )
}

function NavigatorBottom() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: '#555',
                    },
                    activeTintColor: 'white',
                    inactiveTintColor: 'lightgray',
                }}
            >
                <Tab.Screen
                    name="NavAccueil"
                    component={NavAccueil}
                    options={{
                        title: 'Accueil',
                        tabBarIcon: ({ }) => (
                            <FontAwesomeIcon icon={faHome} color="white" />
                        )
                    }}
                />
                <Tab.Screen
                    name="NavContact"
                    component={NavContact}
                    options={{
                        title: 'Nous contacter',
                        tabBarIcon: ({ }) => (
                            <FontAwesomeIcon icon={faEnvelope} color="white" />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default NavigatorBottom