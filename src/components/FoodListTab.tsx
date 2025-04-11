import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const countriesFoods = [
  { country: 'Argentina', food: 'Asado' },
  { country: 'Brazil', food: 'Feijoada' },
  { country: 'China', food: 'Peking Duck' },
  { country: 'Denmark', food: 'Smørrebrød' },
  { country: 'Egypt', food: 'Kushari' },
  { country: 'France', food: 'Coq au Vin' },
  { country: 'Greece', food: 'Moussaka' },
  { country: 'Hungary', food: 'Goulash' },
  { country: 'India', food: 'Butter Chicken' },
  { country: 'Japan', food: 'Sushi' }
];

const FoodListTab: React.FC = () => {
  const renderFoodItem = ({ item }: { item: { country: string, food: string } }) => (
    <View 
      style={styles.foodItem}
      accessibilityLabel={`${item.food} from ${item.country}`}
    >
      <Text style={styles.countryText}>{item.country}</Text>
      <Text style={styles.foodText}>{item.food}</Text>
    </View>
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
