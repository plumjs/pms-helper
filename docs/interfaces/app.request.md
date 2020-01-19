[pms-helper](../README.md) › [Globals](../globals.md) › [App](../classes/app.md) › [Request](app.request.md)

# Interface: Request

## Hierarchy

* **Request**

## Index

### Properties

* [accept](app.request.md#accept)
* [app](app.request.md#app)
* [body](app.request.md#optional-body)
* [charset](app.request.md#charset)
* [ctx](app.request.md#ctx)
* [ip](app.request.md#ip)
* [length](app.request.md#length)
* [originalUrl](app.request.md#originalurl)
* [rawBody](app.request.md#rawbody)
* [req](app.request.md#req)
* [res](app.request.md#res)
* [response](app.request.md#response)
* [type](app.request.md#type)

### Methods

* [inspect](app.request.md#inspect)
* [toJSON](app.request.md#tojson)

## Properties

###  accept

• **accept**: *Accepts*

Defined in node_modules/@types/koa/index.d.ts:698

___

###  app

• **app**: *Application*

Defined in node_modules/@types/koa/index.d.ts:691

___

### `Optional` body

• **body**? : *any*

Defined in node_modules/@types/koa-bodyparser/index.d.ts:24

___

###  charset

• **charset**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:559

Get the charset when present or undefined.

___

###  ctx

• **ctx**: *Context*

Defined in node_modules/@types/koa/index.d.ts:694

___

###  ip

• **ip**: *string*

Defined in node_modules/@types/koa/index.d.ts:697

___

###  length

• **length**: *number*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:564

Return parsed Content-Length when present.

___

###  originalUrl

• **originalUrl**: *string*

Defined in node_modules/@types/koa/index.d.ts:696

___

###  rawBody

• **rawBody**: *string*

Defined in node_modules/@types/koa-bodyparser/index.d.ts:25

___

###  req

• **req**: *IncomingMessage*

Defined in node_modules/@types/koa/index.d.ts:692

___

###  res

• **res**: *ServerResponse*

Defined in node_modules/@types/koa/index.d.ts:693

___

###  response

• **response**: *Response*

Defined in node_modules/@types/koa/index.d.ts:695

___

###  type

• **type**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:570

Return the request mime type void of
parameters such as "charset".

## Methods

###  inspect

▸ **inspect**(): *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:575

Inspect implementation.

**Returns:** *any*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:580

Return JSON representation.

**Returns:** *any*
