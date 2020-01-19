[pms-helper](../README.md) › [Globals](../globals.md) › [App](../classes/app.md) › [BaseContext](app.basecontext.md)

# Interface: BaseContext

## Hierarchy

* **BaseContext**

## Index

### Properties

* [assert](app.basecontext.md#assert)

### Methods

* [inspect](app.basecontext.md#inspect)
* [onerror](app.basecontext.md#onerror)
* [throw](app.basecontext.md#throw)
* [toJSON](app.basecontext.md#tojson)

## Properties

###  assert

• **assert**: *assert*

Defined in node_modules/@types/koa/index.d.ts:664

Similar to .throw(), adds assertion.

   this.assert(this.user, 401, 'Please login!');

See: https://github.com/jshttp/http-assert

## Methods

###  inspect

▸ **inspect**(): *any*

Defined in node_modules/@types/koa/index.d.ts:645

util.inspect() implementation, which
just returns the JSON output.

**Returns:** *any*

___

###  onerror

▸ **onerror**(`err`: Error): *void*

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

Defined in node_modules/@types/koa/index.d.ts:681

**Parameters:**

Name | Type |
------ | ------ |
`status` | number |

**Returns:** *never*

▸ **throw**(...`properties`: Array‹number | string | __type›): *never*

Defined in node_modules/@types/koa/index.d.ts:682

**Parameters:**

Name | Type |
------ | ------ |
`...properties` | Array‹number &#124; string &#124; __type› |

**Returns:** *never*

___

###  toJSON

▸ **toJSON**(): *any*

Defined in node_modules/@types/koa/index.d.ts:655

Return JSON representation.

Here we explicitly invoke .toJSON() on each
object, as iteration will otherwise fail due
to the getters and cause utilities such as
clone() to fail.

**Returns:** *any*
