<!-- eslint-disable vue/no-use-v-if-with-v-for -->

<template>
  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
      <tr>
        <slot name="columns">
          <th v-for="column in columns" :key="column">{{ column }}</th>
          <th @click="getSelected">export</th>
        </slot>
      </tr>
    </thead>

    <tbody :class="tbodyClasses">
        <tr v-for="(item, index) in data" :key="index">
          <slot :row="item">
            <td
              v-for="(column, index) in columns"
              :key="index"
              v-if="hasValue(item, column)"
            >
              {{ itemValue(item, column) }}
            </td>
            <td>
              <base-checkbox v-model="selected[index]"></base-checkbox>
            </td>
          </slot>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
    }
  },
  name: "base-table",
  props: {
    tableClass: {
      type: String,
      default: "",
    },
    theadClasses: {
      type: String,
      default: "",
    },
    tbodyClasses: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column] !== "undefined";
    },
    itemValue(item, column) {
      return item[column];
    },
    getSelected() {
      console.log("asd");
      const selected = this.data.filter((row,index) => this.selected[index]);
      console.log(selected);
    },
  },
};
</script>

<style></style>
