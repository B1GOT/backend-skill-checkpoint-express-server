// ✅ routes/answer.mjs
import express from "express";
import db from "../utils/db.mjs";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Answers
 *   description: Answer management
 */

/**
 * @swagger
 * /questions/{questionId}/answers:
 *   post:
 *     summary: Add an answer to a question
 *     tags: [Answers]
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
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Answer created successfully
 *       400:
 *         description: Invalid request data
 *       404:
 *         description: Question not found
 *       500:
 *         description: Unable to create answer
 */
// ... route logic

/**
 * @swagger
 * /questions/{questionId}/answers:
 *   get:
 *     summary: Get all answers for a question
 *     tags: [Answers]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of answers
 *       404:
 *         description: Question not found
 *       500:
 *         description: Unable to fetch answers
 */
// ... route logic

/**
 * @swagger
 * /questions/{questionId}/answers:
 *   delete:
 *     summary: Delete all answers for a question
 *     tags: [Answers]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Answers deleted successfully
 *       404:
 *         description: Question not found
 *       500:
 *         description: Unable to delete answers
 */
// ... route logic

export default router;