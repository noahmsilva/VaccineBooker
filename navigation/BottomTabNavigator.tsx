/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, HealthProviderParamList } from '../types';
import HealthCardInfo from '../screens/HealthCardInfo';
import HealthCode from '../screens/HealthCode';
import ReadHealthCode from '../screens/ReadHealthCode';
import PaitentInfoFromCode from '../screens/PaitentInfoFromCode';
import HealthProviderScreen from '../screens/HealthProviderScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="HealthProvider"
        component={HealthProviderNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createNativeStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createNativeStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'My Health', headerLargeTitle: true}}
      />
      <TabTwoStack.Screen
      name="HealthCardInfo"
      component={HealthCardInfo}
      options={{ headerTitle: 'My Health Card'}} />

      <TabTwoStack.Screen
      name="HealthCode"
      component={HealthCode}
      options={{ headerTitle: 'Share Health Code'}} />

      <TabTwoStack.Screen
      name="ReadHealthCode"
      component={ReadHealthCode}
      options={{ headerTitle: 'Scan Paitent Information'}} />
      
      <TabTwoStack.Screen
      name="PaitentInfoFromCode"
      component={PaitentInfoFromCode}
      options={{ headerTitle: 'Paitent'}} />
    
    </TabTwoStack.Navigator>
  );
}

const HealthProviderStack = createNativeStackNavigator<HealthProviderParamList>()

function HealthProviderNavigator() {
  return <HealthProviderStack.Navigator>
    <HealthProviderStack.Screen
    name="HealthProviderScreen"
    component={HealthProviderScreen}
    options={{ headerTitle: 'Health Care Provider', headerLargeTitle: true}} />
  </HealthProviderStack.Navigator>
}