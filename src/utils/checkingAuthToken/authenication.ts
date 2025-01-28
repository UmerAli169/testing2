import { fetchAuthSession } from 'aws-amplify/auth';

export const currentSession = async () => {
  try {
    const session = true 
    // await fetchAuthSession();
    const accessToken = session?.tokens?.accessToken?.toString() ?? null;
    const idToken = session?.tokens?.idToken?.payload ?? null;

    return { accessToken, idToken };
  } catch (err) {
    console.error('Error fetching session:', err);
    return null; // Handle error by returning null or an appropriate fallback
  }
};
