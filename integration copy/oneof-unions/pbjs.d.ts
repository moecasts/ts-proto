import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace oneof {

    interface IPleaseChoose {
        name?: (string|null);
        aNumber?: (number|null);
        aString?: (string|null);
        aMessage?: (oneof.PleaseChoose.Submessage|null);
        aBool?: (boolean|null);
        bunchaBytes?: (Uint8Array|null);
        anEnum?: (oneof.PleaseChoose.StateEnum|null);
        age?: (number|null);
        either?: (string|null);
        or?: (string|null);
        thirdOption?: (string|null);
        signature?: (Uint8Array|null);
        value?: (google.protobuf.Value|null);
    }

    class PleaseChoose implements IPleaseChoose {
        constructor(properties?: oneof.IPleaseChoose);
        public name: string;
        public aNumber?: (number|null);
        public aString?: (string|null);
        public aMessage?: (oneof.PleaseChoose.Submessage|null);
        public aBool?: (boolean|null);
        public bunchaBytes?: (Uint8Array|null);
        public anEnum?: (oneof.PleaseChoose.StateEnum|null);
        public age: number;
        public either?: (string|null);
        public or?: (string|null);
        public thirdOption?: (string|null);
        public signature: Uint8Array;
        public value?: (google.protobuf.Value|null);
        public choice?: ("aNumber"|"aString"|"aMessage"|"aBool"|"bunchaBytes"|"anEnum");
        public eitherOr?: ("either"|"or"|"thirdOption");
        public static create(properties?: oneof.IPleaseChoose): oneof.PleaseChoose;
        public static encode(message: oneof.PleaseChoose, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: oneof.PleaseChoose, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oneof.PleaseChoose;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oneof.PleaseChoose;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): oneof.PleaseChoose;
        public static toObject(message: oneof.PleaseChoose, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PleaseChoose {

        interface ISubmessage {
            name?: (string|null);
        }

        class Submessage implements ISubmessage {
            constructor(properties?: oneof.PleaseChoose.ISubmessage);
            public name: string;
            public static create(properties?: oneof.PleaseChoose.ISubmessage): oneof.PleaseChoose.Submessage;
            public static encode(message: oneof.PleaseChoose.Submessage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: oneof.PleaseChoose.Submessage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oneof.PleaseChoose.Submessage;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oneof.PleaseChoose.Submessage;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): oneof.PleaseChoose.Submessage;
            public static toObject(message: oneof.PleaseChoose.Submessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        enum StateEnum {
            UNKNOWN = 0,
            ON = 2,
            OFF = 3
        }
    }

    interface ISimpleButOptional {
        name?: (string|null);
        age?: (number|null);
    }

    class SimpleButOptional implements ISimpleButOptional {
        constructor(properties?: oneof.ISimpleButOptional);
        public name?: (string|null);
        public age?: (number|null);
        public _name?: "name";
        public _age?: "age";
        public static create(properties?: oneof.ISimpleButOptional): oneof.SimpleButOptional;
        public static encode(message: oneof.SimpleButOptional, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: oneof.SimpleButOptional, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oneof.SimpleButOptional;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oneof.SimpleButOptional;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): oneof.SimpleButOptional;
        public static toObject(message: oneof.SimpleButOptional, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
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
