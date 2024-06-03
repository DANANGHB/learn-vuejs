export default {
  emits: ['update-value'],
  data() {
    return { count: [10,20,30], name: 'danang' }
  },
  template: `<div class="tab">
    <b @click="$emit('update-value')">Posts</b> component {{count[2]}}, my name is {{name}}
  </div>`
}