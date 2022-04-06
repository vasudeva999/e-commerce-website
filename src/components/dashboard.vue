<template>
  <div>
    <h1>Dashboard</h1>
    <div class="text-end">
      <Button
        @btn-click="toggleAddBtn"
        :text="btn_text"
        :color="color"
        class="btn btn-primary"
      ></Button>

      <Button
        @btn-click="toggleShowBtn"
        :text="btn_show_text"
        :color="show_color"
        class="btn btn-primary"
      ></Button>
    </div>
    <add-product v-show="showAddItem" @add-item="addItem"></add-product>
    <div class="row">
      <div class="w-50 mx-auto">
        <show-items v-show="showAllItems" :products="products"></show-items>
      </div>
    </div>
    
    <div class="text-center">
        <router-link to="/login"><Button type="button" class="btn btn-danger" text="Log out"></Button></router-link>
    </div>
  </div>
</template>

<script>
import Button from "./button.vue";
import AddProduct from "./addProduct.vue";
import ShowItems from "./showItems.vue";

export default {
  name: "Dashboard",
  components: {
    Button,
    AddProduct,
    ShowItems,
  },
  data() {
    return {
      btn_text: "Add Item",
      color: "green",
      showAddItem: false,
      btn_show_text: "Show Items",
      show_color: "green",
      showAllItems: false,
      products: [],
    };
  },
  async created() {
    this.products = await this.fetchProducts();
  },
  methods: {
    toggleAddBtn() {
      if (this.showAddItem) {
        this.btn_text = "Add Item";
        this.color = "green";
      } else {
        this.btn_text = "Close";
        this.color = "red";
      }
      this.showAddItem = !this.showAddItem;
    },
    toggleShowBtn() {
      if (this.showAllItems) {
        this.btn_show_text = "Add Item";
        this.show_color = "green";
      } else {
        this.btn_show_text = "Close";
        this.show_color = "red";
      }
      this.showAllItems = !this.showAllItems;
    },
    async fetchProducts() {
      const data = this.$store.dispatch("fetchProducts");

      return data;
    },
    async addItem(product) {
      const data = await this.$store.dispatch("addProduct", product);

      this.products = [...this.products, data];
    },
  },
  computed: {
  },
};
</script>

<style scoped>
</style>