<template>
    <div class="seed-load-panel">
      <template v-if="loadState === 0">
        loading...
      </template>
      <template v-else-if="loadState === 2">
        loaded failed, try to <span @click="load" style="color: green;cursor: pointer;"> reload </span>.
      </template>
      <template v-else>
        <slot />
      </template>
    </div>
</template>

<script>
export default {
  name: 'seedLoadPanel',
  props: {
    loadState: {
      type: Number,
    }
  },
  methods: {
    load() {
      this.$emit('load').catch(_ => {});
    }
  }
}
</script>
<style lang="scss" scoped>
.seed-load-panel {
  width: 100%;
  height: 100%;
}
</style>
