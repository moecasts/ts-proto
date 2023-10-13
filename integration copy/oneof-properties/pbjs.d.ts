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
}
