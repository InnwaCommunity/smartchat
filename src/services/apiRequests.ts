import apiClient from './apiClient';

export const getUserProfile = async () => {
  try {
    const response = await apiClient.get('/user/profile/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (userData: any) => {
  try {
    const response = await apiClient.post('/auth/signup/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API request methods as needed
