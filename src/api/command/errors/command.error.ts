import { HttpError } from '../../../error'

/**
 * error instance of command
 */
export class CommandError extends HttpError {
  private static busiCode = '10'
  constructor(
    public code: string,
    public message: string,
    public detail: { [x: string]: any } = {}
  ) {
    super(200, code, message, detail, 'http://localhost:3000/swagger#command')
    this.code = `${CommandError.busiCode}${code}`
    this.name = CommandError.name
  }
}
