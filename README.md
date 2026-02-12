Sage Backend - Prescription Builder API
Backend API for a prescription builder system with doctor referral functionality.

Features
Doctor management with search, filters & pagination

Prescription creation with diagnosis storage

MongoDB integration with Mongoose

RESTful API design

Tech Stack
Node.js, Express.js, MongoDB, Mongoose, ES6 Modules

API Endpoints
GET /api/v1/doctors - List doctors with filters

POST /api/v1/prescriptions - Create prescription

# Get all doctors
curl http://localhost:5000/api/v1/doctors

# Filter by specialization and city
curl "http://localhost:5000/api/v1/doctors?specialization=Cardiologist&city=Mumbai"

# Search doctors
curl "http://localhost:5000/api/v1/doctors?search=sharma"

# Get available doctors with rating > 4.5
curl "http://localhost:5000/api/v1/doctors?available=true&min_rating=4.5"

# Pagination and sorting
curl "http://localhost:5000/api/v1/doctors?page=1&limit=10&sort_by=rating&order=desc"
