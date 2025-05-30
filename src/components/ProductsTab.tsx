import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

// Product interface
interface Product {
  id: number;
  title: string;
  price: number;
}

// Custom hook for fetching products
const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async (retries = 3) => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://fakestoreapi.com/products?limit=20',
      );

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data: Product[] = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      if (retries > 0) {
        // Native system error pop-up with retry
        Alert.alert(
          'Network Error',
          'Failed to load products. Would you like to retry?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
              onPress: () => setLoading(false),
            },
            {
              text: 'Retry',
              onPress: () => fetchProducts(retries - 1),
            },
          ],
        );
      } else {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {products, loading};
};

// ProductsTab component
const ProductsTab: React.FC = () => {
  const {products, loading} = useProducts();
  const insets = useSafeAreaInsets();

  const renderProductItem = ({item}: {item: Product}) => (
    <View style={styles.productItem}>
      <Text style={styles.productTitle}>{item.title}</Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={[
          styles.listContainer,
          {paddingBottom: insets.bottom},
        ]}
      />
    </SafeAreaView>
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
  productItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productTitle: {
    fontSize: 16,
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB', // Pink theme
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ProductsTab;
