import express from 'express';

import logger from '../logger.js';
// Import manifests
import preview from '../views/preview.view.js';
import manifest from '../manifests/manifests.js';

// Import Views

// Initiate Router
const router = express.Router();

// Set up routes
router.get(
  '/manifest',
  (req, res) => {
    logger.info('Request /manifest route');
    return res.json(manifest);
  }
);

router.get('/component', (req, res) => {
  logger.info('Request /component route');
  res.type('text/html');

  res.end('<amedia-frontpage id="teasers"><h2 slot="heading">Loading...</h2></amedia-frontpage>');
});


router.get('/preview', (req, res) => {
  const publication = req.query.publication
  logger.info('Request /preview route');
  res.type('text/html');

  // Kan vi ha publication som en query param til routen? -Fikset
  const html = preview({ publication: publication });
  res.end(html);
});

// Legg inn

// Export application
export default router;
