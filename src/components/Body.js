import React, { PropTypes } from 'react'
import CommentList from './CommentList'

function Body(props) {
    const { article, comments } = props
    const { text, loading } = article
    if (loading) return <h3>Loading...</h3>

    return (
        <section>
            {text}
            <div><CommentList article = {article } comments = {comments}/></div>
        </section>
    )
}

Body.propTypes = {
    article: PropTypes.object.isRequired
}

export default Body