import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import axios from 'axios'

const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total)

export function loadProgressBar (config, instance = axios) {
  let requestsCounter = 0

  const setupStartProgress = () => {
    instance.interceptors.request.use(config => {
      if (config && config.progress === false) {
        config.onDownloadProgress = null
        config.onUploadProgress = null
      } else {
        requestsCounter++
        NProgress.start()
      }
      return config
    })
  }

  const setupUpdateProgress = () => {
    const update = e => NProgress.inc(calculatePercentage(e.loaded, e.total))
    instance.defaults.onDownloadProgress = update
    instance.defaults.onUploadProgress = update
  }

  const setupStopProgress = () => {
    const responseFunc = response => {
      if ((!response || !response.config || !(response.config.progress === false)) && (--requestsCounter) === 0) {
        NProgress.done()
      }
      return response
    }

    const errorFunc = error => {
      if ((!error || !error.config || !(error.config.progress === false)) && (--requestsCounter) === 0) {
        NProgress.done()
      }
      return Promise.reject(error)
    }

    instance.interceptors.response.use(responseFunc, errorFunc)
  }

  NProgress.configure(config)
  setupStartProgress()
  setupUpdateProgress()
  setupStopProgress()
}
