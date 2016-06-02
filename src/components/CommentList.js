import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { loadArticleCommentsAC } from '../AC/comments'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };
    
   constructor() {
        super()
        this.state = {
            comments : []
        }
    }


    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
            </div>
        )
    }

    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { isOpen, article} = this.props
        //у нас есть метод article.getRelation('comments')
       //делать тут обращение к серверу плохой паттерн - render должен быть чистой функцией, к серверу надо обращаться в lifecycle хуках;
        const comments = this.props.comments.filter( (item) => { return article.id === item.article} ).length === 0 && isOpen ?  this.handleGetArticleComments(article.id) :  this.props.comments
        if (!isOpen) return null
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>
            {items}
            <li><NewCommentForm articleId = {article.id} /></li>
        </ul>
    }
    
    
    handleGetArticleComments = (id) => {
        
        loadArticleCommentsAC(id)
    }
}

export default toggleOpen(CommentList)
