import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(Vuex)

const API_BASE = "http://127.0.0.1:4000/"
const API_FUNCTION_GET_PRODUCTS = API_BASE + 'products/'
const API_FUNCTION_CREATE_PRODUCT = API_BASE + 'products/'
// user API's
const API_FUNCTION_USER_AUTH = API_BASE + 'users/'
const API_FUNCTION_CREATE_USER = API_BASE + 'users/'
const API_FUNCTION_USER_EXISTS = API_BASE + 'users/'

const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json"
}

export const store = new Vuex.Store({
    state: {
        products: undefined,
    },
    mutations: {
        fetchProducts: (state, products) => {
            console.log(state);
            console.log(products);
            // state.products = 
            return products
        },
    },
    actions: {
        fetchProducts: async (state) => {
            let result;
            await axios.get(API_FUNCTION_GET_PRODUCTS).then(res => {
                result = res.data
            })
            return result;
        },
        addProduct: async (state, product) => {
            let result;
            await axios.post(API_FUNCTION_CREATE_PRODUCT, product).then(res => {
                console.log(res.data);
                result = res.data
            })
            return result;
        },

        // Users
        isUserAuth: async (state, userData) => {
            let response = {}

            const res = await state.dispatch('isUserExists', userData)
            if (!res.status) {
                return res
            }

            await axios.get(API_FUNCTION_USER_EXISTS, {
                params: {
                    password: userData.password
                }
            }).then(res => {
                if (res.data.length < 1) {
                    response.status = false
                    response.message = `Please enter correct password.`
                } else {
                    response.status = true
                    response.message = "User Authorised. Logging In"
                }
            })

            return response
        },
        createUser: async (state, userData) => {
            let res = await state.dispatch('isUserExists', userData)
            if (res.status) {
                res.isUserExists = true
                return res
            }
            let response = {}
            await axios.post(API_FUNCTION_CREATE_USER, userData).then(res => {
                response.status = true
                response.message = "User added Successfully."
            })

            return response

        },
        isUserExists: async (state, userData) => {
            let response = {}
            let url = new URL(API_FUNCTION_USER_EXISTS)
            url.searchParams.append('name', userData.name)

            await axios.get(API_FUNCTION_USER_EXISTS, {
                params: {
                    name: userData.name
                }
            }).then(res => {
                if (res.data.length > 0) {
                    response.status = true
                    response.message = "User already exists"
                } else {
                    response.status = false
                    response.message = `User with name: ${userData.name} doesn't exists`
                }
            })

            return response
        }
    }
})
