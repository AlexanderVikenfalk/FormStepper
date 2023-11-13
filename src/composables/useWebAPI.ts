// useGithubUser.ts
import axios from 'axios'
import { useGitHubDataStore } from '@/stores/gitHubDataStore' // import the store

export function useWebAPI() {
  const store = useGitHubDataStore()
  const isLoading = ref(false)
  const error = ref('')

  function setLoading(value: boolean) {
    isLoading.value = value
  }

  const fetchUser = async (username: string): Promise<void> => {
    setLoading(true)
    error.value = ''

    //TODO decoder
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      )
      store.addUserData(response.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        error.value = err.message
      } else if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    userData: store.gitHubData,
    isLoading,
    error,
    fetchUser,
    setLoading,
  }
}
