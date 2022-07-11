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
      <v-dialog v-for="(data, index) in servers" :key="index" v-model="dialogs[index]">
        <template v-slot:activator="{ props }">
          <tr v-bind:="props">
            <td>{{ data.name }}</td>
            <td>{{ data.address }}:{{ data.port }}</td>
            <td>{{ data.version }}</td>
            <td><span class="font-weight-medium">{{ data.players }}</span>/{{ data.maxPlayers > 999 ? '∞' : data.maxPlayers }}</td>
            <td>{{ data.country ?? '???' }}</td>
          </tr>
        </template>

        <v-card>
          <v-toolbar>{{ data.name }}</v-toolbar>
          <v-card-text>
            <div>
              <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[0]") }}</span> {{ data.players }}/{{ data.maxPlayers > 999 ? '∞' : data.maxPlayers }}
            </div>
            <div v-show="data.language">
              <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[1]") }}</span> {{ data.language ?? null }}
            </div>
            <div>
              <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[2]") }}</span> {{ data.address }}:{{ data.port }}
            </div>
            <div v-show="data.gameMode">
              <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[3]") }}</span> {{ data.gameMode ?? null }}
            </div>
            <div v-show="data.website">
              <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[4]") }}</span> {{ data.website ?? null }}
            </div>
            <div v-show="data.description">
              <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[5]") }}</span> {{ data.description ?? null }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" block @click="dialogs[index] = false">{{ $t("servers[0].tables[0].modal[6]") }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data: () => ({
    dialogs: null,
    servers: null
  }),
  async mounted() {
    await fetch('https://ragecoop.herokuapp.com/')
          .then(res => res.json())
          .then(data => {
            this.dialogs = new Array(data.length).fill(false)
            this.servers = data
          })
          .catch(err => console.error(err))
  }
}
</script>