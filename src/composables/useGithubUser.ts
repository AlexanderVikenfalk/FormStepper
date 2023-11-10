// useGithubUser.ts
import {ref} from "vue";
import axios from "axios";

// Define a type for the user data state, modify according to the expected shape of user data
interface UserData {
  login: string;
  name: string;
  blog: string;
  // ... add other user data properties you expect to use
}

export function useGithubUser() {
  const userData = ref<UserData | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string>("");

  // A helper function to delay the process
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const fetchUser = async (username: string): Promise<void> => {
    loading.value = true;
    error.value = "";
    userData.value = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      userData.value = response.data;
    } catch (err) {
      // Handle errors in a more specific way if needed
      if (axios.isAxiosError(err)) {
        error.value = err.message;
      } else if (err instanceof Error) {
        // Handle generic errors from other sources
        error.value = err.message;
      } else {
        // Handle cases where the error is not an instance of Error
        error.value = "An unknown error occurred";
      }
    } finally {
      loading.value = false;
    }
  };

  return {
    userData,
    loading,
    error,
    fetchUser,
  };
}
