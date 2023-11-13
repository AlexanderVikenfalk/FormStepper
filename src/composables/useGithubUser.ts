// useGithubUser.ts
import { ref } from 'vue'
import axios from 'axios'
import { useGitHubDataStore } from '@/stores/gitHubDataStore' // import the store

export function useGithubUser() {
  const store = useGitHubDataStore()
  const loading = ref(false)
  const error = ref('')

  const fetchUser = async (username: string): Promise<void> => {
    loading.value = true
    error.value = ''

    //TODO decoder
    //TODO handle github user fetch

    try {
      await delay(1000) // simulate a delay
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      )
      store.addUserData(response.data) // use the store action
    } catch (err) {
      if (axios.isAxiosError(err)) {
        error.value = err.message
      } else if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'An unknown error occurred'
      }
    } finally {
      loading.value = false
    }
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  return {
    userData: store.gitHubData,
    loading,
    error,
    fetchUser,
  }
}
