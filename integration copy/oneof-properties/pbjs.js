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
    
    $root.oneof = (function() {
    
        /**
         * Namespace oneof.
         * @exports oneof
         * @namespace
         */
        var oneof = {};
    
        oneof.PleaseChoose = (function() {
    
            /**
             * Properties of a PleaseChoose.
             * @memberof oneof
             * @interface IPleaseChoose
             * @property {string|null} [name] PleaseChoose name
             * @property {number|null} [aNumber] PleaseChoose aNumber
             * @property {string|null} [aString] PleaseChoose aString
             * @property {oneof.PleaseChoose.Submessage|null} [aMessage] PleaseChoose aMessage
             * @property {boolean|null} [aBool] PleaseChoose aBool
             * @property {Uint8Array|null} [bunchaBytes] PleaseChoose bunchaBytes
             * @property {oneof.PleaseChoose.StateEnum|null} [anEnum] PleaseChoose anEnum
             * @property {number|null} [age] PleaseChoose age
             * @property {string|null} [either] PleaseChoose either
             * @property {string|null} [or] PleaseChoose or
             * @property {string|null} [thirdOption] PleaseChoose thirdOption
             */
    
            /**
             * Constructs a new PleaseChoose.
             * @memberof oneof
             * @classdesc Represents a PleaseChoose.
             * @implements IPleaseChoose
             * @constructor
             * @param {oneof.IPleaseChoose=} [properties] Properties to set
             */
            function PleaseChoose(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PleaseChoose name.
             * @member {string} name
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.name = "";
    
            /**
             * PleaseChoose aNumber.
             * @member {number|null|undefined} aNumber
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.aNumber = null;
    
            /**
             * PleaseChoose aString.
             * @member {string|null|undefined} aString
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.aString = null;
    
            /**
             * PleaseChoose aMessage.
             * @member {oneof.PleaseChoose.Submessage|null|undefined} aMessage
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.aMessage = null;
    
            /**
             * PleaseChoose aBool.
             * @member {boolean|null|undefined} aBool
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.aBool = null;
    
            /**
             * PleaseChoose bunchaBytes.
             * @member {Uint8Array|null|undefined} bunchaBytes
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.bunchaBytes = null;
    
            /**
             * PleaseChoose anEnum.
             * @member {oneof.PleaseChoose.StateEnum|null|undefined} anEnum
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.anEnum = null;
    
            /**
             * PleaseChoose age.
             * @member {number} age
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.age = 0;
    
            /**
             * PleaseChoose either.
             * @member {string|null|undefined} either
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.either = null;
    
            /**
             * PleaseChoose or.
             * @member {string|null|undefined} or
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.or = null;
    
            /**
             * PleaseChoose thirdOption.
             * @member {string|null|undefined} thirdOption
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.thirdOption = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * PleaseChoose choice.
             * @member {"aNumber"|"aString"|"aMessage"|"aBool"|"bunchaBytes"|"anEnum"|undefined} choice
             * @memberof oneof.PleaseChoose
             * @instance
             */
            Object.defineProperty(PleaseChoose.prototype, "choice", {
                get: $util.oneOfGetter($oneOfFields = ["aNumber", "aString", "aMessage", "aBool", "bunchaBytes", "anEnum"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * PleaseChoose eitherOr.
             * @member {"either"|"or"|"thirdOption"|undefined} eitherOr
             * @memberof oneof.PleaseChoose
             * @instance
             */
            Object.defineProperty(PleaseChoose.prototype, "eitherOr", {
                get: $util.oneOfGetter($oneOfFields = ["either", "or", "thirdOption"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new PleaseChoose instance using the specified properties.
             * @function create
             * @memberof oneof.PleaseChoose
             * @static
             * @param {oneof.IPleaseChoose=} [properties] Properties to set
             * @returns {oneof.PleaseChoose} PleaseChoose instance
             */
            PleaseChoose.create = function create(properties) {
                return new PleaseChoose(properties);
            };
    
            /**
             * Encodes the specified PleaseChoose message. Does not implicitly {@link oneof.PleaseChoose.verify|verify} messages.
             * @function encode
             * @memberof oneof.PleaseChoose
             * @static
             * @param {oneof.PleaseChoose} message PleaseChoose message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PleaseChoose.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.aNumber != null && Object.hasOwnProperty.call(message, "aNumber"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.aNumber);
                if (message.aString != null && Object.hasOwnProperty.call(message, "aString"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.aString);
                if (message.aMessage != null && Object.hasOwnProperty.call(message, "aMessage"))
                    $root.oneof.PleaseChoose.Submessage.encode(message.aMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.age);
                if (message.aBool != null && Object.hasOwnProperty.call(message, "aBool"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.aBool);
                if (message.either != null && Object.hasOwnProperty.call(message, "either"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.either);
                if (message.or != null && Object.hasOwnProperty.call(message, "or"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.or);
                if (message.thirdOption != null && Object.hasOwnProperty.call(message, "thirdOption"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.thirdOption);
                if (message.bunchaBytes != null && Object.hasOwnProperty.call(message, "bunchaBytes"))
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.bunchaBytes);
                if (message.anEnum != null && Object.hasOwnProperty.call(message, "anEnum"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.anEnum);
                return writer;
            };
    
            /**
             * Encodes the specified PleaseChoose message, length delimited. Does not implicitly {@link oneof.PleaseChoose.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oneof.PleaseChoose
             * @static
             * @param {oneof.PleaseChoose} message PleaseChoose message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PleaseChoose.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PleaseChoose message from the specified reader or buffer.
             * @function decode
             * @memberof oneof.PleaseChoose
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oneof.PleaseChoose} PleaseChoose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PleaseChoose.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oneof.PleaseChoose();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.aNumber = reader.double();
                            break;
                        }
                    case 3: {
                            message.aString = reader.string();
                            break;
                        }
                    case 4: {
                            message.aMessage = $root.oneof.PleaseChoose.Submessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.aBool = reader.bool();
                            break;
                        }
                    case 10: {
                            message.bunchaBytes = reader.bytes();
                            break;
                        }
                    case 11: {
                            message.anEnum = reader.int32();
                            break;
                        }
                    case 5: {
                            message.age = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.either = reader.string();
                            break;
                        }
                    case 8: {
                            message.or = reader.string();
                            break;
                        }
                    case 9: {
                            message.thirdOption = reader.string();
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
             * Decodes a PleaseChoose message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oneof.PleaseChoose
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oneof.PleaseChoose} PleaseChoose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PleaseChoose.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PleaseChoose message.
             * @function verify
             * @memberof oneof.PleaseChoose
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PleaseChoose.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.aNumber != null && message.hasOwnProperty("aNumber")) {
                    properties.choice = 1;
                    if (typeof message.aNumber !== "number")
                        return "aNumber: number expected";
                }
                if (message.aString != null && message.hasOwnProperty("aString")) {
                    if (properties.choice === 1)
                        return "choice: multiple values";
                    properties.choice = 1;
                    if (!$util.isString(message.aString))
                        return "aString: string expected";
                }
                if (message.aMessage != null && message.hasOwnProperty("aMessage")) {
                    if (properties.choice === 1)
                        return "choice: multiple values";
                    properties.choice = 1;
                    {
                        var error = $root.oneof.PleaseChoose.Submessage.verify(message.aMessage);
                        if (error)
                            return "aMessage." + error;
                    }
                }
                if (message.aBool != null && message.hasOwnProperty("aBool")) {
                    if (properties.choice === 1)
                        return "choice: multiple values";
                    properties.choice = 1;
                    if (typeof message.aBool !== "boolean")
                        return "aBool: boolean expected";
                }
                if (message.bunchaBytes != null && message.hasOwnProperty("bunchaBytes")) {
                    if (properties.choice === 1)
                        return "choice: multiple values";
                    properties.choice = 1;
                    if (!(message.bunchaBytes && typeof message.bunchaBytes.length === "number" || $util.isString(message.bunchaBytes)))
                        return "bunchaBytes: buffer expected";
                }
                if (message.anEnum != null && message.hasOwnProperty("anEnum")) {
                    if (properties.choice === 1)
                        return "choice: multiple values";
                    properties.choice = 1;
                    switch (message.anEnum) {
                    default:
                        return "anEnum: enum value expected";
                    case 0:
                    case 2:
                    case 3:
                        break;
                    }
                }
                if (message.age != null && message.hasOwnProperty("age"))
                    if (!$util.isInteger(message.age))
                        return "age: integer expected";
                if (message.either != null && message.hasOwnProperty("either")) {
                    properties.eitherOr = 1;
                    if (!$util.isString(message.either))
                        return "either: string expected";
                }
                if (message.or != null && message.hasOwnProperty("or")) {
                    if (properties.eitherOr === 1)
                        return "eitherOr: multiple values";
                    properties.eitherOr = 1;
                    if (!$util.isString(message.or))
                        return "or: string expected";
                }
                if (message.thirdOption != null && message.hasOwnProperty("thirdOption")) {
                    if (properties.eitherOr === 1)
                        return "eitherOr: multiple values";
                    properties.eitherOr = 1;
                    if (!$util.isString(message.thirdOption))
                        return "thirdOption: string expected";
                }
                return null;
            };
    
            /**
             * Creates a PleaseChoose message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oneof.PleaseChoose
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oneof.PleaseChoose} PleaseChoose
             */
            PleaseChoose.fromObject = function fromObject(object) {
                if (object instanceof $root.oneof.PleaseChoose)
                    return object;
                var message = new $root.oneof.PleaseChoose();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.aNumber != null)
                    message.aNumber = Number(object.aNumber);
                if (object.aString != null)
                    message.aString = String(object.aString);
                if (object.aMessage != null) {
                    if (typeof object.aMessage !== "object")
                        throw TypeError(".oneof.PleaseChoose.aMessage: object expected");
                    message.aMessage = $root.oneof.PleaseChoose.Submessage.fromObject(object.aMessage);
                }
                if (object.aBool != null)
                    message.aBool = Boolean(object.aBool);
                if (object.bunchaBytes != null)
                    if (typeof object.bunchaBytes === "string")
                        $util.base64.decode(object.bunchaBytes, message.bunchaBytes = $util.newBuffer($util.base64.length(object.bunchaBytes)), 0);
                    else if (object.bunchaBytes.length >= 0)
                        message.bunchaBytes = object.bunchaBytes;
                switch (object.anEnum) {
                default:
                    if (typeof object.anEnum === "number") {
                        message.anEnum = object.anEnum;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.anEnum = 0;
                    break;
                case "ON":
                case 2:
                    message.anEnum = 2;
                    break;
                case "OFF":
                case 3:
                    message.anEnum = 3;
                    break;
                }
                if (object.age != null)
                    message.age = object.age >>> 0;
                if (object.either != null)
                    message.either = String(object.either);
                if (object.or != null)
                    message.or = String(object.or);
                if (object.thirdOption != null)
                    message.thirdOption = String(object.thirdOption);
                return message;
            };
    
            /**
             * Creates a plain object from a PleaseChoose message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oneof.PleaseChoose
             * @static
             * @param {oneof.PleaseChoose} message PleaseChoose
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PleaseChoose.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.age = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.aNumber != null && message.hasOwnProperty("aNumber")) {
                    object.aNumber = options.json && !isFinite(message.aNumber) ? String(message.aNumber) : message.aNumber;
                    if (options.oneofs)
                        object.choice = "aNumber";
                }
                if (message.aString != null && message.hasOwnProperty("aString")) {
                    object.aString = message.aString;
                    if (options.oneofs)
                        object.choice = "aString";
                }
                if (message.aMessage != null && message.hasOwnProperty("aMessage")) {
                    object.aMessage = $root.oneof.PleaseChoose.Submessage.toObject(message.aMessage, options);
                    if (options.oneofs)
                        object.choice = "aMessage";
                }
                if (message.age != null && message.hasOwnProperty("age"))
                    object.age = message.age;
                if (message.aBool != null && message.hasOwnProperty("aBool")) {
                    object.aBool = message.aBool;
                    if (options.oneofs)
                        object.choice = "aBool";
                }
                if (message.either != null && message.hasOwnProperty("either")) {
                    object.either = message.either;
                    if (options.oneofs)
                        object.eitherOr = "either";
                }
                if (message.or != null && message.hasOwnProperty("or")) {
                    object.or = message.or;
                    if (options.oneofs)
                        object.eitherOr = "or";
                }
                if (message.thirdOption != null && message.hasOwnProperty("thirdOption")) {
                    object.thirdOption = message.thirdOption;
                    if (options.oneofs)
                        object.eitherOr = "thirdOption";
                }
                if (message.bunchaBytes != null && message.hasOwnProperty("bunchaBytes")) {
                    object.bunchaBytes = options.bytes === String ? $util.base64.encode(message.bunchaBytes, 0, message.bunchaBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.bunchaBytes) : message.bunchaBytes;
                    if (options.oneofs)
                        object.choice = "bunchaBytes";
                }
                if (message.anEnum != null && message.hasOwnProperty("anEnum")) {
                    object.anEnum = options.enums === String ? $root.oneof.PleaseChoose.StateEnum[message.anEnum] === undefined ? message.anEnum : $root.oneof.PleaseChoose.StateEnum[message.anEnum] : message.anEnum;
                    if (options.oneofs)
                        object.choice = "anEnum";
                }
                return object;
            };
    
            /**
             * Converts this PleaseChoose to JSON.
             * @function toJSON
             * @memberof oneof.PleaseChoose
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PleaseChoose.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for PleaseChoose
             * @function getTypeUrl
             * @memberof oneof.PleaseChoose
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PleaseChoose.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/oneof.PleaseChoose";
            };
    
            PleaseChoose.Submessage = (function() {
    
                /**
                 * Properties of a Submessage.
                 * @memberof oneof.PleaseChoose
                 * @interface ISubmessage
                 * @property {string|null} [name] Submessage name
                 */
    
                /**
                 * Constructs a new Submessage.
                 * @memberof oneof.PleaseChoose
                 * @classdesc Represents a Submessage.
                 * @implements ISubmessage
                 * @constructor
                 * @param {oneof.PleaseChoose.ISubmessage=} [properties] Properties to set
                 */
                function Submessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Submessage name.
                 * @member {string} name
                 * @memberof oneof.PleaseChoose.Submessage
                 * @instance
                 */
                Submessage.prototype.name = "";
    
                /**
                 * Creates a new Submessage instance using the specified properties.
                 * @function create
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {oneof.PleaseChoose.ISubmessage=} [properties] Properties to set
                 * @returns {oneof.PleaseChoose.Submessage} Submessage instance
                 */
                Submessage.create = function create(properties) {
                    return new Submessage(properties);
                };
    
                /**
                 * Encodes the specified Submessage message. Does not implicitly {@link oneof.PleaseChoose.Submessage.verify|verify} messages.
                 * @function encode
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {oneof.PleaseChoose.Submessage} message Submessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Submessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };
    
                /**
                 * Encodes the specified Submessage message, length delimited. Does not implicitly {@link oneof.PleaseChoose.Submessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {oneof.PleaseChoose.Submessage} message Submessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Submessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Submessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {oneof.PleaseChoose.Submessage} Submessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Submessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oneof.PleaseChoose.Submessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
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
                 * Decodes a Submessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {oneof.PleaseChoose.Submessage} Submessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Submessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Submessage message.
                 * @function verify
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Submessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };
    
                /**
                 * Creates a Submessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {oneof.PleaseChoose.Submessage} Submessage
                 */
                Submessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.oneof.PleaseChoose.Submessage)
                        return object;
                    var message = new $root.oneof.PleaseChoose.Submessage();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Submessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {oneof.PleaseChoose.Submessage} message Submessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Submessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };
    
                /**
                 * Converts this Submessage to JSON.
                 * @function toJSON
                 * @memberof oneof.PleaseChoose.Submessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Submessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Submessage
                 * @function getTypeUrl
                 * @memberof oneof.PleaseChoose.Submessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Submessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/oneof.PleaseChoose.Submessage";
                };
    
                return Submessage;
            })();
    
            /**
             * StateEnum enum.
             * @name oneof.PleaseChoose.StateEnum
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} ON=2 ON value
             * @property {number} OFF=3 OFF value
             */
            PleaseChoose.StateEnum = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[2] = "ON"] = 2;
                values[valuesById[3] = "OFF"] = 3;
                return values;
            })();
    
            return PleaseChoose;
        })();
    
        return oneof;
    })();

    return $root;
});
