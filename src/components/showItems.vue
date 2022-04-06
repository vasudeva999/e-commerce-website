<template>
  <div class="text-center">
    <div class="card ext-center" style="width: 18rem">
      <div class="card-header">All Products</div>
      <ul
        class="list-group list-group-flush"
        :key="task.id"
        v-for="task in products"
      >
        <li class="list-group-item">Product Id: {{ task.id }}</li>
        <li class="list-group-item">Product Name: {{ task.name }}</li>
        <li class="list-group-item">Product Price: {{ task.price }}</li>
        <br />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowItems",
  props: {
      products: Array
  },
  data() {
    return {
     
    };
  },
};
</script>

<style scoped>
</style>
