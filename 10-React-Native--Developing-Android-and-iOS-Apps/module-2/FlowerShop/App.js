import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FlowerLandingPage from './FlowerLandingPage';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <FlowerLandingPage/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});