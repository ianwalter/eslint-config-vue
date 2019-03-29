<template>
  <div :class="$style.song" class="song">
    {{artist }} - Poplar St
    Startin’ it up after dark Chasin' thoughts, cruisin' through Echo Park Joined the vultures eatin’ paradise
    Gettin' tilted, yeah, we'll pay the price (But ain't it nice?)
    <div v-for="thing in things" v-text="thing" />
  </div>
</template>

<script>
import {things} from 'foster-the-people'

export default {
  computed: {
    artist () {
      return this.artistCode === "GA" ? 'Glass Animals' : '';
    }
  },
  data: () => ({ artistCode: 'GA', things }),
  async mounted () {
    const echoPark = await import('worstNites')
    this.echoPark = echoPark
  }
}
</script>

<style module>
.song {
  color: thistle;
}
</style>
