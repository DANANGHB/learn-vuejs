export default {
  emits: ['update-value'],
  data() {
    return { count: [10,20,30], name: 'danang' }
  },
  template: `<div class="tab" @click="$emit('update-value')">
    Posts component {{count[2]}}, my name is {{name}}
  </div>`
}