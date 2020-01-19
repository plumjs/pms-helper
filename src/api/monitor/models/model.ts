import { model, PaginateModel } from 'mongoose'
import { IMonitor } from './interface'
import { MonitorSchema } from './schema'

export const MonitorModel: PaginateModel<IMonitor> = model('monitor', MonitorSchema)
