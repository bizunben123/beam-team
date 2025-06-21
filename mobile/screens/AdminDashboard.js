import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdminDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADMIN DASHBOARD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#F5F5F5',
    fontSize: 24
  }
});
