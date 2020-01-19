import * as Router from 'koa-router'
import { restart } from './ctrls'

const router: any = new Router({
  prefix: '/v1/commands',
})

router.get('/restart', restart)

export { router }
