import { HttpError } from '../../../error'

/**
 * error instance of monitor
 */
export class MonitorError extends HttpError {
  private static busiCode = '10'
  constructor(
    public code: string,
    public message: string,
    public detail: { [x: string]: any } = {}
  ) {
    super(200, code, message, detail, 'http://localhost:3000/swagger#monitor')
    this.code = `${MonitorError.busiCode}${code}`
    this.name = MonitorError.name
  }
}
