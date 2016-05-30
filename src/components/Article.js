import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import { deleteArticle } from '../AC/articles'
import { addComment } from '../AC/comments'
import { articleStore, commentStore } from '../stores'


class Article extends Component {
    constructor() {
        super()
        this.state = {
            some: ''
        }
    }
    
     componentDidMount() {       
        //commentStore.addChangeListener(this.handleAddComment)
     }
       
     componentWillUnmount() {
        //commentStore.removeChangeListener(this.handleAddComment)    
     }

    componentWillMount() {
    }

    componentDidUpdate() {
    }

    render() {

        const { article, isOpen, toggleOpen } = this.props
        if (!article) return <h3>No article</h3>

        const { title, text, comments, id } = article
        const textItem = isOpen ? <section>
            {text}
            <div><CommentList comments = {article.getRelation('comments')} ref="list" /></div>
        </section> : null
        return (
            <div>
                <h3 onClick = {toggleOpen} ref="title">
                    {title}
                    <a href="#" onClick={this.handleDelete}>delete me</a>
                </h3>
                {textItem}
                <div>
                <p>Add comment</p>
                <textarea ref="comment"/>
                <button onClick={this.handleAddComment}>Add comment</button>
                </div>
            </div>

        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }
    
    //here we add method that invoce add coment 
    
    handleAddComment = (ev) =>  {
        if(ev)
            ev.preventDefault()
        addComment(this.refs.comment.value, this.props.article.id)
        
    }
    
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired
    }),

    //From toggleOpen decorator
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default Article