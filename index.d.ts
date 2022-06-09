declare module 'axios-progress-bar' {
  import { AxiosInstance } from 'axios'
  interface NProgressOptions {
    minimum: number
    template: string
    easing: string
    speed: number
    trickle: boolean
    trickleSpeed: number
    showSpinner: boolean
    parent: string
    positionUsing: string
    barSelector: string
    spinnerSelector: string
  }
  export function loadProgressBar(
    config?: Partial<NProgressOptions>,
    axios?: AxiosInstance
  ): void
}
