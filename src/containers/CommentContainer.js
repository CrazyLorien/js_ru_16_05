import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import connectToStore from '../decorators/connectToStore'
import { loadListComments } from '../AC/comments'
import CommentScroll from '../components/CommentScroll'

class CommentContainer extends Component {
    render() {
        const { comments, loading, pages } = this.props
        if (loading) return <h1>Loading...</h1>
       
        return <CommentScroll comments = {comments} pages={pages}/>
    }
}
let LoadedArray = [];

function getState(stores) {
    const { comments } = stores
    let { limit, offset, pageNumber } = comments
    if(LoadedArray[pageNumber+offset+limit] === undefined)
    {
       LoadedArray[pageNumber+offset+limit] = true
       loadListComments({ limit :limit, offset: offset*pageNumber})
    }
 
    return {
        loading: comments.loading,
        comments: comments.getAll(),
        pages: comments.pages
    }
}

export default connectToStore(['comments'], getState)(CommentContainer)