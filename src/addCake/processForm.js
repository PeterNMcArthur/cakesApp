export const getEmptyFields = data => Object.keys(data).reduce((arr, key) => (data[key]) ? arr : [...arr, key], [])
