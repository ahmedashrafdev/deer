<template>
  <div class="tabs">
    <div class="tabs-btns">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: tab.isActive }"
          @click="selectTab(tab)"
        >
          <span> {{ tab.name }}</span>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] }
  },

  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    },
  },
}
</script>

<style>
@import '../../assets/scss/components/_tabs.min.css';
</style>
