import { defineStore } from "pinia"
import { ref } from "vue"
export const useTokenStore = defineStore(
    "token",
    () => {
        const token = ref("");
        const isLogin = false;
        const setLogin = () => {
            isLogin = true;
        };
        const setLogout = () => {
            isLogin = false;
        };
        const setToken = (newToken) => {
            token.value = newToken;
        };
        const removeToken = () => {
            token.value = "";
        };
        return {
            isLogin,token,setToken,removeToken,setLogin,setLogout
        }
    },
    {
        persist:true
    }
);