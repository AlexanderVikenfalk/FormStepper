import { defineStore } from 'pinia'

export const useGitHubDataStore = defineStore('gitHubDataStore', {
  state: () => ({
    gitHubData: {},
  }),
  getters: {
    filteredUserData: state => {
      const {
        login,
        avatar_url,
        name,
        company,
        blog,
        location,
        bio,
        public_repos,
        followers,
        following,
      } = state.gitHubData
      return {
        login,
        avatar_url,
        name,
        company,
        blog,
        location,
        bio,
        public_repos,
        followers,
        following,
      }
    },
  },
  actions: {
    addUserData(userData) {
      this.gitHubData = userData
    },
  },
})
