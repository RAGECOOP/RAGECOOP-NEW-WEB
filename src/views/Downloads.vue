<template>
  <v-container>
    <v-row v-if="list !== null">
      <v-col>
        <v-card class="mx-auto">
          <v-img class="align-end text-white" height="200" src="https://img3.goodfon.com/wallpaper/nbig/e/c7/grand-theft-auto-5-gta5-gta.jpg" cover>
            <v-card-title>Release build</v-card-title>
          </v-img>
          <v-card-subtitle>{{ list[1].assets[0].updated_at }}</v-card-subtitle>
          <v-card-text>
            <v-btn v-for="(item, index) in list[1].assets" :key="index" color="success">
              {{ item.name }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto">
          <v-img class="align-end text-white" height="200" src="https://gta5redux.com/wp-content/uploads/2016/09/gta5-2016-05-11-14-15-44.jpg" cover>
            <v-card-title>Nightly build</v-card-title>
          </v-img>
          <v-card-subtitle>{{ list[0].assets[0].updated_at }}</v-card-subtitle>
          <v-card-text>
            <v-btn v-for="(item, index) in list[0].assets" :key="index" color="success">
              {{ item.name }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    list: null
  }),
  async beforeMount() {
    await fetch('https://api.github.com/repos/RAGECOOP/RAGECOOP-V/releases?page=1&per_page=2')
          .then(res => res.json())
          .then(data => this.list = data)
          .catch(err => console.error(err))
  }
}
</script>