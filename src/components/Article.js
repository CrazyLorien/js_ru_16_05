import React, { PropTypes, Component } from 'react'
import CommentsList from './CommentsList'

class Article extends Component {
    state = {
        isOpen: false,
        some: 'other'
    }

    render() {
        const { article } =  this.props     
        if (!article) return <h3>No article</h3>

        const { title, text, id  } = article
        const { isOpen } = this.state
        const textItem = isOpen ? <section>{text}</section> : null
        const comments = article.comments ? <CommentsList comments = { article.comments } />:  <div>No comments</div>;
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                <div>{textItem}</div>
                {comments}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired,
        comments : PropTypes.Array 
        })
}

export default Article