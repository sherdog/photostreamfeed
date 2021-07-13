/** 
 * Defines Routes for components
 */
 import express from 'express';
 import defaultController from '../controllers/defaultController';
 
 const router = express.Router();
 
 router.get('/', defaultController.ShowHomepage);
 
 export = router;