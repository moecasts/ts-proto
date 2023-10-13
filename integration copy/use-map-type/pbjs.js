/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.simple = (function() {
    
        /**
         * Namespace simple.
         * @exports simple
         * @namespace
         */
        var simple = {};
    
        simple.Entity = (function() {
    
            /**
             * Properties of an Entity.
             * @memberof simple
             * @interface IEntity
             * @property {number|null} [id] Entity id
             */
    
            /**
             * Constructs a new Entity.
             * @memberof simple
             * @classdesc Represents an Entity.
             * @implements IEntity
             * @constructor
             * @param {simple.IEntity=} [properties] Properties to set
             */
            function Entity(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Entity id.
             * @member {number} id
             * @memberof simple.Entity
             * @instance
             */
            Entity.prototype.id = 0;
    
            /**
             * Creates a new Entity instance using the specified properties.
             * @function create
             * @memberof simple.Entity
             * @static
             * @param {simple.IEntity=} [properties] Properties to set
             * @returns {simple.Entity} Entity instance
             */
            Entity.create = function create(properties) {
                return new Entity(properties);
            };
    
            /**
             * Encodes the specified Entity message. Does not implicitly {@link simple.Entity.verify|verify} messages.
             * @function encode
             * @memberof simple.Entity
             * @static
             * @param {simple.Entity} message Entity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Entity.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                return writer;
            };
    
            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link simple.Entity.verify|verify} messages.
             * @function encodeDelimited
             * @memberof simple.Entity
             * @static
             * @param {simple.Entity} message Entity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Entity.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @function decode
             * @memberof simple.Entity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {simple.Entity} Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Entity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.Entity();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof simple.Entity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {simple.Entity} Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Entity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Entity message.
             * @function verify
             * @memberof simple.Entity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Entity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };
    
            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof simple.Entity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {simple.Entity} Entity
             */
            Entity.fromObject = function fromObject(object) {
                if (object instanceof $root.simple.Entity)
                    return object;
                var message = new $root.simple.Entity();
                if (object.id != null)
                    message.id = object.id | 0;
                return message;
            };
    
            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof simple.Entity
             * @static
             * @param {simple.Entity} message Entity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Entity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };
    
            /**
             * Converts this Entity to JSON.
             * @function toJSON
             * @memberof simple.Entity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Entity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Entity
             * @function getTypeUrl
             * @memberof simple.Entity
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Entity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/simple.Entity";
            };
    
            return Entity;
        })();
    
        simple.Maps = (function() {
    
            /**
             * Properties of a Maps.
             * @memberof simple
             * @interface IMaps
             * @property {Object.<string,simple.Entity>|null} [strToEntity] Maps strToEntity
             * @property {Object.<string,number>|null} [int32ToInt32] Maps int32ToInt32
             * @property {Object.<string,Uint8Array>|null} [stringToBytes] Maps stringToBytes
             * @property {Object.<string,number>|null} [int64ToInt64] Maps int64ToInt64
             * @property {Object.<string,google.protobuf.Timestamp>|null} [mapOfTimestamps] Maps mapOfTimestamps
             * @property {google.protobuf.Struct|null} [struct] Maps struct
             */
    
            /**
             * Constructs a new Maps.
             * @memberof simple
             * @classdesc Represents a Maps.
             * @implements IMaps
             * @constructor
             * @param {simple.IMaps=} [properties] Properties to set
             */
            function Maps(properties) {
                this.strToEntity = {};
                this.int32ToInt32 = {};
                this.stringToBytes = {};
                this.int64ToInt64 = {};
                this.mapOfTimestamps = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Maps strToEntity.
             * @member {Object.<string,simple.Entity>} strToEntity
             * @memberof simple.Maps
             * @instance
             */
            Maps.prototype.strToEntity = $util.emptyObject;
    
            /**
             * Maps int32ToInt32.
             * @member {Object.<string,number>} int32ToInt32
             * @memberof simple.Maps
             * @instance
             */
            Maps.prototype.int32ToInt32 = $util.emptyObject;
    
            /**
             * Maps stringToBytes.
             * @member {Object.<string,Uint8Array>} stringToBytes
             * @memberof simple.Maps
             * @instance
             */
            Maps.prototype.stringToBytes = $util.emptyObject;
    
            /**
             * Maps int64ToInt64.
             * @member {Object.<string,number>} int64ToInt64
             * @memberof simple.Maps
             * @instance
             */
            Maps.prototype.int64ToInt64 = $util.emptyObject;
    
            /**
             * Maps mapOfTimestamps.
             * @member {Object.<string,google.protobuf.Timestamp>} mapOfTimestamps
             * @memberof simple.Maps
             * @instance
             */
            Maps.prototype.mapOfTimestamps = $util.emptyObject;
    
            /**
             * Maps struct.
             * @member {google.protobuf.Struct|null|undefined} struct
             * @memberof simple.Maps
             * @instance
             */
            Maps.prototype.struct = null;
    
            /**
             * Creates a new Maps instance using the specified properties.
             * @function create
             * @memberof simple.Maps
             * @static
             * @param {simple.IMaps=} [properties] Properties to set
             * @returns {simple.Maps} Maps instance
             */
            Maps.create = function create(properties) {
                return new Maps(properties);
            };
    
            /**
             * Encodes the specified Maps message. Does not implicitly {@link simple.Maps.verify|verify} messages.
             * @function encode
             * @memberof simple.Maps
             * @static
             * @param {simple.Maps} message Maps message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Maps.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.strToEntity != null && Object.hasOwnProperty.call(message, "strToEntity"))
                    for (var keys = Object.keys(message.strToEntity), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.simple.Entity.encode(message.strToEntity[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.int32ToInt32 != null && Object.hasOwnProperty.call(message, "int32ToInt32"))
                    for (var keys = Object.keys(message.int32ToInt32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.int32ToInt32[keys[i]]).ldelim();
                if (message.stringToBytes != null && Object.hasOwnProperty.call(message, "stringToBytes"))
                    for (var keys = Object.keys(message.stringToBytes), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.stringToBytes[keys[i]]).ldelim();
                if (message.int64ToInt64 != null && Object.hasOwnProperty.call(message, "int64ToInt64"))
                    for (var keys = Object.keys(message.int64ToInt64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.int64ToInt64[keys[i]]).ldelim();
                if (message.mapOfTimestamps != null && Object.hasOwnProperty.call(message, "mapOfTimestamps"))
                    for (var keys = Object.keys(message.mapOfTimestamps), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Timestamp.encode(message.mapOfTimestamps[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.struct != null && Object.hasOwnProperty.call(message, "struct"))
                    $root.google.protobuf.Struct.encode(message.struct, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Maps message, length delimited. Does not implicitly {@link simple.Maps.verify|verify} messages.
             * @function encodeDelimited
             * @memberof simple.Maps
             * @static
             * @param {simple.Maps} message Maps message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Maps.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Maps message from the specified reader or buffer.
             * @function decode
             * @memberof simple.Maps
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {simple.Maps} Maps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Maps.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.Maps(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.strToEntity === $util.emptyObject)
                                message.strToEntity = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.simple.Entity.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.strToEntity[key] = value;
                            break;
                        }
                    case 2: {
                            if (message.int32ToInt32 === $util.emptyObject)
                                message.int32ToInt32 = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.int32ToInt32[key] = value;
                            break;
                        }
                    case 3: {
                            if (message.stringToBytes === $util.emptyObject)
                                message.stringToBytes = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = [];
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.bytes();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.stringToBytes[key] = value;
                            break;
                        }
                    case 4: {
                            if (message.int64ToInt64 === $util.emptyObject)
                                message.int64ToInt64 = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int64();
                                    break;
                                case 2:
                                    value = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.int64ToInt64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 5: {
                            if (message.mapOfTimestamps === $util.emptyObject)
                                message.mapOfTimestamps = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapOfTimestamps[key] = value;
                            break;
                        }
                    case 6: {
                            message.struct = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Maps message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof simple.Maps
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {simple.Maps} Maps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Maps.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Maps message.
             * @function verify
             * @memberof simple.Maps
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Maps.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.strToEntity != null && message.hasOwnProperty("strToEntity")) {
                    if (!$util.isObject(message.strToEntity))
                        return "strToEntity: object expected";
                    var key = Object.keys(message.strToEntity);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.simple.Entity.verify(message.strToEntity[key[i]]);
                        if (error)
                            return "strToEntity." + error;
                    }
                }
                if (message.int32ToInt32 != null && message.hasOwnProperty("int32ToInt32")) {
                    if (!$util.isObject(message.int32ToInt32))
                        return "int32ToInt32: object expected";
                    var key = Object.keys(message.int32ToInt32);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "int32ToInt32: integer key{k:int32} expected";
                        if (!$util.isInteger(message.int32ToInt32[key[i]]))
                            return "int32ToInt32: integer{k:int32} expected";
                    }
                }
                if (message.stringToBytes != null && message.hasOwnProperty("stringToBytes")) {
                    if (!$util.isObject(message.stringToBytes))
                        return "stringToBytes: object expected";
                    var key = Object.keys(message.stringToBytes);
                    for (var i = 0; i < key.length; ++i)
                        if (!(message.stringToBytes[key[i]] && typeof message.stringToBytes[key[i]].length === "number" || $util.isString(message.stringToBytes[key[i]])))
                            return "stringToBytes: buffer{k:string} expected";
                }
                if (message.int64ToInt64 != null && message.hasOwnProperty("int64ToInt64")) {
                    if (!$util.isObject(message.int64ToInt64))
                        return "int64ToInt64: object expected";
                    var key = Object.keys(message.int64ToInt64);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "int64ToInt64: integer|Long key{k:int64} expected";
                        if (!$util.isInteger(message.int64ToInt64[key[i]]) && !(message.int64ToInt64[key[i]] && $util.isInteger(message.int64ToInt64[key[i]].low) && $util.isInteger(message.int64ToInt64[key[i]].high)))
                            return "int64ToInt64: integer|Long{k:int64} expected";
                    }
                }
                if (message.mapOfTimestamps != null && message.hasOwnProperty("mapOfTimestamps")) {
                    if (!$util.isObject(message.mapOfTimestamps))
                        return "mapOfTimestamps: object expected";
                    var key = Object.keys(message.mapOfTimestamps);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.google.protobuf.Timestamp.verify(message.mapOfTimestamps[key[i]]);
                        if (error)
                            return "mapOfTimestamps." + error;
                    }
                }
                if (message.struct != null && message.hasOwnProperty("struct")) {
                    var error = $root.google.protobuf.Struct.verify(message.struct);
                    if (error)
                        return "struct." + error;
                }
                return null;
            };
    
            /**
             * Creates a Maps message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof simple.Maps
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {simple.Maps} Maps
             */
            Maps.fromObject = function fromObject(object) {
                if (object instanceof $root.simple.Maps)
                    return object;
                var message = new $root.simple.Maps();
                if (object.strToEntity) {
                    if (typeof object.strToEntity !== "object")
                        throw TypeError(".simple.Maps.strToEntity: object expected");
                    message.strToEntity = {};
                    for (var keys = Object.keys(object.strToEntity), i = 0; i < keys.length; ++i) {
                        if (typeof object.strToEntity[keys[i]] !== "object")
                            throw TypeError(".simple.Maps.strToEntity: object expected");
                        message.strToEntity[keys[i]] = $root.simple.Entity.fromObject(object.strToEntity[keys[i]]);
                    }
                }
                if (object.int32ToInt32) {
                    if (typeof object.int32ToInt32 !== "object")
                        throw TypeError(".simple.Maps.int32ToInt32: object expected");
                    message.int32ToInt32 = {};
                    for (var keys = Object.keys(object.int32ToInt32), i = 0; i < keys.length; ++i)
                        message.int32ToInt32[keys[i]] = object.int32ToInt32[keys[i]] | 0;
                }
                if (object.stringToBytes) {
                    if (typeof object.stringToBytes !== "object")
                        throw TypeError(".simple.Maps.stringToBytes: object expected");
                    message.stringToBytes = {};
                    for (var keys = Object.keys(object.stringToBytes), i = 0; i < keys.length; ++i)
                        if (typeof object.stringToBytes[keys[i]] === "string")
                            $util.base64.decode(object.stringToBytes[keys[i]], message.stringToBytes[keys[i]] = $util.newBuffer($util.base64.length(object.stringToBytes[keys[i]])), 0);
                        else if (object.stringToBytes[keys[i]].length >= 0)
                            message.stringToBytes[keys[i]] = object.stringToBytes[keys[i]];
                }
                if (object.int64ToInt64) {
                    if (typeof object.int64ToInt64 !== "object")
                        throw TypeError(".simple.Maps.int64ToInt64: object expected");
                    message.int64ToInt64 = {};
                    for (var keys = Object.keys(object.int64ToInt64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.int64ToInt64[keys[i]] = $util.Long.fromValue(object.int64ToInt64[keys[i]])).unsigned = false;
                        else if (typeof object.int64ToInt64[keys[i]] === "string")
                            message.int64ToInt64[keys[i]] = parseInt(object.int64ToInt64[keys[i]], 10);
                        else if (typeof object.int64ToInt64[keys[i]] === "number")
                            message.int64ToInt64[keys[i]] = object.int64ToInt64[keys[i]];
                        else if (typeof object.int64ToInt64[keys[i]] === "object")
                            message.int64ToInt64[keys[i]] = new $util.LongBits(object.int64ToInt64[keys[i]].low >>> 0, object.int64ToInt64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapOfTimestamps) {
                    if (typeof object.mapOfTimestamps !== "object")
                        throw TypeError(".simple.Maps.mapOfTimestamps: object expected");
                    message.mapOfTimestamps = {};
                    for (var keys = Object.keys(object.mapOfTimestamps), i = 0; i < keys.length; ++i) {
                        if (typeof object.mapOfTimestamps[keys[i]] !== "object")
                            throw TypeError(".simple.Maps.mapOfTimestamps: object expected");
                        message.mapOfTimestamps[keys[i]] = $root.google.protobuf.Timestamp.fromObject(object.mapOfTimestamps[keys[i]]);
                    }
                }
                if (object.struct != null) {
                    if (typeof object.struct !== "object")
                        throw TypeError(".simple.Maps.struct: object expected");
                    message.struct = $root.google.protobuf.Struct.fromObject(object.struct);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Maps message. Also converts values to other types if specified.
             * @function toObject
             * @memberof simple.Maps
             * @static
             * @param {simple.Maps} message Maps
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Maps.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults) {
                    object.strToEntity = {};
                    object.int32ToInt32 = {};
                    object.stringToBytes = {};
                    object.int64ToInt64 = {};
                    object.mapOfTimestamps = {};
                }
                if (options.defaults)
                    object.struct = null;
                var keys2;
                if (message.strToEntity && (keys2 = Object.keys(message.strToEntity)).length) {
                    object.strToEntity = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.strToEntity[keys2[j]] = $root.simple.Entity.toObject(message.strToEntity[keys2[j]], options);
                }
                if (message.int32ToInt32 && (keys2 = Object.keys(message.int32ToInt32)).length) {
                    object.int32ToInt32 = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.int32ToInt32[keys2[j]] = message.int32ToInt32[keys2[j]];
                }
                if (message.stringToBytes && (keys2 = Object.keys(message.stringToBytes)).length) {
                    object.stringToBytes = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.stringToBytes[keys2[j]] = options.bytes === String ? $util.base64.encode(message.stringToBytes[keys2[j]], 0, message.stringToBytes[keys2[j]].length) : options.bytes === Array ? Array.prototype.slice.call(message.stringToBytes[keys2[j]]) : message.stringToBytes[keys2[j]];
                }
                if (message.int64ToInt64 && (keys2 = Object.keys(message.int64ToInt64)).length) {
                    object.int64ToInt64 = {};
                    for (var j = 0; j < keys2.length; ++j)
                        if (typeof message.int64ToInt64[keys2[j]] === "number")
                            object.int64ToInt64[keys2[j]] = options.longs === String ? String(message.int64ToInt64[keys2[j]]) : message.int64ToInt64[keys2[j]];
                        else
                            object.int64ToInt64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.int64ToInt64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.int64ToInt64[keys2[j]].low >>> 0, message.int64ToInt64[keys2[j]].high >>> 0).toNumber() : message.int64ToInt64[keys2[j]];
                }
                if (message.mapOfTimestamps && (keys2 = Object.keys(message.mapOfTimestamps)).length) {
                    object.mapOfTimestamps = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapOfTimestamps[keys2[j]] = $root.google.protobuf.Timestamp.toObject(message.mapOfTimestamps[keys2[j]], options);
                }
                if (message.struct != null && message.hasOwnProperty("struct"))
                    object.struct = $root.google.protobuf.Struct.toObject(message.struct, options);
                return object;
            };
    
            /**
             * Converts this Maps to JSON.
             * @function toJSON
             * @memberof simple.Maps
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Maps.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Maps
             * @function getTypeUrl
             * @memberof simple.Maps
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Maps.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/simple.Maps";
            };
    
            return Maps;
        })();
    
        return simple;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.seconds = reader.int64();
                                break;
                            }
                        case 2: {
                                message.nanos = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Timestamp
                 * @function getTypeUrl
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Timestamp";
                };
    
                return Timestamp;
            })();
    
            protobuf.Struct = (function() {
    
                /**
                 * Properties of a Struct.
                 * @memberof google.protobuf
                 * @interface IStruct
                 * @property {Object.<string,google.protobuf.Value>|null} [fields] Struct fields
                 */
    
                /**
                 * Constructs a new Struct.
                 * @memberof google.protobuf
                 * @classdesc Represents a Struct.
                 * @implements IStruct
                 * @constructor
                 * @param {google.protobuf.IStruct=} [properties] Properties to set
                 */
                function Struct(properties) {
                    this.fields = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Struct fields.
                 * @member {Object.<string,google.protobuf.Value>} fields
                 * @memberof google.protobuf.Struct
                 * @instance
                 */
                Struct.prototype.fields = $util.emptyObject;
    
                /**
                 * Creates a new Struct instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {google.protobuf.IStruct=} [properties] Properties to set
                 * @returns {google.protobuf.Struct} Struct instance
                 */
                Struct.create = function create(properties) {
                    return new Struct(properties);
                };
    
                /**
                 * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {google.protobuf.Struct} message Struct message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Struct.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                        for (var keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };
    
                /**
                 * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {google.protobuf.Struct} message Struct message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Struct.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Struct message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Struct} Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Struct.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (message.fields === $util.emptyObject)
                                    message.fields = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.fields[key] = value;
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Struct message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Struct} Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Struct.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Struct message.
                 * @function verify
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Struct.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fields != null && message.hasOwnProperty("fields")) {
                        if (!$util.isObject(message.fields))
                            return "fields: object expected";
                        var key = Object.keys(message.fields);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                            if (error)
                                return "fields." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Struct message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Struct} Struct
                 */
                Struct.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Struct)
                        return object;
                    var message = new $root.google.protobuf.Struct();
                    if (object.fields) {
                        if (typeof object.fields !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields = {};
                        for (var keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                            if (typeof object.fields[keys[i]] !== "object")
                                throw TypeError(".google.protobuf.Struct.fields: object expected");
                            message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Struct message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {google.protobuf.Struct} message Struct
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Struct.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.fields = {};
                    var keys2;
                    if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                        object.fields = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this Struct to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Struct
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Struct.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Struct
                 * @function getTypeUrl
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Struct.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Struct";
                };
    
                return Struct;
            })();
    
            protobuf.Value = (function() {
    
                /**
                 * Properties of a Value.
                 * @memberof google.protobuf
                 * @interface IValue
                 * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
                 * @property {number|null} [numberValue] Value numberValue
                 * @property {string|null} [stringValue] Value stringValue
                 * @property {boolean|null} [boolValue] Value boolValue
                 * @property {google.protobuf.Struct|null} [structValue] Value structValue
                 * @property {google.protobuf.ListValue|null} [listValue] Value listValue
                 */
    
                /**
                 * Constructs a new Value.
                 * @memberof google.protobuf
                 * @classdesc Represents a Value.
                 * @implements IValue
                 * @constructor
                 * @param {google.protobuf.IValue=} [properties] Properties to set
                 */
                function Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Value nullValue.
                 * @member {google.protobuf.NullValue|null|undefined} nullValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.nullValue = null;
    
                /**
                 * Value numberValue.
                 * @member {number|null|undefined} numberValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.numberValue = null;
    
                /**
                 * Value stringValue.
                 * @member {string|null|undefined} stringValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.stringValue = null;
    
                /**
                 * Value boolValue.
                 * @member {boolean|null|undefined} boolValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.boolValue = null;
    
                /**
                 * Value structValue.
                 * @member {google.protobuf.Struct|null|undefined} structValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.structValue = null;
    
                /**
                 * Value listValue.
                 * @member {google.protobuf.ListValue|null|undefined} listValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.listValue = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * Value kind.
                 * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Object.defineProperty(Value.prototype, "kind", {
                    get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {google.protobuf.IValue=} [properties] Properties to set
                 * @returns {google.protobuf.Value} Value instance
                 */
                Value.create = function create(properties) {
                    return new Value(properties);
                };
    
                /**
                 * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {google.protobuf.Value} message Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.nullValue != null && Object.hasOwnProperty.call(message, "nullValue"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                    if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                    if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                    if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                    if (message.structValue != null && Object.hasOwnProperty.call(message, "structValue"))
                        $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.listValue != null && Object.hasOwnProperty.call(message, "listValue"))
                        $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {google.protobuf.Value} message Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Value} Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.nullValue = reader.int32();
                                break;
                            }
                        case 2: {
                                message.numberValue = reader.double();
                                break;
                            }
                        case 3: {
                                message.stringValue = reader.string();
                                break;
                            }
                        case 4: {
                                message.boolValue = reader.bool();
                                break;
                            }
                        case 5: {
                                message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                                break;
                            }
                        case 6: {
                                message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Value} Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Value message.
                 * @function verify
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                        properties.kind = 1;
                        switch (message.nullValue) {
                        default:
                            return "nullValue: enum value expected";
                        case 0:
                            break;
                        }
                    }
                    if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        if (typeof message.numberValue !== "number")
                            return "numberValue: number expected";
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        if (!$util.isString(message.stringValue))
                            return "stringValue: string expected";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        if (typeof message.boolValue !== "boolean")
                            return "boolValue: boolean expected";
                    }
                    if (message.structValue != null && message.hasOwnProperty("structValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        {
                            var error = $root.google.protobuf.Struct.verify(message.structValue);
                            if (error)
                                return "structValue." + error;
                        }
                    }
                    if (message.listValue != null && message.hasOwnProperty("listValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        {
                            var error = $root.google.protobuf.ListValue.verify(message.listValue);
                            if (error)
                                return "listValue." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Value} Value
                 */
                Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Value)
                        return object;
                    var message = new $root.google.protobuf.Value();
                    switch (object.nullValue) {
                    default:
                        if (typeof object.nullValue === "number") {
                            message.nullValue = object.nullValue;
                            break;
                        }
                        break;
                    case "NULL_VALUE":
                    case 0:
                        message.nullValue = 0;
                        break;
                    }
                    if (object.numberValue != null)
                        message.numberValue = Number(object.numberValue);
                    if (object.stringValue != null)
                        message.stringValue = String(object.stringValue);
                    if (object.boolValue != null)
                        message.boolValue = Boolean(object.boolValue);
                    if (object.structValue != null) {
                        if (typeof object.structValue !== "object")
                            throw TypeError(".google.protobuf.Value.structValue: object expected");
                        message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                    }
                    if (object.listValue != null) {
                        if (typeof object.listValue !== "object")
                            throw TypeError(".google.protobuf.Value.listValue: object expected");
                        message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {google.protobuf.Value} message Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                        object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] === undefined ? message.nullValue : $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                        if (options.oneofs)
                            object.kind = "nullValue";
                    }
                    if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                        object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                        if (options.oneofs)
                            object.kind = "numberValue";
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                        object.stringValue = message.stringValue;
                        if (options.oneofs)
                            object.kind = "stringValue";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                        object.boolValue = message.boolValue;
                        if (options.oneofs)
                            object.kind = "boolValue";
                    }
                    if (message.structValue != null && message.hasOwnProperty("structValue")) {
                        object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                        if (options.oneofs)
                            object.kind = "structValue";
                    }
                    if (message.listValue != null && message.hasOwnProperty("listValue")) {
                        object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                        if (options.oneofs)
                            object.kind = "listValue";
                    }
                    return object;
                };
    
                /**
                 * Converts this Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Value
                 * @function getTypeUrl
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Value";
                };
    
                return Value;
            })();
    
            /**
             * NullValue enum.
             * @name google.protobuf.NullValue
             * @enum {number}
             * @property {number} NULL_VALUE=0 NULL_VALUE value
             */
            protobuf.NullValue = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NULL_VALUE"] = 0;
                return values;
            })();
    
            protobuf.ListValue = (function() {
    
                /**
                 * Properties of a ListValue.
                 * @memberof google.protobuf
                 * @interface IListValue
                 * @property {Array.<google.protobuf.Value>|null} [values] ListValue values
                 */
    
                /**
                 * Constructs a new ListValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a ListValue.
                 * @implements IListValue
                 * @constructor
                 * @param {google.protobuf.IListValue=} [properties] Properties to set
                 */
                function ListValue(properties) {
                    this.values = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ListValue values.
                 * @member {Array.<google.protobuf.Value>} values
                 * @memberof google.protobuf.ListValue
                 * @instance
                 */
                ListValue.prototype.values = $util.emptyArray;
    
                /**
                 * Creates a new ListValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {google.protobuf.IListValue=} [properties] Properties to set
                 * @returns {google.protobuf.ListValue} ListValue instance
                 */
                ListValue.create = function create(properties) {
                    return new ListValue(properties);
                };
    
                /**
                 * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {google.protobuf.ListValue} message ListValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.values != null && message.values.length)
                        for (var i = 0; i < message.values.length; ++i)
                            $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {google.protobuf.ListValue} message ListValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ListValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ListValue} ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ListValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ListValue} ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ListValue message.
                 * @function verify
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.values != null && message.hasOwnProperty("values")) {
                        if (!Array.isArray(message.values))
                            return "values: array expected";
                        for (var i = 0; i < message.values.length; ++i) {
                            var error = $root.google.protobuf.Value.verify(message.values[i]);
                            if (error)
                                return "values." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ListValue} ListValue
                 */
                ListValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ListValue)
                        return object;
                    var message = new $root.google.protobuf.ListValue();
                    if (object.values) {
                        if (!Array.isArray(object.values))
                            throw TypeError(".google.protobuf.ListValue.values: array expected");
                        message.values = [];
                        for (var i = 0; i < object.values.length; ++i) {
                            if (typeof object.values[i] !== "object")
                                throw TypeError(".google.protobuf.ListValue.values: object expected");
                            message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ListValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {google.protobuf.ListValue} message ListValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.values = [];
                    if (message.values && message.values.length) {
                        object.values = [];
                        for (var j = 0; j < message.values.length; ++j)
                            object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ListValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ListValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ListValue
                 * @function getTypeUrl
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ListValue";
                };
    
                return ListValue;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
