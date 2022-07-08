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
      <tr v-for="(data, index) in servers" :key="index">
        <td>{{ data.name }}</td>
        <td>{{ data.address }}:{{ data.port }}</td>
        <td>{{ data.version }}</td>
        <td>{{ data.players }} / {{ data.maxPlayers }}</td>
        <td>{{ data.country ?? 'null' }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data: () => ({
    servers: null
  }),
  async mounted() {
    await fetch('https://ragecoop.herokuapp.com/')
          .then(res => res.json())
          .then(data => this.servers = data)
          .catch(err => console.error(err))
  }
}
</script>