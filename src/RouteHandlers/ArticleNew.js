import React, { PropTypes, Component } from 'react'
import { withRouter } from 'react-router'
import { addArticle} from '../AC/articles'

require 

class ArticleNew extends Component {
  
    componentWillMount(){
        if(!this.context.user){
            this.props.router.push('/')
        }
    }
    
    constructor(){
        super();
        this.state = {
            title: "",
            text : ""
        }
    }
     
    render() {
        return (
            <div>
                <h2>New Article page for {this.context.user}</h2>
                <div className="row">
                    <div className="md-12"><input type="text" name="title" onChange={this.handleChange} />
                    <textarea type="textare" name="text" onChange={this.handleChange}  value = {this.state.text}/>
                    </div>
                    <div className="md-12">
                    <button onClick={this.AddArticle}>Add article</button>
                    </div>
                </div>
            </div>
               )
    }
    
    handleChange = (ev) =>{
        let name = ev.target.name;
        this.setState( { [name] : ev.target.value})
    }
    
    
    AddArticle = () =>{
        addArticle(this.state.title, this.state.text)
    }
    
    
    
}

ArticleNew.propTypes = {
}


ArticleNew.contextTypes = {
        user: PropTypes.string
    }

export default withRouter(ArticleNew)