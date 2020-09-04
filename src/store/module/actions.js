import axios from 'axios'

export const setNewsList = ({commit}, channel) => {
    let appkey = "69e94e196685c1e1b1890e7c691ed168";
    axios.get("/get",{
        params: {
            channel: channel,
            num: 20,
            start: 0,
            appkey: appkey
        }
    })
    .then(res => {
        commit('SET_NEWSLIST', res.data.result.result.list);
        commit('SET_ISLOADING', false);
    })
    .catch(err => {
        console.error(err); 
    })
}

export const setChannel = ({commit}, channel) => {
    commit('SET_CHANNEL', channel);
}

export const setIsLoading = ({commit}, isLoading) => {
    commit('SET_ISLOADING', isLoading)
}