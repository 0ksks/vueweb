//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';
import NotificationTemplate from "@/pages/Notifications/NotificationTemplate"
//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = '/api';
const instance = axios.create({baseURL})


//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        return result.data;
    },
    err=>{
        this.$notify({
            component: NotificationTemplate,
            icon: "tim-icons icon-bell-55",
            horizontalAlign: "top",
            verticalAlign: "center",
            type: "warning",
            timeout: 2000,
            message: "服务异常",
            closeOnClick: false,
          });
        Promise.reject(err);//异步的状态转化成失败的状态
        // return Promise.re
    }
)

export default instance;