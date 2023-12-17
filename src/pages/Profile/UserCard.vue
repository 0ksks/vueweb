<template>
  <card type="user">
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="#">
        <img class="avatar" src="../../assets/img/anime6.png" alt="..." />
        <h5 class="title">{{ user.fullName }}</h5>
      </a>
      <p class="description">
        {{ user.title }}
      </p>
    </div>
  </card>
</template>
<script>
import { Card } from "@/components/index";

export default {
  components: {
    Card,
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style></style>
