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
    
        simple.Numbers = (function() {
    
            /**
             * Properties of a Numbers.
             * @memberof simple
             * @interface INumbers
             * @property {number|null} [double] Numbers double
             * @property {number|null} [float] Numbers float
             * @property {number|null} [int32] Numbers int32
             * @property {Long|null} [int64] Numbers int64
             * @property {number|null} [uint32] Numbers uint32
             * @property {Long|null} [uint64] Numbers uint64
             * @property {number|null} [sint32] Numbers sint32
             * @property {Long|null} [sint64] Numbers sint64
             * @property {number|null} [fixed32] Numbers fixed32
             * @property {Long|null} [fixed64] Numbers fixed64
             * @property {number|null} [sfixed32] Numbers sfixed32
             * @property {Long|null} [sfixed64] Numbers sfixed64
             * @property {google.protobuf.UInt64Value|null} [guint64] Numbers guint64
             * @property {google.protobuf.Timestamp|null} [timestamp] Numbers timestamp
             */
    
            /**
             * Constructs a new Numbers.
             * @memberof simple
             * @classdesc Represents a Numbers.
             * @implements INumbers
             * @constructor
             * @param {simple.INumbers=} [properties] Properties to set
             */
            function Numbers(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Numbers double.
             * @member {number} double
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.double = 0;
    
            /**
             * Numbers float.
             * @member {number} float
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.float = 0;
    
            /**
             * Numbers int32.
             * @member {number} int32
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.int32 = 0;
    
            /**
             * Numbers int64.
             * @member {Long} int64
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.int64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Numbers uint32.
             * @member {number} uint32
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.uint32 = 0;
    
            /**
             * Numbers uint64.
             * @member {Long} uint64
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.uint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Numbers sint32.
             * @member {number} sint32
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.sint32 = 0;
    
            /**
             * Numbers sint64.
             * @member {Long} sint64
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.sint64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Numbers fixed32.
             * @member {number} fixed32
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.fixed32 = 0;
    
            /**
             * Numbers fixed64.
             * @member {Long} fixed64
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.fixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Numbers sfixed32.
             * @member {number} sfixed32
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.sfixed32 = 0;
    
            /**
             * Numbers sfixed64.
             * @member {Long} sfixed64
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.sfixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Numbers guint64.
             * @member {google.protobuf.UInt64Value|null|undefined} guint64
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.guint64 = null;
    
            /**
             * Numbers timestamp.
             * @member {google.protobuf.Timestamp|null|undefined} timestamp
             * @memberof simple.Numbers
             * @instance
             */
            Numbers.prototype.timestamp = null;
    
            /**
             * Creates a new Numbers instance using the specified properties.
             * @function create
             * @memberof simple.Numbers
             * @static
             * @param {simple.INumbers=} [properties] Properties to set
             * @returns {simple.Numbers} Numbers instance
             */
            Numbers.create = function create(properties) {
                return new Numbers(properties);
            };
    
            /**
             * Encodes the specified Numbers message. Does not implicitly {@link simple.Numbers.verify|verify} messages.
             * @function encode
             * @memberof simple.Numbers
             * @static
             * @param {simple.Numbers} message Numbers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Numbers.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.double != null && Object.hasOwnProperty.call(message, "double"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.double);
                if (message.float != null && Object.hasOwnProperty.call(message, "float"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.float);
                if (message.int32 != null && Object.hasOwnProperty.call(message, "int32"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.int32);
                if (message.int64 != null && Object.hasOwnProperty.call(message, "int64"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.int64);
                if (message.uint32 != null && Object.hasOwnProperty.call(message, "uint32"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.uint32);
                if (message.uint64 != null && Object.hasOwnProperty.call(message, "uint64"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.uint64);
                if (message.sint32 != null && Object.hasOwnProperty.call(message, "sint32"))
                    writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.sint32);
                if (message.sint64 != null && Object.hasOwnProperty.call(message, "sint64"))
                    writer.uint32(/* id 8, wireType 0 =*/64).sint64(message.sint64);
                if (message.fixed32 != null && Object.hasOwnProperty.call(message, "fixed32"))
                    writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.fixed32);
                if (message.fixed64 != null && Object.hasOwnProperty.call(message, "fixed64"))
                    writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.fixed64);
                if (message.sfixed32 != null && Object.hasOwnProperty.call(message, "sfixed32"))
                    writer.uint32(/* id 11, wireType 5 =*/93).sfixed32(message.sfixed32);
                if (message.sfixed64 != null && Object.hasOwnProperty.call(message, "sfixed64"))
                    writer.uint32(/* id 12, wireType 1 =*/97).sfixed64(message.sfixed64);
                if (message.guint64 != null && Object.hasOwnProperty.call(message, "guint64"))
                    $root.google.protobuf.UInt64Value.encode(message.guint64, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Numbers message, length delimited. Does not implicitly {@link simple.Numbers.verify|verify} messages.
             * @function encodeDelimited
             * @memberof simple.Numbers
             * @static
             * @param {simple.Numbers} message Numbers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Numbers.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Numbers message from the specified reader or buffer.
             * @function decode
             * @memberof simple.Numbers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {simple.Numbers} Numbers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Numbers.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.Numbers();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.double = reader.double();
                            break;
                        }
                    case 2: {
                            message.float = reader.float();
                            break;
                        }
                    case 3: {
                            message.int32 = reader.int32();
                            break;
                        }
                    case 4: {
                            message.int64 = reader.int64();
                            break;
                        }
                    case 5: {
                            message.uint32 = reader.uint32();
                            break;
                        }
                    case 6: {
                            message.uint64 = reader.uint64();
                            break;
                        }
                    case 7: {
                            message.sint32 = reader.sint32();
                            break;
                        }
                    case 8: {
                            message.sint64 = reader.sint64();
                            break;
                        }
                    case 9: {
                            message.fixed32 = reader.fixed32();
                            break;
                        }
                    case 10: {
                            message.fixed64 = reader.fixed64();
                            break;
                        }
                    case 11: {
                            message.sfixed32 = reader.sfixed32();
                            break;
                        }
                    case 12: {
                            message.sfixed64 = reader.sfixed64();
                            break;
                        }
                    case 13: {
                            message.guint64 = $root.google.protobuf.UInt64Value.decode(reader, reader.uint32());
                            break;
                        }
                    case 14: {
                            message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
             * Decodes a Numbers message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof simple.Numbers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {simple.Numbers} Numbers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Numbers.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Numbers message.
             * @function verify
             * @memberof simple.Numbers
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Numbers.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.double != null && message.hasOwnProperty("double"))
                    if (typeof message.double !== "number")
                        return "double: number expected";
                if (message.float != null && message.hasOwnProperty("float"))
                    if (typeof message.float !== "number")
                        return "float: number expected";
                if (message.int32 != null && message.hasOwnProperty("int32"))
                    if (!$util.isInteger(message.int32))
                        return "int32: integer expected";
                if (message.int64 != null && message.hasOwnProperty("int64"))
                    if (!$util.isInteger(message.int64) && !(message.int64 && $util.isInteger(message.int64.low) && $util.isInteger(message.int64.high)))
                        return "int64: integer|Long expected";
                if (message.uint32 != null && message.hasOwnProperty("uint32"))
                    if (!$util.isInteger(message.uint32))
                        return "uint32: integer expected";
                if (message.uint64 != null && message.hasOwnProperty("uint64"))
                    if (!$util.isInteger(message.uint64) && !(message.uint64 && $util.isInteger(message.uint64.low) && $util.isInteger(message.uint64.high)))
                        return "uint64: integer|Long expected";
                if (message.sint32 != null && message.hasOwnProperty("sint32"))
                    if (!$util.isInteger(message.sint32))
                        return "sint32: integer expected";
                if (message.sint64 != null && message.hasOwnProperty("sint64"))
                    if (!$util.isInteger(message.sint64) && !(message.sint64 && $util.isInteger(message.sint64.low) && $util.isInteger(message.sint64.high)))
                        return "sint64: integer|Long expected";
                if (message.fixed32 != null && message.hasOwnProperty("fixed32"))
                    if (!$util.isInteger(message.fixed32))
                        return "fixed32: integer expected";
                if (message.fixed64 != null && message.hasOwnProperty("fixed64"))
                    if (!$util.isInteger(message.fixed64) && !(message.fixed64 && $util.isInteger(message.fixed64.low) && $util.isInteger(message.fixed64.high)))
                        return "fixed64: integer|Long expected";
                if (message.sfixed32 != null && message.hasOwnProperty("sfixed32"))
                    if (!$util.isInteger(message.sfixed32))
                        return "sfixed32: integer expected";
                if (message.sfixed64 != null && message.hasOwnProperty("sfixed64"))
                    if (!$util.isInteger(message.sfixed64) && !(message.sfixed64 && $util.isInteger(message.sfixed64.low) && $util.isInteger(message.sfixed64.high)))
                        return "sfixed64: integer|Long expected";
                if (message.guint64 != null && message.hasOwnProperty("guint64")) {
                    var error = $root.google.protobuf.UInt64Value.verify(message.guint64);
                    if (error)
                        return "guint64." + error;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                return null;
            };
    
            /**
             * Creates a Numbers message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof simple.Numbers
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {simple.Numbers} Numbers
             */
            Numbers.fromObject = function fromObject(object) {
                if (object instanceof $root.simple.Numbers)
                    return object;
                var message = new $root.simple.Numbers();
                if (object.double != null)
                    message.double = Number(object.double);
                if (object.float != null)
                    message.float = Number(object.float);
                if (object.int32 != null)
                    message.int32 = object.int32 | 0;
                if (object.int64 != null)
                    if ($util.Long)
                        (message.int64 = $util.Long.fromValue(object.int64)).unsigned = false;
                    else if (typeof object.int64 === "string")
                        message.int64 = parseInt(object.int64, 10);
                    else if (typeof object.int64 === "number")
                        message.int64 = object.int64;
                    else if (typeof object.int64 === "object")
                        message.int64 = new $util.LongBits(object.int64.low >>> 0, object.int64.high >>> 0).toNumber();
                if (object.uint32 != null)
                    message.uint32 = object.uint32 >>> 0;
                if (object.uint64 != null)
                    if ($util.Long)
                        (message.uint64 = $util.Long.fromValue(object.uint64)).unsigned = true;
                    else if (typeof object.uint64 === "string")
                        message.uint64 = parseInt(object.uint64, 10);
                    else if (typeof object.uint64 === "number")
                        message.uint64 = object.uint64;
                    else if (typeof object.uint64 === "object")
                        message.uint64 = new $util.LongBits(object.uint64.low >>> 0, object.uint64.high >>> 0).toNumber(true);
                if (object.sint32 != null)
                    message.sint32 = object.sint32 | 0;
                if (object.sint64 != null)
                    if ($util.Long)
                        (message.sint64 = $util.Long.fromValue(object.sint64)).unsigned = false;
                    else if (typeof object.sint64 === "string")
                        message.sint64 = parseInt(object.sint64, 10);
                    else if (typeof object.sint64 === "number")
                        message.sint64 = object.sint64;
                    else if (typeof object.sint64 === "object")
                        message.sint64 = new $util.LongBits(object.sint64.low >>> 0, object.sint64.high >>> 0).toNumber();
                if (object.fixed32 != null)
                    message.fixed32 = object.fixed32 >>> 0;
                if (object.fixed64 != null)
                    if ($util.Long)
                        (message.fixed64 = $util.Long.fromValue(object.fixed64)).unsigned = false;
                    else if (typeof object.fixed64 === "string")
                        message.fixed64 = parseInt(object.fixed64, 10);
                    else if (typeof object.fixed64 === "number")
                        message.fixed64 = object.fixed64;
                    else if (typeof object.fixed64 === "object")
                        message.fixed64 = new $util.LongBits(object.fixed64.low >>> 0, object.fixed64.high >>> 0).toNumber();
                if (object.sfixed32 != null)
                    message.sfixed32 = object.sfixed32 | 0;
                if (object.sfixed64 != null)
                    if ($util.Long)
                        (message.sfixed64 = $util.Long.fromValue(object.sfixed64)).unsigned = false;
                    else if (typeof object.sfixed64 === "string")
                        message.sfixed64 = parseInt(object.sfixed64, 10);
                    else if (typeof object.sfixed64 === "number")
                        message.sfixed64 = object.sfixed64;
                    else if (typeof object.sfixed64 === "object")
                        message.sfixed64 = new $util.LongBits(object.sfixed64.low >>> 0, object.sfixed64.high >>> 0).toNumber();
                if (object.guint64 != null) {
                    if (typeof object.guint64 !== "object")
                        throw TypeError(".simple.Numbers.guint64: object expected");
                    message.guint64 = $root.google.protobuf.UInt64Value.fromObject(object.guint64);
                }
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".simple.Numbers.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Numbers message. Also converts values to other types if specified.
             * @function toObject
             * @memberof simple.Numbers
             * @static
             * @param {simple.Numbers} message Numbers
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Numbers.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.double = 0;
                    object.float = 0;
                    object.int32 = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.int64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.int64 = options.longs === String ? "0" : 0;
                    object.uint32 = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.uint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.uint64 = options.longs === String ? "0" : 0;
                    object.sint32 = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.sint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sint64 = options.longs === String ? "0" : 0;
                    object.fixed32 = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.fixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.fixed64 = options.longs === String ? "0" : 0;
                    object.sfixed32 = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.sfixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sfixed64 = options.longs === String ? "0" : 0;
                    object.guint64 = null;
                    object.timestamp = null;
                }
                if (message.double != null && message.hasOwnProperty("double"))
                    object.double = options.json && !isFinite(message.double) ? String(message.double) : message.double;
                if (message.float != null && message.hasOwnProperty("float"))
                    object.float = options.json && !isFinite(message.float) ? String(message.float) : message.float;
                if (message.int32 != null && message.hasOwnProperty("int32"))
                    object.int32 = message.int32;
                if (message.int64 != null && message.hasOwnProperty("int64"))
                    if (typeof message.int64 === "number")
                        object.int64 = options.longs === String ? String(message.int64) : message.int64;
                    else
                        object.int64 = options.longs === String ? $util.Long.prototype.toString.call(message.int64) : options.longs === Number ? new $util.LongBits(message.int64.low >>> 0, message.int64.high >>> 0).toNumber() : message.int64;
                if (message.uint32 != null && message.hasOwnProperty("uint32"))
                    object.uint32 = message.uint32;
                if (message.uint64 != null && message.hasOwnProperty("uint64"))
                    if (typeof message.uint64 === "number")
                        object.uint64 = options.longs === String ? String(message.uint64) : message.uint64;
                    else
                        object.uint64 = options.longs === String ? $util.Long.prototype.toString.call(message.uint64) : options.longs === Number ? new $util.LongBits(message.uint64.low >>> 0, message.uint64.high >>> 0).toNumber(true) : message.uint64;
                if (message.sint32 != null && message.hasOwnProperty("sint32"))
                    object.sint32 = message.sint32;
                if (message.sint64 != null && message.hasOwnProperty("sint64"))
                    if (typeof message.sint64 === "number")
                        object.sint64 = options.longs === String ? String(message.sint64) : message.sint64;
                    else
                        object.sint64 = options.longs === String ? $util.Long.prototype.toString.call(message.sint64) : options.longs === Number ? new $util.LongBits(message.sint64.low >>> 0, message.sint64.high >>> 0).toNumber() : message.sint64;
                if (message.fixed32 != null && message.hasOwnProperty("fixed32"))
                    object.fixed32 = message.fixed32;
                if (message.fixed64 != null && message.hasOwnProperty("fixed64"))
                    if (typeof message.fixed64 === "number")
                        object.fixed64 = options.longs === String ? String(message.fixed64) : message.fixed64;
                    else
                        object.fixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.fixed64) : options.longs === Number ? new $util.LongBits(message.fixed64.low >>> 0, message.fixed64.high >>> 0).toNumber() : message.fixed64;
                if (message.sfixed32 != null && message.hasOwnProperty("sfixed32"))
                    object.sfixed32 = message.sfixed32;
                if (message.sfixed64 != null && message.hasOwnProperty("sfixed64"))
                    if (typeof message.sfixed64 === "number")
                        object.sfixed64 = options.longs === String ? String(message.sfixed64) : message.sfixed64;
                    else
                        object.sfixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.sfixed64) : options.longs === Number ? new $util.LongBits(message.sfixed64.low >>> 0, message.sfixed64.high >>> 0).toNumber() : message.sfixed64;
                if (message.guint64 != null && message.hasOwnProperty("guint64"))
                    object.guint64 = $root.google.protobuf.UInt64Value.toObject(message.guint64, options);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                return object;
            };
    
            /**
             * Converts this Numbers to JSON.
             * @function toJSON
             * @memberof simple.Numbers
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Numbers.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Numbers
             * @function getTypeUrl
             * @memberof simple.Numbers
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Numbers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/simple.Numbers";
            };
    
            return Numbers;
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
    
            protobuf.DoubleValue = (function() {
    
                /**
                 * Properties of a DoubleValue.
                 * @memberof google.protobuf
                 * @interface IDoubleValue
                 * @property {number|null} [value] DoubleValue value
                 */
    
                /**
                 * Constructs a new DoubleValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a DoubleValue.
                 * @implements IDoubleValue
                 * @constructor
                 * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
                 */
                function DoubleValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DoubleValue value.
                 * @member {number} value
                 * @memberof google.protobuf.DoubleValue
                 * @instance
                 */
                DoubleValue.prototype.value = 0;
    
                /**
                 * Creates a new DoubleValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
                 * @returns {google.protobuf.DoubleValue} DoubleValue instance
                 */
                DoubleValue.create = function create(properties) {
                    return new DoubleValue(properties);
                };
    
                /**
                 * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.DoubleValue} message DoubleValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoubleValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.DoubleValue} message DoubleValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DoubleValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoubleValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.double();
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
                 * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DoubleValue message.
                 * @function verify
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DoubleValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "number")
                            return "value: number expected";
                    return null;
                };
    
                /**
                 * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 */
                DoubleValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DoubleValue)
                        return object;
                    var message = new $root.google.protobuf.DoubleValue();
                    if (object.value != null)
                        message.value = Number(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.DoubleValue} message DoubleValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DoubleValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this DoubleValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DoubleValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DoubleValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DoubleValue
                 * @function getTypeUrl
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DoubleValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DoubleValue";
                };
    
                return DoubleValue;
            })();
    
            protobuf.FloatValue = (function() {
    
                /**
                 * Properties of a FloatValue.
                 * @memberof google.protobuf
                 * @interface IFloatValue
                 * @property {number|null} [value] FloatValue value
                 */
    
                /**
                 * Constructs a new FloatValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a FloatValue.
                 * @implements IFloatValue
                 * @constructor
                 * @param {google.protobuf.IFloatValue=} [properties] Properties to set
                 */
                function FloatValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FloatValue value.
                 * @member {number} value
                 * @memberof google.protobuf.FloatValue
                 * @instance
                 */
                FloatValue.prototype.value = 0;
    
                /**
                 * Creates a new FloatValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.IFloatValue=} [properties] Properties to set
                 * @returns {google.protobuf.FloatValue} FloatValue instance
                 */
                FloatValue.create = function create(properties) {
                    return new FloatValue(properties);
                };
    
                /**
                 * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.FloatValue} message FloatValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FloatValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.FloatValue} message FloatValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FloatValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FloatValue} FloatValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FloatValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.float();
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
                 * Decodes a FloatValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FloatValue} FloatValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FloatValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FloatValue message.
                 * @function verify
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FloatValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "number")
                            return "value: number expected";
                    return null;
                };
    
                /**
                 * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FloatValue} FloatValue
                 */
                FloatValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FloatValue)
                        return object;
                    var message = new $root.google.protobuf.FloatValue();
                    if (object.value != null)
                        message.value = Number(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.FloatValue} message FloatValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FloatValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this FloatValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FloatValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FloatValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FloatValue
                 * @function getTypeUrl
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FloatValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FloatValue";
                };
    
                return FloatValue;
            })();
    
            protobuf.Int64Value = (function() {
    
                /**
                 * Properties of an Int64Value.
                 * @memberof google.protobuf
                 * @interface IInt64Value
                 * @property {Long|null} [value] Int64Value value
                 */
    
                /**
                 * Constructs a new Int64Value.
                 * @memberof google.protobuf
                 * @classdesc Represents an Int64Value.
                 * @implements IInt64Value
                 * @constructor
                 * @param {google.protobuf.IInt64Value=} [properties] Properties to set
                 */
                function Int64Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Int64Value value.
                 * @member {Long} value
                 * @memberof google.protobuf.Int64Value
                 * @instance
                 */
                Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Int64Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.IInt64Value=} [properties] Properties to set
                 * @returns {google.protobuf.Int64Value} Int64Value instance
                 */
                Int64Value.create = function create(properties) {
                    return new Int64Value(properties);
                };
    
                /**
                 * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.Int64Value} message Int64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int64Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.Int64Value} message Int64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Int64Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Int64Value} Int64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int64Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.int64();
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
                 * Decodes an Int64Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Int64Value} Int64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int64Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Int64Value message.
                 * @function verify
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Int64Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                            return "value: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Int64Value} Int64Value
                 */
                Int64Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Int64Value)
                        return object;
                    var message = new $root.google.protobuf.Int64Value();
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.Int64Value} message Int64Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Int64Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                    return object;
                };
    
                /**
                 * Converts this Int64Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Int64Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Int64Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Int64Value
                 * @function getTypeUrl
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Int64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Int64Value";
                };
    
                return Int64Value;
            })();
    
            protobuf.UInt64Value = (function() {
    
                /**
                 * Properties of a UInt64Value.
                 * @memberof google.protobuf
                 * @interface IUInt64Value
                 * @property {Long|null} [value] UInt64Value value
                 */
    
                /**
                 * Constructs a new UInt64Value.
                 * @memberof google.protobuf
                 * @classdesc Represents a UInt64Value.
                 * @implements IUInt64Value
                 * @constructor
                 * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
                 */
                function UInt64Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UInt64Value value.
                 * @member {Long} value
                 * @memberof google.protobuf.UInt64Value
                 * @instance
                 */
                UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Creates a new UInt64Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
                 * @returns {google.protobuf.UInt64Value} UInt64Value instance
                 */
                UInt64Value.create = function create(properties) {
                    return new UInt64Value(properties);
                };
    
                /**
                 * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.UInt64Value} message UInt64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt64Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.UInt64Value} message UInt64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UInt64Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt64Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.uint64();
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
                 * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UInt64Value message.
                 * @function verify
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UInt64Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                            return "value: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 */
                UInt64Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UInt64Value)
                        return object;
                    var message = new $root.google.protobuf.UInt64Value();
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.UInt64Value} message UInt64Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UInt64Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                    return object;
                };
    
                /**
                 * Converts this UInt64Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UInt64Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UInt64Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for UInt64Value
                 * @function getTypeUrl
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UInt64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UInt64Value";
                };
    
                return UInt64Value;
            })();
    
            protobuf.Int32Value = (function() {
    
                /**
                 * Properties of an Int32Value.
                 * @memberof google.protobuf
                 * @interface IInt32Value
                 * @property {number|null} [value] Int32Value value
                 */
    
                /**
                 * Constructs a new Int32Value.
                 * @memberof google.protobuf
                 * @classdesc Represents an Int32Value.
                 * @implements IInt32Value
                 * @constructor
                 * @param {google.protobuf.IInt32Value=} [properties] Properties to set
                 */
                function Int32Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Int32Value value.
                 * @member {number} value
                 * @memberof google.protobuf.Int32Value
                 * @instance
                 */
                Int32Value.prototype.value = 0;
    
                /**
                 * Creates a new Int32Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.IInt32Value=} [properties] Properties to set
                 * @returns {google.protobuf.Int32Value} Int32Value instance
                 */
                Int32Value.create = function create(properties) {
                    return new Int32Value(properties);
                };
    
                /**
                 * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.Int32Value} message Int32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int32Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.Int32Value} message Int32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Int32Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Int32Value} Int32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int32Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.int32();
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
                 * Decodes an Int32Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Int32Value} Int32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int32Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Int32Value message.
                 * @function verify
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Int32Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };
    
                /**
                 * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Int32Value} Int32Value
                 */
                Int32Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Int32Value)
                        return object;
                    var message = new $root.google.protobuf.Int32Value();
                    if (object.value != null)
                        message.value = object.value | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.Int32Value} message Int32Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Int32Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this Int32Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Int32Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Int32Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Int32Value
                 * @function getTypeUrl
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Int32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Int32Value";
                };
    
                return Int32Value;
            })();
    
            protobuf.UInt32Value = (function() {
    
                /**
                 * Properties of a UInt32Value.
                 * @memberof google.protobuf
                 * @interface IUInt32Value
                 * @property {number|null} [value] UInt32Value value
                 */
    
                /**
                 * Constructs a new UInt32Value.
                 * @memberof google.protobuf
                 * @classdesc Represents a UInt32Value.
                 * @implements IUInt32Value
                 * @constructor
                 * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
                 */
                function UInt32Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UInt32Value value.
                 * @member {number} value
                 * @memberof google.protobuf.UInt32Value
                 * @instance
                 */
                UInt32Value.prototype.value = 0;
    
                /**
                 * Creates a new UInt32Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
                 * @returns {google.protobuf.UInt32Value} UInt32Value instance
                 */
                UInt32Value.create = function create(properties) {
                    return new UInt32Value(properties);
                };
    
                /**
                 * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.UInt32Value} message UInt32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt32Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.UInt32Value} message UInt32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UInt32Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt32Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.uint32();
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
                 * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UInt32Value message.
                 * @function verify
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UInt32Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };
    
                /**
                 * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 */
                UInt32Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UInt32Value)
                        return object;
                    var message = new $root.google.protobuf.UInt32Value();
                    if (object.value != null)
                        message.value = object.value >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.UInt32Value} message UInt32Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UInt32Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this UInt32Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UInt32Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UInt32Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for UInt32Value
                 * @function getTypeUrl
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UInt32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UInt32Value";
                };
    
                return UInt32Value;
            })();
    
            protobuf.BoolValue = (function() {
    
                /**
                 * Properties of a BoolValue.
                 * @memberof google.protobuf
                 * @interface IBoolValue
                 * @property {boolean|null} [value] BoolValue value
                 */
    
                /**
                 * Constructs a new BoolValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a BoolValue.
                 * @implements IBoolValue
                 * @constructor
                 * @param {google.protobuf.IBoolValue=} [properties] Properties to set
                 */
                function BoolValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BoolValue value.
                 * @member {boolean} value
                 * @memberof google.protobuf.BoolValue
                 * @instance
                 */
                BoolValue.prototype.value = false;
    
                /**
                 * Creates a new BoolValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.IBoolValue=} [properties] Properties to set
                 * @returns {google.protobuf.BoolValue} BoolValue instance
                 */
                BoolValue.create = function create(properties) {
                    return new BoolValue(properties);
                };
    
                /**
                 * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.BoolValue} message BoolValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BoolValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.BoolValue} message BoolValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BoolValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.BoolValue} BoolValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BoolValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.bool();
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
                 * Decodes a BoolValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.BoolValue} BoolValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BoolValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BoolValue message.
                 * @function verify
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BoolValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "boolean")
                            return "value: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.BoolValue} BoolValue
                 */
                BoolValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.BoolValue)
                        return object;
                    var message = new $root.google.protobuf.BoolValue();
                    if (object.value != null)
                        message.value = Boolean(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.BoolValue} message BoolValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BoolValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = false;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this BoolValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.BoolValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BoolValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for BoolValue
                 * @function getTypeUrl
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                BoolValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.BoolValue";
                };
    
                return BoolValue;
            })();
    
            protobuf.StringValue = (function() {
    
                /**
                 * Properties of a StringValue.
                 * @memberof google.protobuf
                 * @interface IStringValue
                 * @property {string|null} [value] StringValue value
                 */
    
                /**
                 * Constructs a new StringValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a StringValue.
                 * @implements IStringValue
                 * @constructor
                 * @param {google.protobuf.IStringValue=} [properties] Properties to set
                 */
                function StringValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * StringValue value.
                 * @member {string} value
                 * @memberof google.protobuf.StringValue
                 * @instance
                 */
                StringValue.prototype.value = "";
    
                /**
                 * Creates a new StringValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.IStringValue=} [properties] Properties to set
                 * @returns {google.protobuf.StringValue} StringValue instance
                 */
                StringValue.create = function create(properties) {
                    return new StringValue(properties);
                };
    
                /**
                 * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.StringValue} message StringValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StringValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.StringValue} message StringValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a StringValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.StringValue} StringValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StringValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.string();
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
                 * Decodes a StringValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.StringValue} StringValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StringValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a StringValue message.
                 * @function verify
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StringValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };
    
                /**
                 * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.StringValue} StringValue
                 */
                StringValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.StringValue)
                        return object;
                    var message = new $root.google.protobuf.StringValue();
                    if (object.value != null)
                        message.value = String(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a StringValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.StringValue} message StringValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StringValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = "";
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this StringValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.StringValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StringValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for StringValue
                 * @function getTypeUrl
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                StringValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.StringValue";
                };
    
                return StringValue;
            })();
    
            protobuf.BytesValue = (function() {
    
                /**
                 * Properties of a BytesValue.
                 * @memberof google.protobuf
                 * @interface IBytesValue
                 * @property {Uint8Array|null} [value] BytesValue value
                 */
    
                /**
                 * Constructs a new BytesValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a BytesValue.
                 * @implements IBytesValue
                 * @constructor
                 * @param {google.protobuf.IBytesValue=} [properties] Properties to set
                 */
                function BytesValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BytesValue value.
                 * @member {Uint8Array} value
                 * @memberof google.protobuf.BytesValue
                 * @instance
                 */
                BytesValue.prototype.value = $util.newBuffer([]);
    
                /**
                 * Creates a new BytesValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.IBytesValue=} [properties] Properties to set
                 * @returns {google.protobuf.BytesValue} BytesValue instance
                 */
                BytesValue.create = function create(properties) {
                    return new BytesValue(properties);
                };
    
                /**
                 * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.BytesValue} message BytesValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BytesValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.BytesValue} message BytesValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BytesValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.BytesValue} BytesValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BytesValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.bytes();
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
                 * Decodes a BytesValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.BytesValue} BytesValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BytesValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BytesValue message.
                 * @function verify
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BytesValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                            return "value: buffer expected";
                    return null;
                };
    
                /**
                 * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.BytesValue} BytesValue
                 */
                BytesValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.BytesValue)
                        return object;
                    var message = new $root.google.protobuf.BytesValue();
                    if (object.value != null)
                        if (typeof object.value === "string")
                            $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                        else if (object.value.length >= 0)
                            message.value = object.value;
                    return message;
                };
    
                /**
                 * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.BytesValue} message BytesValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BytesValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.value = "";
                        else {
                            object.value = [];
                            if (options.bytes !== Array)
                                object.value = $util.newBuffer(object.value);
                        }
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this BytesValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.BytesValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BytesValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for BytesValue
                 * @function getTypeUrl
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                BytesValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.BytesValue";
                };
    
                return BytesValue;
            })();
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {Long|null} [seconds] Timestamp seconds
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
                 * @member {Long} seconds
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
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
