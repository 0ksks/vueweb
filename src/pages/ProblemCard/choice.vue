<template>
  <card>
    <div class="row">
      <blockquote v-for="choice in choicess" :key="choice">
        <p class="blockquote blockquote-primary">
          {{ choice }}
        </p>
      </blockquote>
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
    questionText: {
      type: String,
      default: "",
    },
    choices: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      choicess: [
          "c11","c12","c13",
      ],
    }
  }
}
</script>