import React, { PropTypes, Component } from 'react'
<<<<<<< HEAD
import CommentsList from './CommentsList'
=======
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
>>>>>>> 22d11af12a5388d573769450826df33cc5d07833

class Article extends Component {
    constructor() {
        super()
        this.state = {
            some: ''
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        console.log('---', this.refs.title)
//        debugger
    }

    componentWillUnmount() {

    }

    componentDidUpdate() {
        console.log('---', findDOMNode(this.refs.list))
    }

    render() {
<<<<<<< HEAD
        const { article } =  this.props     
        if (!article) return <h3>No article</h3>

        const { title, text, id  } = article
        const { isOpen } = this.state
        const textItem = isOpen ? <section>{text}</section> : null
        const comments = article.comments ? <CommentsList comments = { article.comments } />:  <div>No comments</div>;
        return (
           
                  <div className="row">
                     <div className="col-sm-4"><a href="#" class=""><img src="http://placehold.it/1280X720" width = "300px"class="img-responsive" /></a>
                     </div>
                    <div className="col-sm-8">
                    <h3 className={isOpen ? 'title expandable animated' : 'title expandable'}  onClick = {this.handleClick}>{title}</h3>
                     <p class="text-muted"><span class="glyphicon glyphicon-lock"></span> Available Exclusively for Premium Members</p>
                     <div>{textItem}</div>
          
                     <div class="text-muted">{comments}</div>      
                     </div>
                     <hr />    
                  </div>      
=======
        const { article, isOpen, toggleOpen } = this.props
        if (!article) return <h3>No article</h3>

        const { title, text, comments, id } = article
        const textItem = isOpen ? <section>{text}<div><CommentList comments = {comments} ref="list" /></div></section> : null
        return (
            <div>
                <h3 onClick = {toggleOpen} ref="title">{title}</h3>
                {textItem}
            </div>
>>>>>>> 22d11af12a5388d573769450826df33cc5d07833
        )
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
<<<<<<< HEAD
        id: PropTypes.string.isRequired,
        comments : PropTypes.Array 
        })
=======
        id: PropTypes.string.isRequired
    }),

    //From toggleOpen decorator
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
>>>>>>> 22d11af12a5388d573769450826df33cc5d07833
}

export default Article