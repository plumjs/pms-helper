[pms-helper](../README.md) › [Globals](../globals.md) › [App](../classes/app.md) › [BaseRequest](app.baserequest.md)

# Interface: BaseRequest

## Hierarchy

* **BaseRequest**

## Index

### Properties

* [URL](app.baserequest.md#url)
* [charset](app.baserequest.md#charset)
* [fresh](app.baserequest.md#fresh)
* [header](app.baserequest.md#header)
* [headers](app.baserequest.md#headers)
* [host](app.baserequest.md#host)
* [hostname](app.baserequest.md#hostname)
* [href](app.baserequest.md#href)
* [idempotent](app.baserequest.md#idempotent)
* [ip](app.baserequest.md#ip)
* [ips](app.baserequest.md#ips)
* [length](app.baserequest.md#length)
* [method](app.baserequest.md#method)
* [origin](app.baserequest.md#origin)
* [path](app.baserequest.md#path)
* [protocol](app.baserequest.md#protocol)
* [query](app.baserequest.md#query)
* [querystring](app.baserequest.md#querystring)
* [search](app.baserequest.md#search)
* [secure](app.baserequest.md#secure)
* [socket](app.baserequest.md#socket)
* [stale](app.baserequest.md#stale)
* [subdomains](app.baserequest.md#subdomains)
* [type](app.baserequest.md#type)
* [url](app.baserequest.md#url)

### Methods

* [accepts](app.baserequest.md#accepts)
* [acceptsCharsets](app.baserequest.md#acceptscharsets)
* [acceptsEncodings](app.baserequest.md#acceptsencodings)
* [acceptsLanguages](app.baserequest.md#acceptslanguages)
* [get](app.baserequest.md#get)
* [inspect](app.baserequest.md#inspect)
* [is](app.baserequest.md#is)
* [toJSON](app.baserequest.md#tojson)

## Properties

###  URL

• **URL**: *URL*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:106

Get WHATWG parsed URL object.

___

###  charset

• **charset**: *string*

Defined in node_modules/@types/koa/index.d.ts:559

Get the charset when present or undefined.

___

###  fresh

• **fresh**: *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:113

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

___

###  header

• **header**: *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:36

Return request header.

___

###  headers

• **headers**: *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:41

Return request header, alias as request.header

___

###  host

• **host**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:94

Parse the "Host" header field host
and support X-Forwarded-Host when a
proxy is enabled.

___

###  hostname

• **hostname**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:101

Parse the "Host" header field hostname
and support X-Forwarded-Host when a
proxy is enabled.

___

###  href

• **href**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:56

Get full request URL.

___

###  idempotent

• **idempotent**: *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:125

Check if the request is idempotent.

___

###  ip

• **ip**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:152

Request remote address. Supports X-Forwarded-For when app.proxy is true.

___

###  ips

• **ips**: *string[]*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:162

When `app.proxy` is `true`, parse
the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

___

###  length

• **length**: *number*

Defined in node_modules/@types/koa/index.d.ts:564

Return parsed Content-Length when present.

___

###  method

• **method**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:61

Get/Set request method.

___

###  origin

• **origin**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:51

Get origin of URL.

___

###  path

• **path**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:67

Get request pathname.
Set pathname, retaining the query-string when present.

___

###  protocol

• **protocol**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:140

Return the protocol string "http" or "https"
when requested with TLS. When the proxy setting
is enabled the "X-Forwarded-Proto" header
field will be trusted. If you're running behind
a reverse proxy that supplies https for you this
may be enabled.

___

###  query

• **query**: *any*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:73

Get parsed query-string.
Set query-string as an object.

___

###  querystring

• **querystring**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:78

Get/Set query string.

___

###  search

• **search**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:87

Get the search string. Same as the querystring
except it includes the leading ?.

Set the search string. Same as
response.querystring= but included for ubiquity.

___

###  secure

• **secure**: *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:147

Short-hand for:

   this.protocol == 'https'

___

###  socket

• **socket**: *Socket*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:130

Return the request socket.

___

###  stale

• **stale**: *boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:120

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

___

###  subdomains

• **subdomains**: *string[]*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:176

Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain
of the app. By default, the domain of the app is assumed to be the last two
parts of the host. This can be changed by setting `app.subdomainOffset`.

For example, if the domain is "tobi.ferrets.example.com":
If `app.subdomainOffset` is not set, this.subdomains is
`["ferrets", "tobi"]`.
If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.

___

###  type

• **type**: *string*

Defined in node_modules/@types/koa/index.d.ts:570

Return the request mime type void of
parameters such as "charset".

___

###  url

• **url**: *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:46

Get/Set request URL.

## Methods

###  accepts

▸ **accepts**(): *string[] | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:214

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json" or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    this.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    this.accepts('html');
    // => "html"
    this.accepts('text/html');
    // => "text/html"
    this.accepts('json', 'text');
    // => "json"
    this.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    this.accepts('image/png');
    this.accepts('png');
    // => undefined

    // Accept: text/*;q=.5, application/json
    this.accepts(['html', 'json']);
    this.accepts('html', 'json');
    // => "json"

**Returns:** *string[] | boolean*

▸ **accepts**(...`types`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:215

**Parameters:**

Name | Type |
------ | ------ |
`...types` | string[] |

**Returns:** *string | boolean*

▸ **accepts**(`types`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:216

**Parameters:**

Name | Type |
------ | ------ |
`types` | string[] |

**Returns:** *string | boolean*

___

###  acceptsCharsets

▸ **acceptsCharsets**(): *string[] | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:238

Return accepted charsets or best fit based on `charsets`.

Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
an array sorted by quality is returned:

    ['utf-8', 'utf-7', 'iso-8859-1']

**Returns:** *string[] | boolean*

▸ **acceptsCharsets**(...`charsets`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:239

**Parameters:**

Name | Type |
------ | ------ |
`...charsets` | string[] |

**Returns:** *string | boolean*

▸ **acceptsCharsets**(`charsets`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:240

**Parameters:**

Name | Type |
------ | ------ |
`charsets` | string[] |

**Returns:** *string | boolean*

___

###  acceptsEncodings

▸ **acceptsEncodings**(): *string[] | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:226

Return accepted encodings or best fit based on `encodings`.

Given `Accept-Encoding: gzip, deflate`
an array sorted by quality is returned:

    ['gzip', 'deflate']

**Returns:** *string[] | boolean*

▸ **acceptsEncodings**(...`encodings`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:227

**Parameters:**

Name | Type |
------ | ------ |
`...encodings` | string[] |

**Returns:** *string | boolean*

▸ **acceptsEncodings**(`encodings`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:228

**Parameters:**

Name | Type |
------ | ------ |
`encodings` | string[] |

**Returns:** *string | boolean*

___

###  acceptsLanguages

▸ **acceptsLanguages**(): *string[] | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:250

Return accepted languages or best fit based on `langs`.

Given `Accept-Language: en;q=0.8, es, pt`
an array sorted by quality is returned:

    ['es', 'pt', 'en']

**Returns:** *string[] | boolean*

▸ **acceptsLanguages**(...`langs`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:251

**Parameters:**

Name | Type |
------ | ------ |
`...langs` | string[] |

**Returns:** *string | boolean*

▸ **acceptsLanguages**(`langs`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:252

**Parameters:**

Name | Type |
------ | ------ |
`langs` | string[] |

**Returns:** *string | boolean*

___

###  get

▸ **get**(`field`: string): *string*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:296

Return request header.

The `Referrer` header field is special-cased,
both `Referrer` and `Referer` are interchangeable.

Examples:

    this.get('Content-Type');
    // => "text/plain"

    this.get('content-type');
    // => "text/plain"

    this.get('Something');
    // => undefined

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |

**Returns:** *string*

___

###  inspect

▸ **inspect**(): *any*

Defined in node_modules/@types/koa/index.d.ts:575

Inspect implementation.

**Returns:** *any*

___

###  is

▸ **is**(...`types`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:276

Check if the incoming request contains the "Content-Type"
header field, and it contains any of the give mime `type`s.
If there is no request body, `null` is returned.
If there is no content type, `false` is returned.
Otherwise, it returns the first `type` that matches.

Examples:

    // With Content-Type: text/html; charset=utf-8
    this.is('html'); // => 'html'
    this.is('text/html'); // => 'text/html'
    this.is('text/*', 'application/json'); // => 'text/html'

    // When Content-Type is application/json
    this.is('json', 'urlencoded'); // => 'json'
    this.is('application/json'); // => 'application/json'
    this.is('html', 'application/*'); // => 'application/json'

    this.is('html'); // => false

**Parameters:**

Name | Type |
------ | ------ |
`...types` | string[] |

**Returns:** *string | boolean*

▸ **is**(`types`: string[]): *string | boolean*

*Inherited from void*

Defined in node_modules/@types/koa/index.d.ts:277

**Parameters:**

Name | Type |
------ | ------ |
`types` | string[] |

**Returns:** *string | boolean*

___

###  toJSON

▸ **toJSON**(): *any*

Defined in node_modules/@types/koa/index.d.ts:580

Return JSON representation.

**Returns:** *any*
