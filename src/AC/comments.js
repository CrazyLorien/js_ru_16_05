import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export function addComment(text, name, articleId) {
    const action = {
        type: ADD_COMMENT,
        payload: { articleId, text, name }
    }   
    AppDispatcher.dispatch(action)   
}