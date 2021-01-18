const state = {
    paystackDetail: {
        
        PUBLIC_KEY: "pk_test_038c1b9473ae872f96fa0b4db088e39ecfd914e8",
        close: () => {  console.log("You closed checkout page") }
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