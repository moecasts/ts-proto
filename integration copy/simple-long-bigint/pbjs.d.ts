import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace simple {

    interface INumbers {
        double?: (number|null);
        float?: (number|null);
        int32?: (number|null);
        int64?: (Long|null);
        uint32?: (number|null);
        uint64?: (Long|null);
        sint32?: (number|null);
        sint64?: (Long|null);
        fixed32?: (number|null);
        fixed64?: (Long|null);
        sfixed32?: (number|null);
        sfixed64?: (Long|null);
        guint64?: (google.protobuf.UInt64Value|null);
        timestamp?: (google.protobuf.Timestamp|null);
        uint64s?: (Long[]|null);
    }

    class Numbers implements INumbers {
        constructor(properties?: simple.INumbers);
        public double: number;
        public float: number;
        public int32: number;
        public int64: Long;
        public uint32: number;
        public uint64: Long;
        public sint32: number;
        public sint64: Long;
        public fixed32: number;
        public fixed64: Long;
        public sfixed32: number;
        public sfixed64: Long;
        public guint64?: (google.protobuf.UInt64Value|null);
        public timestamp?: (google.protobuf.Timestamp|null);
        public uint64s: Long[];
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
            value?: (Long|null);
        }

        class Int64Value implements IInt64Value {
            constructor(properties?: google.protobuf.IInt64Value);
            public value: Long;
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
            value?: (Long|null);
        }

        class UInt64Value implements IUInt64Value {
            constructor(properties?: google.protobuf.IUInt64Value);
            public value: Long;
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
            seconds?: (Long|null);
            nanos?: (number|null);
        }

        class Timestamp implements ITimestamp {
            constructor(properties?: google.protobuf.ITimestamp);
            public seconds: Long;
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
}
