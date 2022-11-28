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
  <v-table v-else :hover="true" fixed-header height="max(calc(100vh - 330px), 300px)">
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
  components: {
    serverListItemComponent
  },
  props: {
    servers: {
      type: Array
    }
  }
}
</script>