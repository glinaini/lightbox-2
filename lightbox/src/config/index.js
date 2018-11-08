const isProd = process.env.VUE_APP_PUBLISH === 'prod'
const notDev = process.env.NODE_ENV === 'production'
const baseUrl = '/api'

if (notDev) {
  if (isProd) {
    // prod
  } else {
    // test
  }
}
export { baseUrl }
