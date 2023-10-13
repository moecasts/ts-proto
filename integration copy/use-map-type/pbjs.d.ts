import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace simple {

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

    interface IMaps {
        strToEntity?: ({ [k: string]: simple.Entity }|null);
        int32ToInt32?: ({ [k: string]: number }|null);
        stringToBytes?: ({ [k: string]: Uint8Array }|null);
        int64ToInt64?: ({ [k: string]: number }|null);
        mapOfTimestamps?: ({ [k: string]: google.protobuf.Timestamp }|null);
        struct?: (google.protobuf.Struct|null);
    }

    class Maps implements IMaps {
        constructor(properties?: simple.IMaps);
        public strToEntity: { [k: string]: simple.Entity };
        public int32ToInt32: { [k: string]: number };
        public stringToBytes: { [k: string]: Uint8Array };
        public int64ToInt64: { [k: string]: number };
        public mapOfTimestamps: { [k: string]: google.protobuf.Timestamp };
        public struct?: (google.protobuf.Struct|null);
        public static create(properties?: simple.IMaps): simple.Maps;
        public static encode(message: simple.Maps, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: simple.Maps, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): simple.Maps;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): simple.Maps;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): simple.Maps;
        public static toObject(message: simple.Maps, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export namespace google {

    namespace protobuf {

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

        interface IStruct {
            fields?: ({ [k: string]: google.protobuf.Value }|null);
        }

        class Struct implements IStruct {
            constructor(properties?: google.protobuf.IStruct);
            public fields: { [k: string]: google.protobuf.Value };
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;
            public static encode(message: google.protobuf.Struct, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.Struct, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IValue {
            nullValue?: (google.protobuf.NullValue|null);
            numberValue?: (number|null);
            stringValue?: (string|null);
            boolValue?: (boolean|null);
            structValue?: (google.protobuf.Struct|null);
            listValue?: (google.protobuf.ListValue|null);
        }

        class Value implements IValue {
            constructor(properties?: google.protobuf.IValue);
            public nullValue?: (google.protobuf.NullValue|null);
            public numberValue?: (number|null);
            public stringValue?: (string|null);
            public boolValue?: (boolean|null);
            public structValue?: (google.protobuf.Struct|null);
            public listValue?: (google.protobuf.ListValue|null);
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;
            public static encode(message: google.protobuf.Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        enum NullValue {
            NULL_VALUE = 0
        }

        interface IListValue {
            values?: (google.protobuf.Value[]|null);
        }

        class ListValue implements IListValue {
            constructor(properties?: google.protobuf.IListValue);
            public values: google.protobuf.Value[];
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;
            public static encode(message: google.protobuf.ListValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.ListValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
