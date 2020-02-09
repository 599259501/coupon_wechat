export class HttpClient{
  domain: string
  constructor(domain: string){
    this.domain = domain
  }

  async get(uri: string,data: Object){
    return await this.request("get", uri, data)
  }

 async post(uri: string,data: Object={},header: Object={}){
    return await this.request("post", uri, data, header)
  }

  async request(method: string, uri: string, data: any={}, header:any={}){
    let url = this.domain + uri;
    if (method == "get" && data) {
        url += this.buildUrl(data)
    }

    // 如果header为空的话或者没有指定类型都默认为json
    if (!header || !header.hasOwnProperty('content-type')){
      header["content-type"] = "application/json";
    }

    return await wx.request({
      url: url,
      data: data,
      header: header,
    })
  }

  private buildUrl(data: any){
    let url = ""
    for(var key in data) {
      let prefix = ""
      if (!url) {
        prefix = "&"
      }
      url += prefix + key + "=" + data[key]
    }
  }
}