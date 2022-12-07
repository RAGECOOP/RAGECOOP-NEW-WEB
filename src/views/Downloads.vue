<template>
  <v-container>
    <downloadListComponent :list="download_list" />
  </v-container>

  <v-container>
    <v-card>
      <v-tabs
        v-model="tab"
        bg-color="success"
      >
        <v-tab value="one">Install client</v-tab>
        <v-tab value="two">Install server</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <div>
              <h3>Requirements</h3>

              <v-card flat>
                <v-list>
                  <v-list-item href="http://www.dev-c.com/gtav/scripthookv/">
                    <v-list-item-title>ScriptHookV</v-list-item-title>
                    <v-list-item-subtitle>Required for ScriptHookVDotNet</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item href="https://github.com/crosire/scripthookvdotnet/releases">
                    <v-list-item-title>ScriptHookVDotNet</v-list-item-title>
                    <v-list-item-subtitle>Required for RAGECOOP and other modifications</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item href="#">
                    <v-list-item-title>RAGECOOP Client</v-list-item-title>
                    <v-list-item-subtitle>Nightly for the last build or Release for the last stable build</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </div>

            <div class="mt-5">
              <h3>Installation</h3>

              <p>1. Navigate to your GTA V directory</p>
              <p>2. Unzip all files from "ScriptHookV.zip" into your GTA V root directory</p>
              <p>3. Unzip all files from "bin" inside the "ScriptHookVDotNet.zip" into your GTA V root directory</p>
              <p>4. Create a new folder called "scripts" in your GTA V root directory</p>
              <p>5. Unzip all files from "RageCoop.Client.zip" into your created "scripts" folder</p>
              <p>6. Right click on GTA V and run as administrator</p>
            </div>
          </v-window-item>

          <v-window-item value="two">
            <div>
              <h3>Requirements</h3>

              <v-card flat>
                <v-list>
                  <v-list-item href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0">
                    <v-list-item-title>.NET 6.0 (Runtime or SDK) or later</v-list-item-title>
                    <v-list-item-subtitle>Required to run the server</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item href="#">
                    <v-list-item-title>RAGECOOP Server *</v-list-item-title>
                    <v-list-item-subtitle>Choose your OS (*-WIN-X64 for Windows, *-LINUX-x64 for Linux or *-LINUX-ARM for ARM like Raspberry)</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </div>

            <div class="mt-5">
              COMING SOON
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>

  <v-container>
    <h2 class="text-center">LATEST 5 UPDATES</h2>
    <v-timeline side="end" align="start">
      <v-timeline-item v-for="item in changelog_list" dot-color="#ffa500" size="small">
        <div class="d-flex">
          <div>
            <strong>{{ item.name }}</strong>
            <div>
              <v-card>
                <v-card-item>
                  <p v-html="item.body"></p>
                </v-card-item>
              </v-card>
            </div>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import downloadListComponent from '@/components/DownloadList.vue'

export default {
  data: () => ({
    tab: null,
    download_list: [],
    changelog_list: []
  }),
  components: {
    downloadListComponent
  },
  async beforeMount() {
    // Get the latest 5 release
    await fetch('https://api.github.com/repos/RAGECOOP/RAGECOOP-V/releases?page=1&per_page=5')
          .then(res => res.json())
          .then(data => {
            this.download_list.push(data[0])
            this.changelog_list = data
          })
          .catch(err => console.error(err))

    // Get the NIGHTLY build 70603992
    await fetch('https://api.github.com/repos/RAGECOOP/RAGECOOP-V/releases/70603992')
          .then(res => res.json())
          .then(data => this.download_list.push(data))
          .catch(err => console.error(err))
  }
}
</script>