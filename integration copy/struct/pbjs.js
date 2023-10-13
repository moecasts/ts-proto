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
    
    $root.StructMessage = (function() {
    
        /**
         * Properties of a StructMessage.
         * @exports IStructMessage
         * @interface IStructMessage
         * @property {google.protobuf.Struct|null} [value] StructMessage value
         */
    
        /**
         * Constructs a new StructMessage.
         * @exports StructMessage
         * @classdesc Represents a StructMessage.
         * @implements IStructMessage
         * @constructor
         * @param {IStructMessage=} [properties] Properties to set
         */
        function StructMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * StructMessage value.
         * @member {google.protobuf.Struct|null|undefined} value
         * @memberof StructMessage
         * @instance
         */
        StructMessage.prototype.value = null;
    
        /**
         * Creates a new StructMessage instance using the specified properties.
         * @function create
         * @memberof StructMessage
         * @static
         * @param {IStructMessage=} [properties] Properties to set
         * @returns {StructMessage} StructMessage instance
         */
        StructMessage.create = function create(properties) {
            return new StructMessage(properties);
        };
    
        /**
         * Encodes the specified StructMessage message. Does not implicitly {@link StructMessage.verify|verify} messages.
         * @function encode
         * @memberof StructMessage
         * @static
         * @param {StructMessage} message StructMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StructMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                $root.google.protobuf.Struct.encode(message.value, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified StructMessage message, length delimited. Does not implicitly {@link StructMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof StructMessage
         * @static
         * @param {StructMessage} message StructMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StructMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a StructMessage message from the specified reader or buffer.
         * @function decode
         * @memberof StructMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {StructMessage} StructMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StructMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StructMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = $root.google.protobuf.Struct.decode(reader, reader.uint32());
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
         * Decodes a StructMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof StructMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {StructMessage} StructMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StructMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a StructMessage message.
         * @function verify
         * @memberof StructMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StructMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                var error = $root.google.protobuf.Struct.verify(message.value);
                if (error)
                    return "value." + error;
            }
            return null;
        };
    
        /**
         * Creates a StructMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof StructMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {StructMessage} StructMessage
         */
        StructMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.StructMessage)
                return object;
            var message = new $root.StructMessage();
            if (object.value != null) {
                if (typeof object.value !== "object")
                    throw TypeError(".StructMessage.value: object expected");
                message.value = $root.google.protobuf.Struct.fromObject(object.value);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a StructMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof StructMessage
         * @static
         * @param {StructMessage} message StructMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StructMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = null;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = $root.google.protobuf.Struct.toObject(message.value, options);
            return object;
        };
    
        /**
         * Converts this StructMessage to JSON.
         * @function toJSON
         * @memberof StructMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StructMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for StructMessage
         * @function getTypeUrl
         * @memberof StructMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StructMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/StructMessage";
        };
    
        return StructMessage;
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
