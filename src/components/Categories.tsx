import { StyleSheet, Text, View } from "react-native";
import React from "react";

import SeeAll from "./SeeAll";
import Clothing from "./Clothing";

const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.categoriesHeader}>
        <Text style={styles.category}>Categories</Text>
        <SeeAll />
      </View>
      <View style={styles.componentContainer}>
        <Clothing />
        <Clothing />
        <Clothing />
        <Clothing />
        <Clothing />
        <Clothing />

      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesContainer: {
    width: 335,
    height: 755,
    marginTop: 10,
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  category: {
    color: "#202020",
    fontWeight: 700,
    fontSize: 21,
    lineHeight: 30,
  },
  componentContainer: {
    flexDirection: 'row',
    flexWrap:'wrap',
    gap:0,
    justifyContent:'space-between'
  }
});
