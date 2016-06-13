import React, { PropTypes, Component } from 'react'
import Comment from './Comment'
import Pager from './Pager'

class CommentsList  extends Component {
	state = {
        isOpen: false,
        some: 'other'
    }

    render () {
    	const { comments, pages } = this.props       
        const commentItems = comments.map((commment) => <li key={commment.id}><Comment comment = {commment} /></li>)     
        
        return (<div>
        <h3>Comments</h3>
            {commentItems}
        <Pager pages={ pages}/>    
        </div>)
    }
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentsList