/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";

export const protobufPackage = "google.api";

/**
 * Defines the HTTP configuration for an API service. It contains a list of
 * [HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method
 * to one or more HTTP REST API methods.
 */
export interface Http {
  /**
   * A list of HTTP configuration rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: HttpRule[];
  /**
   * When set to true, URL path parameters will be fully URI-decoded except in
   * cases of single segment matches in reserved expansion, where "%2F" will be
   * left encoded.
   *
   * The default behavior is to not decode RFC 6570 reserved characters in multi
   * segment matches.
   */
  fullyDecodeReservedExpansion: boolean;
}

/**
 * # gRPC Transcoding
 *
 * gRPC Transcoding is a feature for mapping between a gRPC method and one or
 * more HTTP REST endpoints. It allows developers to build a single API service
 * that supports both gRPC APIs and REST APIs. Many systems, including [Google
 * APIs](https://github.com/googleapis/googleapis),
 * [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC
 * Gateway](https://github.com/grpc-ecosystem/grpc-gateway),
 * and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature
 * and use it for large scale production services.
 *
 * `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies
 * how different portions of the gRPC request message are mapped to the URL
 * path, URL query parameters, and HTTP request body. It also controls how the
 * gRPC response message is mapped to the HTTP response body. `HttpRule` is
 * typically specified as an `google.api.http` annotation on the gRPC method.
 *
 * Each mapping specifies a URL path template and an HTTP method. The path
 * template may refer to one or more fields in the gRPC request message, as long
 * as each field is a non-repeated field with a primitive (non-message) type.
 * The path template controls how fields of the request message are mapped to
 * the URL path.
 *
 * Example:
 *
 *     service Messaging {
 *       rpc GetMessage(GetMessageRequest) returns (Message) {
 *         option (google.api.http) = {
 *             get: "/v1/{name=messages/*}"
 *         };
 *       }
 *     }
 *     message GetMessageRequest {
 *       string name = 1; // Mapped to URL path.
 *     }
 *     message Message {
 *       string text = 1; // The resource content.
 *     }
 *
 * This enables an HTTP REST to gRPC mapping as below:
 *
 * HTTP | gRPC
 * -----|-----
 * `GET /v1/messages/123456`  | `GetMessage(name: "messages/123456")`
 *
 * Any fields in the request message which are not bound by the path template
 * automatically become HTTP query parameters if there is no HTTP request body.
 * For example:
 *
 *     service Messaging {
 *       rpc GetMessage(GetMessageRequest) returns (Message) {
 *         option (google.api.http) = {
 *             get:"/v1/messages/{message_id}"
 *         };
 *       }
 *     }
 *     message GetMessageRequest {
 *       message SubMessage {
 *         string subfield = 1;
 *       }
 *       string message_id = 1; // Mapped to URL path.
 *       int64 revision = 2;    // Mapped to URL query parameter `revision`.
 *       SubMessage sub = 3;    // Mapped to URL query parameter `sub.subfield`.
 *     }
 *
 * This enables a HTTP JSON to RPC mapping as below:
 *
 * HTTP | gRPC
 * -----|-----
 * `GET /v1/messages/123456?revision=2&sub.subfield=foo` |
 * `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield:
 * "foo"))`
 *
 * Note that fields which are mapped to URL query parameters must have a
 * primitive type or a repeated primitive type or a non-repeated message type.
 * In the case of a repeated type, the parameter can be repeated in the URL
 * as `...?param=A&param=B`. In the case of a message type, each field of the
 * message is mapped to a separate parameter, such as
 * `...?foo.a=A&foo.b=B&foo.c=C`.
 *
 * For HTTP methods that allow a request body, the `body` field
 * specifies the mapping. Consider a REST update method on the
 * message resource collection:
 *
 *     service Messaging {
 *       rpc UpdateMessage(UpdateMessageRequest) returns (Message) {
 *         option (google.api.http) = {
 *           patch: "/v1/messages/{message_id}"
 *           body: "message"
 *         };
 *       }
 *     }
 *     message UpdateMessageRequest {
 *       string message_id = 1; // mapped to the URL
 *       Message message = 2;   // mapped to the body
 *     }
 *
 * The following HTTP JSON to RPC mapping is enabled, where the
 * representation of the JSON in the request body is determined by
 * protos JSON encoding:
 *
 * HTTP | gRPC
 * -----|-----
 * `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:
 * "123456" message { text: "Hi!" })`
 *
 * The special name `*` can be used in the body mapping to define that
 * every field not bound by the path template should be mapped to the
 * request body.  This enables the following alternative definition of
 * the update method:
 *
 *     service Messaging {
 *       rpc UpdateMessage(Message) returns (Message) {
 *         option (google.api.http) = {
 *           patch: "/v1/messages/{message_id}"
 *           body: "*"
 *         };
 *       }
 *     }
 *     message Message {
 *       string message_id = 1;
 *       string text = 2;
 *     }
 *
 * The following HTTP JSON to RPC mapping is enabled:
 *
 * HTTP | gRPC
 * -----|-----
 * `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:
 * "123456" text: "Hi!")`
 *
 * Note that when using `*` in the body mapping, it is not possible to
 * have HTTP parameters, as all fields not bound by the path end in
 * the body. This makes this option more rarely used in practice when
 * defining REST APIs. The common usage of `*` is in custom methods
 * which don't use the URL at all for transferring data.
 *
 * It is possible to define multiple HTTP methods for one RPC by using
 * the `additional_bindings` option. Example:
 *
 *     service Messaging {
 *       rpc GetMessage(GetMessageRequest) returns (Message) {
 *         option (google.api.http) = {
 *           get: "/v1/messages/{message_id}"
 *           additional_bindings {
 *             get: "/v1/users/{user_id}/messages/{message_id}"
 *           }
 *         };
 *       }
 *     }
 *     message GetMessageRequest {
 *       string message_id = 1;
 *       string user_id = 2;
 *     }
 *
 * This enables the following two alternative HTTP JSON to RPC mappings:
 *
 * HTTP | gRPC
 * -----|-----
 * `GET /v1/messages/123456` | `GetMessage(message_id: "123456")`
 * `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id:
 * "123456")`
 *
 * ## Rules for HTTP mapping
 *
 * 1. Leaf request fields (recursive expansion nested messages in the request
 *    message) are classified into three categories:
 *    - Fields referred by the path template. They are passed via the URL path.
 *    - Fields referred by the [HttpRule.body][google.api.HttpRule.body]. They are passed via the HTTP
 *      request body.
 *    - All other fields are passed via the URL query parameters, and the
 *      parameter name is the field path in the request message. A repeated
 *      field can be represented as multiple query parameters under the same
 *      name.
 *  2. If [HttpRule.body][google.api.HttpRule.body] is "*", there is no URL query parameter, all fields
 *     are passed via URL path and HTTP request body.
 *  3. If [HttpRule.body][google.api.HttpRule.body] is omitted, there is no HTTP request body, all
 *     fields are passed via URL path and URL query parameters.
 *
 * ### Path template syntax
 *
 *     Template = "/" Segments [ Verb ] ;
 *     Segments = Segment { "/" Segment } ;
 *     Segment  = "*" | "**" | LITERAL | Variable ;
 *     Variable = "{" FieldPath [ "=" Segments ] "}" ;
 *     FieldPath = IDENT { "." IDENT } ;
 *     Verb     = ":" LITERAL ;
 *
 * The syntax `*` matches a single URL path segment. The syntax `**` matches
 * zero or more URL path segments, which must be the last part of the URL path
 * except the `Verb`.
 *
 * The syntax `Variable` matches part of the URL path as specified by its
 * template. A variable template must not contain other variables. If a variable
 * matches a single path segment, its template may be omitted, e.g. `{var}`
 * is equivalent to `{var=*}`.
 *
 * The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL`
 * contains any reserved character, such characters should be percent-encoded
 * before the matching.
 *
 * If a variable contains exactly one path segment, such as `"{var}"` or
 * `"{var=*}"`, when such a variable is expanded into a URL path on the client
 * side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The
 * server side does the reverse decoding. Such variables show up in the
 * [Discovery
 * Document](https://developers.google.com/discovery/v1/reference/apis) as
 * `{var}`.
 *
 * If a variable contains multiple path segments, such as `"{var=foo/*}"`
 * or `"{var=**}"`, when such a variable is expanded into a URL path on the
 * client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded.
 * The server side does the reverse decoding, except "%2F" and "%2f" are left
 * unchanged. Such variables show up in the
 * [Discovery
 * Document](https://developers.google.com/discovery/v1/reference/apis) as
 * `{+var}`.
 *
 * ## Using gRPC API Service Configuration
 *
 * gRPC API Service Configuration (service config) is a configuration language
 * for configuring a gRPC service to become a user-facing product. The
 * service config is simply the YAML representation of the `google.api.Service`
 * proto message.
 *
 * As an alternative to annotating your proto file, you can configure gRPC
 * transcoding in your service config YAML files. You do this by specifying a
 * `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same
 * effect as the proto annotation. This can be particularly useful if you
 * have a proto that is reused in multiple services. Note that any transcoding
 * specified in the service config will override any matching transcoding
 * configuration in the proto.
 *
 * Example:
 *
 *     http:
 *       rules:
 *         # Selects a gRPC method and applies HttpRule to it.
 *         - selector: example.v1.Messaging.GetMessage
 *           get: /v1/messages/{message_id}/{sub.subfield}
 *
 * ## Special notes
 *
 * When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the
 * proto to JSON conversion must follow the [proto3
 * specification](https://developers.google.com/protocol-buffers/docs/proto3#json).
 *
 * While the single segment variable follows the semantics of
 * [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String
 * Expansion, the multi segment variable **does not** follow RFC 6570 Section
 * 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion
 * does not expand special characters like `?` and `#`, which would lead
 * to invalid URLs. As the result, gRPC Transcoding uses a custom encoding
 * for multi segment variables.
 *
 * The path variables **must not** refer to any repeated or mapped field,
 * because client libraries are not capable of handling such variable expansion.
 *
 * The path variables **must not** capture the leading "/" character. The reason
 * is that the most common use case "{var}" does not capture the leading "/"
 * character. For consistency, all path variables must share the same behavior.
 *
 * Repeated message fields must not be mapped to URL query parameters, because
 * no client library can support such complicated mapping.
 *
 * If an API needs to use a JSON array for request or response body, it can map
 * the request or response body to a repeated field. However, some gRPC
 * Transcoding implementations may not support this feature.
 */
export interface HttpRule {
  /**
   * Selects a method to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * Maps to HTTP GET. Used for listing and getting information about
   * resources.
   */
  get?:
    | string
    | undefined;
  /** Maps to HTTP PUT. Used for replacing a resource. */
  put?:
    | string
    | undefined;
  /** Maps to HTTP POST. Used for creating a resource or performing an action. */
  post?:
    | string
    | undefined;
  /** Maps to HTTP DELETE. Used for deleting a resource. */
  delete?:
    | string
    | undefined;
  /** Maps to HTTP PATCH. Used for updating a resource. */
  patch?:
    | string
    | undefined;
  /**
   * The custom pattern is used for specifying an HTTP method that is not
   * included in the `pattern` field, such as HEAD, or "*" to leave the
   * HTTP method unspecified for this rule. The wild-card rule is useful
   * for services that provide content to Web (HTML) clients.
   */
  custom?:
    | CustomHttpPattern
    | undefined;
  /**
   * The name of the request field whose value is mapped to the HTTP request
   * body, or `*` for mapping all request fields not captured by the path
   * pattern to the HTTP body, or omitted for not having any HTTP request body.
   *
   * NOTE: the referred field must be present at the top-level of the request
   * message type.
   */
  body: string;
  /**
   * Optional. The name of the response field whose value is mapped to the HTTP
   * response body. When omitted, the entire response message will be used
   * as the HTTP response body.
   *
   * NOTE: The referred field must be present at the top-level of the response
   * message type.
   */
  responseBody: string;
  /**
   * Additional HTTP bindings for the selector. Nested bindings must
   * not contain an `additional_bindings` field themselves (that is,
   * the nesting may only be one level deep).
   */
  additionalBindings: HttpRule[];
}

/** A custom pattern is used for defining custom HTTP verb. */
export interface CustomHttpPattern {
  /** The name of this custom HTTP verb. */
  kind: string;
  /** The path matched by this custom verb. */
  path: string;
}

function createBaseHttp(): Http {
  return { rules: [], fullyDecodeReservedExpansion: false };
}

export const Http = {
  encode(message: Http, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      HttpRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fullyDecodeReservedExpansion === true) {
      writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Http {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rules.push(HttpRule.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fullyDecodeReservedExpansion = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Http {
    return {
      rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e: any) => HttpRule.fromJSON(e)) : [],
      fullyDecodeReservedExpansion: isSet(object.fullyDecodeReservedExpansion)
        ? globalThis.Boolean(object.fullyDecodeReservedExpansion)
        : false,
    };
  },

  toJSON(message: Http): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => HttpRule.toJSON(e));
    }
    if (message.fullyDecodeReservedExpansion === true) {
      obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Http>, I>>(base?: I): Http {
    return Http.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Http>, I>>(object: I): Http {
    const message = createBaseHttp();
    message.rules = object.rules?.map((e) => HttpRule.fromPartial(e)) || [];
    message.fullyDecodeReservedExpansion = object.fullyDecodeReservedExpansion ?? false;
    return message;
  },
};

function createBaseHttpRule(): HttpRule {
  return {
    selector: "",
    get: undefined,
    put: undefined,
    post: undefined,
    delete: undefined,
    patch: undefined,
    custom: undefined,
    body: "",
    responseBody: "",
    additionalBindings: [],
  };
}

export const HttpRule = {
  encode(message: HttpRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.get !== undefined) {
      writer.uint32(18).string(message.get);
    }
    if (message.put !== undefined) {
      writer.uint32(26).string(message.put);
    }
    if (message.post !== undefined) {
      writer.uint32(34).string(message.post);
    }
    if (message.delete !== undefined) {
      writer.uint32(42).string(message.delete);
    }
    if (message.patch !== undefined) {
      writer.uint32(50).string(message.patch);
    }
    if (message.custom !== undefined) {
      CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    if (message.responseBody !== "") {
      writer.uint32(98).string(message.responseBody);
    }
    for (const v of message.additionalBindings) {
      HttpRule.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.get = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.put = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.post = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.delete = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.patch = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.custom = CustomHttpPattern.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.body = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.responseBody = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.additionalBindings.push(HttpRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpRule {
    return {
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
      get: isSet(object.get) ? globalThis.String(object.get) : undefined,
      put: isSet(object.put) ? globalThis.String(object.put) : undefined,
      post: isSet(object.post) ? globalThis.String(object.post) : undefined,
      delete: isSet(object.delete) ? globalThis.String(object.delete) : undefined,
      patch: isSet(object.patch) ? globalThis.String(object.patch) : undefined,
      custom: isSet(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      responseBody: isSet(object.responseBody) ? globalThis.String(object.responseBody) : "",
      additionalBindings: globalThis.Array.isArray(object?.additionalBindings)
        ? object.additionalBindings.map((e: any) => HttpRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HttpRule): unknown {
    const obj: any = {};
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.get !== undefined) {
      obj.get = message.get;
    }
    if (message.put !== undefined) {
      obj.put = message.put;
    }
    if (message.post !== undefined) {
      obj.post = message.post;
    }
    if (message.delete !== undefined) {
      obj.delete = message.delete;
    }
    if (message.patch !== undefined) {
      obj.patch = message.patch;
    }
    if (message.custom !== undefined) {
      obj.custom = CustomHttpPattern.toJSON(message.custom);
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.responseBody !== "") {
      obj.responseBody = message.responseBody;
    }
    if (message.additionalBindings?.length) {
      obj.additionalBindings = message.additionalBindings.map((e) => HttpRule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpRule>, I>>(base?: I): HttpRule {
    return HttpRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpRule>, I>>(object: I): HttpRule {
    const message = createBaseHttpRule();
    message.selector = object.selector ?? "";
    message.get = object.get ?? undefined;
    message.put = object.put ?? undefined;
    message.post = object.post ?? undefined;
    message.delete = object.delete ?? undefined;
    message.patch = object.patch ?? undefined;
    message.custom = (object.custom !== undefined && object.custom !== null)
      ? CustomHttpPattern.fromPartial(object.custom)
      : undefined;
    message.body = object.body ?? "";
    message.responseBody = object.responseBody ?? "";
    message.additionalBindings = object.additionalBindings?.map((e) => HttpRule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCustomHttpPattern(): CustomHttpPattern {
  return { kind: "", path: "" };
}

export const CustomHttpPattern = {
  encode(message: CustomHttpPattern, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomHttpPattern {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomHttpPattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomHttpPattern {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: CustomHttpPattern): unknown {
    const obj: any = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomHttpPattern>, I>>(base?: I): CustomHttpPattern {
    return CustomHttpPattern.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomHttpPattern>, I>>(object: I): CustomHttpPattern {
    const message = createBaseCustomHttpPattern();
    message.kind = object.kind ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    "name": "google/api/http.proto",
    "package": "google.api",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Http",
      "field": [{
        "name": "rules",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.api.HttpRule",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "rules",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "fully_decode_reserved_expansion",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fullyDecodeReservedExpansion",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "HttpRule",
      "field": [{
        "name": "selector",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "selector",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "get",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "get",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "put",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "put",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "post",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "post",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "delete",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "delete",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "patch",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "patch",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "custom",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".google.api.CustomHttpPattern",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "custom",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "body",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "body",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "response_body",
        "number": 12,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "responseBody",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "additional_bindings",
        "number": 11,
        "label": 3,
        "type": 11,
        "typeName": ".google.api.HttpRule",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "additionalBindings",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "pattern", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CustomHttpPattern",
      "field": [{
        "name": "kind",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "kind",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "path",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "path",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": {
      "javaPackage": "com.google.api",
      "javaOuterClassname": "HttpProto",
      "javaMultipleFiles": true,
      "javaGenerateEqualsAndHash": false,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "google.golang.org/genproto/googleapis/api/annotations;annotations",
      "ccGenericServices": false,
      "javaGenericServices": false,
      "pyGenericServices": false,
      "phpGenericServices": false,
      "deprecated": false,
      "ccEnableArenas": true,
      "objcClassPrefix": "GAPI",
      "csharpNamespace": "",
      "swiftPrefix": "",
      "phpClassPrefix": "",
      "phpNamespace": "",
      "phpMetadataNamespace": "",
      "rubyPackage": "",
      "uninterpretedOption": [],
    },
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [28, 0, 41, 1],
        "leadingComments":
          " Defines the HTTP configuration for an API service. It contains a list of\n [HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method\n to one or more HTTP REST API methods.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 0],
        "span": [32, 2, 30],
        "leadingComments":
          ' A list of HTTP configuration rules that apply to individual API methods.\n\n **NOTE:** All service configuration rules follow "last one wins" order.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [40, 2, 43],
        "leadingComments":
          ' When set to true, URL path parameters will be fully URI-decoded except in\n cases of single segment matches in reserved expansion, where "%2F" will be\n left encoded.\n\n The default behavior is to not decode RFC 6570 reserved characters in multi\n segment matches.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [312, 0, 365, 1],
        "leadingComments":
          ' # gRPC Transcoding\n\n gRPC Transcoding is a feature for mapping between a gRPC method and one or\n more HTTP REST endpoints. It allows developers to build a single API service\n that supports both gRPC APIs and REST APIs. Many systems, including [Google\n APIs](https://github.com/googleapis/googleapis),\n [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC\n Gateway](https://github.com/grpc-ecosystem/grpc-gateway),\n and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature\n and use it for large scale production services.\n\n `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies\n how different portions of the gRPC request message are mapped to the URL\n path, URL query parameters, and HTTP request body. It also controls how the\n gRPC response message is mapped to the HTTP response body. `HttpRule` is\n typically specified as an `google.api.http` annotation on the gRPC method.\n\n Each mapping specifies a URL path template and an HTTP method. The path\n template may refer to one or more fields in the gRPC request message, as long\n as each field is a non-repeated field with a primitive (non-message) type.\n The path template controls how fields of the request message are mapped to\n the URL path.\n\n Example:\n\n     service Messaging {\n       rpc GetMessage(GetMessageRequest) returns (Message) {\n         option (google.api.http) = {\n             get: "/v1/{name=messages/*}"\n         };\n       }\n     }\n     message GetMessageRequest {\n       string name = 1; // Mapped to URL path.\n     }\n     message Message {\n       string text = 1; // The resource content.\n     }\n\n This enables an HTTP REST to gRPC mapping as below:\n\n HTTP | gRPC\n -----|-----\n `GET /v1/messages/123456`  | `GetMessage(name: "messages/123456")`\n\n Any fields in the request message which are not bound by the path template\n automatically become HTTP query parameters if there is no HTTP request body.\n For example:\n\n     service Messaging {\n       rpc GetMessage(GetMessageRequest) returns (Message) {\n         option (google.api.http) = {\n             get:"/v1/messages/{message_id}"\n         };\n       }\n     }\n     message GetMessageRequest {\n       message SubMessage {\n         string subfield = 1;\n       }\n       string message_id = 1; // Mapped to URL path.\n       int64 revision = 2;    // Mapped to URL query parameter `revision`.\n       SubMessage sub = 3;    // Mapped to URL query parameter `sub.subfield`.\n     }\n\n This enables a HTTP JSON to RPC mapping as below:\n\n HTTP | gRPC\n -----|-----\n `GET /v1/messages/123456?revision=2&sub.subfield=foo` |\n `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield:\n "foo"))`\n\n Note that fields which are mapped to URL query parameters must have a\n primitive type or a repeated primitive type or a non-repeated message type.\n In the case of a repeated type, the parameter can be repeated in the URL\n as `...?param=A&param=B`. In the case of a message type, each field of the\n message is mapped to a separate parameter, such as\n `...?foo.a=A&foo.b=B&foo.c=C`.\n\n For HTTP methods that allow a request body, the `body` field\n specifies the mapping. Consider a REST update method on the\n message resource collection:\n\n     service Messaging {\n       rpc UpdateMessage(UpdateMessageRequest) returns (Message) {\n         option (google.api.http) = {\n           patch: "/v1/messages/{message_id}"\n           body: "message"\n         };\n       }\n     }\n     message UpdateMessageRequest {\n       string message_id = 1; // mapped to the URL\n       Message message = 2;   // mapped to the body\n     }\n\n The following HTTP JSON to RPC mapping is enabled, where the\n representation of the JSON in the request body is determined by\n protos JSON encoding:\n\n HTTP | gRPC\n -----|-----\n `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:\n "123456" message { text: "Hi!" })`\n\n The special name `*` can be used in the body mapping to define that\n every field not bound by the path template should be mapped to the\n request body.  This enables the following alternative definition of\n the update method:\n\n     service Messaging {\n       rpc UpdateMessage(Message) returns (Message) {\n         option (google.api.http) = {\n           patch: "/v1/messages/{message_id}"\n           body: "*"\n         };\n       }\n     }\n     message Message {\n       string message_id = 1;\n       string text = 2;\n     }\n\n\n The following HTTP JSON to RPC mapping is enabled:\n\n HTTP | gRPC\n -----|-----\n `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:\n "123456" text: "Hi!")`\n\n Note that when using `*` in the body mapping, it is not possible to\n have HTTP parameters, as all fields not bound by the path end in\n the body. This makes this option more rarely used in practice when\n defining REST APIs. The common usage of `*` is in custom methods\n which don\'t use the URL at all for transferring data.\n\n It is possible to define multiple HTTP methods for one RPC by using\n the `additional_bindings` option. Example:\n\n     service Messaging {\n       rpc GetMessage(GetMessageRequest) returns (Message) {\n         option (google.api.http) = {\n           get: "/v1/messages/{message_id}"\n           additional_bindings {\n             get: "/v1/users/{user_id}/messages/{message_id}"\n           }\n         };\n       }\n     }\n     message GetMessageRequest {\n       string message_id = 1;\n       string user_id = 2;\n     }\n\n This enables the following two alternative HTTP JSON to RPC mappings:\n\n HTTP | gRPC\n -----|-----\n `GET /v1/messages/123456` | `GetMessage(message_id: "123456")`\n `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id:\n "123456")`\n\n ## Rules for HTTP mapping\n\n 1. Leaf request fields (recursive expansion nested messages in the request\n    message) are classified into three categories:\n    - Fields referred by the path template. They are passed via the URL path.\n    - Fields referred by the [HttpRule.body][google.api.HttpRule.body]. They are passed via the HTTP\n      request body.\n    - All other fields are passed via the URL query parameters, and the\n      parameter name is the field path in the request message. A repeated\n      field can be represented as multiple query parameters under the same\n      name.\n  2. If [HttpRule.body][google.api.HttpRule.body] is "*", there is no URL query parameter, all fields\n     are passed via URL path and HTTP request body.\n  3. If [HttpRule.body][google.api.HttpRule.body] is omitted, there is no HTTP request body, all\n     fields are passed via URL path and URL query parameters.\n\n ### Path template syntax\n\n     Template = "/" Segments [ Verb ] ;\n     Segments = Segment { "/" Segment } ;\n     Segment  = "*" | "**" | LITERAL | Variable ;\n     Variable = "{" FieldPath [ "=" Segments ] "}" ;\n     FieldPath = IDENT { "." IDENT } ;\n     Verb     = ":" LITERAL ;\n\n The syntax `*` matches a single URL path segment. The syntax `**` matches\n zero or more URL path segments, which must be the last part of the URL path\n except the `Verb`.\n\n The syntax `Variable` matches part of the URL path as specified by its\n template. A variable template must not contain other variables. If a variable\n matches a single path segment, its template may be omitted, e.g. `{var}`\n is equivalent to `{var=*}`.\n\n The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL`\n contains any reserved character, such characters should be percent-encoded\n before the matching.\n\n If a variable contains exactly one path segment, such as `"{var}"` or\n `"{var=*}"`, when such a variable is expanded into a URL path on the client\n side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The\n server side does the reverse decoding. Such variables show up in the\n [Discovery\n Document](https://developers.google.com/discovery/v1/reference/apis) as\n `{var}`.\n\n If a variable contains multiple path segments, such as `"{var=foo/*}"`\n or `"{var=**}"`, when such a variable is expanded into a URL path on the\n client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded.\n The server side does the reverse decoding, except "%2F" and "%2f" are left\n unchanged. Such variables show up in the\n [Discovery\n Document](https://developers.google.com/discovery/v1/reference/apis) as\n `{+var}`.\n\n ## Using gRPC API Service Configuration\n\n gRPC API Service Configuration (service config) is a configuration language\n for configuring a gRPC service to become a user-facing product. The\n service config is simply the YAML representation of the `google.api.Service`\n proto message.\n\n As an alternative to annotating your proto file, you can configure gRPC\n transcoding in your service config YAML files. You do this by specifying a\n `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same\n effect as the proto annotation. This can be particularly useful if you\n have a proto that is reused in multiple services. Note that any transcoding\n specified in the service config will override any matching transcoding\n configuration in the proto.\n\n Example:\n\n     http:\n       rules:\n         # Selects a gRPC method and applies HttpRule to it.\n         - selector: example.v1.Messaging.GetMessage\n           get: /v1/messages/{message_id}/{sub.subfield}\n\n ## Special notes\n\n When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the\n proto to JSON conversion must follow the [proto3\n specification](https://developers.google.com/protocol-buffers/docs/proto3#json).\n\n While the single segment variable follows the semantics of\n [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String\n Expansion, the multi segment variable **does not** follow RFC 6570 Section\n 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion\n does not expand special characters like `?` and `#`, which would lead\n to invalid URLs. As the result, gRPC Transcoding uses a custom encoding\n for multi segment variables.\n\n The path variables **must not** refer to any repeated or mapped field,\n because client libraries are not capable of handling such variable expansion.\n\n The path variables **must not** capture the leading "/" character. The reason\n is that the most common use case "{var}" does not capture the leading "/"\n character. For consistency, all path variables must share the same behavior.\n\n Repeated message fields must not be mapped to URL query parameters, because\n no client library can support such complicated mapping.\n\n If an API needs to use a JSON array for request or response body, it can map\n the request or response body to a repeated field. However, some gRPC\n Transcoding implementations may not support this feature.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [316, 2, 22],
        "leadingComments":
          " Selects a method to which this rule applies.\n\n Refer to [selector][google.api.DocumentationRule.selector] for syntax details.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 8, 0],
        "span": [321, 2, 343, 3],
        "leadingComments":
          " Determines the URL pattern is matched by this rules. This pattern can be\n used with any of the {get|put|post|delete|patch} methods. A custom method\n can be defined using the 'custom' field.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 1],
        "span": [324, 4, 19],
        "leadingComments": " Maps to HTTP GET. Used for listing and getting information about\n resources.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 2],
        "span": [327, 4, 19],
        "leadingComments": " Maps to HTTP PUT. Used for replacing a resource.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 3],
        "span": [330, 4, 20],
        "leadingComments": " Maps to HTTP POST. Used for creating a resource or performing an action.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 4],
        "span": [333, 4, 22],
        "leadingComments": " Maps to HTTP DELETE. Used for deleting a resource.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 5],
        "span": [336, 4, 21],
        "leadingComments": " Maps to HTTP PATCH. Used for updating a resource.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 6],
        "span": [342, 4, 33],
        "leadingComments":
          ' The custom pattern is used for specifying an HTTP method that is not\n included in the `pattern` field, such as HEAD, or "*" to leave the\n HTTP method unspecified for this rule. The wild-card rule is useful\n for services that provide content to Web (HTML) clients.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 7],
        "span": [351, 2, 18],
        "leadingComments":
          " The name of the request field whose value is mapped to the HTTP request\n body, or `*` for mapping all request fields not captured by the path\n pattern to the HTTP body, or omitted for not having any HTTP request body.\n\n NOTE: the referred field must be present at the top-level of the request\n message type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 8],
        "span": [359, 2, 28],
        "leadingComments":
          " Optional. The name of the response field whose value is mapped to the HTTP\n response body. When omitted, the entire response message will be used\n as the HTTP response body.\n\n NOTE: The referred field must be present at the top-level of the response\n message type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 9],
        "span": [364, 2, 45],
        "leadingComments":
          " Additional HTTP bindings for the selector. Nested bindings must\n not contain an `additional_bindings` field themselves (that is,\n the nesting may only be one level deep).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [368, 0, 374, 1],
        "leadingComments": " A custom pattern is used for defining custom HTTP verb.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 0],
        "span": [370, 2, 18],
        "leadingComments": " The name of this custom HTTP verb.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 1],
        "span": [373, 2, 18],
        "leadingComments": " The path matched by this custom verb.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".google.api.Http": Http,
    ".google.api.HttpRule": HttpRule,
    ".google.api.CustomHttpPattern": CustomHttpPattern,
  },
  dependencies: [],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
