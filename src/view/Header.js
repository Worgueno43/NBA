import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Header () {
  return(
    <View style={styles.sectionContainer}>
      <View style={styles.containerLogo}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  containerLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
})