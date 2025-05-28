import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

interface HeaderProps {
  currentPage: 'home' | 'rentals' | 'feedback' | 'signin' | 'signup';
  onNavigate: (page: 'home' | 'rentals' | 'feedback' | 'signin' | 'signup') => void;
}

function Header({ currentPage, onNavigate }: HeaderProps): React.JSX.Element {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Apartment Rental</Text>
      </View>
      {/* Buttons will be moved to footer */}
      {/* <View style={styles.navigationContainer}>
        <View style={styles.mainNavigation}>
          <TouchableOpacity
            style={[styles.navButton, currentPage === 'home' && styles.activeButton]}
            onPress={() => onNavigate('home')}>
            <Image 
              source={require('./img/1946488.png')}
              style={[styles.navIcon, currentPage === 'home' && styles.activeIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, currentPage === 'rentals' && styles.activeButton]}
            onPress={() => onNavigate('rentals')}>
            <Image 
              source={require('./img/search.png')}
              style={[styles.navIcon, currentPage === 'rentals' && styles.activeIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, currentPage === 'feedback' && styles.activeButton]}
            onPress={() => onNavigate('feedback')}>
            <Image 
              source={require('./img/4658825.png')}
              style={[styles.navIcon, currentPage === 'feedback' && styles.activeIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.profileButton,
              (currentPage === 'signin' || currentPage === 'signup') && styles.profilIconActive
            ]}
            onPress={() => onNavigate('signin')}>
            <Image 
              source={require('./img/6522516.png')}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#2c5282',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  // navigationContainer: {
  //   flex: 2,
  //   alignItems: 'flex-end',
  // },
  // mainNavigation: {
  //   flexDirection: 'row',
  //   gap: 12,
  //   alignItems: 'center',
  // },
  // navButton: {
  //   paddingHorizontal: 4,
  //   paddingVertical: 8,
  //   borderRadius: 8,
  // },
  // activeButton: {
  //   backgroundColor: '#3498db',
  // },
  // navText: {
  //   fontSize: 14,
  //   color: 'white',
  //   fontWeight: '600',
  // },
  // activeText: {
  //   color: '#fff',
  // },
  // profileButton: {
  //   padding: 4,
  //   marginLeft: 8,
  // },
  // profileIcon: {
  //   width: 28,
  //   height: 28,
  //   tintColor: 'white',

  // },
  // profilIconActive: {
  //   backgroundColor: '#3498db',
  //   borderRadius: 8,
  // },
  // navIcon: {
  //   width: 24,
  //   height: 24,
  //   tintColor: 'white',
  // },
  // activeIcon: {
  //   tintColor: '#fff',
  // },
});

export default Header; 