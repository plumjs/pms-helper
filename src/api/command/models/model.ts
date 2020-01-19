import { model, PaginateModel } from 'mongoose'
import { ICommand } from './interface'
import { CommandSchema } from './schema'

export const CommandModel: PaginateModel<ICommand> = model('command', CommandSchema)
