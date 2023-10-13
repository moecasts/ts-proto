/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata1 } from "./google/api/annotations";
import { HttpRule } from "./google/api/http";

export const protobufPackage = "helloworld";

/** The request message containing the user's name. */
export interface HelloRequest {
  name: string;
  message: string;
}

/** The response message containing the greetings */
export interface HelloReply {
  message: string;
}

function createBaseHelloRequest(): HelloRequest {
  return { name: "", message: "" };
}

export const HelloRequest = {
  encode(message: HelloRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelloRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HelloRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: HelloRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HelloRequest>, I>>(base?: I): HelloRequest {
    return HelloRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HelloRequest>, I>>(object: I): HelloRequest {
    const message = createBaseHelloRequest();
    message.name = object.name ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseHelloReply(): HelloReply {
  return { message: "" };
}

export const HelloReply = {
  encode(message: HelloReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelloReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HelloReply {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: HelloReply): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HelloReply>, I>>(base?: I): HelloReply {
    return HelloReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HelloReply>, I>>(object: I): HelloReply {
    const message = createBaseHelloReply();
    message.message = object.message ?? "";
    return message;
  },
};

/** The greeting service definition. */
export interface Greeter {
  /** Sends a greeting */
  SayHello(request: HelloRequest): Promise<HelloReply>;
}

export const GreeterServiceName = "helloworld.Greeter";
export class GreeterClientImpl implements Greeter {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || GreeterServiceName;
    this.rpc = rpc;
    this.SayHello = this.SayHello.bind(this);
  }
  SayHello(request: HelloRequest): Promise<HelloReply> {
    const data = HelloRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SayHello", data);
    return promise.then((data) => HelloReply.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
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
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "sample.proto",
    "package": "helloworld",
    "dependency": ["google/api/annotations.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "HelloRequest",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "message",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "message",
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
      "name": "HelloReply",
      "field": [{
        "name": "message",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "message",
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
    "service": [{
      "name": "Greeter",
      "method": [{
        "name": "SayHello",
        "inputType": ".helloworld.HelloRequest",
        "outputType": ".helloworld.HelloReply",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0],
        "span": [7, 0, 21, 1],
        "leadingComments": " The greeting service definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 0],
        "span": [9, 2, 20, 3],
        "leadingComments": " Sends a greeting\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [24, 0, 27, 1],
        "leadingComments": " The request message containing the user's name.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [30, 0, 32, 1],
        "leadingComments": " The response message containing the greetings\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".helloworld.HelloRequest": HelloRequest,
    ".helloworld.HelloReply": HelloReply,
    ".helloworld.Greeter": GreeterClientImpl,
  },
  dependencies: [protoMetadata1],
  options: {
    services: {
      "Greeter": {
        options: undefined,
        methods: {
          "SayHello": {
            "http": HttpRule.decode(
              Buffer.from("EhIvaGVsbG93b3JsZC97bmFtZX1aGiIVL3YxL2dyZWV0ZXIvc2F5X2hlbGxvOgEq", "base64"),
            ),
          },
        },
      },
    },
  },
};

console.log('debug1 protoMetadata', JSON.stringify(protoMetadata.options?.services, null, 2));

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
