// Creating a specific interface for POST due to Interface Segregation Principle
// This approach makes it easier to implement this interface because if I had a "get" method I should implement that as well

export type HttpPostParams = {
  url: string
}
export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>
}
