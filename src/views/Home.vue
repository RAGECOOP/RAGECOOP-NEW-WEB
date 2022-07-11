<template>
  <div class="test">
    <div class="text-center">
      <div class="text-h3 text-md-h2 text-lg-h1 font-weight-medium text:primary text-shadow">RAGECOOP</div>
      <div class="text-h3 text-md-h2 text-lg-h1 text-white font-weight-medium text-shadow">PLAY OFFLINE-ONLINE</div>
    </div>
  </div>

  <v-container>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/tDcQpJ5silA"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="iframe"
    ></iframe>
  </v-container>

  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title id="vergleich">Vergleich</v-card-title>
          <v-card-subtitle>Vergleich zu anderen Modifikationen</v-card-subtitle>
          <v-card-text>
            <div class="text-h5">RAGECOOP</div>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    Option1
                  </th>
                  <th class="text-left">
                    Option2
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Synchronisation</td>
                  <td><v-rating length="5" model-value="4" readonly /></td>
                </tr>
                <tr>
                  <td>Mitwirkende</td>
                  <td><v-rating length="5" model-value="3" readonly /></td>
                </tr>
                <tr>
                  <td>Mod-Kompatibilität</td>
                  <td><v-rating length="5" model-value="3" readonly /></td>
                </tr>
              </tbody>
            </v-table>
            <div class="text-h5 pt-2">GTACOOP</div>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    Option1
                  </th>
                  <th class="text-left">
                    Option2
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Synchronisation</td>
                  <td><v-rating length="5" model-value="2" readonly /></td>
                </tr>
                <tr>
                  <td>Mitwirkende</td>
                  <td><v-rating length="5" model-value="1" readonly /></td>
                </tr>
                <tr>
                  <td>Mod-Kompatibilität</td>
                  <td><v-rating length="5" model-value="0" readonly /></td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5" class="d-none d-lg-block">
        <v-img
          :src="`https://gtacoop.com/assets/images/character1.webp`"
          :lazy-src="`https://gtacoop.com/assets/images/character1.webp`"
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
</template>

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