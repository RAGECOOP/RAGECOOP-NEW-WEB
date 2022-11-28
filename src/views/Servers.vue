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
          <v-card-title>Servers {{ count.servers }} | Players {{ count.players }}</v-card-title>
        </v-img>
      <v-card-text v-if="servers !== null">
        <serverListComponent :servers="servers" />
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
    count: { servers: 0, players: 0 },
    servers: [],
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
      await fetch('https://masterserver.ragecoop.online/')
            .then(res => res.json())
            .then(res => this.servers = res)
            .catch(err => console.error(err))

      await fetch('https://masterserver.ragecoop.online/count')
            .then(res => res.json())
            .then(res => this.count = res)
            .catch(err => console.error(err))
    }
  }
}
</script>