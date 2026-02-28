const express = require('express');
const {
  createMood,
  getAllMoods,
  getMoodStats,
  getMoodById,
  updateMood,
  deleteMood,
} = require('../controllers/moodController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

router.post('/', createMood);
router.get('/', getAllMoods);
router.get('/stats', getMoodStats);
router.get('/:id', getMoodById);
router.put('/:id', updateMood);
router.delete('/:id', deleteMood);

module.exports = router;
