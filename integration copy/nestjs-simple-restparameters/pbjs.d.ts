import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace hero {

    class HeroService extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HeroService;
        public findCurrentUser(request: google.protobuf.Empty, callback: hero.HeroService.FindCurrentUserCallback): void;
        public findCurrentUser(request: google.protobuf.Empty): Promise<hero.User>;
    }

    namespace HeroService {

        type FindCurrentUserCallback = (error: (Error|null), response?: hero.User) => void;
    }

    interface IUser {
        id?: (number|null);
        name?: (string|null);
    }

    class User implements IUser {
        constructor(properties?: hero.IUser);
        public id: number;
        public name: string;
        public static create(properties?: hero.IUser): hero.User;
        public static encode(message: hero.User, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.User, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.User;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.User;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.User;
        public static toObject(message: hero.User, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
    }
}
