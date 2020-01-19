import * as joi from '@hapi/joi'


const schema = joi.object({
    name: joi.string().messages({ 'string.base': "姓名格式错误" }),
    gender: joi.string(),
})

const res = schema.validate({
    name: 111,
    gander: 'male'
})

console.log(res)