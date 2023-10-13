import * as $protobuf from "protobufjs";
import Long = require("long");
export interface IValueMessage {
    value?: (google.protobuf.Value|null);
    anyList?: (google.protobuf.ListValue|null);
    repeatedAny?: (google.protobuf.Value[]|null);
    repeatedStrings?: (google.protobuf.StringValue[]|null);
    structValue?: (google.protobuf.Struct|null);
}

export class ValueMessage implements IValueMessage {
    constructor(properties?: IValueMessage);
    public value?: (google.protobuf.Value|null);
    public anyList?: (google.protobuf.ListValue|null);
    public repeatedAny: google.protobuf.Value[];
    public repeatedStrings: google.protobuf.StringValue[];
    public structValue?: (google.protobuf.Struct|null);
    public static create(properties?: IValueMessage): ValueMessage;
    public static encode(message: ValueMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ValueMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ValueMessage;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ValueMessage;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ValueMessage;
    public static toObject(message: ValueMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace google {

    namespace protobuf {

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
    }
}
