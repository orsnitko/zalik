import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import RentalListings from './components/RentalListings';
import Header from './Header';
import FeedbackForm from './components/FeedbackForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import RentalDetail from './components/RentalDetail';
import Footer from './Footer';
import { Rental, rentals } from './data/rent';

function App(): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState<'home' | 'rentals' | 'feedback' | 'signin' | 'signup' | 'rental-detail'>('home');
  const [selectedRental, setSelectedRental] = useState<Rental>(rentals[0]);
  const [viewMode, setViewMode] = useState<'list' | 'block'>('block');

  // Filter state for RentalListings
  const [priceRange, setPriceRange] = useState({ min: '', max: '',});
  const [selectedBeds, setSelectedBeds] = useState<number | null>(null);
  const [locationFilter, setLocationFilter] = useState('');

  const handleNavigation = (page: 'home' | 'rentals' | 'feedback' | 'signin' | 'signup' | 'rental-detail') => {
    setCurrentPage(page);
  };

  // Clear filters function, moved from RentalListings.tsx
  const clearFilters = () => {
    setPriceRange({ min: '', max: '' });
    setSelectedBeds(null);
    setLocationFilter('');
  };

  if (currentPage === 'rental-detail') {
    return (
      <SafeAreaView style={styles.container}>
        <Header currentPage="rentals" onNavigate={handleNavigation} />
        <RentalDetail 
          rental={selectedRental} 
          onBack={() => handleNavigation('rentals')} 
        />
        <Footer currentPage="rentals" onNavigate={handleNavigation} />
      </SafeAreaView>
    );
  }

  if (currentPage === 'rentals') {
    return (
      <SafeAreaView style={styles.container}>
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <RentalListings 
          onBack={() => handleNavigation('home')}
          onRentalPress={(rental) => {
            setSelectedRental(rental);
            handleNavigation('rental-detail');
          }}
          // Pass filter state and setters as props
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedBeds={selectedBeds}
          setSelectedBeds={setSelectedBeds}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          onClearFilters={clearFilters}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <Footer currentPage={currentPage} onNavigate={handleNavigation} />
      </SafeAreaView>
    );
  }

  if (currentPage === 'feedback') {
    return (
      <SafeAreaView style={styles.container}>
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <FeedbackForm />
        <Footer currentPage={currentPage} onNavigate={handleNavigation} />
      </SafeAreaView>
    );
  }

  if (currentPage === 'signin') {
    return (
      <SafeAreaView style={styles.container}>
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <SignIn onNavigate={handleNavigation} />
        <Footer currentPage={currentPage} onNavigate={handleNavigation} />
      </SafeAreaView>
    );
  }

  if (currentPage === 'signup') {
    return (
      <SafeAreaView style={styles.container}>
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <SignUp onNavigate={handleNavigation} />
        <Footer currentPage={currentPage} onNavigate={handleNavigation} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.heroSection}>
          <Image
            source={require('./img/4221119.jpg')}
            style={styles.heroImage}
          />
          <Text style={[styles.heroText, {  
            textAlign: 'center', 
          }]}>
            Find Your Dream Home
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureCard}>
            <Text style={[styles.featureTitle, {  
            textAlign: 'center', 
          }]}>Easy Search</Text>
            <Text style={[styles.featureDescription, {  
            textAlign: 'center', 
          }]}>
              Browse through thousands of verified rental properties with our powerful search tools
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={[styles.featureTitle, {  
            textAlign: 'center', 
          }]}>Verified Listings</Text>
            <Text style={[styles.featureDescription, {  
            textAlign: 'center', 
          }]}>
              All our properties are verified to ensure quality and authenticity
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={[styles.featureTitle, {  
            textAlign: 'center', 
          }]}>Secure Process</Text>
            <Text style={[styles.featureDescription, {  
            textAlign: 'center', 
          }]}>
              Safe and secure rental process with transparent pricing
            </Text>
          </View>
        </View>

        <View style={styles.contactInfoSection}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <View style={styles.contactDetail}>
            <Text style={styles.contactLabel}>Name:</Text>
            <Text style={styles.contactText}>{rentals[0].contactInfo.name}</Text>
          </View>
          <View style={styles.contactDetail}>
            <Text style={styles.contactLabel}>Phone:</Text>
            <Text style={styles.contactText}>{rentals[0].contactInfo.phone}</Text>
          </View>
          <View style={styles.contactDetail}>
            <Text style={styles.contactLabel}>Email:</Text>
            <Text style={styles.contactText}>{rentals[0].contactInfo.email}</Text>
          </View>
        </View>
      </ScrollView>
      <Footer currentPage={currentPage} onNavigate={handleNavigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 70,
  },
  heroSection: {
    padding: 20,
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  heroText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
  },
  featuresContainer: {
    padding: 20,
  },
  featureCard: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    color: '#7f8c8d',
    lineHeight: 24,
  },
  getStartedButton: {
    backgroundColor: '#3498db',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfoSection: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    marginTop: 20,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  contactDetail: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginRight: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#34495e',
  },
});

export default App;