const router = require('express').Router()
const Controller = require('../controller/controller')

router.get('/', Controller.showAllArticle)
router.post('/', Controller.postArticle)
router.put('/:id', Controller.updateArticle)
router.delete('/:id',Controller.deleteArticle)

router.get('/comment', Controller.showAllComment)
router.post('/comment', Controller.postComment)
router.patch('/comment/:id', Controller.updateComment)
router.delete('/comment/:id',Controller.deleteComment)

module.exports = router