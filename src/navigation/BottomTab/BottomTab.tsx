import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabRoutes, TabParamList } from './tabRoutes';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator<TabParamList>();


export const BottomTab = () => {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray' }} initialRouteName="HomePage">

                {
                  tabRoutes.map((route, index) => (
                      <Tab.Screen key={index}
                                  name={route.name as keyof TabParamList}
                                  component={route.component}
                                  options={{ tabBarLabel: route.label,
                                            tabBarIcon: ({focused,color,size}) => (
                                                <MaterialCommunityIcons name={route.icon} color={color} size={size} />
                                            )}}
                                   />
                  ))
                }
        </Tab.Navigator>
    )
}
