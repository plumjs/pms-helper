import { Context } from 'koa'
import { IMonitor } from '../models'
import { MonitorModel } from '../models'
import { validate } from '../validators'

/**
 * update one or many Monitor instance
 * @param ctx
 * @param next
 */
export async function patch(ctx: Context, next: any) {
  // fetch params
  const monitors: IMonitor[] = [].concat(ctx.request.body)
  // validate
  validate(monitors)
  // do business
  const data = {
    total: monitors.length,
    failed: [],
    success: [],
  }
  for (const t of monitors) {
    try {
      const res = await MonitorModel.findOneAndUpdate({ _id: t._id }, t, {
        new: true,
        upsert: false,
      })
      if (!res) data.failed.push(t)
      else data.success.push(t)
    } catch (e) {
      data.failed.push(t)
    }
  }
  // res web
  ctx.response.status = 200
  ctx.response.body = {
    code: 0,
    data,
  }
  await next()
}
