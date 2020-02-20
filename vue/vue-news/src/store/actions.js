import { fetchList, fetchUserInfo, fetchCommentItem } from '@/api'

export default {
    // promise
    // FETCH_USER ({ commit }, userName) {
    //     fetchUserInfo(userName).then(({ data }) => {
    //         commit('SET_USER', data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // },
    // FETCH_COMMENT_ITEM ({ commit }, itemId) {
    //     fetchCommentItem(itemId).then(({ data }) => {
    //         commit('SET_ITEM', data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // },
    // FETCH_LIST ({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(({ data }) => commit('SET_LIST', data))
    //         .catch(err => console.log(err))
    // },
    // async
    async FETCH_USER ({ commit }, userName) {
        const response = await fetchUserInfo(userName)
        commit('SET_USER', response.data)
        return response
    },
    async FETCH_COMMENT_ITEM ({ commit }, itemId) {
        const response = await fetchCommentItem(itemId)
        commit('SET_ITEM', response.data)
        return response
    },
    async FETCH_LIST ({ commit }, pageName) {
        const response = await fetchList(pageName)
        commit('SET_LIST', response.data)
        return response
    }
}
