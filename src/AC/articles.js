import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID, START, SUCCESS, FAIL,ADD_ARTICLE } from '../constants'
import { asyncAC } from './utils'
import { loadAllArticlesCall, loadArticleCall } from './apiCalls'
import GuidGen from '../helper'

export function addArticle(title, text)
{
    const id = GuidGen.generate()
    const action = {
            type: ADD_ARTICLE,
            payload : { id : id, title : title, text : text}
        }
     AppDispatcher.dispatch(action)
}


export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }
    AppDispatcher.dispatch(action)
}

export const loadAllArticles = asyncAC(LOAD_ALL_ARTICLES, loadAllArticlesCall)
//loadAllArticles()

export const loadArticleById = asyncAC(LOAD_ARTICLE_BY_ID, loadArticleCall)
//loadArticleById(id)