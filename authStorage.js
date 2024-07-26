import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (email, password) => {
  try {
    await AsyncStorage.setItem(email, password);
  } catch (e) {
    console.error('Failed to save user.', e);
  }
};

export const getUser = async (email) => {
  try {
    const password = await AsyncStorage.getItem(email);
    return password;
  } catch (e) {
    console.error('Failed to fetch user.', e);
    return null;
  }
};
