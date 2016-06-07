import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE,LOAD_ALL_COMMENTS,CHANGE_PAGE_NUMBER } from '../constants'
import AppDispatcher from '../dispatcher'

import { loadCommentsCall, loadAllComments } from './apiCalls'
import { asyncAC } from './utils'


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


export const loadComments = asyncAC(LOAD_COMMENTS_FOR_ARTICLE, loadCommentsCall)

export const loadListComments = asyncAC(LOAD_ALL_COMMENTS, loadAllComments)

export function HandlePageChange(pageNumber) {
    const action = {
        type: CHANGE_PAGE_NUMBER,
        payload: { pageNumber }
    }
    AppDispatcher.dispatch(action)
}

