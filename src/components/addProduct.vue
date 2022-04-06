<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>New Product</label>
      <input type="text" v-model="product" name="product" placeholder="Add Product" />
    </div>
    <div class="form-control">
      <label>Price</label>
      <input
        type="text"
        v-model="price"
        name="price"
        placeholder="Add Product Cost"
      />
    </div>

    <div class="text-center">
      <input type="submit" value="Save Product" class="btn btn-primary" />
    </div>

  </form>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      product: "",
      price: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.product || !this.price) {
        alert("Please add a product details");
        return;
      }

      const newItem = {
        name: this.product,
        price: this.price
      };

      this.$emit("add-item", newItem);

      this.product = "";
      this.price = "";
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
