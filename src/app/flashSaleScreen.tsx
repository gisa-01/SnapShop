import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ProductCard } from '@/components/ProductCard';

const DISCOUNTS = ['All', '10%', '20%', '30%', '40%', '50%'];

const FLASH_ITEMS = [
  { id: '1', title: 'Lorem ipsum dolor sit amet consectetur.', price: '$16,00', oldPrice: '$20,00', discount: '-20%', image: require('@/assets/snapShopIcons/image1.png') },
  { id: '2', title: 'Lorem ipsum dolor sit amet consectetur.', price: '$16,00', oldPrice: '$20,00', discount: '-20%', image: require('@/assets/snapShopIcons/image5.png') },
  { id: '3', title: 'Lorem ipsum dolor sit amet consectetur.', price: '$16,00', oldPrice: '$20,00', discount: '-20%', image: require('@/assets/snapShopIcons/cloth3.png') },
  { id: '4', title: 'Lorem ipsum dolor sit amet consectetur.', price: '$16,00', oldPrice: '$20,00', discount: '-20%', image: require('@/assets/snapShopIcons/cloth4.png') },
  { id: '5', title: 'Lorem ipsum dolor sit amet consectetur.', price: '$16,00', oldPrice: '$20,00', discount: '-20%', image: require('@/assets/snapShopIcons/cloth2.png') },
  { id: '6', title: 'Lorem ipsum dolor sit amet consectetur.', price: '$16,00', oldPrice: '$20,00', discount: '-20%', image: require('@/assets/snapShopIcons/cloth1.png') },
  { id: '7', title: 'Lorem ipsum dolor sit amet consectetur.', price: '$16,00', oldPrice: '$20,00', discount: '-20%', image: require('@/assets/snapShopIcons/image1.png') },
  { id: '8', title: 'Lorem ipsum dolor sit amet consectetur.', price: '$16,00', oldPrice: '$20,00', discount: '-20%', image: require('@/assets/snapShopIcons/image5.png') },
];

export default function FlashSaleScreen() {
  const [selectedDiscount] = useState('20%');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerBackground}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerTitle}>Flash Sale</Text>
              <Text style={styles.headerSubtitle}>Choose Your Discount</Text>
            </View>

            <View style={styles.timerContainer}>
              <Feather name="clock" size={16} color="#FFFFFF" style={{ marginRight: 6 }} />
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>00</Text>
              </View>
              <Text style={styles.colon}>:</Text>
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>36</Text>
              </View>
              <Text style={styles.colon}>:</Text>
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>58</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{selectedDiscount} Discount</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Feather name="sliders" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {FLASH_ITEMS.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              discount={item.discount}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerBackground: {
    backgroundColor: '#0052FF',
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    paddingTop: 54,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#E0E8FF',
    fontWeight: '500',
    marginTop: 2,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
  },
  colon: {
    color: '#FFFFFF',
    fontWeight: '700',
    marginHorizontal: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    width:'100%',
    marginVertical:'auto',

  },
});