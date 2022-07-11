<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ props }">
      <tr v-bind:="props">
        <td>{{ server.name }}</td>
        <td>{{ server.address }}:{{ server.port }}</td>
        <td>{{ server.version }}</td>
        <td><span class="font-weight-medium">{{ server.players }}</span>/{{ server.maxPlayers > 999 ? '∞' : server.maxPlayers }}</td>
        <td>{{ server.country ?? '???' }}</td>
      </tr>
    </template>

    <v-card>
      <v-toolbar>{{ server.name }}</v-toolbar>
      <v-card-text>
        <div>
          <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[0]") }}</span> {{ server.players }}/{{ server.maxPlayers > 999 ? '∞' : server.maxPlayers }}
        </div>
        <div v-show="server.language">
          <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[1]") }}</span> {{ server.language ?? null }}
        </div>
        <div>
          <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[2]") }}</span> {{ server.address }}:{{ server.port }}
        </div>
        <div v-show="server.gameMode">
          <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[3]") }}</span> {{ server.gameMode ?? null }}
        </div>
        <div v-show="server.website">
          <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[4]") }}</span> {{ server.website ?? null }}
        </div>
        <div v-show="server.description">
          <span class="font-weight-medium text-uppercase">{{ $t("servers[0].tables[0].modal[5]") }}</span> {{ server.description ?? null }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" block @click="dialog = false">{{ $t("servers[0].tables[0].modal[6]") }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  props: ["server", "dialogs"],
  beforeCreate() {
    this.dialog = true
  }
}
</script>