import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

// Define types for navigation parameters
interface DishDetails {
  title: string;
  description: string;
  recipe: string[];
}

/**
 * Custom hook for handling navigation throughout the app
 */
export function useNavigationHelpers() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Navigate to the food detail screen with dish information
  const navigateToFoodDetail = (dish: DishDetails) => {
    navigation.navigate('FoodDetailScreen', {dish});
  };

  // Go back to the previous screen
  const goBack = () => {
    navigation.goBack();
  };

  return {
    navigation,
    navigateToFoodDetail,
    goBack,
  };
}
