var React = require('react'),
    PropTypes = React.PropTypes;
import toggleOpen from '../mixins/toggleOpen'
import CommentList from './CommentList'

var ArticleOld = React.createClass({
    propTypes: {
    }, 
    render() {
        const { article } = this.props
        if (!article) return <h3>No article</h3>

        const { title, text, comments, id } = article

        const textItem = this.props.isOpen ? <section>{text}<div><CommentList comments = {comments} /></div></section> : null
        return (
            <div>
                <h3 onClick = {this.props.toggleOpen}>{title}</h3>
                {textItem}
            </div>
        )
    }
});

module.exports = ArticleOld