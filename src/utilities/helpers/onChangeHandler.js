function handleOnChange(id, value, updatedData, setUpdatedData) {
  console.log(id, value);
  setUpdatedData({ ...updatedData, [id]: value });
}

export { handleOnChange };
