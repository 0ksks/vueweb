<template>
  <card v-if="state=='log'">
    <template slot="header">
      <h5 class="title">Log in</h5>
    </template>
    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input
          label="Username"
          placeholder="Username"
          v-model="registerData.username"
        >
        </base-input>
      </div>
      <div class="col-md-6 pr-md-1 text-left">
        <base-input
          label="password"
          v-model="registerData.password"
          placeholder="password"
        >
        </base-input>
      </div>
    </div>
    <template>
      <base-button type="success" fill>Log in</base-button>
    </template>
    <template>
      <base-button type="success" fill @click="state = 'rig'">Rigester</base-button>
    </template>
  </card>
  <card v-else-if="state=='rig'">
    <template slot="header">
      <h5 class="title">Register</h5>
    </template>
    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input
          label="Username"
          placeholder="Username"
          v-model="registerData.username"
        >
        </base-input>
      </div>
      <div class="col-md-4 pr-md-1 text-left">
        <base-input
          label="password"
          v-model="registerData.password"
          placeholder="password"
        >
        </base-input>
      </div>
      <div class="col-md-4 pr-md-1 text-left">
        <base-input
          label="confirm password"
          v-model="registerData.passwordConfirm"
          placeholder="confirm password"
        >
        </base-input>
      </div>
    </div>
    <template>
      <base-button type="success" fill @click="state='log'">Back</base-button>
    </template>
    <template>
      <base-button type="success" fill @click="register">Register</base-button>
    </template>
  </card>
  <card v-else>
    <template slot="header">
      <h5 class="title">Edit Profile</h5>
    </template>
    <div class="row">
      <div class="col-md-5 pr-md-1 text-left">
        <base-input
          label="Company (disabled)"
          placeholder="Company"
          v-model="model.company"
          disabled
        >
        </base-input>
      </div>
      <div class="col-md-3 px-md-1 text-left">
        <base-input
          label="Username"
          placeholder="Username"
          v-model="model.username"
        >
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1 text-left">
        <base-input
          label="Email address"
          type="email"
          placeholder="mike@email.com"
        >
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input
          label="First Name"
          v-model="model.firstName"
          placeholder="First Name"
        >
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input
          label="Last Name"
          v-model="model.lastName"
          placeholder="Last Name"
        >
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-left">
        <base-input
          label="Address"
          v-model="model.address"
          placeholder="Home Address"
        >
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="City" v-model="model.city" placeholder="City">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1 text-left">
        <base-input
          label="Country"
          v-model="model.country"
          placeholder="Country"
        >
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1 text-left">
        <base-input label="Postal Code" placeholder="ZIP Code"> </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 text-left">
        <base-input>
          <label>About Me</label>
          <textarea
            rows="4"
            cols="80"
            class="form-control"
            placeholder="Here can be your description"
            v-model="model.about"
          >
          </textarea>
        </base-input>
      </div>
    </div>
    <template slot="footer">
      <base-button type="success" fill>Save</base-button>
    </template>
  </card>
</template>
<script>
import { Card, BaseInput } from "@/components/index";
import { userRegisterService } from "@/api/user.js";
import BaseButton from "@/components/BaseButton";
import NotificationTemplate from "../Notifications/NotificationTemplate"


export default {
  components: {
    Card,
    BaseInput,
    BaseButton,
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      state: 'log',
      registerData:{
        username:'',
        password:'',
        passwordConfirm:''
      },
      alertMsg: 'aaa',
      notifications: {
        topCenter: false,
      },
    }
  },
  methods:{
    async register(){
      if (this.passwordComfirm()==false)return;
      let result = await userRegisterService(this.registerData);
      if(result.code===0){
        // this.notifyVue('success',result.message);
        alert(result.message);
        this.state = 'rig';
      }
      else{
        // this.notifyVue('danger',result.message);
        alert(result.message);
      }
    },
    passwordComfirm(){
      if (this.registerData.password != this.registerData.passwordConfirm) {
        // this.notifyVue('danger',"两次密码不一样！");
        alert("两次密码不一样！");
        return false;
      }
      if (this.registerData.password == "" || 
          this.registerData.username == "") {
        // this.notifyA('danger','用户名或密码为空','top','center');
        alert("用户名或密码为空");
        return false;
      }
      return true;
    },
    notifyA(type, txt, verticalAlign, horizontalAlign) {
      this.alertMsg = txt;
      console.log(this.alertMsg);
      this.$notify({
        component: NotificationTemplate,
        icon: "tim-icons icon-bell-55",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: type,
        timeout: 0,
      });
    },
  },
};
</script>
<style></style>
