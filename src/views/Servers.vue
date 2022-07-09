<template>
  <v-container>
    <v-card flat class="outline">
      <v-img
          class="align-end text-white"
          height="200"
          src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2015/12/17/1331765933745_2/racing-in-gta-v"
          cover
        >
          <v-card-title>Servers</v-card-title>
        </v-img>
      <v-card-text v-if="servers !== null">
        <serverListComponent />
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
  components: {
    serverListComponent
  }
}
</script>