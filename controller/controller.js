const {Article, Comment} = require('../models')

class Controller {
    static showAllArticle(req, res) {
        Article.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
    }

    static showAllArticleBySorting(req, res) {
        let sort = 'createdAt'
        let arrange = 'ASC'
        if (req.body.sort === 'date') {
            sort = 'createdAt'
        } else if (req.body.sort === 'title') {
            sort = 'title'
        }

        if (req.body.setArrange === true ) {
            arrange = 'DESC'
        } else if (req.body.setArrange === false ) {
            arrange = 'ASC'
        }
        Article.findAll({
            order: [sort, arrange]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
    }

    static postArticle(req, res) {
        const newArticle = {
            title: req.body.title,
            body: req.body.body,
            publish: req.body.publish
        }
        Article.create(newArticle)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    static updateArticle(req, res) {
        Article.update(req.body, {
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.status(200).json({ message: 'Article has been updated'})
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    static deleteArticle(req, res) {
        Comment.destroy({
            where: {ArticleId: +req.params.id}
        })
        .then(data => {
            Article.destroy({
                where: { id: +req.params.id}
            })
        })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Article has been deleted'})
            } else {
                res.status(404).json({ message: 'Data not found' })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    static showAllComment(req, res) {
        Comment.findAll({
            where: { id: req.params.ArticleId}
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
    }

    static postComment(req, res) {
        const newComment = {
            body: req.body.body,
            name: req.body.name,
            ArticleId: req.body.ArticleId
        }
        Comment.create(newComment)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }
    static updateComment(req, res) {
        Comment.update({body: req.body.body}, {
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.status(200).json({ message: 'Comment has been updated'})
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    static deleteComment(req, res) {
        Comment.destroy({
            where: { id: +req.params.id}
        })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Comment has been deleted'})
            } else {
                res.status(404).json({ message: 'Data not found' })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        }) 
    }
}

module.exports = Controller