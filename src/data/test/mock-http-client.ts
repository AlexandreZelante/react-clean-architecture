import { HttpPostClient } from "data/protocols/http/http-post-client";

export class HttpPostClientSpy implements HttpPostClient { // Spy é um "dublê", ele captura valores para comparar e também cria dados fakes
  url?: string

  async post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve()
  }
}