const Router = require('express');
const router = new Router();
const authMiddleware = require('../Middleware/auth.middleware')
const fileController = require('../Controllers/fileController')

router.post('', authMiddleware, fileController.createDir)
router.get('', authMiddleware, fileController.fetchFiles)


module.exports = router