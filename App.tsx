import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';

// Import tab components
import FoodListTab from './src/components/FoodListTab';
import ClippyTab from './src/components/ClippyTab';
import SudokuTab from './src/components/SudokuTab';
import DogTab from './src/components/DogTab';
import ProductsTab from './src/components/ProductsTab';
import FoodDetailScreen from './src/components/FoodDetailScreen';

// Define types for navigation
export type RootStackParamList = {
  FoodList: undefined;
  FoodDetailScreen: {
    dish: {
      title: string;
      description: string;
      recipe: string[];
    };
  };
};

export type TabParamList = {
  Dog: undefined;
  Sudoku: undefined;
  Foods: undefined;
  Clippy: undefined;
  Products: undefined;
};

// Create navigators
const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const DogTabIcon: React.FC<{color: string}> = ({color}) => (
  <View accessibilityLabel="Dog Tab" accessibilityRole="button" testID="DogTab">
    <Text style={{color}}>🐶</Text>
  </View>
);

const SudokuTabIcon: React.FC<{color: string}> = ({color}) => (
  <View
    accessibilityLabel="Sudoku Tab"
    accessibilityRole="button"
    testID="SudokuTab">
    <Text style={{color}}>🧩</Text>
  </View>
);

const FoodListTabIcon: React.FC<{color: string}> = ({color}) => (
  <View
    accessibilityLabel="Foods Tab"
    accessibilityRole="button"
    testID="FoodsTab">
    <Text style={{color}}>🍽️</Text>
  </View>
);

const ClippyTabIcon: React.FC<{color: string}> = ({color}) => (
  <View
    accessibilityLabel="Clippy Tab"
    accessibilityRole="button"
    testID="ClippyTab">
    <Text style={{color}}>📎</Text>
  </View>
);

const ProductsTabIcon: React.FC<{color: string}> = ({color}) => (
  <View
    accessibilityLabel="Products Tab"
    accessibilityRole="button"
    testID="ProductsTab">
    <Text style={{color}}>🛍️</Text>
  </View>
);

const FoodStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FoodList" component={FoodListTab} />
      <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen} />
    </Stack.Navigator>
  );
};

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
              height: 75, // Increased from 60 to 75
            },
            tabBarActiveTintColor: '#FFFFFF', // White when active
            tabBarInactiveTintColor: '#FFB6C1', // Light pink when inactive
            tabBarLabelStyle: {
              fontSize: 11.5,
              fontWeight: 'bold',
              paddingBottom: 5,
            },
          }}>
          <Tab.Screen
            name="Dog"
            component={DogTab}
            options={{
              tabBarLabel: 'Dog',
              tabBarIcon: ({color}) => <DogTabIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Sudoku"
            component={SudokuTab}
            options={{
              tabBarLabel: 'Soduku',
              tabBarIcon: ({color}) => <SudokuTabIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Foods"
            component={FoodStack}
            options={{
              tabBarLabel: 'Foods',
              tabBarIcon: ({color}) => <FoodListTabIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Clippy"
            component={ClippyTab}
            options={{
              tabBarLabel: 'Clippy',
              tabBarIcon: ({color}) => <ClippyTabIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductsTab}
            options={{
              tabBarLabel: 'Products',
              tabBarIcon: ({color}) => <ProductsTabIcon color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
