import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import axios from 'axios'

const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total)

export function loadProgressBar(config) {
  let requestsCounter = 0
  
  const setupStartProgress = () => {
    axios.interceptors.request.use(config => {
      requestsCounter++
      NProgress.start()
      return config
    })
  }
  
  const setupUpdateProgress = () => {
  
    const update = e => {
      const percentage = calculatePercentage(e.loaded, e.total)
      NProgress.inc(percentage)
    } 
    
    axios.defaults.onDownloadProgress = update
    axios.defaults.onUploadProgress = update
  }
  
  const setupStopProgress = () => {
    axios.interceptors.response.use(response => {
       if ((--requestsCounter) === 0)
        NProgress.done()
  
      return response
    }, error => {
       if ((--requestsCounter) === 0) 
        NProgress.done()
  
      return Promise.reject(error)
    })
  }

  NProgress.configure(config)
  setupStartProgress()
  setupUpdateProgress()
  setupStopProgress()
}