import $ from 'jquery'

export function loadAllArticlesCall() {
    return $.get('/api/article')
}

export function loadArticleCall({ id }) {
    return $.get(`/api/article/${id}`)
}

export function loadCommentsCall( { id }) {
    return $.get(`/api/comment?article=${id}`)
}


export function loadAllComments( { offset, limit }) {
    return $.get(`/api/comment?offset=${offset}&limit=${limit}`)
}