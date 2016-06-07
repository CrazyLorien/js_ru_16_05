import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'
import connectToStore from '../decorators/connectToStore'
import { loadArticleById } from '../AC/articles'

class CommentsContainer extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,

        article: PropTypes.object
    };

    render() {
        const { comments } = this.props
        return (
            <div>
                <h3>All comments </h3>
                <CommentsPage comments={comments} />
            </div>
        )
    }
}

function getStateFromProps(stores, props) {
    const { comments } = props
    const page = props.page
    const limit = props.limit
    const offset = props.offset * page
    loadAllComments(page, limit, offset)
    return { comments }
}

export default connectToStore(null, getStateFromProps)(CommentsContainer)