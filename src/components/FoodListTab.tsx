import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigationHelpers } from '../hooks/useNavigationHelpers';

const countriesFoods = [
  { 
    country: 'Argentina', 
    food: 'Asado',
    description: 'A traditional barbecue technique and social event where various types of meat are grilled.',
    recipe: [
      'Select high-quality cuts of beef, lamb, or pork',
      'Prepare a wood or charcoal fire',
      'Season meats with coarse salt',
      'Grill meats slowly over low heat',
      'Serve with chimichurri sauce and salads'
    ]
  },
  { 
    country: 'Brazil', 
    food: 'Feijoada',
    description: 'A hearty stew of black beans, pork, and beef traditionally served with rice, collard greens, and orange slices.',
    recipe: [
      'Soak black beans overnight',
      'Cook various cuts of pork and beef',
      'Combine beans and meats in a large pot',
      'Slow cook until beans are tender',
      'Serve with white rice and orange slices'
    ]
  },
  { 
    country: 'China', 
    food: 'Peking Duck',
    description: 'A famous dish from Beijing, featuring crispy-skinned roasted duck served with thin pancakes and condiments.',
    recipe: [
      'Select and clean a whole duck',
      'Inflate duck skin and hang to dry',
      'Coat with maltose and spices',
      'Roast in a specialized oven until skin is crispy',
      'Carve and serve with thin pancakes, scallions, and hoisin sauce'
    ]
  },
  { 
    country: 'Denmark', 
    food: 'Smørrebrød',
    description: 'An open-faced sandwich made with rye bread, typically topped with various ingredients like fish, meats, and vegetables.',
    recipe: [
      'Choose dense rye bread',
      'Spread butter or mayonnaise',
      'Layer with protein like herring or roast beef',
      'Add garnishes like herbs, eggs, or pickles',
      'Serve chilled or at room temperature'
    ]
  },
  { 
    country: 'Egypt', 
    food: 'Kushari',
    description: 'A popular street food combining rice, lentils, pasta, and a spicy tomato sauce.',
    recipe: [
      'Cook rice, lentils, and pasta separately',
      'Prepare a spicy tomato sauce',
      'Layer ingredients in a bowl',
      'Top with crispy fried onions',
      'Serve hot with additional sauce'
    ]
  },
  { 
    country: 'France', 
    food: 'Coq au Vin',
    description: 'A classic French dish of chicken braised with wine, lardons, mushrooms, and garlic.',
    recipe: [
      'Brown chicken pieces',
      'Sauté bacon and vegetables',
      'Deglaze pan with red wine',
      'Slow cook chicken in wine sauce',
      'Serve with crusty bread or potatoes'
    ]
  },
  { 
    country: 'Greece', 
    food: 'Moussaka',
    description: 'A layered casserole with eggplant, ground meat, and a creamy béchamel sauce.',
    recipe: [
      'Slice and salt eggplant',
      'Prepare meat sauce with ground lamb or beef',
      'Layer eggplant and meat in a baking dish',
      'Top with creamy béchamel sauce',
      'Bake until golden and bubbly'
    ]
  },
  { 
    country: 'Hungary', 
    food: 'Goulash',
    description: 'A savory beef stew with paprika, vegetables, and a rich, hearty broth.',
    recipe: [
      'Cube beef and season with paprika',
      'Sauté onions and beef',
      'Add vegetables and beef broth',
      'Simmer until meat is tender',
      'Serve with bread or over egg noodles'
    ]
  },
  { 
    country: 'India', 
    food: 'Butter Chicken',
    description: 'A creamy, mildly spiced curry with tender chicken in a tomato-based sauce.',
    recipe: [
      'Marinate chicken in yogurt and spices',
      'Grill or tandoor chicken pieces',
      'Prepare a rich tomato-cream sauce',
      'Simmer chicken in the sauce',
      'Serve with basmati rice or naan bread'
    ]
  },
  { 
    country: 'Japan', 
    food: 'Sushi',
    description: 'A traditional Japanese dish of vinegared rice combined with raw fish, vegetables, and sometimes tropical fruits.',
    recipe: [
      'Prepare sushi rice with rice vinegar',
      'Select fresh, high-quality fish',
      'Slice fish into precise pieces',
      'Prepare nori and other wrapping materials',
      'Roll or shape sushi with precision',
      'Serve with soy sauce, wasabi, and pickled ginger'
    ]
  }
];

const FoodListTab: React.FC = () => {
  const { navigateToFoodDetail } = useNavigationHelpers();

  const renderFoodItem = ({ item }: { item: { 
    country: string, 
    food: string, 
    description: string, 
    recipe: string[] 
  } }) => (
    <TouchableOpacity 
      style={styles.foodItem}
      accessibilityLabel={`${item.food} from ${item.country}`}
      onPress={() => navigateToFoodDetail({ 
        title: `${item.food} (${item.country})`, 
        description: item.description, 
        recipe: item.recipe 
      })}
    >
      <Text style={styles.countryText}>{item.country}</Text>
      <Text style={styles.foodText}>{item.food}</Text>
    </TouchableOpacity>
  );

  return (
    <View 
      style={styles.container}
      accessibilityLabel="Foods from Different Countries"
    >
      <FlatList
        data={countriesFoods}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.country}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB', // Pink theme
    paddingTop: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  foodItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  countryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  foodText: {
    fontSize: 16,
    color: '#666',
  },
});

export default FoodListTab;
