import { Router } from 'express';
import {
  getDoctors,
  getDoctorById,
  getSpecializations,
  getCities
} from '../controllers/doctor.controller.js';

const router = Router();

router.route('/')
  .get(getDoctors);

router.route('/:id')
  .get(getDoctorById);

router.route('/specializations/all')
  .get(getSpecializations);

router.route('/cities/all')
  .get(getCities);

export default router;