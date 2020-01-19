[pms-helper](../README.md) › [Globals](../globals.md) › [App](../classes/app.md) › [BaseResponse](app.baseresponse.md)

# Interface: BaseResponse

## Hierarchy

* **BaseResponse**

## Index

### Properties

* [body](app.baseresponse.md#body)
* [etag](app.baseresponse.md#etag)
* [header](app.baseresponse.md#header)
* [headerSent](app.baseresponse.md#headersent)
* [headers](app.baseresponse.md#headers)
* [lastModified](app.baseresponse.md#lastmodified)
* [length](app.baseresponse.md#length)
* [message](app.baseresponse.md#message)
* [socket](app.baseresponse.md#socket)
* [status](app.baseresponse.md#status)
* [type](app.baseresponse.md#type)
* [writable](app.baseresponse.md#writable)

### Methods

* [append](app.baseresponse.md#append)
* [attachment](app.baseresponse.md#attachment)
* [flushHeaders](app.baseresponse.md#flushheaders)
* [get](app.baseresponse.md#get)
* [inspect](app.baseresponse.md#inspect)
* [is](app.baseresponse.md#is)
* [redirect](app.baseresponse.md#redirect)
* [remove](app.baseresponse.md#remove)
* [set](app.baseresponse.md#set)
* [toJSON](app.baseresponse.md#tojson)
* [vary](app.baseresponse.md#vary)

## Properties

###  body

• **body**: *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:313

Get/Set response body.

___

###  etag

• **etag**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:389

Get/Set the ETag of a response.
This will normalize the quotes if necessary.

    this.response.etag = 'md5hashsum';
    this.response.etag = '"md5hashsum"';
    this.response.etag = 'W/"123456789"';

**`param`** 

**`api`** public

___

###  header

• **header**: *any*

Defined in node_modules/@types/koa/index.d.ts:595

Return response header.

___

###  headerSent

• **headerSent**: *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:324

Check if a header has been written to the socket.

___

###  headers

• **headers**: *any*

Defined in node_modules/@types/koa/index.d.ts:600

Return response header, alias as response.header

___

###  lastModified

• **lastModified**: *Date*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:376

Get the Last-Modified date in Date form, if it exists.
Set the Last-Modified date using a string or a Date.

    this.response.lastModified = new Date();
    this.response.lastModified = '2013-09-13';

___

###  length

• **length**: *number*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:319

Return parsed response Content-Length when present.
Set Content-Length field to `n`.

___

###  message

• **message**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:308

Get response status message

___

###  socket

• **socket**: *Socket*

Defined in node_modules/@types/koa/index.d.ts:590

Return the request socket.

**`returns`** 

**`api`** public

___

###  status

• **status**: *number*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:303

Get/Set response status code.

___

###  type

• **type**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:367

Return the response mime type void of
parameters such as "charset".

Set Content-Type response header with `type` through `mime.lookup()`
when it does not contain a charset.

Examples:

    this.type = '.html';
    this.type = 'html';
    this.type = 'json';
    this.type = 'application/json';
    this.type = 'png';

___

###  writable

• **writable**: *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:427

Checks if the request is writable.
Tests for the existence of the socket
as node sometimes does not set it.

## Methods

###  append

▸ **append**(`field`: string, `val`: string | string[]): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:415

Append additional header `field` with value `val`.

Examples:

```
this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
this.append('Warning', '199 Miscellaneous warning');
```

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |
`val` | string &#124; string[] |

**Returns:** *void*

___

###  attachment

▸ **attachment**(`filename`: string): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:350

Set Content-Disposition header to "attachment" with optional `filename`.

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *void*

___

###  flushHeaders

▸ **flushHeaders**(): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:432

Flush any set headers, and begin the body

**Returns:** *void*

___

###  get

▸ **get**(`field`: string): *string*

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

Defined in node_modules/@types/koa/index.d.ts:630

Inspect implementation.

**Returns:** *any*

___

###  is

▸ **is**(...`types`: string[]): *string*

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

Defined in node_modules/@types/koa/index.d.ts:612

**Parameters:**

Name | Type |
------ | ------ |
`types` | string[] |

**Returns:** *string*

___

###  redirect

▸ **redirect**(`url`: string, `alt?`: string): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:345

Perform a 302 redirect to `url`.

The string "back" is special-cased
to provide Referrer support, when Referrer
is not present `alt` or "/" is used.

Examples:

   this.redirect('back');
   this.redirect('back', '/index.html');
   this.redirect('/login');
   this.redirect('http://google.com');

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`alt?` | string |

**Returns:** *void*

___

###  remove

▸ **remove**(`field`: string): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:420

Remove header `field`.

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |

**Returns:** *void*

___

###  set

▸ **set**(`field`: object): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:401

Set header `field` to `val`, or pass
an object of header fields.

Examples:

   this.set('Foo', ['bar', 'baz']);
   this.set('Accept', 'application/json');
   this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });

**Parameters:**

Name | Type |
------ | ------ |
`field` | object |

**Returns:** *void*

▸ **set**(`field`: string, `val`: string | string[]): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:402

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |
`val` | string &#124; string[] |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(): *any*

Defined in node_modules/@types/koa/index.d.ts:635

Return JSON representation.

**Returns:** *any*

___

###  vary

▸ **vary**(`field`: string): *void*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:329

Vary on `field`.

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |

**Returns:** *void*
