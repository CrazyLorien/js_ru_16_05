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