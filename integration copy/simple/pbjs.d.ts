import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace simple {

    interface ISimple {
        name?: (string|null);
        age?: (number|null);
        createdAt?: (google.protobuf.Timestamp|null);
        child?: (simple.Child|null);
        state?: (simple.StateEnum|null);
        grandChildren?: (simple.Child[]|null);
        coins?: (number[]|null);
        snacks?: (string[]|null);
        oldStates?: (simple.StateEnum[]|null);
        thing?: (simple.ImportedThing|null);
        blobs?: (Uint8Array[]|null);
        birthday?: (google.type.Date|null);
        blob?: (Uint8Array|null);
        enabled?: (boolean|null);
    }

    class Simple implements ISimple {
        constructor(properties?: simple.ISimple);
        public name: string;
        public age: number;
        public createdAt?: (google.protobuf.Timestamp|null);
        public child?: (simple.Child|null);
        public state: simple.StateEnum;
        public grandChildren: simple.Child[];
        public coins: number[];
        public snacks: string[];
        public oldStates: simple.StateEnum[];
        public thing?: (simple.ImportedThing|null);
        public blobs: Uint8Array[];
        public birthday?: (google.type.Date|null);
        public blob: Uint8Array;
        public enabled: boolean;
        public static create(properties?: simple.ISimple): simple.Simple;
        public static encode(message: simple.Simple, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.Simple, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Simple;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Simple;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.Simple;
        public static toObject(message: simple.Simple, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChild {
        name?: (string|null);
        type?: (simple.Child.Type|null);
    }

    class Child implements IChild {
        constructor(properties?: simple.IChild);
        public name: string;
        public type: simple.Child.Type;
        public static create(properties?: simple.IChild): simple.Child;
        public static encode(message: simple.Child, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.Child, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Child;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Child;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.Child;
        public static toObject(message: simple.Child, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Child {

        enum Type {
            UNKNOWN = 0,
            GOOD = 1,
            BAD = 2
        }
    }

    enum StateEnum {
        UNKNOWN = 0,
        ON = 2,
        OFF = 3
    }

    interface INested {
        name?: (string|null);
        message?: (simple.Nested.InnerMessage|null);
        state?: (simple.Nested.InnerEnum|null);
    }

    class Nested implements INested {
        constructor(properties?: simple.INested);
        public name: string;
        public message?: (simple.Nested.InnerMessage|null);
        public state: simple.Nested.InnerEnum;
        public static create(properties?: simple.INested): simple.Nested;
        public static encode(message: simple.Nested, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.Nested, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Nested;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Nested;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.Nested;
        public static toObject(message: simple.Nested, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Nested {

        interface IInnerMessage {
            name?: (string|null);
            deep?: (simple.Nested.InnerMessage.DeepMessage|null);
        }

        class InnerMessage implements IInnerMessage {
            constructor(properties?: simple.Nested.IInnerMessage);
            public name: string;
            public deep?: (simple.Nested.InnerMessage.DeepMessage|null);
            public static create(properties?: simple.Nested.IInnerMessage): simple.Nested.InnerMessage;
            public static encode(message: simple.Nested.InnerMessage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: simple.Nested.InnerMessage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Nested.InnerMessage;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Nested.InnerMessage;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): simple.Nested.InnerMessage;
            public static toObject(message: simple.Nested.InnerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace InnerMessage {

            interface IDeepMessage {
                name?: (string|null);
            }

            class DeepMessage implements IDeepMessage {
                constructor(properties?: simple.Nested.InnerMessage.IDeepMessage);
                public name: string;
                public static create(properties?: simple.Nested.InnerMessage.IDeepMessage): simple.Nested.InnerMessage.DeepMessage;
                public static encode(message: simple.Nested.InnerMessage.DeepMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: simple.Nested.InnerMessage.DeepMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Nested.InnerMessage.DeepMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Nested.InnerMessage.DeepMessage;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): simple.Nested.InnerMessage.DeepMessage;
                public static toObject(message: simple.Nested.InnerMessage.DeepMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        enum InnerEnum {
            UNKNOWN_INNER = 0,
            GOOD = 100,
            BAD = 1000
        }
    }

    interface IOneOfMessage {
        first?: (string|null);
        last?: (string|null);
    }

    class OneOfMessage implements IOneOfMessage {
        constructor(properties?: simple.IOneOfMessage);
        public first?: (string|null);
        public last?: (string|null);
        public nameFields?: ("first"|"last");
        public static create(properties?: simple.IOneOfMessage): simple.OneOfMessage;
        public static encode(message: simple.OneOfMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.OneOfMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.OneOfMessage;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.OneOfMessage;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.OneOfMessage;
        public static toObject(message: simple.OneOfMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISimpleWithWrappers {
        name?: (google.protobuf.StringValue|null);
        age?: (google.protobuf.Int32Value|null);
        enabled?: (google.protobuf.BoolValue|null);
        coins?: (google.protobuf.Int32Value[]|null);
        snacks?: (google.protobuf.StringValue[]|null);
        id?: (google.protobuf.BytesValue|null);
    }

    class SimpleWithWrappers implements ISimpleWithWrappers {
        constructor(properties?: simple.ISimpleWithWrappers);
        public name?: (google.protobuf.StringValue|null);
        public age?: (google.protobuf.Int32Value|null);
        public enabled?: (google.protobuf.BoolValue|null);
        public coins: google.protobuf.Int32Value[];
        public snacks: google.protobuf.StringValue[];
        public id?: (google.protobuf.BytesValue|null);
        public static create(properties?: simple.ISimpleWithWrappers): simple.SimpleWithWrappers;
        public static encode(message: simple.SimpleWithWrappers, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.SimpleWithWrappers, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.SimpleWithWrappers;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.SimpleWithWrappers;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.SimpleWithWrappers;
        public static toObject(message: simple.SimpleWithWrappers, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEntity {
        id?: (number|null);
    }

    class Entity implements IEntity {
        constructor(properties?: simple.IEntity);
        public id: number;
        public static create(properties?: simple.IEntity): simple.Entity;
        public static encode(message: simple.Entity, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.Entity, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Entity;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Entity;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.Entity;
        public static toObject(message: simple.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISimpleWithMap {
        entitiesById?: ({ [k: string]: simple.Entity }|null);
        nameLookup?: ({ [k: string]: string }|null);
        intLookup?: ({ [k: string]: number }|null);
        mapOfTimestamps?: ({ [k: string]: google.protobuf.Timestamp }|null);
        mapOfBytes?: ({ [k: string]: Uint8Array }|null);
        mapOfStringValues?: ({ [k: string]: google.protobuf.StringValue }|null);
        longLookup?: ({ [k: string]: number }|null);
        boolLookup?: ({ [k: string]: number }|null);
    }

    class SimpleWithMap implements ISimpleWithMap {
        constructor(properties?: simple.ISimpleWithMap);
        public entitiesById: { [k: string]: simple.Entity };
        public nameLookup: { [k: string]: string };
        public intLookup: { [k: string]: number };
        public mapOfTimestamps: { [k: string]: google.protobuf.Timestamp };
        public mapOfBytes: { [k: string]: Uint8Array };
        public mapOfStringValues: { [k: string]: google.protobuf.StringValue };
        public longLookup: { [k: string]: number };
        public boolLookup: { [k: string]: number };
        public static create(properties?: simple.ISimpleWithMap): simple.SimpleWithMap;
        public static encode(message: simple.SimpleWithMap, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.SimpleWithMap, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.SimpleWithMap;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.SimpleWithMap;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.SimpleWithMap;
        public static toObject(message: simple.SimpleWithMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISimpleWithSnakeCaseMap {
        entitiesById?: ({ [k: string]: simple.Entity }|null);
    }

    class SimpleWithSnakeCaseMap implements ISimpleWithSnakeCaseMap {
        constructor(properties?: simple.ISimpleWithSnakeCaseMap);
        public entitiesById: { [k: string]: simple.Entity };
        public static create(properties?: simple.ISimpleWithSnakeCaseMap): simple.SimpleWithSnakeCaseMap;
        public static encode(message: simple.SimpleWithSnakeCaseMap, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.SimpleWithSnakeCaseMap, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.SimpleWithSnakeCaseMap;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.SimpleWithSnakeCaseMap;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.SimpleWithSnakeCaseMap;
        public static toObject(message: simple.SimpleWithSnakeCaseMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISimpleWithMapOfEnums {
        enumsById?: ({ [k: string]: simple.StateEnum }|null);
    }

    class SimpleWithMapOfEnums implements ISimpleWithMapOfEnums {
        constructor(properties?: simple.ISimpleWithMapOfEnums);
        public enumsById: { [k: string]: simple.StateEnum };
        public static create(properties?: simple.ISimpleWithMapOfEnums): simple.SimpleWithMapOfEnums;
        public static encode(message: simple.SimpleWithMapOfEnums, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.SimpleWithMapOfEnums, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.SimpleWithMapOfEnums;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.SimpleWithMapOfEnums;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.SimpleWithMapOfEnums;
        public static toObject(message: simple.SimpleWithMapOfEnums, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    class PingService extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PingService;
        public ping(request: simple.PingRequest, callback: simple.PingService.pingCallback): void;
        public ping(request: simple.PingRequest): Promise<simple.PingResponse>;
    }

    namespace PingService {

        type pingCallback = (error: (Error|null), response?: simple.PingResponse) => void;
    }

    interface IPingRequest {
        input?: (string|null);
    }

    class PingRequest implements IPingRequest {
        constructor(properties?: simple.IPingRequest);
        public input: string;
        public static create(properties?: simple.IPingRequest): simple.PingRequest;
        public static encode(message: simple.PingRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.PingRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.PingRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.PingRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.PingRequest;
        public static toObject(message: simple.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPingResponse {
        output?: (string|null);
    }

    class PingResponse implements IPingResponse {
        constructor(properties?: simple.IPingResponse);
        public output: string;
        public static create(properties?: simple.IPingResponse): simple.PingResponse;
        public static encode(message: simple.PingResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.PingResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.PingResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.PingResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.PingResponse;
        public static toObject(message: simple.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INumbers {
        double?: (number|null);
        float?: (number|null);
        int32?: (number|null);
        int64?: (number|null);
        uint32?: (number|null);
        uint64?: (number|null);
        sint32?: (number|null);
        sint64?: (number|null);
        fixed32?: (number|null);
        fixed64?: (number|null);
        sfixed32?: (number|null);
        sfixed64?: (number|null);
    }

    class Numbers implements INumbers {
        constructor(properties?: simple.INumbers);
        public double: number;
        public float: number;
        public int32: number;
        public int64: number;
        public uint32: number;
        public uint64: number;
        public sint32: number;
        public sint64: number;
        public fixed32: number;
        public fixed64: number;
        public sfixed32: number;
        public sfixed64: number;
        public static create(properties?: simple.INumbers): simple.Numbers;
        public static encode(message: simple.Numbers, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.Numbers, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Numbers;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Numbers;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.Numbers;
        public static toObject(message: simple.Numbers, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISimpleButOptional {
        name?: (string|null);
        age?: (number|null);
        createdAt?: (google.protobuf.Timestamp|null);
        child?: (simple.Child|null);
        state?: (simple.StateEnum|null);
        thing?: (simple.ImportedThing|null);
        birthday?: (google.type.Date|null);
    }

    class SimpleButOptional implements ISimpleButOptional {
        constructor(properties?: simple.ISimpleButOptional);
        public name?: (string|null);
        public age?: (number|null);
        public createdAt?: (google.protobuf.Timestamp|null);
        public child?: (simple.Child|null);
        public state?: (simple.StateEnum|null);
        public thing?: (simple.ImportedThing|null);
        public birthday?: (google.type.Date|null);
        public _name?: "name";
        public _age?: "age";
        public _createdAt?: "createdAt";
        public _child?: "child";
        public _state?: "state";
        public _thing?: "thing";
        public _birthday?: "birthday";
        public static create(properties?: simple.ISimpleButOptional): simple.SimpleButOptional;
        public static encode(message: simple.SimpleButOptional, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.SimpleButOptional, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.SimpleButOptional;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.SimpleButOptional;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.SimpleButOptional;
        public static toObject(message: simple.SimpleButOptional, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEmpty {
    }

    class Empty implements IEmpty {
        constructor(properties?: simple.IEmpty);
        public static create(properties?: simple.IEmpty): simple.Empty;
        public static encode(message: simple.Empty, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.Empty, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Empty;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Empty;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.Empty;
        public static toObject(message: simple.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IImportedThing {
        createdAt?: (google.protobuf.Timestamp|null);
    }

    class ImportedThing implements IImportedThing {
        constructor(properties?: simple.IImportedThing);
        public createdAt?: (google.protobuf.Timestamp|null);
        public static create(properties?: simple.IImportedThing): simple.ImportedThing;
        public static encode(message: simple.ImportedThing, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.ImportedThing, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.ImportedThing;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.ImportedThing;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.ImportedThing;
        public static toObject(message: simple.ImportedThing, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export namespace google {

    namespace protobuf {

        interface IDoubleValue {
            value?: (number|null);
        }

        class DoubleValue implements IDoubleValue {
            constructor(properties?: google.protobuf.IDoubleValue);
            public value: number;
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;
            public static encode(message: google.protobuf.DoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.DoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFloatValue {
            value?: (number|null);
        }

        class FloatValue implements IFloatValue {
            constructor(properties?: google.protobuf.IFloatValue);
            public value: number;
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;
            public static encode(message: google.protobuf.FloatValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.FloatValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IInt64Value {
            value?: (number|null);
        }

        class Int64Value implements IInt64Value {
            constructor(properties?: google.protobuf.IInt64Value);
            public value: number;
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;
            public static encode(message: google.protobuf.Int64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.Int64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IUInt64Value {
            value?: (number|null);
        }

        class UInt64Value implements IUInt64Value {
            constructor(properties?: google.protobuf.IUInt64Value);
            public value: number;
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;
            public static encode(message: google.protobuf.UInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.UInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IInt32Value {
            value?: (number|null);
        }

        class Int32Value implements IInt32Value {
            constructor(properties?: google.protobuf.IInt32Value);
            public value: number;
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;
            public static encode(message: google.protobuf.Int32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.Int32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IUInt32Value {
            value?: (number|null);
        }

        class UInt32Value implements IUInt32Value {
            constructor(properties?: google.protobuf.IUInt32Value);
            public value: number;
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;
            public static encode(message: google.protobuf.UInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.UInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IBoolValue {
            value?: (boolean|null);
        }

        class BoolValue implements IBoolValue {
            constructor(properties?: google.protobuf.IBoolValue);
            public value: boolean;
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;
            public static encode(message: google.protobuf.BoolValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.BoolValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IStringValue {
            value?: (string|null);
        }

        class StringValue implements IStringValue {
            constructor(properties?: google.protobuf.IStringValue);
            public value: string;
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;
            public static encode(message: google.protobuf.StringValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.StringValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IBytesValue {
            value?: (Uint8Array|null);
        }

        class BytesValue implements IBytesValue {
            constructor(properties?: google.protobuf.IBytesValue);
            public value: Uint8Array;
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;
            public static encode(message: google.protobuf.BytesValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.BytesValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITimestamp {
            seconds?: (number|null);
            nanos?: (number|null);
        }

        class Timestamp implements ITimestamp {
            constructor(properties?: google.protobuf.ITimestamp);
            public seconds: number;
            public nanos: number;
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;
            public static encode(message: google.protobuf.Timestamp, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.Timestamp, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    namespace type {

        interface IDate {
            year?: (number|null);
            month?: (number|null);
            day?: (number|null);
        }

        class Date implements IDate {
            constructor(properties?: google.type.IDate);
            public year: number;
            public month: number;
            public day: number;
            public static create(properties?: google.type.IDate): google.type.Date;
            public static encode(message: google.type.Date, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.type.Date, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Date;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Date;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.type.Date;
            public static toObject(message: google.type.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
