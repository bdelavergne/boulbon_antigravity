import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '6slug6ow',
    dataset: 'production'
  },
  deployment: {
    appId: 'uug5ni80s2t56i14datf97st',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
