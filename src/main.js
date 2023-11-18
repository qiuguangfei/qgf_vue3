import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import pinia from './store/index'
import 'element-plus/dist/index.css'

//全局导入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)


const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
