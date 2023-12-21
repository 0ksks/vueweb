import request from "@/utils/request.js"
import { useTokenStore } from "@/stores/token.js";
export const categoryListService = ()=>{
    console.log("clService");
    const tokenStore = useTokenStore();
    console.log("data:",tokenStore.token);
    request.get("/category",{Headers:{"Authorization":tokenStore.token}});
}