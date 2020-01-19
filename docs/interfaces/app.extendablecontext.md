[pms-helper](../README.md) › [Globals](../globals.md) › [App](../classes/app.md) › [ExtendableContext](app.extendablecontext.md)

# Interface: ExtendableContext

## Hierarchy

* **ExtendableContext**

## Index

### Properties

* [accept](app.extendablecontext.md#accept)
* [app](app.extendablecontext.md#app)
* [assert](app.extendablecontext.md#assert)
* [cookies](app.extendablecontext.md#cookies)
* [originalUrl](app.extendablecontext.md#originalurl)
* [req](app.extendablecontext.md#req)
* [request](app.extendablecontext.md#request)
* [res](app.extendablecontext.md#res)
* [respond](app.extendablecontext.md#optional-respond)
* [response](app.extendablecontext.md#response)

### Methods

* [inspect](app.extendablecontext.md#inspect)
* [onerror](app.extendablecontext.md#onerror)
* [throw](app.extendablecontext.md#throw)
* [toJSON](app.extendablecontext.md#tojson)

## Properties

###  accept

• **accept**: *Accepts*

Defined in node_modules/@types/koa/index.d.ts:717

___

###  app

• **app**: *Application*

Defined in node_modules/@types/koa/index.d.ts:710

___

###  assert

• **assert**: *assert*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:664

Similar to .throw(), adds assertion.

   this.assert(this.user, 401, 'Please login!');

See: https://github.com/jshttp/http-assert

___

###  cookies

• **cookies**: *Cookies*

Defined in node_modules/@types/koa/index.d.ts:716

___

###  originalUrl

• **originalUrl**: *string*

Defined in node_modules/@types/koa/index.d.ts:715

___

###  req

• **req**: *IncomingMessage*

Defined in node_modules/@types/koa/index.d.ts:713

___

###  request

• **request**: *Request*

Defined in node_modules/@types/koa/index.d.ts:711

___

###  res

• **res**: *ServerResponse*

Defined in node_modules/@types/koa/index.d.ts:714

___

### `Optional` respond

• **respond**? : *boolean*

Defined in node_modules/@types/koa/index.d.ts:721

To bypass Koa's built-in response handling, you may explicitly set `ctx.respond = false;`

___

###  response

• **response**: *Response*

Defined in node_modules/@types/koa/index.d.ts:712

## Methods

###  inspect

▸ **inspect**(): *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:645

util.inspect() implementation, which
just returns the JSON output.

**Returns:** *any*

___

###  onerror

▸ **onerror**(`err`: Error): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:687

Default error handling.

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *void*

___

###  throw

▸ **throw**(`message`: string, `code?`: number, `properties?`: __type): *never*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:680

Throw an error with `msg` and optional `status`
defaulting to 500. Note that these are user-level
errors, and the message may be exposed to the client.

   this.throw(403)
   this.throw('name required', 400)
   this.throw(400, 'name required')
   this.throw('something exploded')
   this.throw(new Error('invalid'), 400);
   this.throw(400, new Error('invalid'));

See: https://github.com/jshttp/http-errors

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`code?` | number |
`properties?` | __type |

**Returns:** *never*

▸ **throw**(`status`: number): *never*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:681

**Parameters:**

Name | Type |
------ | ------ |
`status` | number |

**Returns:** *never*

▸ **throw**(...`properties`: Array‹number | string | __type›): *never*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:682

**Parameters:**

Name | Type |
------ | ------ |
`...properties` | Array‹number &#124; string &#124; __type› |

**Returns:** *never*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:655

Return JSON representation.

Here we explicitly invoke .toJSON() on each
object, as iteration will otherwise fail due
to the getters and cause utilities such as
clone() to fail.

**Returns:** *any*
