import { HttpError } from '../error'

class JwtError extends HttpError {
  private static busiCode = '20'
  constructor(
    public code: string,
    public message: string,
    public detail: { [x: string]: any } = {}
  ) {
    super(200, code, message, detail, 'http://localhost:3000/swagger#auth')
    this.code = `${JwtError.busiCode}${code}`
    this.name = JwtError.name
  }
}

export { JwtError }
