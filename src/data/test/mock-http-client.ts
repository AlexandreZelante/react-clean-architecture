import { HttpPostClient, HttpPostParams } from "data/protocols/http/http-post-client";

export class HttpPostClientSpy implements HttpPostClient { // Spy é um "dublê", ele captura valores para comparar e também cria dados fakes
  url?: string

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    return Promise.resolve()
  }
}