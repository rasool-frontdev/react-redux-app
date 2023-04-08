export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    alert("error saving data");
  }
};

export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};
