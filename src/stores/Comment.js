import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'

import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE,LOAD_ALL_COMMENTS,CHANGE_PAGE_NUMBER, START, SUCCESS, FAIL } from '../constants'


export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)

                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    response.forEach(this._add)
                    break
                    
                case LOAD_ALL_COMMENTS + SUCCESS:
                {
                    response.records.forEach(this._add)
                    this.pages = Math.floor(response.total/this.limit)
                    break
                }
                    
                case CHANGE_PAGE_NUMBER:
                    this.pageNumber = payload.pageNumber
                    break
                    
                default:
                    return
            }
            
            var self = this;
            window.setTimeout(function() {
                self.emitChange()
            }, 1)
        })
        
        this.pages = 0;
        this.pageNumber = 1;
        this.limit = 10;
        this.offset = 10;      
    }
}