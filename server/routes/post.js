import express from 'express'

import {getPosts } from '../controllers/post.js'

const router = express.Router()

router.get('/',getPosts)



// module.exports = router
export default router;