import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Rental } from '../data/rent';

interface RentalDetailProps {
  rental: Rental;
  onBack: () => void;
}

function RentalDetail({ rental, onBack }: RentalDetailProps): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>← Back to Listings</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: rental.images[0] }}
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{rental.title}</Text>
        <Text style={styles.price}>${rental.price}/month</Text>
        <Text style={styles.location}>{rental.location}</Text>

        <View style={styles.specs}>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>{rental.bedrooms}</Text>
            <Text style={styles.specLabel}>Bedrooms</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>{rental.bathrooms}</Text>
            <Text style={styles.specLabel}>Bathrooms</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>{rental.area}</Text>
            <Text style={styles.specLabel}>m²</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{rental.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.amenitiesList}>
            {rental.amenities.map((amenity, index) => (
              <View key={index} style={styles.amenityItem}>
                <Text style={styles.amenityText}>• {amenity}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>{rental.contactInfo.name}</Text>
            <Text style={styles.contactDetail}>{rental.contactInfo.phone}</Text>
            <Text style={styles.contactDetail}>{rental.contactInfo.email}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '600',
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 16,
    paddingBottom: 45,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3498db',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 16,
  },
  specs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 16,
  },
  specItem: {
    alignItems: 'center',
  },
  specValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  specLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
  },
  amenitiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenityItem: {
    width: '50%',
    marginBottom: 8,
  },
  amenityText: {
    fontSize: 16,
    color: '#34495e',
  },
  contactInfo: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  contactDetail: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 4,
  },
});

export default RentalDetail; 