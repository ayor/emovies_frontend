const state = {
    paystackDetail: {
        
        PUBLIC_KEY: "pk_live_8ef45c88d96070960e0c73ffeedbc494724c8142",
        close: () => {   }
    }
}

const getters = {
    get_paystack_details: (state) => state.paystackDetail
}

const mutation = {
    update_paystack_detail: (state, payload) => state.paystackDetail = payload
}

export default {
    state,
    getters,
    mutation
}