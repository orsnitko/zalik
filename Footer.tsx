import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text, // Added Text import for potential future use or if needed for accessibility
} from 'react-native';

interface FooterProps {
  currentPage: 'home' | 'rentals' | 'feedback' | 'signin' | 'signup';
  onNavigate: (page: 'home' | 'rentals' | 'feedback' | 'signin' | 'signup') => void;
}

function Footer({ currentPage, onNavigate }: FooterProps): React.JSX.Element {
  return (
    <View style={styles.footer}>
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
      {/* Profile/SignIn/SignUp Button */}
      <TouchableOpacity
        style={[
          styles.navButton, // Using navButton style for consistency
          (currentPage === 'signin' || currentPage === 'signup') && styles.activeButton
        ]}
        onPress={() => onNavigate('signin')}>
        <Image 
          source={require('./img/6522516.png')}
          style={[styles.navIcon, (currentPage === 'signin' || currentPage === 'signup') && styles.activeIcon]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#e6eefa', // Using the same background as the header
    borderTopWidth: 0.5,
    borderTopColor: '#2c5282',
    position: 'absolute', // Position at the bottom
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeButton: {
    //backgroundColor: '#3498db',
  },
  navIcon: {
    width: 28, // Slightly larger icons for footer
    height: 28,
    tintColor: '#000',
  },
  activeIcon: {
    tintColor: '#2029f7',
  },
});

export default Footer; 