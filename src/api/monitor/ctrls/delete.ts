import { Context } from 'koa'
import { MonitorModel } from '../models'
import { validate } from '../validators'
import { MonitorError } from '../errors'

/**
 * delete one
 * @param ctx
 * @param next
 */
export async function del(ctx: Context, next: any) {
  // fetch params
  const { id } = ctx.params
  // validate
  validate({ _id: id })
  // do business
  const data = await MonitorModel.deleteOne({ _id: id }).catch(e => {
    throw new MonitorError('02', e.message)
  })
  // res web
  ctx.response.status = 200
  ctx.response.body = {
    code: 0,
    data,
  }
  await next()
}
