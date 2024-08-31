const express = require('express');
const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThoughtById,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtControllers.js');


router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;