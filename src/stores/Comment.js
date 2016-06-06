import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
<<<<<<< HEAD
import { ADD_COMMENT,LOAD_ARTICLE_COMMENTS,START, SUCCESS, FAIL } from '../constants'

=======
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, FAIL } from '../constants'
>>>>>>> 2aaecb41bb6b5b9897221a1d1c90e3408372216c

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
<<<<<<< HEAD
                    this.emitChange()
                    break;
                 case LOAD_ARTICLE_COMMENTS + SUCCESS:
                    this._items = {};
                    response.map((item)=> {                       
                        this._add(item)
                    })
                    this.emitChange()

=======
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    response.forEach(this._add)
                    break

                default:
                    return
>>>>>>> 2aaecb41bb6b5b9897221a1d1c90e3408372216c
            }
            this.emitChange()
        })
    }
}