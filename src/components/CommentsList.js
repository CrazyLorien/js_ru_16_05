import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentsList  extends Component {
	state = {
        isOpen: false,
        some: 'other'
    }

    render () {
    	const { comments } = this.props
        const commentItems = comments.map((commment) => <li key={commment.id}><Comment comment = {commment} /></li>)
        const { isOpen } = this.state
        const textComment = isOpen ? <section>{commentItems}</section> : null
        
        return (<ul>
        <h3 className={isOpen ? 'title expandable animated' : 'title expandable'} onClick = {this.handleClick}>Comments</h3>
            {textComment}
        </ul>)
    }

     handleClick = (ev) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentsList