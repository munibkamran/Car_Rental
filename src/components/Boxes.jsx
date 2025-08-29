import React from 'react'
import { Shield, Clock4, CreditCard, MapPin, Headphones, FileBadge, Users, Zap  } from 'lucide-react';

export const features = [
  {
    title: 'Fully Insured',
    description: 'All our vehicles come with comprehensive insurance coverage for your peace of mind.',
    icon: <Shield className='w-8 h-8' />,
  },
  {
    title: '24/7 Service',
    description: 'Round-the-clock customer support and roadside assistance whenever you need it.',
    icon: <Clock4 className='w-8 h-8' />,
  },
  {
    title: 'Easy Payment',
    description: 'Secure online payments with multiple payment options and instant confirmation.',
    icon: <CreditCard className='w-8 h-8' />,
  },
  {
    title: 'Multiple Locations',
    description: 'Pick up and drop off at any of our 50+ convenient locations across the country.',
    icon: <MapPin className='w-8 h-8' />,
  },
  {
    title: 'Expert Support',
    description: 'Our dedicated team is here to help you find the perfect vehicle for your needs.',
    icon: <Headphones className='w-8 h-8' />,
  },
  {
    title: 'Premium Quality',
    description: 'All vehicles are regularly maintained and meet our high-quality standards.',
    icon: <FileBadge className='w-8 h-8' />,
  },
  {
    title: 'Trusted by Thousands',
    description: 'Join over 100,000 satisfied customers who trust us with their transportation needs.',
    icon: <Users className='w-8 h-8' />,
  },
  {
    title: 'Instant Booking',
    description: 'Book your car in just a few clicks and get instant confirmation via email.',
    icon: <Zap className='w-8 h-8' />,
  },
];

