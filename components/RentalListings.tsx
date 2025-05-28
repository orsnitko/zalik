import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import { Rental, rentals, filterRentals } from '../data/rent';

interface RentalListingsProps {
  onBack: () => void;
  onRentalPress: (rental: Rental) => void;
  priceRange: { min: string; max: string };
  setPriceRange: Dispatch<SetStateAction<{ min: string; max: string }>>;
  selectedBeds: number | null;
  setSelectedBeds: Dispatch<SetStateAction<number | null>>;
  locationFilter: string;
  setLocationFilter: Dispatch<SetStateAction<string>>;
  onClearFilters: () => void;
  viewMode: 'list' | 'block';
  setViewMode: Dispatch<SetStateAction<'list' | 'block'>>;
}

function RentalListings({ 
  onBack, 
  onRentalPress, 
  priceRange,
  setPriceRange,
  selectedBeds,
  setSelectedBeds,
  locationFilter,
  setLocationFilter,
  onClearFilters,
  viewMode,
  setViewMode
}: RentalListingsProps): React.JSX.Element {
  const filteredRentals = useMemo(() => {
    return filterRentals(rentals, priceRange, selectedBeds, locationFilter);
  }, [priceRange, selectedBeds, locationFilter]);

  const renderRentalCard = (rental: Rental) => (
    <TouchableOpacity
      key={rental.id}
      style={[
        styles.rentalCard,
        viewMode === 'list' && styles.rentalCardList
      ]}
      onPress={() => onRentalPress(rental)}
    >
      <Image
        source={{ uri: rental.images[0] }}
        style={[
          styles.rentalImage,
          viewMode === 'list' && styles.rentalImageList
        ]}
        resizeMode="cover"
      />
      <View style={[
        styles.rentalInfo,
        viewMode === 'list' && styles.rentalInfoList
      ]}>
        <Text 
          style={styles.rentalTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >{rental.title}</Text>
        <Text style={styles.rentalPrice}>${rental.price}/month</Text>
        <Text 
          style={styles.rentalLocation}
          numberOfLines={1}
          ellipsizeMode="tail"
        >{rental.location}</Text>
        <View style={styles.rentalSpecs}>
          <Text style={styles.specText}>{rental.bedrooms} beds</Text>
          <Text style={styles.specText}>•</Text>
          <Text style={styles.specText}>{rental.bathrooms} baths</Text>
          <Text style={styles.specText}>•</Text>
          <Text style={styles.specText}>{rental.area}m²</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView style={styles.mainScroll} contentContainerStyle={styles.mainScrollContent}>
        <View style={styles.headerSection}>
          <Text style={styles.scrollTitle}>Available Rentals</Text>
        </View>

        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Filters</Text>
          
          {/* Price Range Filter */}
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Price Range</Text>
            <View style={styles.priceInputs}>
              <TextInput
                style={styles.priceInput}
                value={priceRange.min}
                onChangeText={(text) => setPriceRange(prev => ({ ...prev, min: text }))}
                placeholder="Min"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              <Text style={styles.priceSeparator}>-</Text>
              <TextInput
                style={styles.priceInput}
                value={priceRange.max}
                onChangeText={(text) => setPriceRange(prev => ({ ...prev, max: text }))}
                placeholder="Max"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          {/* Bedrooms Filter */}
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Bedrooms</Text>
            <View style={styles.bedButtons}>
              {[1, 2, 3, 4].map((beds) => (
                <TouchableOpacity
                  key={beds}
                  style={[
                    styles.bedButton,
                    selectedBeds === beds && styles.selectedBedButton,
                  ]}
                  onPress={() => setSelectedBeds(selectedBeds === beds ? null : beds)}>
                  <Text style={[
                    styles.bedButtonText,
                    selectedBeds === beds && styles.selectedBedButtonText,
                  ]}>
                    {beds}+
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Location Filter */}
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Location</Text>
            <TextInput
              style={styles.locationInput}
              value={locationFilter}
              onChangeText={setLocationFilter}
              placeholder="Enter location..."
              placeholderTextColor="#999"
            />
          </View>

          {/* Clear Filters Button */}
          <TouchableOpacity style={styles.clearButton} onPress={onClearFilters}>
            <Text style={styles.clearButtonText}>Clear Filters</Text>
          </TouchableOpacity>

          {/* View Toggle */}
          <View style={styles.viewToggleSection}>
            <Text style={styles.filterLabel}>View Mode</Text>
            <View style={styles.viewToggle}>
              <TouchableOpacity
                style={[
                  styles.viewToggleButton,
                  viewMode === 'block' && styles.viewToggleButtonActive
                ]}
                onPress={() => setViewMode('block')}
              >
                <Text style={[
                  styles.viewToggleText,
                  viewMode === 'block' && styles.viewToggleTextActive
                ]}>Block</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.viewToggleButton,
                  viewMode === 'list' && styles.viewToggleButtonActive
                ]}
                onPress={() => setViewMode('list')}
              >
                <Text style={[
                  styles.viewToggleText,
                  viewMode === 'list' && styles.viewToggleTextActive
                ]}>List</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[
          styles.listings,
          viewMode === 'list' && styles.listingsList
        ]}>
          {filteredRentals.map(renderRentalCard)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 0,
    borderBottomWidth: 0,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  scrollTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: '#f0f4fa',
    borderRadius: 8,
    padding: 4,
  },
  viewToggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  viewToggleButtonActive: {
    backgroundColor: '#3498db',
  },
  viewToggleText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  viewToggleTextActive: {
    color: '#fff',
  },
  mainScroll: {
    flex: 1,
  },
  mainScrollContent: {
    paddingBottom: 70,
  },
  filtersContainer: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  priceInputs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: 'black',
  },
  priceSeparator: {
    marginHorizontal: 8,
    color: '#666',
  },
  bedButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  bedButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedBedButton: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  bedButtonText: {
    color: '#666',
    fontWeight: '600',
  },
  selectedBedButtonText: {
    color: '#fff',
  },
  locationInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'black',
  },
  clearButton: {
    backgroundColor: '#f0f4fa',
    borderColor: '#000',
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  clearButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  listings: {
    padding: 16,
  },
  listingsList: {
    padding: 8,
  },
  rentalCard: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rentalCardList: {
    margin: 8,
    flexDirection: 'row',
    height: 120,
  },
  rentalImage: {
    width: '100%',
    height: 200,
  },
  rentalImageList: {
    width: 120,
    height: '100%',
  },
  rentalInfo: {
    padding: 16,
  },
  rentalInfoList: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  rentalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  rentalPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3498db',
    marginBottom: 4,
  },
  rentalLocation: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  rentalSpecs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginRight: 8,
  },
  viewToggleSection: {
    marginTop: 16,
    marginBottom: 8,
  },
});

export default RentalListings; 