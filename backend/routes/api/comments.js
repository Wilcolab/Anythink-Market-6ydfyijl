/**
 * Express router providing comment related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Route serving a list of comments.
 * @name get/
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */

/**
 * Route for deleting a comment by ID.
 * @name delete/:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {string} path.id - The ID of the comment to delete
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */


module.exports = router;

router.get("/", (req, res) => { 
    Comment.find().then(comments => {
        res.json(comments);
    });
});
//add endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndRemove(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
