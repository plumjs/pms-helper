import { Context } from 'koa'
import { run } from '@imyoon/cp'
import * as R from 'ramda'

/**
 * restart
 * @param ctx
 * @param next
 */
export async function restart(ctx: Context, next: any) {
  try {
    const cwd = R.trim(await run("pm2 info pms-backend|grep 'exec cwd'|awk '{print $5}'"))
    // pull
    await run('git pull', { cwd })
    // rebuild
    await run('npm run build', { cwd })
    // restart
    await run('pm2 restart pms-backend', { cwd })
  } catch (e) {
    console.log('error:', e)
  }
  // res web
  ctx.response.status = 200
  ctx.response.body = {
    code: 0,
  }
  await next()
}
