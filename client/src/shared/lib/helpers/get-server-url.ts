export const getMainServerUrl = () => {
  if (location.hostname == 'localhost') {
    return import.meta.env.VITE_BASE_SERVER
  }
  return ''
}
