<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card>
          <template slot="header">
            <h4 class="card-title" @click="categoryList">Simple Table</h4>
          </template>
          <div class="table-responsive text-left">
            <base-table
              :data="table1.data"
              :columns="table1.columns"
              thead-classes="text-primary"
            >
            </base-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components/index";
import { ref } from "vue";
import { categoryListService } from "@/api/choice.js"
import BaseTable from "@/components/BaseTable";

const tableColumns = ["categoryName","id"];
const tableData = ref([
  {
    id: 1,
    categoryName: "Dakota Rice",
    a: "$36.738",
    b: "Niger",
    c: "Oud-Turnhout",
  },
  {
    id: 2,
    categoryName: "Minerva Hooper",
    a: "$23,789",
    b: "Curaçao",
    c: "Sinaai-Waas",
  },
  {
    id: 3,
    categoryName: "Sage Rodriguez",
    a: "$56,142",
    b: "Netherlands",
    c: "Baileux",
  },
  {
    id: 4,
    categoryName: "Philip Chaney",
    a: "$38,735",
    b: "Korea, South",
    c: "Overland Park",
  },
  {
    id: 5,
    categoryName: "Doris Greene",
    a: "$63,542",
    b: "Malawi",
    c: "Feldkirchen in Kärnten",
  },
  {
    id: 6,
    categoryName: "Mason Porter",
    a: "$98,615",
    b: "Chile",
    c: "Gloucester",
  },
  {
    id: 7,
    categoryName: "Jon Porter",
    a: "$78,615",
    b: "Portugal",
    c: "Gloucester",
  },
]);
export default {
  components: {
    Card,
    BaseTable,
  },
  methods: {
    async categoryList(){
      console.log("cl use")
      let result = await categoryListService();
      this.table1.data = [...result.data];
    }
  },
  data() {
    return {
      table1: {
        title: "Simple Table",
        columns: [...tableColumns],
        data: [...tableData.value],
      },
    };
  },
};
</script>
<style></style>
