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
             * @property {Uint8Array|null} [signature] PleaseChoose signature
             * @property {google.protobuf.Value|null} [value] PleaseChoose value
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
    
            /**
             * PleaseChoose signature.
             * @member {Uint8Array} signature
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.signature = $util.newBuffer([]);
    
            /**
             * PleaseChoose value.
             * @member {google.protobuf.Value|null|undefined} value
             * @memberof oneof.PleaseChoose
             * @instance
             */
            PleaseChoose.prototype.value = null;
    
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
                if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                    writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.signature);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    $root.google.protobuf.Value.encode(message.value, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
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
                    case 12: {
                            message.signature = reader.bytes();
                            break;
                        }
                    case 13: {
                            message.value = $root.google.protobuf.Value.decode(reader, reader.uint32());
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
                if (message.signature != null && message.hasOwnProperty("signature"))
                    if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                        return "signature: buffer expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    var error = $root.google.protobuf.Value.verify(message.value);
                    if (error)
                        return "value." + error;
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
                if (object.signature != null)
                    if (typeof object.signature === "string")
                        $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                    else if (object.signature.length >= 0)
                        message.signature = object.signature;
                if (object.value != null) {
                    if (typeof object.value !== "object")
                        throw TypeError(".oneof.PleaseChoose.value: object expected");
                    message.value = $root.google.protobuf.Value.fromObject(object.value);
                }
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
                    if (options.bytes === String)
                        object.signature = "";
                    else {
                        object.signature = [];
                        if (options.bytes !== Array)
                            object.signature = $util.newBuffer(object.signature);
                    }
                    object.value = null;
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
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = $root.google.protobuf.Value.toObject(message.value, options);
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
    
        oneof.SimpleButOptional = (function() {
    
            /**
             * Properties of a SimpleButOptional.
             * @memberof oneof
             * @interface ISimpleButOptional
             * @property {string|null} [name] SimpleButOptional name
             * @property {number|null} [age] SimpleButOptional age
             */
    
            /**
             * Constructs a new SimpleButOptional.
             * @memberof oneof
             * @classdesc For testing proto3's field presence feature.
             * @implements ISimpleButOptional
             * @constructor
             * @param {oneof.ISimpleButOptional=} [properties] Properties to set
             */
            function SimpleButOptional(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SimpleButOptional name.
             * @member {string|null|undefined} name
             * @memberof oneof.SimpleButOptional
             * @instance
             */
            SimpleButOptional.prototype.name = null;
    
            /**
             * SimpleButOptional age.
             * @member {number|null|undefined} age
             * @memberof oneof.SimpleButOptional
             * @instance
             */
            SimpleButOptional.prototype.age = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * SimpleButOptional _name.
             * @member {"name"|undefined} _name
             * @memberof oneof.SimpleButOptional
             * @instance
             */
            Object.defineProperty(SimpleButOptional.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * SimpleButOptional _age.
             * @member {"age"|undefined} _age
             * @memberof oneof.SimpleButOptional
             * @instance
             */
            Object.defineProperty(SimpleButOptional.prototype, "_age", {
                get: $util.oneOfGetter($oneOfFields = ["age"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new SimpleButOptional instance using the specified properties.
             * @function create
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {oneof.ISimpleButOptional=} [properties] Properties to set
             * @returns {oneof.SimpleButOptional} SimpleButOptional instance
             */
            SimpleButOptional.create = function create(properties) {
                return new SimpleButOptional(properties);
            };
    
            /**
             * Encodes the specified SimpleButOptional message. Does not implicitly {@link oneof.SimpleButOptional.verify|verify} messages.
             * @function encode
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {oneof.SimpleButOptional} message SimpleButOptional message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimpleButOptional.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.age);
                return writer;
            };
    
            /**
             * Encodes the specified SimpleButOptional message, length delimited. Does not implicitly {@link oneof.SimpleButOptional.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {oneof.SimpleButOptional} message SimpleButOptional message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimpleButOptional.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SimpleButOptional message from the specified reader or buffer.
             * @function decode
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oneof.SimpleButOptional} SimpleButOptional
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimpleButOptional.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oneof.SimpleButOptional();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.age = reader.int32();
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
             * Decodes a SimpleButOptional message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oneof.SimpleButOptional} SimpleButOptional
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimpleButOptional.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SimpleButOptional message.
             * @function verify
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SimpleButOptional.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.name != null && message.hasOwnProperty("name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.age != null && message.hasOwnProperty("age")) {
                    properties._age = 1;
                    if (!$util.isInteger(message.age))
                        return "age: integer expected";
                }
                return null;
            };
    
            /**
             * Creates a SimpleButOptional message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oneof.SimpleButOptional} SimpleButOptional
             */
            SimpleButOptional.fromObject = function fromObject(object) {
                if (object instanceof $root.oneof.SimpleButOptional)
                    return object;
                var message = new $root.oneof.SimpleButOptional();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.age != null)
                    message.age = object.age | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a SimpleButOptional message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {oneof.SimpleButOptional} message SimpleButOptional
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SimpleButOptional.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.name != null && message.hasOwnProperty("name")) {
                    object.name = message.name;
                    if (options.oneofs)
                        object._name = "name";
                }
                if (message.age != null && message.hasOwnProperty("age")) {
                    object.age = message.age;
                    if (options.oneofs)
                        object._age = "age";
                }
                return object;
            };
    
            /**
             * Converts this SimpleButOptional to JSON.
             * @function toJSON
             * @memberof oneof.SimpleButOptional
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SimpleButOptional.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for SimpleButOptional
             * @function getTypeUrl
             * @memberof oneof.SimpleButOptional
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SimpleButOptional.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/oneof.SimpleButOptional";
            };
    
            return SimpleButOptional;
        })();
    
        return oneof;
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
