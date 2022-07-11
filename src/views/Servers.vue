<template>
  <v-container>
    <v-card flat class="outline">
      <v-img
          class="align-end text-white"
          height="200"
          src="/servers.webp"
          lazy-src="/servers-lazy.webp"
          cover
        >
          <v-card-title>Servers</v-card-title>
        </v-img>
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