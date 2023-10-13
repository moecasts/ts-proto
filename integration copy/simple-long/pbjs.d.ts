import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace simple {

    interface ISimpleWithWrappers {
        name?: (google.protobuf.StringValue|null);
        age?: (google.protobuf.Int32Value|null);
        enabled?: (google.protobuf.BoolValue|null);
        bananas?: (google.protobuf.Int64Value|null);
        coins?: (google.protobuf.Int32Value[]|null);
        snacks?: (google.protobuf.StringValue[]|null);
    }

    class SimpleWithWrappers implements ISimpleWithWrappers {
        constructor(properties?: simple.ISimpleWithWrappers);
        public name?: (google.protobuf.StringValue|null);
        public age?: (google.protobuf.Int32Value|null);
        public enabled?: (google.protobuf.BoolValue|null);
        public bananas?: (google.protobuf.Int64Value|null);
        public coins: google.protobuf.Int32Value[];
        public snacks: google.protobuf.StringValue[];
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

    interface ISimpleWithMap {
        nameLookup?: ({ [k: string]: string }|null);
        intLookup?: ({ [k: string]: number }|null);
        longLookup?: ({ [k: string]: Long }|null);
    }

    class SimpleWithMap implements ISimpleWithMap {
        constructor(properties?: simple.ISimpleWithMap);
        public nameLookup: { [k: string]: string };
        public intLookup: { [k: string]: number };
        public longLookup: { [k: string]: Long };
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
        manyUint64?: (Long[]|null);
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
        public manyUint64: Long[];
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
    }
}
