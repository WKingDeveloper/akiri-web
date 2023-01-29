<template>
  <div class="container">
    <div v-for="product in products" :key="product.id">
      <div class="card">
        <div class="card-image">
          <img :src="product.image" alt="..." />
        </div>
        <div class="card-content">
          <h3>{{ product.brand }}</h3>
          <p>{{ product.title }}</p>
          <p
            style="
              text-decoration: line-through;
              display: inline;
              color: darkgrey;
            "
          >
            {{ product.retailPrice }}
          </p>
          <div>
            <p style="display: inline; font-size: 20px; color: coral">
              {{ product.discountRate }}%
            </p>
            <p style="display: inline; font-size: 20px; padding-left: 5px">
              {{ product.salePrice }}원
            </p>
          </div>

          <br />
          <button class="add-to-cart" @click="openProductLink(product)">
            구매하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      products: [
        {
          id: 1,
          brand: '아소부',
          title:
            '[리퍼상품 한정판매] 캐나다 아소부 스테인레스 리유저블 스트로우',
          image:
            'https://img.29cm.co.kr/next-product/2020/09/03/b95a7220a34446299f1b86bb44ce6c74_20200903162829.jpg?width=700',
          retailPrice: 18000,
          salePrice: 8000,
          discountRate: 58,
          url: 'https://www.29cm.co.kr/product/804631'
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    openProductLink(product) {
      window.open(product.url)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f7f8;
}

.container {
  display: flex;
  width: 1080px;
}

.card {
  width: min-content;
  padding: 20px;
  margin: 0 20px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.04);
  transition: 0.4s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card .card-image {
  position: relative;
  width: 280px;
  height: 280px;
  padding: 10px;
  text-align: center;
  background: #f4f7f8;
  border-radius: 12px;
}

.card .card-image img {
  width: 100%;
  transition: 0.4s ease;
}

.card:hover .card-image img {
  transform: scale(1.02) rotate(-3deg) translateX(-5px);
}

.card .card-image .bx-star {
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 10px;
  font-size: 20px;
  color: #f7ae04;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.04);
}

.card .card-content h3 {
  color: #222;
  font-size: 16px;
  margin-top: 20px;
}

.card .card-content p {
  color: #555;
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0 22px;
  text-align: justify;
}

.card .card-content button {
  cursor: pointer;
  color: #fff;
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 12px;
  background: linear-gradient(45deg, #22a10b, #208a0c);
}

@media (max-width: 1280px) {
  body {
    height: unset;
    padding: 30px 0;
  }

  .container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .container .card {
    margin: 20px;
  }
}
</style>
