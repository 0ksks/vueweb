import request from "@/utils/request.js"
import { useTokenStore } from "@/stores/token.js";
export const categoryListService = ()=>{
    return request.get("/category");
}