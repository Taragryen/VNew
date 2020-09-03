import axios from 'axios'

export const setNewsList = ({commit}, channel) => {
    let appkey = "69e94e196685c1e1b1890e7c691ed168";
    axios.get("/get",{
        params: {
            channel: channel,
            num: 20,
            start: 0,
            appkey: "69e94e196685c1e1b1890e7c691ed168"
        }
    })
    .then(res => {
        console.log(res.data.result.result)
        commit('SET_NEWSLIST', res.data.result.result.list)
    })
    .catch(err => {
        console.error(err); 
    })
}

export const setChannel = ({commit}, channel) => {
    commit('SET_CHANNEL', channel);
}