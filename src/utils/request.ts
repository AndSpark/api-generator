import Request from '@andspark/axios'

let isInstall = false

const defaultRequest = new Request({
 config:{} 
})

export const httpClient: HttpClient = {
  request(config:any) {
    if (!isInstall) {
      throw new Error('please install http client first')
    }
    return defaultRequest.request(config) 
  },
}

export const install = (request: HttpClient['request']) => {
  httpClient.request = request
  isInstall = true
}
