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
          <v-card-title>Servers {{ fetchResult?.server_count ?? 0 }} | Players {{( fetchResult?.player_count ?? 0 )}}</v-card-title>
        </v-img>
      <v-card-text v-if="fetchResult !== null">
        <serverListComponent :servers="fetchResult.servers" />
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
  data: () => ({
    fetchResult: null,
    updateInterval: null
  }),
  components: {
    serverListComponent
  },
  async mounted() {
    this.update()

    // Update every 2.5 seconds
    this.updateInterval = setInterval(this.update, 2500)
  },
  beforeUnmount() {
    clearInterval(this.updateInterval)
  },
  methods: {
    async update() {
      await fetch('https://masterserver.ragecoop.online/all')
            .then(res => res.json())
            .then(res => this.fetchResult = res)
            .catch(err => console.error(err))
    }
  }
}
</script>