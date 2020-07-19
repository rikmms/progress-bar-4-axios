import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import axios from 'axios'

const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total)

const useProgressBar = (config) => config.progressBar === undefined || config.progressBar

const update = e => NProgress.inc(calculatePercentage(e.loaded, e.total))

export function loadProgressBar(config, instance = axios) {
  let requestsCounter = 0
  
  const setupStartProgress = () => {
    instance.interceptors.request.use(config => {
      if (useProgressBar(config)) {
        config.onDownloadProgress = update
        config.onUploadProgress = update
        requestsCounter++
        NProgress.start()
      }
      return config
    })
  }

  const setupStopProgress = () => {
    const responseFunc = response => {
      if (useProgressBar(response.config)) {
        if ((--requestsCounter) === 0) {
          NProgress.done()
        }
      }
      return response
    }

    const errorFunc = error => {
      if ((--requestsCounter) === 0) {
        NProgress.done()
      }
      return Promise.reject(error)
    }

    instance.interceptors.response.use(responseFunc, errorFunc)
  }

  NProgress.configure(config)
  setupStartProgress()
  setupStopProgress()
}
