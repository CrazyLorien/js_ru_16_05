import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, payload } = action

            switch (type) {
                case ADD_COMMENT:
                    let commentsLength = Object.keys(this._items).length
                    this._add({ id: ++commentsLength, name: payload.name, text : payload.text });
                    let article = this._stores.articles.getById(payload.articleId);          
                    article.comments.push(commentsLength);
                    this.emitChange();
                    break;
                
            }
        })
    }
}