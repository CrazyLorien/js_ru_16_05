import Article from './Article'
import Comment from './Comment'


const stores = {}

Object.assign(stores, {
    articles: new Article(stores),
    comments: new Comment(stores)

})

export default stores
export const commentStore = stores.comments
export const articleStore = stores.articles

window.stores = stores