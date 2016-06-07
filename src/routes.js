import { Router, Route, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import ArticleIndex from './RouteHandlers/ArticlesIndex'
import ArticlePage from './RouteHandlers/ArticlePage'
import CommentIndex from './RouteHandlers/CommentIndex'

export default (
    <Router history = {browserHistory}>
        <Route path = "/articles" component = {ArticleIndex}>
            <Route path = ":id" component = {ArticlePage} />
        </Route>
        <Route path = "/comments" component = {CommentIndex}>         
        </Route>
    </Router>
)
