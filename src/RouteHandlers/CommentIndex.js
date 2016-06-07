import React, { Component, PropTypes } from 'react'
import CommentContainer from '../containers/CommentContainer'

class CommentIndex extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>All comments</h1>
                <CommentContainer />
                {this.props.children}
            </div>
        )
    }
}

export default CommentIndex