import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import store from './store'

const defaultClient = new ApolloClient({
  // 서버의 uri를 지정을 해주게 됩니다.
  uri: 'http://localhost:9000/graphql',
  cache: new InMemoryCache()
})

createApp({
  setup() {
    // provide를 사용함으로써 자식 component들도 Apollo에 접근을 할 수 있습니다.
    provide(DefaultApolloClient, defaultClient)
  },
  render() {
    return h(App)
  }
})
  .use(store)
  .use(router)
  .mount('#app')
