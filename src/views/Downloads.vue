<template>
  <v-container>
    <downloadListComponent />
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
                    <v-list-item-header>
                      <v-list-item-title>ScriptHookV</v-list-item-title>
                      <v-list-item-subtitle>Required for ScriptHookVDotNet</v-list-item-subtitle>
                    </v-list-item-header>
                  </v-list-item>
                  <v-list-item href="https://github.com/crosire/scripthookvdotnet/releases">
                    <v-list-item-header>
                      <v-list-item-title>ScriptHookVDotNet</v-list-item-title>
                      <v-list-item-subtitle>Required for RAGECOOP and other modifications</v-list-item-subtitle>
                    </v-list-item-header>
                  </v-list-item>
                  <v-list-item href="#">
                    <v-list-item-header>
                      <v-list-item-title>RAGECOOP Client</v-list-item-title>
                      <v-list-item-subtitle>Nightly for the last build or Release for the last stable build</v-list-item-subtitle>
                    </v-list-item-header>
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
                    <v-list-item-header>
                      <v-list-item-title>.NET 6.0 (Runtime or SDK) or later</v-list-item-title>
                      <v-list-item-subtitle>Required to run the server</v-list-item-subtitle>
                    </v-list-item-header>
                  </v-list-item>
                  <v-list-item href="#">
                    <v-list-item-header>
                      <v-list-item-title>RAGECOOP Server *</v-list-item-title>
                      <v-list-item-subtitle>Choose your OS (*-WIN-X64 for Windows, *-LINUX-x64 for Linux or *-LINUX-ARM for ARM like Raspberry)</v-list-item-subtitle>
                    </v-list-item-header>
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
</template>

<script>
import downloadListComponent from '@/components/DownloadList.vue'

export default {
  data: () => ({
    tab: null
  }),
  components: {
    downloadListComponent
  }
}
</script>