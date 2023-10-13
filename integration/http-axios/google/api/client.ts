/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata1 } from "../protobuf/descriptor";

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
    "name": "google/api/client.proto",
    "package": "google.api",
    "dependency": ["google/protobuf/descriptor.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [],
    "enumType": [],
    "service": [],
    "extension": [{
      "name": "default_host",
      "number": 1049,
      "label": 1,
      "type": 9,
      "typeName": "",
      "extendee": ".google.protobuf.ServiceOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "defaultHost",
      "options": undefined,
      "proto3Optional": false,
    }, {
      "name": "oauth_scopes",
      "number": 1050,
      "label": 1,
      "type": 9,
      "typeName": "",
      "extendee": ".google.protobuf.ServiceOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "oauthScopes",
      "options": undefined,
      "proto3Optional": false,
    }, {
      "name": "method_signature",
      "number": 1051,
      "label": 3,
      "type": 9,
      "typeName": "",
      "extendee": ".google.protobuf.MethodOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "methodSignature",
      "options": undefined,
      "proto3Optional": false,
    }],
    "options": {
      "javaPackage": "com.google.api",
      "javaOuterClassname": "ClientProto",
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
        "span": [37, 2, 29],
        "leadingComments":
          ' The hostname for this service.\n This should be specified with no prefix or protocol.\n\n Example:\n\n   service Foo {\n     option (google.api.default_host) = "foo.googleapi.com";\n     ...\n   }\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [7, 1],
        "span": [59, 2, 29],
        "leadingComments":
          ' OAuth scopes needed for the client.\n\n Example:\n\n   service Foo {\n     option (google.api.oauth_scopes) = \\\n       "https://www.googleapis.com/auth/cloud-platform";\n     ...\n   }\n\n If there is more than one scope, use a comma-separated string:\n\n Example:\n\n   service Foo {\n     option (google.api.oauth_scopes) = \\\n       "https://www.googleapis.com/auth/cloud-platform,"\n       "https://www.googleapis.com/auth/monitoring";\n     ...\n   }\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [7, 2],
        "span": [99, 2, 42],
        "leadingComments":
          ' A definition of a client library method signature.\n\n In client libraries, each proto RPC corresponds to one or more methods\n which the end user is able to call, and calls the underlying RPC.\n Normally, this method receives a single argument (a struct or instance\n corresponding to the RPC request object). Defining this field will\n add one or more overloads providing flattened or simpler method signatures\n in some languages.\n\n The fields on the method signature are provided as a comma-separated\n string.\n\n For example, the proto RPC and annotation:\n\n   rpc CreateSubscription(CreateSubscriptionRequest)\n       returns (Subscription) {\n     option (google.api.method_signature) = "name,topic";\n   }\n\n Would add the following Java overload (in addition to the method accepting\n the request object):\n\n   public final Subscription createSubscription(String name, String topic)\n\n The following backwards-compatibility guidelines apply:\n\n   * Adding this annotation to an unannotated method is backwards\n     compatible.\n   * Adding this annotation to a method which already has existing\n     method signature annotations is backwards compatible if and only if\n     the new method signature annotation is last in the sequence.\n   * Modifying or removing an existing method signature annotation is\n     a breaking change.\n   * Re-ordering existing method signature annotations is a breaking\n     change.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {},
  dependencies: [protoMetadata1],
};
