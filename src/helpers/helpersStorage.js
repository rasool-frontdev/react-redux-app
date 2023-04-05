export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    alert("error saving data");
  }
};
