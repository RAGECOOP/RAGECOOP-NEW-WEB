<template>
  <v-table fixed-header height="max(calc(100vh - 330px), 300px)">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Address
        </th>
        <th class="text-left">
          Version
        </th>
        <th class="text-left">
          Players
        </th>
        <th class="text-left">
          Country
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
              <span class="font-weight-medium text-uppercase">players</span> {{ data.players }}/{{ data.maxPlayers > 999 ? '∞' : data.maxPlayers }}
            </div>
            <div v-show="data.language">
              <span class="font-weight-medium text-uppercase">language</span> {{ data.language ?? null }}
            </div>
            <div>
              <span class="font-weight-medium text-uppercase">address</span> {{ data.address }}:{{ data.port }}
            </div>
            <div v-show="data.gameMode">
              <span class="font-weight-medium text-uppercase">gamemode</span> {{ data.gameMode ?? null }}
            </div>
            <div v-show="data.website">
              <span class="font-weight-medium text-uppercase">website</span> {{ data.website ?? null }}
            </div>
            <div v-show="data.description">
              <span class="font-weight-medium text-uppercase">description</span> {{ data.description ?? null }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" block @click="dialogs[index] = false">close dialog</v-btn>
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