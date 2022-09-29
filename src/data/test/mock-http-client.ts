import { HttpPostClient, HttpPostParams } from "../protocols/http/http-post-client";

export class HttpPostClientSpy implements HttpPostClient { // Spy é um "dublê", ele captura valores para comparar e também cria dados fakes
  url?: string
  body?: object

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    this.body = params.body
    return Promise.resolve()
  }
}