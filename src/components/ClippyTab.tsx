import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const ClippyTab: React.FC = () => {
  const playSound = () => {
    try {
      SoundPlayer.playSoundFile('applause', 'mp3');
    } catch (e) {
      console.log('Cannot play the sound file', e);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/clippy.png')}
        style={styles.clippyImage}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.pinkButton} onPress={playSound}>
        <Text style={styles.buttonText}>Play Applause</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB',
  },
  clippyImage: {
    width: 300,
    height: 300,
  },
  pinkButton: {
    backgroundColor: '#FF69B4', // Hot pink color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ClippyTab;
