/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata2 } from "../protobuf/descriptor";
import { protoMetadata as protoMetadata1 } from "./http";

export const protobufPackage = "google.api";

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
    "name": "google/api/annotations.proto",
    "package": "google.api",
    "dependency": ["google/api/http.proto", "google/protobuf/descriptor.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [],
    "enumType": [],
    "service": [],
    "extension": [{
      "name": "http",
      "number": 72295728,
      "label": 1,
      "type": 11,
      "typeName": ".google.api.HttpRule",
      "extendee": ".google.protobuf.MethodOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "http",
      "options": undefined,
      "proto3Optional": false,
    }],
    "options": {
      "javaPackage": "com.google.api",
      "javaOuterClassname": "AnnotationsProto",
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
      "ccEnableArenas": false,
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
        "path": [7, 0],
        "span": [29, 2, 27],
        "leadingComments": " See `HttpRule`.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {},
  dependencies: [protoMetadata1, protoMetadata2],
};
