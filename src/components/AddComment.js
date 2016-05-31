import React, { PropTypes, Component } from 'react' 
import { addComment } from '../AC/comments'
 
 
class AddComment extends  Component
{
    constructor() {
        super()
    }
    
     //here we add method that invoce add coment 
    
    handleAddComment = (ev) =>  {
        let self = this;
        if(ev)
            ev.preventDefault()
        addComment(this.refs.comment.value, this.refs.name.value, this.props.article.id)      
    }
    
    
    render(){
        const {isOpen} =  this.props;
        const comment = isOpen ? <div className="add-comment">
                <p>Add comment</p>
                <div>Name:<input ref="name" /></div>
                <div><textarea ref="comment"/></div>
                <div><button onClick={this.handleAddComment}>Add comment</button></div></div> : null
        return comment
    }
    
}


export default AddComment
   