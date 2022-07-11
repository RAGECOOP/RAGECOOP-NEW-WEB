<template>
  <v-row v-if="list !== null">
    <v-col v-for="(item, index) in list" :key="index">
      <v-card flat class="mx-auto outline">
        <v-img
          class="align-end text-white"
          height="200"
          :src="item.tag_name === 'nightly' ? '/nightly.webp' : '/release.webp'"
          :lazy-src="item.tag_name === 'nightly' ? '/nightly-lazy.webp' : '/release-lazy.webp'"
          cover
        >
          <v-card-title>{{ item.tag_name === 'nightly' ? 'Nightly build' : 'Release build' }}</v-card-title>
        </v-img>
        <v-card-subtitle>{{ new Date(item.assets[0].updated_at) }}</v-card-subtitle>
        <v-card-text style="display:grid">
          <v-btn v-for="(item, index) in item.assets" :key="item.tag_name + index" color="success" :class="index > 0 ? 'mt-2' : null" :href="item.browser_download_url">
            {{ item.name }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
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