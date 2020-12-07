import 'accessible-nprogress/src/styles.css'

import NProgress from 'accessible-nprogress'
import axios from 'axios'

const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total)

export function loadProgressBar (config, instance = axios) {
  let requestsCounter = 0

  config.template = `
      <div class="bar" role="progressbar" aria-label="Loading progress" aria-valuemin="0" aria-valuemax="1">
          <div class="peg"></div>
      </div>
      <div class="spinner" role="progressbar" aria-label="Loading spinner" aria-valuemin="0" aria-valuemax="1">
          <div class="spinner-icon"></div>
      </div>
  `

  const setupStartProgress = () => {
    instance.interceptors.request.use(config => {
      requestsCounter++
      NProgress.start()
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
      if ((--requestsCounter) === 0) {
        NProgress.done()
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
  setupUpdateProgress()
  setupStopProgress()
}
