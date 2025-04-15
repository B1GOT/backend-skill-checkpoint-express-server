// ✅ routes/question.mjs
import express from "express";
import db from "../utils/db.mjs";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Question management
 */

/**
 * @swagger
 * /questions:
 *   post:
 *     summary: Create a new question
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Question created successfully
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Unable to create question
 */
// ... route logic

/**
 * @swagger
 * /questions:
 *   get:
 *     summary: Get all questions
 *     tags: [Questions]
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Unable to fetch questions
 */
// ... route logic

/**
 * @swagger
 * /questions/{questionId}:
 *   get:
 *     summary: Get a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Question not found
 *       500:
 *         description: Unable to fetch questions
 */
// ... route logic

/**
 * @swagger
 * /questions/{questionId}:
 *   put:
 *     summary: Update a question
 *     tags: [Questions]
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
 *               - title
 *               - description
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Question updated successfully
 *       400:
 *         description: Invalid request data
 *       404:
 *         description: Question not found
 *       500:
 *         description: Unable to fetch questions
 */
// ... route logic

/**
 * @swagger
 * /questions/{questionId}:
 *   delete:
 *     summary: Delete a question
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Question post has been deleted successfully
 *       404:
 *         description: Question not found
 *       500:
 *         description: Unable to delete question
 */
// ... route logic

/**
 * @swagger
 * /questions/search:
 *   get:
 *     summary: Search questions by title or category
 *     tags: [Questions]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Invalid search parameters
 *       500:
 *         description: Unable to fetch a question
 */
// ... route logic

export default router;