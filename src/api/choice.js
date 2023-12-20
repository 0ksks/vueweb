import request from "@/utils/request.js"
import { useTokenStore } from "@/stores/token.js";
export const categoryListService = ()=>{
    const tokenStore = useTokenStore();
    request.get("/category",{headers:{"Authorization":tokenStore.token}});
}