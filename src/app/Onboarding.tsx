import { useState } from "react";
import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";

import HelloCard from "@/components/HelloCard";
import ReadyCard from "@/components/ReadyCard";

const screens = [
  {
    id: "1",
    component: <HelloCard />,
  },
  {
    id: "2",
    component: <ReadyCard />,
  },
];

const Onboarding = () => {
  const { width } = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        data={screens}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width }}>{item.component}</View>
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      <View style={styles.pagination}>
        {screens.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },

  pagination: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    flexDirection: "row",
    gap: 8,
  },

  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#D9D9D9",
  },

  activeDot: {
    backgroundColor: "#004CFF",
  },

});
