import Posts from './Post.js'

const Home = {
  props: ['value'],
  emits: ['update-value'],
  template: `<div class="tab" @click="$emit('update-value')">
    Home component {{value}}
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
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTab" class="tab" :value="currentTab" @update-value="currentTab = changeTab(currentTab)"></component>
  </div>`
}