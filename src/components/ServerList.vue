<template>
  <v-table fixed-header height="max(calc(100vh - 330px), 300px)">
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
    servers: null
  }),
  components: {
    serverListItemComponent
  },
  async mounted() {
    await fetch('https://test.ragecoop.online/')
          .then(res => res.json())
          .then(data => {
            this.dialogs = new Array(data.length).fill(false)
            this.servers = data
          })
          .catch(err => console.error(err))
  }
}
</script>