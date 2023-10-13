import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace vector_tile {

    interface ITile {
        layers?: (vector_tile.Tile.Layer[]|null);
    }

    class Tile implements ITile {
        constructor(properties?: vector_tile.ITile);
        public layers: vector_tile.Tile.Layer[];
        public static create(properties?: vector_tile.ITile): vector_tile.Tile;
        public static encode(message: vector_tile.Tile, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: vector_tile.Tile, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): vector_tile.Tile;
        public static toObject(message: vector_tile.Tile, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Tile {

        enum GeomType {
            UNKNOWN = 0,
            POINT = 1,
            LINESTRING = 2,
            POLYGON = 3
        }

        interface IValue {
            stringValue?: (string|null);
            floatValue?: (number|null);
            doubleValue?: (number|null);
            intValue?: (number|null);
            uintValue?: (number|null);
            sintValue?: (number|null);
            boolValue?: (boolean|null);
        }

        class Value implements IValue {
            constructor(properties?: vector_tile.Tile.IValue);
            public stringValue: string;
            public floatValue: number;
            public doubleValue: number;
            public intValue: number;
            public uintValue: number;
            public sintValue: number;
            public boolValue: boolean;
            public static create(properties?: vector_tile.Tile.IValue): vector_tile.Tile.Value;
            public static encode(message: vector_tile.Tile.Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: vector_tile.Tile.Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): vector_tile.Tile.Value;
            public static toObject(message: vector_tile.Tile.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFeature {
            id?: (number|null);
            tags?: (number[]|null);
            type?: (vector_tile.Tile.GeomType|null);
            geometry?: (number[]|null);
        }

        class Feature implements IFeature {
            constructor(properties?: vector_tile.Tile.IFeature);
            public id: number;
            public tags: number[];
            public type: vector_tile.Tile.GeomType;
            public geometry: number[];
            public static create(properties?: vector_tile.Tile.IFeature): vector_tile.Tile.Feature;
            public static encode(message: vector_tile.Tile.Feature, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: vector_tile.Tile.Feature, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Feature;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Feature;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): vector_tile.Tile.Feature;
            public static toObject(message: vector_tile.Tile.Feature, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ILayer {
            version: number;
            name: string;
            features?: (vector_tile.Tile.Feature[]|null);
            keys?: (string[]|null);
            values?: (vector_tile.Tile.Value[]|null);
            extent?: (number|null);
        }

        class Layer implements ILayer {
            constructor(properties?: vector_tile.Tile.ILayer);
            public version: number;
            public name: string;
            public features: vector_tile.Tile.Feature[];
            public keys: string[];
            public values: vector_tile.Tile.Value[];
            public extent: number;
            public static create(properties?: vector_tile.Tile.ILayer): vector_tile.Tile.Layer;
            public static encode(message: vector_tile.Tile.Layer, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: vector_tile.Tile.Layer, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Layer;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Layer;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): vector_tile.Tile.Layer;
            public static toObject(message: vector_tile.Tile.Layer, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
