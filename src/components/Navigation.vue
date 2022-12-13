<template>
  <v-app-bar flat class="outline-bottom">
    <v-app-bar-nav-icon class="d-md-none" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title class="d-flex">
      <span class="font-weight-medium text:primary mr-md-3">RAGECOOP</span>
    
      <v-btn class="d-none d-md-inline-flex mx-md-1" to="/">{{ $t("nav.titles[0]") }}</v-btn>
      <v-btn class="d-none d-md-inline-flex mx-md-1" to="/downloads">
        {{ $t("nav.titles[1]") }}
        <v-tooltip activator="parent" location="bottom">{{ $t("nav.tooltips[0]") }}</v-tooltip>
      </v-btn>
      <v-btn class="d-none d-md-inline-flex mx-md-1" to="/servers">
        {{ $t("nav.titles[2]") }}
        <v-tooltip activator="parent" location="bottom">{{ $t("nav.tooltips[1]") }}</v-tooltip>
      </v-btn>
      <v-btn class="d-none d-md-inline-flex mx-md-1" href="https://docs.ragecoop.online/">
        {{ $t("nav.titles[3]") }}
        <v-tooltip activator="parent" location="bottom">{{ $t("nav.tooltips[2]") }}</v-tooltip>
      </v-btn>
    </v-app-bar-title>
    
    <v-btn href="https://discord.com/invite/cdkd5E8h9h">
      <v-icon color="rgba(110, 133, 211, 1)" class="mr-1">mdi-youtube-gaming</v-icon>
      {{ $t("nav.titles[4]") }}
      <v-tooltip activator="parent" location="bottom">{{ $t("nav.tooltips[3]") }}</v-tooltip>
    </v-btn>
    <v-btn v-if="theme.global.current.value.dark" v-on:click="changeTheme('light')">
      <v-icon color="rgba(245, 242, 137, 1)" class="mr-1">mdi-white-balance-sunny</v-icon>
      <v-tooltip activator="parent" location="bottom">light mode?</v-tooltip>
    </v-btn>
    <v-btn v-else v-on:click="changeTheme('dark')">
      <v-icon color="rgba(69, 76, 98, 1)" class="mr-1">mdi-moon-waxing-crescent</v-icon>
      <v-tooltip activator="parent" location="bottom">dark mode?</v-tooltip>
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
      <v-list-item to="/servers">
        <v-list-item-title>{{ $t("nav.titles[2]") }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-subtitle>{{ $t("nav.subtitles[1]") }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item href="https://docs.ragecoop.online/">
        <v-list-item-title>{{ $t("nav.titles[3]") }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup: () => {
    return { theme: useTheme() }
  },
  data: () => ({
    drawer: false
  }),
  mounted() {
    if (this.$cookies.isKey("theme"))
    {
      this.theme.global.name.value = this.$cookies.get("theme")
    }

    window.addEventListener('resize', (e, _) => {
      if (this.drawer && e.target.innerWidth >= 960) {
        this.drawer = false
      }
    })
  },
  methods: {
    changeTheme(theme) {
      this.theme.global.name.value = theme
      this.$cookies.set("theme", theme)
    }
  }
}
</script>