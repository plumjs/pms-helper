import { Context } from 'koa'
import { IMonitor } from '../models'
import { MonitorModel } from '../models'
import { validate } from '../validators'
import { ObjectID } from 'mongodb'
/**
 * update one or many Monitor instance, create  if no documents match the filter
 * @param ctx
 * @param next
 */
export async function update(ctx: Context, next: any) {
  // fetch params
  const monitors: IMonitor[] = [].concat(ctx.request.body)
  // validate
  validate(monitors, true)
  // do business
  const data = {
    total: monitors.length,
    failed: [],
    success: [],
  }
  for (const t of monitors) {
    t._id = t._id || new ObjectID()
    try {
      const res = await MonitorModel.findOneAndUpdate({ _id: t._id }, t, {
        new: true,
        upsert: true,
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
