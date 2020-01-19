[pms-helper](../README.md) › [Globals](../globals.md) › [MonitorError](monitorerror.md)

# Class: MonitorError

error instance of monitor

## Hierarchy

  ↳ [HttpError](httperror.md)

  ↳ **MonitorError**

## Index

### Constructors

* [constructor](monitorerror.md#constructor)

### Properties

* [code](monitorerror.md#code)
* [detail](monitorerror.md#detail)
* [details](monitorerror.md#details)
* [message](monitorerror.md#message)
* [name](monitorerror.md#name)
* [refer](monitorerror.md#refer)
* [stack](monitorerror.md#optional-stack)
* [status](monitorerror.md#status)
* [busiCode](monitorerror.md#static-private-busicode)

## Constructors

###  constructor

\+ **new MonitorError**(`code`: string, `message`: string, `detail`: object): *[MonitorError](monitorerror.md)*

*Overrides [HttpError](httperror.md).[constructor](httperror.md#constructor)*

Defined in src/api/monitor/errors/monitor.error.ts:7

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`code` | string | - |
`message` | string | - |
`detail` | object |  {} |

**Returns:** *[MonitorError](monitorerror.md)*

## Properties

###  code

• **code**: *string*

*Overrides [HttpError](httperror.md).[code](httperror.md#code)*

Defined in src/api/monitor/errors/monitor.error.ts:9

___

###  detail

• **detail**: *object*

Defined in src/api/monitor/errors/monitor.error.ts:11

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

Defined in src/api/monitor/errors/monitor.error.ts:10

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

▪ **busiCode**: *string* = "10"

Defined in src/api/monitor/errors/monitor.error.ts:7
