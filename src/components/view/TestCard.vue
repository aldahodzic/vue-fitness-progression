<script>
export default {
  methods: {
    async useDefaults() {
      if (confirm('Load default exercises and workouts?')) {
        await this.$store.dispatch('useDefaults')
      }
    },

    async clearApp() {
      if (confirm('Clear all app data?')) {
        await this.$store.dispatch('clearApp')
      }
    },

    basicExport() {
      if (confirm('Download all fitness records?')) {
        this.downloadFile(
          'workouts.txt',
          JSON.stringify(this.$store.getters['workouts/getState'])
        )
        this.downloadFile(
          'exercises.txt',
          JSON.stringify(this.$store.getters['exercises/getState'])
        )
        this.downloadFile(
          'workoutRecords.txt',
          JSON.stringify(this.$store.getters['workoutRecords/getState'])
        )
        this.downloadFile(
          'exerciseRecords.txt',
          JSON.stringify(this.$store.getters['exerciseRecords/getState'])
        )
      }
    },

    downloadFile(filename, textInput) {
      let tempElement = document.createElement('a')
      tempElement.setAttribute(
        'href',
        'data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput)
      )
      tempElement.setAttribute('download', filename)
      document.body.appendChild(tempElement)
      tempElement.click()
      document.body.removeChild(tempElement)
    },

    advancedExport() {
      confirm('Not Implemented')
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>Dashboard Testing</v-card-title>

      <v-card-actions>
        <v-container>
          <v-btn color="success mr-3 mb-3" @click="useDefaults()">
            Set Defaults
          </v-btn>

          <v-btn color="error mr-3 mb-3" @click="clearApp()">
            Clear App
          </v-btn>

          <v-btn color="warning mr-3 mb-3" @click="basicExport()">
            Basic Export
          </v-btn>

          <v-btn color="warning mr-3 mb-3" @click="advancedExport()">
            Advanced Export
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
