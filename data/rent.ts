// Rental data types
export interface Rental {
  id: string;
  title: string;
  price: number;
  location: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  amenities: string[];
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
}

// Sample rental data
export const rentals: Rental[] = [
  {
    id: '1',
    title: 'Modern Apartment in City Center',
    price: 1500,
    location: '123 Main Street, City Center',
    description: 'Beautiful modern apartment located in the heart of the city. Recently renovated with high-end finishes and appliances. Perfect for professionals or small families.',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9',
    ],
    amenities: [
      'Parking Space',
      'Balcony',
      'Air Conditioning',
      'High-Speed Internet',
      'Washer/Dryer',
      'Security System',
    ],
    contactInfo: {
      name: 'John Smith',
      phone: '+1 234 567 8900',
      email: 'john.smith@example.com',
    },
  },
  {
    id: '2',
    title: 'Cozy Studio Near University',
    price: 800,
    location: '456 College Avenue, University District',
    description: 'Perfect studio apartment for students or young professionals. Walking distance to university and public transportation.',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9',
    ],
    amenities: [
      'High-Speed Internet',
      'Study Desk',
      'Bike Storage',
      'Laundry Facilities',
    ],
    contactInfo: {
      name: 'Sarah Johnson',
      phone: '+1 234 567 8901',
      email: 'sarah.johnson@example.com',
    },
  },
  {
    id: '3',
    title: 'Luxury Penthouse with City View',
    price: 2500,
    location: '789 Skyline Drive, Downtown',
    description: 'Stunning penthouse apartment with panoramic city views. Features floor-to-ceiling windows, modern design, and premium finishes throughout. Perfect for those seeking luxury living.',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    ],
    amenities: [
      'Private Elevator',
      'Rooftop Terrace',
      'Smart Home System',
      'Wine Cellar',
      'Fitness Center Access',
      'Concierge Service',
      'Underground Parking',
    ],
    contactInfo: {
      name: 'Michael Chen',
      phone: '+1 234 567 8902',
      email: 'michael.chen@example.com',
    },
  },
  {
    id: '4',
    title: 'Family Home in Suburbs',
    price: 1800,
    location: '321 Oak Street, Green Valley',
    description: 'Spacious family home in a quiet suburban neighborhood. Large backyard, modern kitchen, and plenty of storage space. Close to schools and parks.',
    bedrooms: 4,
    bathrooms: 2,
    area: 200,
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    ],
    amenities: [
      'Large Backyard',
      'Garage',
      'Fireplace',
      'Central Heating',
      'Storage Space',
      'Garden',
      'Play Area',
    ],
    contactInfo: {
      name: 'Emily Wilson',
      phone: '+1 234 567 8903',
      email: 'emily.wilson@example.com',
    },
  },
  {
    id: '5',
    title: 'Waterfront Studio Apartment',
    price: 1200,
    location: '567 Harbor View, Marina District',
    description: 'Charming studio apartment with waterfront views. Modern appliances and efficient use of space. Walking distance to restaurants and shops.',
    bedrooms: 1,
    bathrooms: 1,
    area: 50,
    images: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    ],
    amenities: [
      'Waterfront View',
      'Bike Storage',
      'Community Pool',
      'Fitness Room',
      'Laundry Facilities',
      'Security System',
    ],
    contactInfo: {
      name: 'David Lee',
      phone: '+1 234 567 8904',
      email: 'david.lee@example.com',
    },
  },
  {
    id: '6',
    title: 'Historic Loft in Old Town',
    price: 1600,
    location: '890 Heritage Lane, Old Town',
    description: 'Unique loft conversion in a historic building. Exposed brick walls, high ceilings, and original architectural details. Located in the heart of the historic district.',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    images: [
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    ],
    amenities: [
      'Exposed Brick Walls',
      'High Ceilings',
      'Original Features',
      'Bike Storage',
      'Community Garden',
      'Art Studio Space',
    ],
    contactInfo: {
      name: 'Sophia Martinez',
      phone: '+1 234 567 8905',
      email: 'sophia.martinez@example.com',
    },
  }
];

// Helper function to get a rental by ID
export const getRentalById = (id: string): Rental | undefined => {
  return rentals.find(rental => rental.id === id);
};

// Helper function to filter rentals
export const filterRentals = (
  rentals: Rental[],
  priceRange: { min: string; max: string },
  selectedBeds: number | null,
  locationFilter: string
): Rental[] => {
  return rentals.filter(rental => {
    // Price filter
    const price = rental.price;
    const minPrice = priceRange.min ? parseInt(priceRange.min) : 0;
    const maxPrice = priceRange.max ? parseInt(priceRange.max) : Infinity;
    
    if (price < minPrice || price > maxPrice) return false;

    // Beds filter
    if (selectedBeds !== null && rental.bedrooms !== selectedBeds) return false;

    // Location filter
    if (locationFilter && !rental.location.toLowerCase().includes(locationFilter.toLowerCase())) return false;

    return true;
  });
}; 