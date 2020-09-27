<template>
  <div
    v-lazyload
    class="section-header-wrapper animate__animated invisible"
    data-animation="zoomIn"
  >
    <h3>{{ $t(title) }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
.section-header-wrapper {
  display: flex;
  border-bottom: 1px solid var(--grey-border);
  margin: 0 0 20px;

  padding: 0 0 20px 0;
  align-items: center;
  justify-content: space-between;
}

.section-header-wrapper h3 {
  font-size: 3rem;
  margin-bottom: 0 !important;
  line-height: 20px;
}
@media (max-width: 400px) {
  .section-header-wrapper h3 {
    font-size: 2.5rem;
  }
}
</style>
