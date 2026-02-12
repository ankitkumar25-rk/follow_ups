import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Doctor } from '../models/doctor.model.js';

dotenv.config();

const doctors = [
  {
    name: "Dr. Arjun Sharma",
    email: "arjun.sharma@medclinic.com",
    specialization: "Cardiologist",
    license_number: "MHMC-12345",
    hospital_affiliation: "Medanta Hospital",
    contact_number: "+919876543210",
    city: "Mumbai",
    experience_years: 15,
    consultation_fee: 1500,
    rating: 4.8,
    total_ratings: 142
  },
  {
    name: "Dr. Priya Patel",
    email: "priya.patel@cityhospital.com",
    specialization: "Neurologist",
    license_number: "GMC-67890",
    hospital_affiliation: "City Hospital",
    contact_number: "+919876543211",
    city: "Delhi",
    experience_years: 12,
    consultation_fee: 1800,
    rating: 4.9,
    total_ratings: 203
  },
  {
    name: "Dr. Rohan Desai",
    email: "rohan.desai@apollohosp.com",
    specialization: "Orthopedic Surgeon",
    license_number: "KMC-11223",
    hospital_affiliation: "Apollo Hospital",
    contact_number: "+919876543212",
    city: "Bangalore",
    experience_years: 10,
    consultation_fee: 1200,
    rating: 4.7,
    total_ratings: 98
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();