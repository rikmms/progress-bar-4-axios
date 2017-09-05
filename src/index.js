import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import axios from 'axios'

const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total)

const setupUpdateProgress = () => {
  axios.defaults.onDownloadProgress = e => {
    const percentage = calculatePercentage(e.loaded, e.total)
    NProgress.set(percentage)
  }
}

const setupStopProgress = () => {
  axios.interceptors.response.use(response => {
    NProgress.done(true)
    return response
  })
}

export function load(config) {
  NProgress.configure(config)
  setupUpdateProgress()
  setupStopProgress()
}