import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

// Import tab components


import FoodListTab from './src/components/FoodListTab';
import ClippyTab from './src/components/ClippyTab';
import SudokuTab from './src/components/SudokuTab';
import DogTab from './src/components/DogTab';

// Create Tab Navigator
const Tab = createBottomTabNavigator();

const DogTabIcon: React.FC<{ color: string }> = ({ color }) => (
  <View
    accessibilityLabel="Dog Tab"
    accessibilityRole="button"
    testID="DogTab"
  >
    <Text style={{ color }}>🐶</Text>
  </View>
);

const SudokuTabIcon: React.FC<{ color: string }> = ({ color }) => (
  <View
    accessibilityLabel="Sudoku Tab"
    accessibilityRole="button"
    testID="SudokuTab"
  >
    <Text style={{ color }}>🧩</Text>
  </View>
);

const FoodListTabIcon: React.FC<{ color: string }> = ({ color }) => (
  <View
    accessibilityLabel="Foods Tab"
    accessibilityRole="button"
    testID="FoodsTab"
  >
    <Text style={{ color }}>🍽️</Text>
  </View>
);

const ClippyTabIcon: React.FC<{ color: string }> = ({ color }) => (
  <View
    accessibilityLabel="Clippy Tab"
    accessibilityRole="button"
    testID="ClippyTab"
  >
    <Text style={{ color }}>📎</Text>
  </View>
);

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#FF69B4', // Hot pink tab bar
              borderTopColor: '#FF1493', // Dark pink border
              height: 60,
            },
            tabBarActiveTintColor: '#FFFFFF', // White when active
            tabBarInactiveTintColor: '#FFB6C1', // Light pink when inactive
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
          }}
        >
          <Tab.Screen
            name="Dog"
            component={DogTab}
            options={{
              tabBarLabel: 'Dog',
              tabBarIcon: ({ color }) => <DogTabIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Sudoku"
            component={SudokuTab}
            options={{
              tabBarLabel: 'Soduku',
              tabBarIcon: ({ color }) => 
                <SudokuTabIcon color={color } />,
            }}
          />
          <Tab.Screen
            name="Foods"
            component={FoodListTab}
            options={{
              tabBarLabel: 'Foods',
              tabBarIcon: ({ color }) => <FoodListTabIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Clippy"
            component={ClippyTab}
            options={{
              tabBarLabel: 'Clippy',
              tabBarIcon: ({ color }) => <ClippyTabIcon color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
