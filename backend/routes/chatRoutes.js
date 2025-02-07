const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/chatController');

router.post('/send', sendMessage);
router.get('/messages/:senderId/:receiverId', getMessages);

module.exports = router;