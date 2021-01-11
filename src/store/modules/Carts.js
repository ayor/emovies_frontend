
const state = {
    Carts: [],
    addedToCart: false
}

const getters = {
    Carts: state => state.Carts,
    added_to_cart: state => state.addedToCart
}

const mutations = {
    add_to_cart: (state, payload) => {
        
        let updatedCart = [];

        if(state.Carts.length > 0){
           state.Carts.forEach(video => {
                if (video._id === payload._id) {
                   let newPayload = {...payload ,  qty : payload.qty + 1}
                    updatedCart.push(newPayload);
                    return
                }
               
                updatedCart.push(video)
            })
            
           let index =  state.Carts.findIndex(el=> el._id === payload._id);

           if(index < 0){
            updatedCart.push(payload);
           }
          
            state.Carts = [...updatedCart]
        }else{
            state.Carts.push(payload)
        }
       


       
    },
    remove_from_cart: (state, payload) => state.Carts.splice(payload, 1),
    toggle_addedToCart: (state, payload) => state.addedToCart = payload,
    updateCartItem: (state, payload) => {

        let updatedCart = state.Carts.map(video => {
            if (video._id === payload._id) {
                return payload
            }
            return video
        })
        state.Carts = [...updatedCart]
    },
}

const actions = {
    //actions take in a context object containing getters, mutations and a commit method
    addToCart: ({ commit }, payload) => {
        commit('toggle_addedToCart', true);
        commit('add_to_cart', payload);
    },
    toggleCartStatus: ({ commit }) => {
        commit('toggle_addedToCart', true);

    },
    removeCart: ({ commit }, payload) => commit('remove_from_cart', payload),
    updateCartItemAction: ({ commit }, payload) => commit('updateCartItem', payload),

}

export default {
    state,
    getters,
    mutations,
    actions
}