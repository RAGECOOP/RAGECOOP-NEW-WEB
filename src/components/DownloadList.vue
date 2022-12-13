<template>
  <v-row>
    <v-col v-for="(value, index) in list" :key="index" cols="12" sm="6">
      <DownloadListItemComponent :item="value" />
    </v-col>
  </v-row>
</template>

<script>
import DownloadListItemComponent from '@/components/DownloadListItem.vue'

export default {
  props: {
    list: {
      type: Array
    }
  },
  components: {
    DownloadListItemComponent
  }
}
</script>