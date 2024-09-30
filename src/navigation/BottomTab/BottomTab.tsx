import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabRoutes, TabParamList } from './tabRoutes';


const Tab = createBottomTabNavigator<TabParamList>();


export const BottomTab = () => {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false}} initialRouteName="HomePage">

                {
                  tabRoutes.map((route, index) => (
                      <Tab.Screen key={index}
                                  name={route.name as keyof TabParamList}
                                  component={route.component} />
                  ))
                }
        </Tab.Navigator>
    )
}
