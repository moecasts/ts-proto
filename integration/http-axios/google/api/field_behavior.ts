/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata1 } from "../protobuf/descriptor";

export const protobufPackage = "google.api";

/**
 * An indicator of the behavior of a given field (for example, that a field
 * is required in requests, or given as output but ignored as input).
 * This **does not** change the behavior in protocol buffers itself; it only
 * denotes the behavior and may affect how API tooling handles the field.
 *
 * Note: This enum **may** receive new values in the future.
 */
export enum FieldBehavior {
  /** FIELD_BEHAVIOR_UNSPECIFIED - Conventional default for enums. Do not use this. */
  FIELD_BEHAVIOR_UNSPECIFIED = 0,
  /**
   * OPTIONAL - Specifically denotes a field as optional.
   * While all fields in protocol buffers are optional, this may be specified
   * for emphasis if appropriate.
   */
  OPTIONAL = 1,
  /**
   * REQUIRED - Denotes a field as required.
   * This indicates that the field **must** be provided as part of the request,
   * and failure to do so will cause an error (usually `INVALID_ARGUMENT`).
   */
  REQUIRED = 2,
  /**
   * OUTPUT_ONLY - Denotes a field as output only.
   * This indicates that the field is provided in responses, but including the
   * field in a request does nothing (the server *must* ignore it and
   * *must not* throw an error as a result of the field's presence).
   */
  OUTPUT_ONLY = 3,
  /**
   * INPUT_ONLY - Denotes a field as input only.
   * This indicates that the field is provided in requests, and the
   * corresponding field is not included in output.
   */
  INPUT_ONLY = 4,
  /**
   * IMMUTABLE - Denotes a field as immutable.
   * This indicates that the field may be set once in a request to create a
   * resource, but may not be changed thereafter.
   */
  IMMUTABLE = 5,
  UNRECOGNIZED = -1,
}

export function fieldBehaviorFromJSON(object: any): FieldBehavior {
  switch (object) {
    case 0:
    case "FIELD_BEHAVIOR_UNSPECIFIED":
      return FieldBehavior.FIELD_BEHAVIOR_UNSPECIFIED;
    case 1:
    case "OPTIONAL":
      return FieldBehavior.OPTIONAL;
    case 2:
    case "REQUIRED":
      return FieldBehavior.REQUIRED;
    case 3:
    case "OUTPUT_ONLY":
      return FieldBehavior.OUTPUT_ONLY;
    case 4:
    case "INPUT_ONLY":
      return FieldBehavior.INPUT_ONLY;
    case 5:
    case "IMMUTABLE":
      return FieldBehavior.IMMUTABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldBehavior.UNRECOGNIZED;
  }
}

export function fieldBehaviorToJSON(object: FieldBehavior): string {
  switch (object) {
    case FieldBehavior.FIELD_BEHAVIOR_UNSPECIFIED:
      return "FIELD_BEHAVIOR_UNSPECIFIED";
    case FieldBehavior.OPTIONAL:
      return "OPTIONAL";
    case FieldBehavior.REQUIRED:
      return "REQUIRED";
    case FieldBehavior.OUTPUT_ONLY:
      return "OUTPUT_ONLY";
    case FieldBehavior.INPUT_ONLY:
      return "INPUT_ONLY";
    case FieldBehavior.IMMUTABLE:
      return "IMMUTABLE";
    case FieldBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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
    "name": "google/api/field_behavior.proto",
    "package": "google.api",
    "dependency": ["google/protobuf/descriptor.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [],
    "enumType": [{
      "name": "FieldBehavior",
      "value": [
        { "name": "FIELD_BEHAVIOR_UNSPECIFIED", "number": 0, "options": undefined },
        { "name": "OPTIONAL", "number": 1, "options": undefined },
        { "name": "REQUIRED", "number": 2, "options": undefined },
        { "name": "OUTPUT_ONLY", "number": 3, "options": undefined },
        { "name": "INPUT_ONLY", "number": 4, "options": undefined },
        { "name": "IMMUTABLE", "number": 5, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [],
    "extension": [{
      "name": "field_behavior",
      "number": 1052,
      "label": 3,
      "type": 14,
      "typeName": ".google.api.FieldBehavior",
      "extendee": ".google.protobuf.FieldOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "fieldBehavior",
      "options": undefined,
      "proto3Optional": false,
    }],
    "options": {
      "javaPackage": "com.google.api",
      "javaOuterClassname": "FieldBehaviorProto",
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
        "path": [5, 0],
        "span": [33, 0, 62, 1],
        "leadingComments":
          " An indicator of the behavior of a given field (for example, that a field\n is required in requests, or given as output but ignored as input).\n This **does not** change the behavior in protocol buffers itself; it only\n denotes the behavior and may affect how API tooling handles the field.\n\n Note: This enum **may** receive new values in the future.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0, 2, 0],
        "span": [35, 2, 33],
        "leadingComments": " Conventional default for enums. Do not use this.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0, 2, 1],
        "span": [40, 2, 15],
        "leadingComments":
          " Specifically denotes a field as optional.\n While all fields in protocol buffers are optional, this may be specified\n for emphasis if appropriate.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0, 2, 2],
        "span": [45, 2, 15],
        "leadingComments":
          " Denotes a field as required.\n This indicates that the field **must** be provided as part of the request,\n and failure to do so will cause an error (usually `INVALID_ARGUMENT`).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0, 2, 3],
        "span": [51, 2, 18],
        "leadingComments":
          " Denotes a field as output only.\n This indicates that the field is provided in responses, but including the\n field in a request does nothing (the server *must* ignore it and\n *must not* throw an error as a result of the field's presence).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0, 2, 4],
        "span": [56, 2, 17],
        "leadingComments":
          " Denotes a field as input only.\n This indicates that the field is provided in requests, and the\n corresponding field is not included in output.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0, 2, 5],
        "span": [61, 2, 16],
        "leadingComments":
          " Denotes a field as immutable.\n This indicates that the field may be set once in a request to create a\n resource, but may not be changed thereafter.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [7, 0],
        "span": [78, 2, 47],
        "leadingComments":
          " A designation of a specific field behavior (required, output only, etc.)\n in protobuf messages.\n\n Examples:\n\n   string name = 1 [(google.api.field_behavior) = REQUIRED];\n   State state = 1 [(google.api.field_behavior) = OUTPUT_ONLY];\n   google.protobuf.Duration ttl = 1\n     [(google.api.field_behavior) = INPUT_ONLY];\n   google.protobuf.Timestamp expire_time = 1\n     [(google.api.field_behavior) = OUTPUT_ONLY,\n      (google.api.field_behavior) = IMMUTABLE];\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: { ".google.api.FieldBehavior": FieldBehavior },
  dependencies: [protoMetadata1],
};
