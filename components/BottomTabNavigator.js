// src/navigation/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screen/HomeScreen';
import LeadsScreen from '../screen/LeadScreen';
import AboutScreen from '../screen/AboutScreen';
import ContactScreen from '../screen/ContactScreen';
import { ACCENT } from '../constant/color';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: ACCENT,
      tabBarInactiveTintColor: '#888',
      tabBarShowLabel: true,
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingBottom: 4,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={color === ACCENT ? 'home' : 'home-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Leads"
      component={LeadsScreen}
      options={{
        tabBarLabel: 'Leads',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={color === ACCENT ? 'people' : 'people-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="About"
      component={AboutScreen}
      options={{
        tabBarLabel: 'About',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={
              color === ACCENT
                ? 'information-circle'
                : 'information-circle-outline'
            }
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={color === ACCENT ? 'call' : 'call-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
