<template>
  <v-app-bar flat class="outline-bottom">
    <v-app-bar-nav-icon class="d-md-none mr-2" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title class="d-flex">
      <span class="font-weight-medium text:primary mr-md-3">RAGECOOP</span>
    
      <v-btn class="d-none d-md-inline-flex mx-md-1" to="/">{{ $t("nav.titles[0]") }}</v-btn>
      <v-btn class="d-none d-md-inline-flex mx-md-1" to="/downloads">
        {{ $t("nav.titles[1]") }}
        <v-tooltip activator="parent" location="bottom">{{ $t("nav.tooltips[0]") }}</v-tooltip>
      </v-btn>
      <v-btn class="d-none d-md-inline-flex mx-md-1" to="#">
        {{ $t("nav.titles[2]") }}
        <v-tooltip activator="parent" location="bottom">{{ $t("nav.tooltips[1]") }}</v-tooltip>
      </v-btn>
    </v-app-bar-title>

    <v-btn color="rgba(110, 133, 211, 1)" to="#">
      <v-icon color="rgba(110, 133, 211, 1)" class="mr-1">mdi-youtube-gaming</v-icon>
      {{ $t("nav.titles[3]") }}
      <v-tooltip activator="parent" location="bottom">{{ $t("nav.tooltips[2]") }}</v-tooltip>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item to="/">
        <v-list-item-title>{{ $t("nav.titles[0]") }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-subtitle>{{ $t("nav.subtitles[0]") }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item to="/downloads">
        <v-list-item-title>{{ $t("nav.titles[1]") }}</v-list-item-title>
      </v-list-item>
      <v-list-item to="/test">
        <v-list-item-title>{{ $t("nav.titles[2]") }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  mounted() {
    window.addEventListener('resize', (e, a) => {
      if (this.drawer && e.target.innerWidth >= 960) {
        this.drawer = false
      }
    })
  }
}
</script>