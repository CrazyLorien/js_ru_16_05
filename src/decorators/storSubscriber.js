import React, { Component } from 'react'
import { articleStore, commentStore } from '../stores'

export default (CustomComponent) => {
    
    return class StorSubscriber extends Component {

        constructor(){
                 super();
                 this.state = {
                         articles: articleStore.getAll()
                 }           
        }
        
       componentDidMount() {
              articleStore.addChangeListener(this.handleChange)
              commentStore.addChangeListener(this.handleChange)
       }
       
       componentWillUnmount() {
             commentStore.removeChangeListener(this.handleChange)
             articleStore.removeChangeListener(this.handleChange)
       }
       
        handleChange = () => {
            this.setState({
                articles: articleStore.getAll()
             })
         }
      
             
        render() {          
            return <CustomComponent {...this.props}  articles={this.state.articles} />
        }
         
       
    }
}