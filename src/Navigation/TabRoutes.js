import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import ExploreStack from './ExploreStack';
import HomeStack from './HomeStack';
import PorfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

function TabRoutes() {


    return (
        <Tab.Navigator
            initialRouteName={navigationStrings.HOME}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position: 'absolute',
                    backgroundColor: '#ADD8E6',
                    // borderRadius: 50,
                    // bottom: 20,
                    // marginHorizontal: 16

                }
            }}
        >
            <Tab.Screen
                name={navigationStrings.HOME} component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? 'red' : 'gray'
                                }}
                                source={imagePath.icHome} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name={navigationStrings.EXPLORE}
                component={ExploreStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                            <Image
                                style={{
                                    tintColor: focused ? 'red' : 'gray'
                                }}
                                source={imagePath.icExplore}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name={navigationStrings.PROFILE}
                component={PorfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? 'red' : 'gray'
                                }}
                                source={imagePath.icProfile}
                            />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default TabRoutes