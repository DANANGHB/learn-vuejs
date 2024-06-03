import Posts from './Post.js'

const Home = {
  props: ['value'],
  emits: ['update-value'],
  template: `<div class="tab" >
    <b @click="$emit('update-value')">Home</b> component {{value}}
  </div>`
}

export default {
  components: {
    Home,
    Posts
  },
  methods: {
    changeTab(currentTab){
      return currentTab === 'Posts' ? 'Home' : 'Posts';
    }
  },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts']
    }
  },
  template: `
  <div class="demo">
    
    <div v-if="currentTab === 'Posts'">

    <button
    v-for="tab in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab }]"
    @click="currentTab = tab"
  >
  {{tab}}
  </button>
    </div>
    <component :is="currentTab" class="tab" :value="currentTab" @update-value="currentTab = changeTab(currentTab)"></component>
  </div>`
}