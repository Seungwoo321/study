import axios from 'axios'

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

async function fetchList (pageName) {
    try {
        return await axios.get(`${config.baseUrl}/${pageName}/1.json`)
    } catch (error) {
        console.log(error)
    }
}

async function fetchUserInfo (username) {
    try {
        return await axios.get(`${config.baseUrl}user/${username}.json`)
    } catch (error) {
        console.log(error)
    }
}

async function fetchCommentItem (id) {
    try {
        return await axios.get(`${config.baseUrl}item/${id}.json`)
    } catch (error) {
        console.log(error)
    }
}

export {
    fetchList,
    fetchUserInfo,
    fetchCommentItem
}
