<template>
  <v-card flat class="mx-auto outline">
    <v-img
      class="align-end text-white"
      height="200"
      :src="item.tag_name === 'nightly' ? '/nightly.webp' : '/release.webp'"
      :lazy-src="item.tag_name === 'nightly' ? '/nightly-lazy.webp' : '/release-lazy.webp'"
      cover
    >
      <v-card-title>{{ item.name }}</v-card-title>
    </v-img>
    <v-card-subtitle>{{ new Date(item.assets[0].updated_at).toDateString() }}</v-card-subtitle>
    <v-card-text style="display:grid">
      <v-btn v-for="(item, index) in item.assets" :key="index" color="success" :class="index > 0 ? 'mt-2' : null" :href="item.browser_download_url">
        {{ getName(item.name.toLowerCase()) }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: JSON
  },
  methods: {
    getName(name) {
      if (name.includes("client")) return "CLIENT"
      else if (name.includes("linux-arm")) return "SERVER (ARM)"
      else if (name.includes("linux-x64")) return "SERVER (GNU/LINUX)"
      else if (name.includes("win-x64")) return "SERVER (WINDOWS)"
      else return "UNKNOWN"
    }
  }
}
</script>