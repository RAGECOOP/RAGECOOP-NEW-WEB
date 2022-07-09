<template>
  <v-table
    fixed-header
    height="calc(100vh - 130px)"
    density="compact"
  >
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
            <td>{{ data.players }} / {{ data.maxPlayers }}</td>
            <td>{{ data.country ?? 'null' }}</td>
          </tr>
        </template>

        <v-card>
          <v-toolbar>{{ data.name }}</v-toolbar>
          <v-card-text class="text-center">
            <v-progress-circular
              :size="50"
              color="grey"
              indeterminate
            />
            <div>
              This is a future feature and not implemented yet
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" block @click="dialogs[index] = false">Close Dialog</v-btn>
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