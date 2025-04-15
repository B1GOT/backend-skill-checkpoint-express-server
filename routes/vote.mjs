// ✅ routes/vote.mjs
import express from "express";
import db from "../utils/db.mjs";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Votes
 *   description: Voting on questions and answers
 */

/**
 * @swagger
 * /questions/{questionId}/vote:
 *   post:
 *     summary: Vote on a question
 *     tags: [Votes]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vote:
 *                 type: integer
 *                 enum: [1, -1]
 *     responses:
 *       200:
 *         description: Vote recorded
 *       400:
 *         description: Invalid vote value
 *       404:
 *         description: Question not found
 *       500:
 *         description: Unable to vote
 */
// ... route logic

/**
 * @swagger
 * /answers/{answerId}/vote:
 *   post:
 *     summary: Vote on an answer
 *     tags: [Votes]
 *     parameters:
 *       - in: path
 *         name: answerId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vote:
 *                 type: integer
 *                 enum: [1, -1]
 *     responses:
 *       200:
 *         description: Vote recorded
 *       400:
 *         description: Invalid vote value
 *       404:
 *         description: Answer not found
 *       500:
 *         description: Unable to vote
 */
// ... route logic

export default router;
