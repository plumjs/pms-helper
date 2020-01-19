[pms-helper](../README.md) › [Globals](../globals.md) › [App](app.md)

# Class: App <**StateT, CustomT**>

The application class

```ts
const app = new App.create();
app.start();
```

## Type parameters

▪ **StateT**

▪ **CustomT**

## Hierarchy

* Application

  ↳ **App**

## Index

### Interfaces

* [BaseContext](../interfaces/app.basecontext.md)
* [BaseRequest](../interfaces/app.baserequest.md)
* [BaseResponse](../interfaces/app.baseresponse.md)
* [Context](../interfaces/app.context.md)
* [DefaultContext](../interfaces/app.defaultcontext.md)
* [DefaultState](../interfaces/app.defaultstate.md)
* [ExtendableContext](../interfaces/app.extendablecontext.md)
* [Request](../interfaces/app.request.md)
* [Response](../interfaces/app.response.md)

### Type aliases

* [DefaultContextExtends](app.md#static-defaultcontextextends)
* [DefaultStateExtends](app.md#static-defaultstateextends)
* [Middleware](app.md#static-middleware)
* [Next](app.md#static-next)
* [ParameterizedContext](app.md#static-parameterizedcontext)

### Constructors

* [constructor](app.md#private-constructor)

### Properties

* [context](app.md#context)
* [env](app.md#env)
* [http](app.md#http)
* [keys](app.md#keys)
* [middleware](app.md#middleware)
* [proxy](app.md#proxy)
* [request](app.md#request)
* [response](app.md#response)
* [silent](app.md#silent)
* [subdomainOffset](app.md#subdomainoffset)
* [_config](app.md#static-private-_config)
* [_instance](app.md#static-private-_instance)
* [defaultMaxListeners](app.md#static-defaultmaxlisteners)

### Accessors

* [config](app.md#static-config)
* [instance](app.md#static-instance)

### Methods

* [addListener](app.md#addlistener)
* [callback](app.md#callback)
* [createContext](app.md#createcontext)
* [emit](app.md#emit)
* [eventNames](app.md#eventnames)
* [getMaxListeners](app.md#getmaxlisteners)
* [inspect](app.md#inspect)
* [listen](app.md#listen)
* [listenerCount](app.md#listenercount)
* [listeners](app.md#listeners)
* [off](app.md#off)
* [on](app.md#on)
* [once](app.md#once)
* [onerror](app.md#onerror)
* [prependListener](app.md#prependlistener)
* [prependOnceListener](app.md#prependoncelistener)
* [rawListeners](app.md#rawlisteners)
* [removeAllListeners](app.md#removealllisteners)
* [removeListener](app.md#removelistener)
* [setMaxListeners](app.md#setmaxlisteners)
* [start](app.md#start)
* [toJSON](app.md#tojson)
* [use](app.md#use)
* [create](app.md#static-create)
* [listenerCount](app.md#static-listenercount)

## Type aliases

### `Static` DefaultContextExtends

Ƭ **DefaultContextExtends**: *object*

Defined in node_modules/@types/koa/index.d.ts:539

#### Type declaration:

___

### `Static` DefaultStateExtends

Ƭ **DefaultStateExtends**: *any*

Defined in node_modules/@types/koa/index.d.ts:533

___

### `Static` Middleware

Ƭ **Middleware**: *compose.Middleware‹[ParameterizedContext](app.md#static-parameterizedcontext)‹StateT, CustomT››*

Defined in node_modules/@types/koa/index.d.ts:550

___

### `Static` Next

Ƭ **Next**: *function*

Defined in node_modules/@types/koa/index.d.ts:733

#### Type declaration:

▸ (): *Promise‹any›*

___

### `Static` ParameterizedContext

Ƭ **ParameterizedContext**: *ExtendableContext & object & CustomT*

Defined in node_modules/@types/koa/index.d.ts:724

## Constructors

### `Private` constructor

\+ **new App**(): *[App](app.md)*

*Overrides void*

Defined in src/app.ts:25

**Returns:** *[App](app.md)*

## Properties

###  context

• **context**: *BaseContext & CustomT*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:443

___

###  env

• **env**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:442

___

###  http

• **http**: *HttpServer*

Defined in src/app.ts:25

___

###  keys

• **keys**: *Keygrip | string[]*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:447

___

###  middleware

• **middleware**: *Application.Middleware‹StateT, CustomT›[]*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:440

___

###  proxy

• **proxy**: *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:439

___

###  request

• **request**: *BaseRequest*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:444

___

###  response

• **response**: *BaseResponse*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:445

___

###  silent

• **silent**: *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:446

___

###  subdomainOffset

• **subdomainOffset**: *number*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:441

___

### `Static` `Private` _config

▪ **_config**: *object*

Defined in src/app.ts:24

#### Type declaration:

* \[ **x**: *string*\]: any

___

### `Static` `Private` _instance

▪ **_instance**: *[App](app.md)*

Defined in src/app.ts:23

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

Defined in node_modules/@types/node/events.d.ts:18

## Accessors

### `Static` config

• **get config**(): *object*

Defined in src/app.ts:65

static config

**Returns:** *object*

* \[ **x**: *string*\]: any

___

### `Static` instance

• **get instance**(): *[App](app.md)‹›*

Defined in src/app.ts:59

single app instance

**Returns:** *[App](app.md)‹›*

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  callback

▸ **callback**(): *function*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:512

Return a request handler callback
for node's native http/http2 server.

**Returns:** *function*

▸ (`req`: IncomingMessage | Http2ServerRequest, `res`: ServerResponse | Http2ServerResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | IncomingMessage &#124; Http2ServerRequest |
`res` | ServerResponse &#124; Http2ServerResponse |

___

###  createContext

▸ **createContext**<**StateT**>(`req`: IncomingMessage, `res`: ServerResponse): *Application.ParameterizedContext‹StateT›*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:519

Initialize a new context.

**`api`** private

**Type parameters:**

▪ **StateT**

**Parameters:**

Name | Type |
------ | ------ |
`req` | IncomingMessage |
`res` | ServerResponse |

**Returns:** *Application.ParameterizedContext‹StateT›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  inspect

▸ **inspect**(): *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:491

Return JSON representation.
We only bother showing settings.

**Returns:** *any*

___

###  listen

▸ **listen**(`port?`: number, `hostname?`: string, `backlog?`: number, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:456

Shorthand for:

   http.createServer(app.callback()).listen(...)

**Parameters:**

▪`Optional`  **port**: *number*

▪`Optional`  **hostname**: *string*

▪`Optional`  **backlog**: *number*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

▸ **listen**(`port`: number, `hostname?`: string, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:462

**Parameters:**

▪ **port**: *number*

▪`Optional`  **hostname**: *string*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

▸ **listen**(`port`: number, `backlog?`: number, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:467

**Parameters:**

▪ **port**: *number*

▪`Optional`  **backlog**: *number*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

▸ **listen**(`port`: number, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:472

**Parameters:**

▪ **port**: *number*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

▸ **listen**(`path`: string, `backlog?`: number, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:473

**Parameters:**

▪ **path**: *string*

▪`Optional`  **backlog**: *number*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

▸ **listen**(`path`: string, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:478

**Parameters:**

▪ **path**: *string*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

▸ **listen**(`options`: ListenOptions, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:479

**Parameters:**

▪ **options**: *ListenOptions*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

▸ **listen**(`handle`: any, `backlog?`: number, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:480

**Parameters:**

▪ **handle**: *any*

▪`Optional`  **backlog**: *number*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

▸ **listen**(`handle`: any, `listeningListener?`: function): *Server*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:485

**Parameters:**

▪ **handle**: *any*

▪`Optional`  **listeningListener**: *function*

▸ (): *void*

**Returns:** *Server*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  onerror

▸ **onerror**(`err`: Error): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:529

Default error handler.

**`api`** private

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *Promise‹void›*

Defined in src/app.ts:71

http listen start

**Returns:** *Promise‹void›*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:497

Return JSON representation.
We only bother showing settings.

**Returns:** *any*

___

###  use

▸ **use**<**NewStateT**, **NewCustomT**>(`middleware`: Application.Middleware‹StateT & NewStateT, CustomT & NewCustomT›): *Application‹StateT & NewStateT, CustomT & NewCustomT›*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:504

Use the given middleware `fn`.

Old-style middleware will be converted.

**Type parameters:**

▪ **NewStateT**

▪ **NewCustomT**

**Parameters:**

Name | Type |
------ | ------ |
`middleware` | Application.Middleware‹StateT & NewStateT, CustomT & NewCustomT› |

**Returns:** *Application‹StateT & NewStateT, CustomT & NewCustomT›*

___

### `Static` create

▸ **create**(`config`: object): *[App](app.md)‹›*

Defined in src/app.ts:33

create a application

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | object | a object, Record<string,any>  |

**Returns:** *[App](app.md)‹›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
