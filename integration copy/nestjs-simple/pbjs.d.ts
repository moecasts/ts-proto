import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace hero {

    class HeroService extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HeroService;
        public addOneHero(request: hero.Hero, callback: hero.HeroService.AddOneHeroCallback): void;
        public addOneHero(request: hero.Hero): Promise<google.protobuf.Empty>;
        public findOneHero(request: hero.HeroById, callback: hero.HeroService.FindOneHeroCallback): void;
        public findOneHero(request: hero.HeroById): Promise<hero.Hero>;
        public findOneVillain(request: hero.VillainById, callback: hero.HeroService.FindOneVillainCallback): void;
        public findOneVillain(request: hero.VillainById): Promise<hero.Villain>;
        public findManyVillain(request: hero.VillainById, callback: hero.HeroService.FindManyVillainCallback): void;
        public findManyVillain(request: hero.VillainById): Promise<hero.Villain>;
        public findManyVillainStreamIn(request: hero.VillainById, callback: hero.HeroService.FindManyVillainStreamInCallback): void;
        public findManyVillainStreamIn(request: hero.VillainById): Promise<hero.Villain>;
        public findManyVillainStreamOut(request: hero.VillainById, callback: hero.HeroService.FindManyVillainStreamOutCallback): void;
        public findManyVillainStreamOut(request: hero.VillainById): Promise<hero.Villain>;
    }

    namespace HeroService {

        type AddOneHeroCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

        type FindOneHeroCallback = (error: (Error|null), response?: hero.Hero) => void;

        type FindOneVillainCallback = (error: (Error|null), response?: hero.Villain) => void;

        type FindManyVillainCallback = (error: (Error|null), response?: hero.Villain) => void;

        type FindManyVillainStreamInCallback = (error: (Error|null), response?: hero.Villain) => void;

        type FindManyVillainStreamOutCallback = (error: (Error|null), response?: hero.Villain) => void;
    }

    interface IHeroById {
        id?: (number|null);
    }

    class HeroById implements IHeroById {
        constructor(properties?: hero.IHeroById);
        public id: number;
        public static create(properties?: hero.IHeroById): hero.HeroById;
        public static encode(message: hero.HeroById, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.HeroById, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.HeroById;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.HeroById;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.HeroById;
        public static toObject(message: hero.HeroById, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IVillainById {
        id?: (number|null);
    }

    class VillainById implements IVillainById {
        constructor(properties?: hero.IVillainById);
        public id: number;
        public static create(properties?: hero.IVillainById): hero.VillainById;
        public static encode(message: hero.VillainById, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.VillainById, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.VillainById;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.VillainById;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.VillainById;
        public static toObject(message: hero.VillainById, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IHero {
        id?: (number|null);
        name?: (string|null);
        birthDate?: (google.protobuf.Timestamp|null);
        externalData?: (google.protobuf.Struct|null);
    }

    class Hero implements IHero {
        constructor(properties?: hero.IHero);
        public id: number;
        public name: string;
        public birthDate?: (google.protobuf.Timestamp|null);
        public externalData?: (google.protobuf.Struct|null);
        public static create(properties?: hero.IHero): hero.Hero;
        public static encode(message: hero.Hero, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.Hero, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.Hero;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.Hero;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.Hero;
        public static toObject(message: hero.Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IVillain {
        id?: (number|null);
        name?: (string|null);
    }

    class Villain implements IVillain {
        constructor(properties?: hero.IVillain);
        public id: number;
        public name: string;
        public static create(properties?: hero.IVillain): hero.Villain;
        public static encode(message: hero.Villain, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.Villain, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.Villain;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.Villain;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.Villain;
        public static toObject(message: hero.Villain, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export namespace google {

    namespace protobuf {

        interface IEmpty {
        }

        class Empty implements IEmpty {
            constructor(properties?: google.protobuf.IEmpty);
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;
            public static encode(message: google.protobuf.Empty, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.Empty, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
