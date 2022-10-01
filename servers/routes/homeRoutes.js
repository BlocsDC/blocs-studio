// Import Express
import express from 'express';
// Imports routes controllers from controller
import { HomePage, AboutPage, ResumePage } from '../controllers/homeRoute.js';

// Initialise Routes
const homeRoutes = express.Router();

// Route Pages Start
homeRoutes.get('/', HomePage);

homeRoutes.get('/about', AboutPage);

homeRoutes.get('/resume', ResumePage);
// Route Pages End

// Export Default homeRoutes
export default homeRoutes;