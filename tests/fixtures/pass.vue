<template>
  <div
    :class="$style.song"
    class="song"
  >
    {{ artist }} - Poplar St
    Startin’ it up after dark Chasin' thoughts, cruisin' through Echo Park
    Joined the vultures eatin’ paradise Gettin' tilted, yeah, we'll pay the
    price (But ain't it nice?)
    <div
      v-for="(thing, index) in things"
      :key="index"
      v-text="thing"
    />
  </div>
</template>

<script>
import { things } from 'foster-the-people'

export default {
  data: () => ({ artistCode: 'GA', things }),
  computed: {
    artist () {
      return this.artistCode === 'GA' ? 'Glass Animals' : ''
    }
  },
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
