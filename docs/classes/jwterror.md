[pms-helper](../README.md) › [Globals](../globals.md) › [JwtError](jwterror.md)

# Class: JwtError

## Hierarchy

  ↳ [HttpError](httperror.md)

  ↳ **JwtError**

## Index

### Constructors

* [constructor](jwterror.md#constructor)

### Properties

* [code](jwterror.md#code)
* [detail](jwterror.md#detail)
* [details](jwterror.md#details)
* [message](jwterror.md#message)
* [name](jwterror.md#name)
* [refer](jwterror.md#refer)
* [stack](jwterror.md#optional-stack)
* [status](jwterror.md#status)
* [busiCode](jwterror.md#static-private-busicode)

## Constructors

###  constructor

\+ **new JwtError**(`code`: string, `message`: string, `detail`: object): *[JwtError](jwterror.md)*

*Overrides [HttpError](httperror.md).[constructor](httperror.md#constructor)*

Defined in src/jwt/jwt.error.ts:4

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`code` | string | - |
`message` | string | - |
`detail` | object |  {} |

**Returns:** *[JwtError](jwterror.md)*

## Properties

###  code

• **code**: *string*

*Overrides [HttpError](httperror.md).[code](httperror.md#code)*

Defined in src/jwt/jwt.error.ts:6

___

###  detail

• **detail**: *object*

Defined in src/jwt/jwt.error.ts:8

#### Type declaration:

* \[ **x**: *string*\]: any

___

###  details

• **details**: *object*

*Inherited from [HttpError](httperror.md).[details](httperror.md#details)*

Defined in src/error/http.error.ts:19

detail about error

#### Type declaration:

* \[ **x**: *string*\]: any

___

###  message

• **message**: *string*

*Overrides [HttpError](httperror.md).[message](httperror.md#message)*

Defined in src/jwt/jwt.error.ts:7

___

###  name

• **name**: *string*

*Inherited from void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

###  refer

• **refer**: *string*

*Inherited from [HttpError](httperror.md).[refer](httperror.md#refer)*

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

*Inherited from [HttpError](httperror.md).[status](httperror.md#status)*

Defined in src/error/http.error.ts:16

http status_code ,such as 200, 201, 401, 403 and so on

___

### `Static` `Private` busiCode

▪ **busiCode**: *string* = "20"

Defined in src/jwt/jwt.error.ts:4
