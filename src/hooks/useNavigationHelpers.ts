import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

/**
 * Custom hook for navigation functionality
 * Provides type-safe navigation methods for common actions
 */
export function useNavigationHelpers() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  /**
   * Navigate to the food detail screen
   * @param dish - The dish details to pass to the detail screen
   */
  const navigateToFoodDetail = (dish: {
    title: string;
    description: string;
    recipe: string[];
  }) => {
    navigation.navigate('FoodDetailScreen', {dish});
  };

  /**
   * Navigate back to the previous screen
   */
  const goBack = () => {
    navigation.goBack();
  };

  return {
    navigation, // Expose the raw navigation object for advanced use cases
    navigateToFoodDetail,
    goBack,
  };
}
