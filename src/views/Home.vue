<template>
  <div class="test">
    <div class="text-center">
      <div class="text-h3 text-md-h2 text-lg-h1 font-weight-medium text:primary text-shadow">RAGECOOP</div>
      <div class="text-h3 text-md-h2 text-lg-h1 text-white font-weight-medium text-shadow">PLAY OFFLINE-ONLINE</div>
    </div>
  </div>

  <v-container>
    <div class="d-flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tDcQpJ5silA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="d-block iframe"
        style="max-width: 880px"
      ></iframe>
    </div>
  </v-container>

  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>{{ $t("home[0].title") }}</v-card-title>
          <v-card-subtitle>{{ $t("home[0].subtitle") }}</v-card-subtitle>
          <v-card-text>
            <div class="text-h5">RAGECOOP</div>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    {{ $t("home[0].tables[0].header[0]") }}
                  </th>
                  <th class="text-left">
                    {{ $t("home[0].tables[0].header[1]") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ $t("home[0].tables[0].content[0]") }}</td>
                  <td><v-rating length="5" model-value="4" readonly /></td>
                </tr>
                <tr>
                  <td>{{ $t("home[0].tables[0].content[1]") }}</td>
                  <td><v-rating length="5" model-value="3" readonly /></td>
                </tr>
                <tr>
                  <td>{{ $t("home[0].tables[0].content[2]") }}</td>
                  <td><v-rating length="5" model-value="3" readonly /></td>
                </tr>
              </tbody>
            </v-table>
            <div class="text-h5 pt-2">GTACOOP</div>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    {{ $t("home[0].tables[0].header[0]") }}
                  </th>
                  <th class="text-left">
                    {{ $t("home[0].tables[0].header[1]") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ $t("home[0].tables[0].content[0]") }}</td>
                  <td><v-rating length="5" model-value="2" readonly /></td>
                </tr>
                <tr>
                  <td>{{ $t("home[0].tables[0].content[1]") }}</td>
                  <td><v-rating length="5" model-value="1" readonly /></td>
                </tr>
                <tr>
                  <td>{{ $t("home[0].tables[0].content[2]") }}</td>
                  <td><v-rating length="5" model-value="0" readonly /></td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5" class="d-none d-lg-block">
        <v-img
          :src="`/character1.webp`"
          :lazy-src="`/character1-lazy.webp`"
          aspect-ratio="1"
          class="franklin"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-if="contributors !== null">
    <h2 class="text-center">Thanks to the following contributors</h2>
    <v-expansion-panels variant="popout">
      <v-expansion-panel v-for="(contributor, i) in contributors" :key="i" hide-actions>
        <v-expansion-panel-title>
          <v-row align="center" class="spacer" no-gutters>
            <v-col cols="4" sm="2" md="1">
              <v-avatar size="36px">
                <v-img alt="Avatar" :src="contributor.avatar_url"></v-img>
              </v-avatar>
            </v-col>

            <v-col class="text-truncate text-left ml-2" sm="5" md="3">
              <strong v-html="contributor.login"></strong>
            </v-col>

            <v-col class="text-grey text-truncate hidden-sm-and-down">
              &mdash;
              for his amazing {{ contributor.contributions }} contributions
            </v-col>
          </v-row>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <v-card-text v-text="lorem"></v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    contributors: null,
    lorem: 'NO CONTENT',
  }),
  async mounted() {
    await fetch('https://api.github.com/repos/RAGECOOP/RAGECOOP-V/contributors')
          .then(res => res.json())
          .then(data => {
            this.contributors = data
          })
          .catch(err => console.error(err))
  }
}
</script>

<style scoped lang="scss">
.test {
  height: calc(100vh - 65px);
  background: url(https://ragecoop.online/assets/home.c13a89fc.webp) no-repeat 50%/cover;

  align-items: center;
  justify-content: center;
  display: flex;
}

.franklin {
  max-height: 550px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}

.text-shadow {
  text-shadow: 0 0 11px #000;
}

iframe {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
}
</style>