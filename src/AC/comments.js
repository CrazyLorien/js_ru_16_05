import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export function addComment(text, articleId) {
    const action = {
        type: ADD_COMMENT,
        payload: { articleId, text }
    }
    
    AppDispatcher.dispatch(action)
    
    
}