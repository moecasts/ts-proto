/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../protobuf/any";

export const protobufPackage = "google.api";

/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 *
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 *
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 *
 * Example:
 *
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 *
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *     }
 *
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody) returns
 *       (google.protobuf.Empty);
 *     }
 *
 * Example with streaming methods:
 *
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *     }
 *
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */
export interface HttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType: string;
  /** The HTTP request/response body as raw binary. */
  data: Uint8Array;
  /**
   * Application specific response metadata. Must be set in the first response
   * for streaming APIs.
   */
  extensions: Any[];
}

function createBaseHttpBody(): HttpBody {
  return { contentType: "", data: new Uint8Array(0), extensions: [] };
}

export const HttpBody = {
  encode(message: HttpBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.extensions.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpBody {
    return {
      contentType: isSet(object.contentType) ? globalThis.String(object.contentType) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      extensions: globalThis.Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HttpBody): unknown {
    const obj: any = {};
    if (message.contentType !== "") {
      obj.contentType = message.contentType;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpBody>, I>>(base?: I): HttpBody {
    return HttpBody.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpBody>, I>>(object: I): HttpBody {
    const message = createBaseHttpBody();
    message.contentType = object.contentType ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.extensions = object.extensions?.map((e) => Any.fromPartial(e)) || [];
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
    "name": "google/api/httpbody.proto",
    "package": "google.api",
    "dependency": ["google/protobuf/any.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "HttpBody",
      "field": [{
        "name": "content_type",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "contentType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extensions",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extensions",
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
      "javaOuterClassname": "HttpBodyProto",
      "javaMultipleFiles": true,
      "javaGenerateEqualsAndHash": false,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "google.golang.org/genproto/googleapis/api/httpbody;httpbody",
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
        "span": [66, 0, 76, 1],
        "leadingComments":
          " Message that represents an arbitrary HTTP body. It should only be used for\n payload formats that can't be represented as JSON, such as raw binary or\n an HTML page.\n\n\n This message can be used both in streaming and non-streaming API methods in\n the request as well as the response.\n\n It can be used as a top-level request field, which is convenient if one\n wants to extract parameters from either the URL or HTTP template into the\n request fields and also want access to the raw HTTP body.\n\n Example:\n\n     message GetResourceRequest {\n       // A unique request id.\n       string request_id = 1;\n\n       // The raw HTTP body is bound to this field.\n       google.api.HttpBody http_body = 2;\n     }\n\n     service ResourceService {\n       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);\n       rpc UpdateResource(google.api.HttpBody) returns\n       (google.protobuf.Empty);\n     }\n\n Example with streaming methods:\n\n     service CaldavService {\n       rpc GetCalendar(stream google.api.HttpBody)\n         returns (stream google.api.HttpBody);\n       rpc UpdateCalendar(stream google.api.HttpBody)\n         returns (stream google.api.HttpBody);\n     }\n\n Use of this type only changes how the request and response bodies are\n handled, all other features will continue to work unchanged.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 0],
        "span": [68, 2, 26],
        "leadingComments": " The HTTP Content-Type header value specifying the content type of the body.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [71, 2, 17],
        "leadingComments": " The HTTP request/response body as raw binary.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 2],
        "span": [75, 2, 46],
        "leadingComments":
          " Application specific response metadata. Must be set in the first response\n for streaming APIs.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: { ".google.api.HttpBody": HttpBody },
  dependencies: [protoMetadata1],
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
