import { ADD_COMMENT } from '../constants'
import AppDispatcher from '../dispatcher'
import { LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { asyncAC } from './utils'
import { loadArticleComments } from './apiCalls'

export function addComment(articleId, comment) {
    const id = Math.random() * 100
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
}


export const loadArticleCommentsAC = asyncAC(LOAD_ARTICLE_COMMENTS, loadArticleComments)

