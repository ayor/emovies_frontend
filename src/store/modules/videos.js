// import axios from 'axios'
// const state = {
//     videos:[],
// };

// const getters = {
//     get_videos: state=> state.videos
// };

// const mutations = {
//     init_videos: (state, payload) => state.videos = [...payload] ,
// };

// const actions = {
//     initialize_videos:({commit}, payload)=> {
//         axios.get(
//             'https://localhost:44351/videos'
//         ).then(
//             ({data})=>{
//                 if(data){
//                     payload = [...data]
//                     commit('init_videos', payload)
//                 }
//             }
//         ).catch(err=> console.log(err))
//     }
// };

// export default {
//     state,
//     actions,
//     getters,
//     mutations
// }

