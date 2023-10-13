import * as $protobuf from "protobufjs";
import Long = require("long");
export interface IStructMessage {
    value?: (google.protobuf.Struct|null);
}

export class StructMessage implements IStructMessage {
    constructor(properties?: IStructMessage);
    public value?: (google.protobuf.Struct|null);
    public static create(properties?: IStructMessage): StructMessage;
    public static encode(message: StructMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: StructMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StructMessage;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StructMessage;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): StructMessage;
    public static toObject(message: StructMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
    }
}
