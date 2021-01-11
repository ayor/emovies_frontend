
const state = {
    videoDetail:
    {
        description: "",
        Image: '',
        price: 0,
        title: '',
        qty: 1,
        year: '',
    },
    videos: []

};

const getters = {
    getVideoDetails: state => state.videoDetail,
    getVideos: state => state.videos
}

const mutations = {
    create_video: (state, payload) => state.videoDetail = { ...state.videoDetail, ...payload },
 
    setVideos: (state, payload) => state.videos = [...payload]
}

const actions = {
    update_video: ({ commit }, payload) => commit('create_video', payload),
    updateVideoAction: ({commit}, payload) => commit('updateVideo', payload),
    setVideosAction: ({commit}, payload) => commit('setVideos', payload)
}

export default {
    state,
    getters,
    mutations,
    actions
}