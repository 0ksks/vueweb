import request from "@/utils/request.js"
export const categoryListService = ()=>{
    request.get("/category");
}