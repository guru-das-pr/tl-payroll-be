import express from 'express';
import { registerUser, loginUser, getProfile } from '../controllers/auth.controller.js';
import { validateLogin, validateRegistration } from '../middlewares/validate/auth.validator.js';
import { verifyAndRefreshToken } from '../middlewares/verifyJwt.js';

const router = express.Router();


router.post('/register',validateRegistration, registerUser);

router.post('/login',validateLogin, loginUser);

router.get('/profile', verifyAndRefreshToken, getProfile);

// router.get('/users/role/:role', getUsersByRole);

export default router;