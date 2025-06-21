import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIND BARBERS</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking')}>
        <Text style={styles.buttonText}>Book a Cut</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#F5F5F5',
    fontSize: 24,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#3C4F65',
    padding: 10,
    borderRadius: 6
  },
  buttonText: {
    color: '#E0C097'
  }
});
