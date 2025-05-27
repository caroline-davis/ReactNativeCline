import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigationHelpers } from '../hooks/useNavigationHelpers';

// Type for route prop
type FoodDetailScreenRouteProp = RouteProp<RootStackParamList, 'FoodDetailScreen'>;

// Interface for dish details to ensure type safety
interface DishDetailProps {
  route: FoodDetailScreenRouteProp;
}

const FoodDetailScreen: React.FC<DishDetailProps> = ({ route }) => {
  const { dish } = route.params;
  const { goBack } = useNavigationHelpers();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Back button */}
      <TouchableOpacity 
        style={[styles.backButton, { top: insets.top }]} 
        onPress={goBack}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <ScrollView 
        contentContainerStyle={[styles.scrollContainer, { paddingTop: 10 }]}
        accessibilityLabel={`${dish.title} Detail Screen`}
      >
        {/* Prominent dish title */}
        <Text style={[styles.title, { marginTop: 20 }]} numberOfLines={2} adjustsFontSizeToFit>
          {dish.title}
        </Text>

        {/* Dish description text box */}
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>{dish.description}</Text>
        </View>

        {/* Recipe section with clear formatting */}
        <View style={styles.recipeContainer}>
          <Text style={styles.recipeTitle}>Recipe</Text>
          {dish.recipe.map((step, index) => (
            <Text key={index} style={styles.recipeStep}>
              {`${index + 1}. ${step}`}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB', // Consistent pink theme
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    zIndex: 10,
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  descriptionBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  recipeContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  recipeStep: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 24,
  }
});

export default FoodDetailScreen;
