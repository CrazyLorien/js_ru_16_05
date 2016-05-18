import React, { PropTypes, Component } from 'react'

class Comment extends Component {
    render() {
        const { comment } = this.props
        const { name, text, id } = comment
        return (
            <div>
                <h3> {name} </h3>
                {text}
            </div>
        )
    }
}

Comment.propTypes = {
        comment: PropTypes.shape({
           name: PropTypes.string.isRequired,
           text: PropTypes.string,
           id: PropTypes.number.isRequired
    })
}

export default Comment