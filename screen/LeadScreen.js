import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ACCENT } from '../constant/color';

const leads = [
  {
    id: '1',
    name: 'JustPing Cafe',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.5,
    address: 'MG Road, Bengaluru',
  },
  {
    id: '2',
    name: 'Ping Motors',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.2,
    address: 'Connaught Place, New Delhi',
  },
  {
    id: '3',
    name: 'Ping Electronics',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.8,
    address: 'Park Street, Kolkata',
  },
  {
    id: '4',
    name: 'Ping Mart',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.3,
    address: 'Vashi, Navi Mumbai',
  },
  {
    id: '5',
    name: 'Cafe Ping',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.1,
    address: 'T Nagar, Chennai',
  },
  {
    id: '6',
    name: 'Ping Hardware',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.7,
    address: 'Banjara Hills, Hyderabad',
  },
  {
    id: '7',
    name: 'Ping Books',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.6,
    address: 'Sector 17, Chandigarh',
  },
  {
    id: '8',
    name: 'Ping Shoes',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.0,
    address: 'Hazratganj, Lucknow',
  },
  {
    id: '9',
    name: 'Ping Fashion',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 3.9,
    address: 'Brigade Road, Bengaluru',
  },
  {
    id: '10',
    name: 'Ping Grocery',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.4,
    address: 'Rohini, Delhi',
  },
  {
    id: '11',
    name: 'Ping Furniture',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.3,
    address: 'Salt Lake, Kolkata',
  },
  {
    id: '12',
    name: 'Ping Tech',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.9,
    address: 'Hinjewadi, Pune',
  },
  {
    id: '13',
    name: 'Ping Health',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.2,
    address: 'Anna Nagar, Chennai',
  },
  {
    id: '14',
    name: 'Ping Bakery',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.1,
    address: 'Sector 50, Noida',
  },
  {
    id: '15',
    name: 'Ping Decor',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.6,
    address: 'Civil Lines, Jaipur',
  },
  {
    id: '16',
    name: 'Ping Mobile',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.5,
    address: 'Koramangala, Bengaluru',
  },
  {
    id: '17',
    name: 'Ping Travel',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.8,
    address: 'Rajouri Garden, Delhi',
  },
  {
    id: '18',
    name: 'Ping Spa',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.4,
    address: 'Andheri West, Mumbai',
  },
  {
    id: '19',
    name: 'Ping Studio',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.0,
    address: 'Gariahat, Kolkata',
  },
  {
    id: '20',
    name: 'Ping Automobiles',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.7,
    address: 'Patliputra, Patna',
  },
  {
    id: '21',
    name: 'Ping Services',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 3.8,
    address: 'Lalpur, Ranchi',
  },
  {
    id: '22',
    name: 'Ping Optics',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.1,
    address: 'Thane West, Mumbai',
  },
  {
    id: '23',
    name: 'Ping Media',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.6,
    address: 'Panaji, Goa',
  },
  {
    id: '24',
    name: 'Ping Services',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.2,
    address: 'Sector 62, Noida',
  },
  {
    id: '25',
    name: 'Ping Mall',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.5,
    address: 'Aundh, Pune',
  },
  {
    id: '26',
    name: 'Ping Accessories',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.3,
    address: 'Velachery, Chennai',
  },
  {
    id: '27',
    name: 'Ping Jewels',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.9,
    address: 'Karol Bagh, Delhi',
  },
  {
    id: '28',
    name: 'Ping Crafts',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.0,
    address: 'Gomti Nagar, Lucknow',
  },
  {
    id: '29',
    name: 'Ping Watches',
    image: 'https://justping.com/justping-front/img/team/founder.png',
    rating: 4.4,
    address: 'Boring Road, Patna',
  },
  {
    id: '30',
    name: 'Ping Realty',
    image: 'https://justping.com/justping-front/img/team/tanvi.png',
    rating: 4.3,
    address: 'Satellite, Ahmedabad',
  },
];


const { width } = Dimensions.get('window');

const LeadScreen = () => {
  const renderLead = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>⭐ {item.rating.toFixed(1)}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={leads}
        keyExtractor={(item) => item.id}
        renderItem={renderLead}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  rating: {
    fontSize: 16,
    color: '#ff9800',
    marginTop: 6,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    backgroundColor: ACCENT || '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default LeadScreen;
