import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import { articleStore, commentStore } from '../stores'
import StorSubscriber from '../decorators/storSubscriber'

class AppContainer extends Component {
    constructor() {
        super();     
    }     
   
    render() {
        const articles = this.props.articles;
        return <ArticleList articles = {articles} />
    }
}


export default StorSubscriber(AppContainer)