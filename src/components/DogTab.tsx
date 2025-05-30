import React, { useState } from 'react';
import { Animated, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DogTab: React.FC = () => {
  const [rotation] = useState(new Animated.Value(0));

  const handleTabPress = () => {
    Animated.timing(rotation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotation.setValue(0);
    });
  };

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView 
      style={styles.container} 
      accessibilityLabel="Dog Image Tab"
      accessibilityHint="Tap to rotate the dog image"
      testID="DogImageView"
    >
      <Animated.View
        style={[
          styles.dogImageContainer, 
          { 
            transform: [{ 
              rotate: rotationInterpolate 
            }] 
          }
        ]}
        onTouchEnd={handleTabPress}
        accessible={true}
      >
        <Image
          source={require('../assets/dog.png')}
          style={styles.dogImage}
          resizeMode="contain"
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB', // Pink theme
  },
  dogImageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
  },
  dogImage: {
    width: '100%',
    height: '100%',
  },
});

export default DogTab;
