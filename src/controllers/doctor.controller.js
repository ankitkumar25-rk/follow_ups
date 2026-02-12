import { Doctor } from '../models/doctor.model.js';

const getDoctors = async (req, res, next) => {
  try {
    const {
      specialization,
      city,
      available = 'true',
      search,
      limit = 20,
      page = 1,
      sort_by = 'name',
      order = 'asc'
    } = req.query;

    const filter = {};
    
    if (specialization) filter.specialization = { $regex: specialization, $options: 'i' };
    if (city) filter.city = { $regex: city, $options: 'i' };
    if (available === 'true' || available === 'false') {
      filter.is_available_for_referral = available === 'true';
    }
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { specialization: { $regex: search, $options: 'i' } }
      ];
    }

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const sortOrder = order === 'desc' ? -1 : 1;
    const sort = { [sort_by]: sortOrder };

    const doctors = await Doctor.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limitNum);

    const total = await Doctor.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: doctors.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      data: doctors
    });

  } catch (error) {
    next(error);
  }
};

const getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }

    res.status(200).json({
      success: true,
      data: doctor
    });
  } catch (error) {
    next(error);
  }
};

const getSpecializations = async (req, res, next) => {
  try {
    const specializations = await Doctor.distinct('specialization');
    
    res.status(200).json({
      success: true,
      data: specializations.sort()
    });
  } catch (error) {
    next(error);
  }
};

const getCities = async (req, res, next) => {
  try {
    const cities = await Doctor.distinct('city');
    
    res.status(200).json({
      success: true,
      data: cities.sort()
    });
  } catch (error) {
    next(error);
  }
};

export {
  getDoctors,
  getDoctorById,
  getSpecializations,
  getCities
};