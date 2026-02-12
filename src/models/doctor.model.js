import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Doctor name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true
  },
  specialization: {
    type: String,
    required: [true, 'Specialization is required'],
    trim: true
  },
  license_number: {
    type: String,
    unique: true,
    sparse: true
  },
  hospital_affiliation: String,
  contact_number: String,
  city: String,
  experience_years: Number,
  is_available_for_referral: {
    type: Boolean,
    default: true
  },
  consultation_fee: Number,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  total_ratings: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

doctorSchema.index({ specialization: 1 });
doctorSchema.index({ city: 1 });
doctorSchema.index({ name: 'text', specialization: 'text' });

export const Doctor = mongoose.model('Doctor', doctorSchema);