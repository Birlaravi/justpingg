import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import TopBar from '../components/TopBar';
import { ACCENT } from '../constant/color';

const ALL_CATEGORIES = [
  { name: 'Restaurants', icon: 'restaurant', color: '#E74C3C' },
  { name: 'Hotels', icon: 'bed', color: '#9B59B6' },
  { name: 'Beauty Spa', icon: 'cut', color: '#E91E63' },
  { name: 'Home Decor', icon: 'home', color: '#F39C12' },
  { name: 'Education', icon: 'school', color: '#2980B9' },
  { name: 'Pet Shops', icon: 'paw', color: '#F1C40F' },
  { name: 'Hospitals', icon: 'medkit', color: '#C0392B' },
  { name: 'Pharmacy', icon: 'medkit-outline', color: '#27AE60' },
  { name: 'Grocery', icon: 'cart', color: '#2ECC71' },
  { name: 'Electronics', icon: 'tv', color: '#34495E' },
  { name: 'Fitness', icon: 'barbell', color: '#E67E22' },
  { name: 'Automobile', icon: 'car', color: '#1ABC9C' },
  { name: 'Real Estate', icon: 'business', color: '#8E44AD' },
  { name: 'Travel', icon: 'airplane', color: '#3498DB' },
  { name: 'Photography', icon: 'camera', color: '#7F8C8D' },
  { name: 'Bakery', icon: 'cafe', color: '#D35400' },
  { name: 'Cleaning', icon: 'broom', color: '#1ABC9C' },
  { name: 'Repair', icon: 'construct', color: '#95A5A6' },
  { name: 'Events', icon: 'calendar', color: '#E84393' },
  { name: 'Legal Services', icon: 'briefcase', color: '#2C3E50' },
];

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCategories = ALL_CATEGORIES.filter(cat =>
    cat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TopBar />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Hero/Search Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Find the best local services</Text>
          <View style={styles.searchRow}>
            <TextInput
              style={styles.input}
              placeholder="Search categories..."
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Image Slider */}
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            showsPagination
            dotStyle={{ backgroundColor: '#ccc' }}
            activeDotStyle={{ backgroundColor: ACCENT }}
          >
            <Image
              source={require('../assets/slider_1.jpg')}
              style={styles.sliderImage}
            />
            <Image
              source={require('../assets/slider_2.jpg')}
              style={styles.sliderImage}
            />
            <Image
              source={require('../assets/slider_3.jpg')}
              style={styles.sliderImage}
            />
          </Swiper>
        </View>

        {/* Category Scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {filteredCategories.slice(0, 10).map(cat => (
            <TouchableOpacity
              key={cat.name}
              style={[
                styles.category,
                selectedCategory === cat.name && styles.categorySelected,
              ]}
              onPress={() => setSelectedCategory(cat.name)}
            >
              <Ionicons
                name={cat.icon}
                size={24}
                color={selectedCategory === cat.name ? '#fff' : '#333'}
              />
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat.name && styles.categoryTextSelected,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Categories Grid */}
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <View style={styles.grid}>
          {filteredCategories.map(cat => (
            <TouchableOpacity key={cat.name} style={styles.card}>
              <Ionicons name={cat.icon} size={40} color={cat.color} />
              <Text style={styles.cardText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  hero: { marginBottom: 24 },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: ACCENT,
    marginBottom: 12,
    textAlign: 'center',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchButton: {
    marginLeft: 8,
    backgroundColor: ACCENT,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  searchButtonText: { color: '#fff', fontWeight: '600' },

  // Slider styles
  sliderContainer: {
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  categoryScroll: {
    paddingVertical: 8,
    flexDirection: 'row',
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  categorySelected: {
    backgroundColor: ACCENT,
  },
  categoryText: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginVertical: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginTop: 8,
  },
});

export default HomeScreen;
