<template>
  <div
    :class="isActive ? name + ' active single-tab' : 'single-tab'"
    v-show="isActive"
    class="tab-content"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    selected: { type: Boolean, default: false },
  },

  data() {
    return {
      isActive: false,
    }
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-')
    },
  },

  mounted() {
    this.isActive = this.selected
  },
}
</script>
<style scoped>
.single-tab {
  opacity: 0;
  transition: all 5s;
}
.single-tab.active {
  opacity: 1;
}

.delay300 {
  transition-delay: 300ms;
}
</style>
