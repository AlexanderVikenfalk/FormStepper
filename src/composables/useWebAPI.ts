import axios from 'axios'
import { ref } from 'vue'
import { useGitHubDataStore } from '@/stores/gitHubDataStore'
import { decodeGitHubUserResponse } from '@/utils/decoder'

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

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      )
      const userData = decodeGitHubUserResponse(response.data)
      store.addUserData(userData)
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        error.value = `GitHub API error: ${err.response.status} ${err.response.statusText}`
      } else if (err instanceof Error) {
        error.value = `Unexpected error: ${err.message}`
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
