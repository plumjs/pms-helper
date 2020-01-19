[pms-helper](../README.md) › [Globals](../globals.md) › [HttpError](httperror.md)

# Class: HttpError

Class HttpError extends Error
```ts
throw new HttpError(200, '-1', 'validate error', { "age": { "gt": 10 } }, "http://localhost:3000/swagger");
```

## Hierarchy

* Error

  ↳ **HttpError**

  ↳ [CommandError](commanderror.md)

  ↳ [MonitorError](monitorerror.md)

  ↳ [JwtError](jwterror.md)

## Index

### Constructors

* [constructor](httperror.md#constructor)

### Properties

* [code](httperror.md#code)
* [details](httperror.md#details)
* [message](httperror.md#message)
* [name](httperror.md#name)
* [refer](httperror.md#refer)
* [stack](httperror.md#optional-stack)
* [status](httperror.md#status)
* [Error](httperror.md#static-error)

## Constructors

###  constructor

\+ **new HttpError**(`status`: number, `code`: string, `message`: string, `details`: object, `refer`: string): *[HttpError](httperror.md)*

Defined in src/error/http.error.ts:7

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`status` | number | http status_code ,such as 200, 201, 401, 403 and so on |
`code` | string | business error code |
`message` | string | error message |
`details` | object | detail about error |
`refer` | string | error reference link, such as a swagger html  |

**Returns:** *[HttpError](httperror.md)*

## Properties

###  code

• **code**: *string*

Defined in src/error/http.error.ts:17

business error code

___

###  details

• **details**: *object*

Defined in src/error/http.error.ts:19

detail about error

#### Type declaration:

* \[ **x**: *string*\]: any

___

###  message

• **message**: *string*

*Overrides void*

Defined in src/error/http.error.ts:18

error message

___

###  name

• **name**: *string*

*Inherited from void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

###  refer

• **refer**: *string*

Defined in src/error/http.error.ts:20

error reference link, such as a swagger html

___

### `Optional` stack

• **stack**? : *string*

*Inherited from void*

*Overrides void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

###  status

• **status**: *number*

Defined in src/error/http.error.ts:16

http status_code ,such as 200, 201, 401, 403 and so on

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984
