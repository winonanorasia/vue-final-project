import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import MemberView from '../views/MemberView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import StoreView from '../views/StoreView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/register/',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/member',
    name: 'Member',
    component: MemberView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryView
  },
  {
    path: '/ourstore',
    name: 'OurStore',
    component: StoreView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
