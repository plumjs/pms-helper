import { Schema } from 'mongoose'
import mp = require('mongoose-paginate-v2')

const MonitorSchema = new Schema(
  {
    serial: Number,
    name: String,
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    status: {
      type: String,
      enum: ['normal', 'unnormal'],
    },
  },
  {
    timestamps: {},
    versionKey: false,
  }
)

MonitorSchema.plugin(mp)

export { MonitorSchema }
