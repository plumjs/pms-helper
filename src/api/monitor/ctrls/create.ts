import { Context } from 'koa'
import { IMonitor } from '../models'
import { MonitorModel } from '../models'
import { validate } from '../validators'
import { MonitorError } from '../errors/monitor.error'

/**
 * create one or many Monitor instance
 * @param ctx
 * @param next
 */
export async function create(ctx: Context, next: any) {
  // fetch params
  const monitors: IMonitor[] = [].concat(ctx.request.body)
  // validate
  validate(monitors, true)
  // do business
  const data = await MonitorModel.create(monitors).catch(e => {
    throw new MonitorError('01', e.message)
  })
  // res web
  ctx.response.status = 200
  ctx.response.body = {
    code: 0,
    data,
  }
  await next()
}
