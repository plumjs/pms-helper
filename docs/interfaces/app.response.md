[pms-helper](../README.md) › [Globals](../globals.md) › [App](../classes/app.md) › [Response](app.response.md)

# Interface: Response

## Hierarchy

* **Response**

## Index

### Properties

* [app](app.response.md#app)
* [ctx](app.response.md#ctx)
* [header](app.response.md#header)
* [headers](app.response.md#headers)
* [req](app.response.md#req)
* [request](app.response.md#request)
* [res](app.response.md#res)
* [socket](app.response.md#socket)

### Methods

* [get](app.response.md#get)
* [inspect](app.response.md#inspect)
* [is](app.response.md#is)
* [toJSON](app.response.md#tojson)

## Properties

###  app

• **app**: *Application*

Defined in node_modules/@types/koa/index.d.ts:702

___

###  ctx

• **ctx**: *Context*

Defined in node_modules/@types/koa/index.d.ts:705

___

###  header

• **header**: *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:595

Return response header.

___

###  headers

• **headers**: *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:600

Return response header, alias as response.header

___

###  req

• **req**: *IncomingMessage*

Defined in node_modules/@types/koa/index.d.ts:703

___

###  request

• **request**: *Request*

Defined in node_modules/@types/koa/index.d.ts:706

___

###  res

• **res**: *ServerResponse*

Defined in node_modules/@types/koa/index.d.ts:704

___

###  socket

• **socket**: *Socket*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:590

Return the request socket.

**`returns`** 

**`api`** public

## Methods

###  get

▸ **get**(`field`: string): *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:625

Return response header.

Examples:

    this.get('Content-Type');
    // => "text/plain"

    this.get('content-type');
    // => "text/plain"

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |

**Returns:** *string*

___

###  inspect

▸ **inspect**(): *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:630

Inspect implementation.

**Returns:** *any*

___

###  is

▸ **is**(...`types`: string[]): *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:611

Check whether the response is one of the listed types.
Pretty much the same as `this.request.is()`.

**`api`** public

**Parameters:**

Name | Type |
------ | ------ |
`...types` | string[] |

**Returns:** *string*

▸ **is**(`types`: string[]): *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:612

**Parameters:**

Name | Type |
------ | ------ |
`types` | string[] |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:635

Return JSON representation.

**Returns:** *any*
