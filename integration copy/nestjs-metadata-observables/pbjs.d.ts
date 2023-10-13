import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace hero {

    class HeroService extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HeroService;
        public findOneHero(request: hero.HeroById, callback: hero.HeroService.FindOneHeroCallback): void;
        public findOneHero(request: hero.HeroById): Promise<hero.Hero>;
        public findOneVillain(request: hero.VillainById, callback: hero.HeroService.FindOneVillainCallback): void;
        public findOneVillain(request: hero.VillainById): Promise<hero.Villain>;
        public findManyVillain(request: hero.VillainById, callback: hero.HeroService.FindManyVillainCallback): void;
        public findManyVillain(request: hero.VillainById): Promise<hero.Villain>;
    }

    namespace HeroService {

        type FindOneHeroCallback = (error: (Error|null), response?: hero.Hero) => void;

        type FindOneVillainCallback = (error: (Error|null), response?: hero.Villain) => void;

        type FindManyVillainCallback = (error: (Error|null), response?: hero.Villain) => void;
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
    }

    class Hero implements IHero {
        constructor(properties?: hero.IHero);
        public id: number;
        public name: string;
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
