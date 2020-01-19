[pms-helper](README.md) › [Globals](globals.md)

# pms-helper

## Index

### Enumerations

* [EGender](enums/egender.md)
* [EStatus](enums/estatus.md)

### Classes

* [App](classes/app.md)
* [CommandError](classes/commanderror.md)
* [HttpError](classes/httperror.md)
* [JwtError](classes/jwterror.md)
* [MonitorError](classes/monitorerror.md)

### Interfaces

* [ICommand](interfaces/icommand.md)
* [IMonitor](interfaces/imonitor.md)

### Variables

* [CommandModel](globals.md#const-commandmodel)
* [CommandSchema](globals.md#const-commandschema)
* [MonitorModel](globals.md#const-monitormodel)
* [MonitorSchema](globals.md#const-monitorschema)
* [getSchema](globals.md#const-getschema)
* [postSchema](globals.md#const-postschema)
* [router](globals.md#const-router)
* [schema](globals.md#const-schema)

### Functions

* [capture](globals.md#capture)
* [create](globals.md#create)
* [del](globals.md#del)
* [findMany](globals.md#findmany)
* [findOne](globals.md#findone)
* [getHeaderToken](globals.md#getheadertoken)
* [handle](globals.md#handle)
* [hasRoles](globals.md#hasroles)
* [hasRolesOr](globals.md#hasrolesor)
* [isAuthenticated](globals.md#isauthenticated)
* [patch](globals.md#patch)
* [restart](globals.md#restart)
* [update](globals.md#update)
* [validate](globals.md#validate)
* [verifyToken](globals.md#verifytoken)

### Object literals

* [cors](globals.md#const-cors)
* [env](globals.md#const-env)
* [jwt](globals.md#const-jwt)

## Variables

### `Const` CommandModel

• **CommandModel**: *PaginateModel‹[ICommand](interfaces/icommand.md)›* =  model('command', CommandSchema)

Defined in src/api/command/models/model.ts:5

___

### `Const` CommandSchema

• **CommandSchema**: *Schema‹any›* =  new Schema(
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

Defined in src/api/command/models/schema.ts:4

___

### `Const` MonitorModel

• **MonitorModel**: *PaginateModel‹[IMonitor](interfaces/imonitor.md)›* =  model('monitor', MonitorSchema)

Defined in src/api/monitor/models/model.ts:5

___

### `Const` MonitorSchema

• **MonitorSchema**: *Schema‹any›* =  new Schema(
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

Defined in src/api/monitor/models/schema.ts:4

___

### `Const` getSchema

• **getSchema**: *StringSchema‹› | AnySchema‹› | ArraySchema‹› | AlternativesSchema‹› | BinarySchema‹› | BooleanSchema‹› | DateSchema‹› | FunctionSchema‹› | NumberSchema‹› | ObjectSchema‹any› | LinkSchema‹› | SymbolSchema‹›* =  schema.tailor('get')

Defined in src/api/command/validators/definition.ts:22

Defined in src/api/monitor/validators/definition.ts:22

___

### `Const` postSchema

• **postSchema**: *StringSchema‹› | AnySchema‹› | ArraySchema‹› | AlternativesSchema‹› | BinarySchema‹› | BooleanSchema‹› | DateSchema‹› | FunctionSchema‹› | NumberSchema‹› | ObjectSchema‹any› | LinkSchema‹› | SymbolSchema‹›* =  schema.tailor('post')

Defined in src/api/command/validators/definition.ts:19

Defined in src/api/monitor/validators/definition.ts:19

___

### `Const` router

• **router**: *any* =  new Router({
  prefix: '/v1/monitors',
})

Defined in src/api/command/router.ts:4

Defined in src/api/monitor/router.ts:4

___

### `Const` schema

• **schema**: *ObjectSchema‹Object›* =  joi.object({
  _id: joi
    .string()
    .length(24)
    .alter({
      get: schema => schema.required(),
    }),
  serial: joi.number().alter({
    post: schema => schema.required(),
  }),
  name: joi.string(),
  gender: joi.string(),
  status: joi.string(),
})

Defined in src/api/command/validators/definition.ts:3

Defined in src/api/monitor/validators/definition.ts:3

## Functions

###  capture

▸ **capture**(): *[Middleware](classes/app.md#static-middleware)*

Defined in src/error/capture.middle.ts:12

a middleware for capture error
```ts
import * as koa from 'koa'
const app = new koa()
app.use(capture())
```

**Returns:** *[Middleware](classes/app.md#static-middleware)*

___

###  create

▸ **create**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/monitor/ctrls/create.ts:12

create one or many Monitor instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  del

▸ **del**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/monitor/ctrls/delete.ts:11

delete one

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  findMany

▸ **findMany**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/monitor/ctrls/find.ts:34

find many

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  findOne

▸ **findOne**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/monitor/ctrls/find.ts:11

find One by _id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  getHeaderToken

▸ **getHeaderToken**(`ctx`: Context): *string | null*

Defined in src/jwt/getHeaderToken.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | Context |

**Returns:** *string | null*

___

###  handle

▸ **handle**(`e`: Error, `ctx`: Context): *void*

Defined in src/error/handle.ts:13

some operation for erros
```ts
import * as koa from 'koa'
const app = new koa()
app.on('error', (e, ctx)=>handle(e, ctx))
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`e` | Error | instanceof Error |
`ctx` | Context | koa.Context  |

**Returns:** *void*

___

###  hasRoles

▸ **hasRoles**(...`roles`: string[]): *(Anonymous function)*

Defined in src/jwt/hasRoles.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`...roles` | string[] |

**Returns:** *(Anonymous function)*

___

###  hasRolesOr

▸ **hasRolesOr**(...`roles`: string[]): *(Anonymous function)*

Defined in src/jwt/hasRoles.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`...roles` | string[] |

**Returns:** *(Anonymous function)*

___

###  isAuthenticated

▸ **isAuthenticated**(): *(Anonymous function)*

Defined in src/jwt/isAuthenticated.ts:6

**Returns:** *(Anonymous function)*

___

###  patch

▸ **patch**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/monitor/ctrls/patch.ts:11

update one or many Monitor instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  restart

▸ **restart**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/command/ctrls/restart.ts:10

restart

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`ctx`: Context, `next`: any): *Promise‹void›*

Defined in src/api/monitor/ctrls/update.ts:11

update one or many Monitor instance, create  if no documents match the filter

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | Context | - |
`next` | any |   |

**Returns:** *Promise‹void›*

___

###  validate

▸ **validate**(`data`: object[] | object, `strict`: boolean): *void*

Defined in src/api/command/validators/validate.ts:9

validate

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | object[] &#124; object | - | data ready to check |
`strict` | boolean | false | set true while post or put, set false when patch/:id, get/:id, delete/:id  |

**Returns:** *void*

___

###  verifyToken

▸ **verifyToken**(`token`: string): *Promise‹any›*

Defined in src/jwt/verifyToken.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *Promise‹any›*

## Object literals

### `Const` cors

### ▪ **cors**: *object*

Defined in src/config/config.default.ts:7

###  allowMethods

• **allowMethods**: *string* = "GET, POST, PUT, PATCH, DELETE"

Defined in src/config/config.default.ts:8

___

### `Const` env

### ▪ **env**: *object*

Defined in src/env.ts:1

###  domain

• **domain**: *string* =  process.env.DOMAIN || 'localhost'

Defined in src/env.ts:2

###  environment

• **environment**: *string* =  process.env.ENVIRONMENT || 'local'

Defined in src/env.ts:5

###  mongoUri

• **mongoUri**: *string* =  process.env.MONGO_URI || 'mongodb://localhost:27017/pms-helper'

Defined in src/env.ts:4

###  port

• **port**: *string* =  process.env.PORT || '3001'

Defined in src/env.ts:3

___

### `Const` jwt

### ▪ **jwt**: *object*

Defined in src/config/config.default.ts:1

###  expiresIn

• **expiresIn**: *string* = "30s"

Defined in src/config/config.default.ts:4

###  key

• **key**: *string* = "key-koa-base-template"

Defined in src/config/config.default.ts:2

###  secret

• **secret**: *string* = "secret-koa-base-template"

Defined in src/config/config.default.ts:3
