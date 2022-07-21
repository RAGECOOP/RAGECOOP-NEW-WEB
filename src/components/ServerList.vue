<template>
  <div v-if="servers === null" class="d-flex justify-center align-center" style="height:max(calc(100vh - 330px), 300px)">
    <div class="text-center">
      <h2>Loading...</h2>
      <v-progress-circular
        :size="50"
        color="success"
        indeterminate
        class="mt-5"
      />
    </div>
  </div>
  <v-table v-else fixed-header height="max(calc(100vh - 330px), 300px)">
    <thead>
      <tr>
        <th class="text-left">
          {{ $t("servers[0].tables[0].header[0]") }}
        </th>
        <th class="text-left">
          {{ $t("servers[0].tables[0].header[1]") }}
        </th>
        <th class="text-left">
          {{ $t("servers[0].tables[0].header[2]") }}
        </th>
        <th class="text-left">
          {{ $t("servers[0].tables[0].header[3]") }}
        </th>
        <th class="text-left">
          {{ $t("servers[0].tables[0].header[4]") }}
        </th>
      </tr>
    </thead>
    <tbody>
      <serverListItemComponent v-for="(data, index) in servers" :key="index" :server="data" />
    </tbody>
  </v-table>
</template>

<script>
import serverListItemComponent from '@/components/ServerListItem.vue'

export default {
  data: () => ({
    servers: null,
    updateInterval: null
  }),
  components: {
    serverListItemComponent
  },
  mounted() {
    // Set an interval to refresh the server list every 5 seconds without refreshing the page
    this.updateInterval = setInterval(async () => await this.updateServerList(), 5000)
  },
  beforeUnmount() {
    clearInterval(this.updateInterval)
    this.updateInterval = null
  },
  methods: {
    async updateServerList() {
      await fetch('https://masterserver.ragecoop.online/')
          .then(res => res.json())
          .then(data => {
            this.dialogs = new Array(data.length).fill(false)
            this.servers = data
          })
          .catch(err => console.error(err))
    }
  }
}
</script>