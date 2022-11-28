<template>
  <v-row>
    <v-col v-for="(value, index) in list" :key="index">
      <DownloadListItemComponent :item="value" />
    </v-col>
  </v-row>
</template>

<script>
import DownloadListItemComponent from '@/components/DownloadListItem.vue'

export default {
  data: () => ({
    list: []
  }),
  components: {
    DownloadListItemComponent
  },
  async beforeMount() {
    // Get the latest release
    await fetch('https://api.github.com/repos/RAGECOOP/RAGECOOP-V/releases?page=1&per_page=1')
          .then(res => res.json())
          .then(data => this.list.push(data[0]))
          .catch(err => console.error(err))

    // Get the NIGHTLY build 70603992
    await fetch('https://api.github.com/repos/RAGECOOP/RAGECOOP-V/releases/70603992')
          .then(res => res.json())
          .then(data => this.list.push(data))
          .catch(err => console.error(err))
  }
}
</script>