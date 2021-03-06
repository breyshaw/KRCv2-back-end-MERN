import { Router } from 'express'
import * as itemsCtrl from '../controllers/items.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/', itemsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, itemsCtrl.create)
router.delete('/:id', checkAuth, itemsCtrl.delete)
router.patch('/:id', checkAuth, itemsCtrl.update)
router.post('/:id/reviews', checkAuth, itemsCtrl.addReview)
export { router }
