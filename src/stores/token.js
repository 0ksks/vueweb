import { defineStore } from "pinia"
import { ref } from "vue"
export const useTokenStore = defineStore(
    "token",
    () => {
        const token = ref("");
        const isLogin = ref(false);
        const setLogin = () => {
            isLogin.value = true;
            console.log(isLogin.value);
        };
        const setLogout = () => {
            isLogin.value = false;
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