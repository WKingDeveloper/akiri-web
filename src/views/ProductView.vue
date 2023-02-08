<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>

  <div class="container">
    <div v-for="product in products" :key="product.node.id">
      <div class="card">
        <div class="card-image">
          <img :src="product.node.imageUrl" alt="..." />
        </div>
        <div class="card-content">
          <h3>{{ product.node.brand }}</h3>
          <p>{{ product.node.title }}</p>
          <p
            style="
              text-decoration: line-through;
              display: inline;
              color: darkgrey;
            "
          >
            {{ product.node.retailPrice }}
          </p>
          <div>
            <p style="display: inline; font-size: 20px; color: coral">
              {{ product.node.discountRate }}%
            </p>
            <p style="display: inline; font-size: 20px; padding-left: 5px">
              {{ product.node.salePrice }}원
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
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { computed, watch } from 'vue'

export default {
  components: {},
  data() {},
  setup(props) {
    const { result, loading, error } = useQuery(
      gql`
        {
          products {
            edges {
              node {
                id
                platform
                url
                brand
                title
                imageUrl
                category
                currencyCode
                retailPrice
                salePrice
                discountRate
                status
                createdAt
                updatedAt
              }
            }
          }
        }
      `
    )
    const products = computed(() => result.value?.products?.edges ?? [])

    watch(() => {
      console.log('result.value = ', result.value)
      console.log('products = ', products.value)
    })

    return {
      products,
      loading,
      error
    }
  },

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

.container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: min-content;
  padding: 20px;
  margin: 20px;
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
  width: 220px;
  height: 220px;
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
  transform: scale(1.02) rotate(-2deg);
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
  height: 40px;
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

  .card .card-image {
    position: relative;
    width: 100px;
    height: 100px;
    padding: 10px;
    text-align: center;
    background: #f4f7f8;
    border-radius: 12px;
  }
}
</style>
