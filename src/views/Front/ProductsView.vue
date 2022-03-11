<template>
  <div>
    <VueLoading :active="isLoading"></VueLoading>

    <div class="container py-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-2 mb-5">
        <div class="col" v-for="(product, index) in products" :key="index">
          <div class="card h-100 custom-card">
            <div class="card-img" :style="{backgroundImage: 'url(' +  product.imageUrl + ')'}">
            </div>
            <div class="card-body">
              <h5 class="card-title mb-3 text-center fw-bold">{{ product.title }}</h5>
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center" v-if="product.origin_price != product.price">
                  <p class="card-text mb-0 me-2 text-danger fw-bold h5">{{ product.price }} 元</p>
                  <p class="card-text mb-0"><del>{{ product.origin_price }} 元</del></p>
                </div>
                <p class="card-text mb-0 h5" v-else>{{ product.origin_price }} 元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductView',
  data() {
    return {
      isLoading: false,
      products: {},
    };
  },
  methods: {
    getProducts() {
      console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          } else {
            console.log('gg了');
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped lang="scss">
.card-img {
  height: 150px;
}
</style>
