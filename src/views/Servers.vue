<template>
  <v-container>
    <v-card>
      <v-card-text v-if="servers !== null">
        <serverListComponent />
      </v-card-text>
      <v-card-text v-else>
        <v-progress-circular
          :size="50"
          color="grey"
          indeterminate
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import serverListComponent from '@/components/ServerList.vue'

export default {
  components: {
    serverListComponent
  }
}
</script>