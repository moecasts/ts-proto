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
    
    $root.hero = (function() {
    
        /**
         * Namespace hero.
         * @exports hero
         * @namespace
         */
        var hero = {};
    
        hero.HeroService = (function() {
    
            /**
             * Constructs a new HeroService service.
             * @memberof hero
             * @classdesc Represents a HeroService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function HeroService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (HeroService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = HeroService;
    
            /**
             * Creates new HeroService service using the specified rpc implementation.
             * @function create
             * @memberof hero.HeroService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {HeroService} RPC service. Useful where requests and/or responses are streamed.
             */
            HeroService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link hero.HeroService#addOneHero}.
             * @memberof hero.HeroService
             * @typedef AddOneHeroCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {google.protobuf.Empty} [response] Empty
             */
    
            /**
             * Calls AddOneHero.
             * @function addOneHero
             * @memberof hero.HeroService
             * @instance
             * @param {hero.Hero} request Hero message or plain object
             * @param {hero.HeroService.AddOneHeroCallback} callback Node-style callback called with the error, if any, and Empty
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(HeroService.prototype.addOneHero = function addOneHero(request, callback) {
                return this.rpcCall(addOneHero, $root.hero.Hero, $root.google.protobuf.Empty, request, callback);
            }, "name", { value: "AddOneHero" });
    
            /**
             * Calls AddOneHero.
             * @function addOneHero
             * @memberof hero.HeroService
             * @instance
             * @param {hero.Hero} request Hero message or plain object
             * @returns {Promise<google.protobuf.Empty>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link hero.HeroService#findOneHero}.
             * @memberof hero.HeroService
             * @typedef FindOneHeroCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {hero.Hero} [response] Hero
             */
    
            /**
             * Calls FindOneHero.
             * @function findOneHero
             * @memberof hero.HeroService
             * @instance
             * @param {hero.HeroById} request HeroById message or plain object
             * @param {hero.HeroService.FindOneHeroCallback} callback Node-style callback called with the error, if any, and Hero
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(HeroService.prototype.findOneHero = function findOneHero(request, callback) {
                return this.rpcCall(findOneHero, $root.hero.HeroById, $root.hero.Hero, request, callback);
            }, "name", { value: "FindOneHero" });
    
            /**
             * Calls FindOneHero.
             * @function findOneHero
             * @memberof hero.HeroService
             * @instance
             * @param {hero.HeroById} request HeroById message or plain object
             * @returns {Promise<hero.Hero>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link hero.HeroService#findOneVillain}.
             * @memberof hero.HeroService
             * @typedef FindOneVillainCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {hero.Villain} [response] Villain
             */
    
            /**
             * Calls FindOneVillain.
             * @function findOneVillain
             * @memberof hero.HeroService
             * @instance
             * @param {hero.VillainById} request VillainById message or plain object
             * @param {hero.HeroService.FindOneVillainCallback} callback Node-style callback called with the error, if any, and Villain
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(HeroService.prototype.findOneVillain = function findOneVillain(request, callback) {
                return this.rpcCall(findOneVillain, $root.hero.VillainById, $root.hero.Villain, request, callback);
            }, "name", { value: "FindOneVillain" });
    
            /**
             * Calls FindOneVillain.
             * @function findOneVillain
             * @memberof hero.HeroService
             * @instance
             * @param {hero.VillainById} request VillainById message or plain object
             * @returns {Promise<hero.Villain>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link hero.HeroService#findManyVillain}.
             * @memberof hero.HeroService
             * @typedef FindManyVillainCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {hero.Villain} [response] Villain
             */
    
            /**
             * Calls FindManyVillain.
             * @function findManyVillain
             * @memberof hero.HeroService
             * @instance
             * @param {hero.VillainById} request VillainById message or plain object
             * @param {hero.HeroService.FindManyVillainCallback} callback Node-style callback called with the error, if any, and Villain
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(HeroService.prototype.findManyVillain = function findManyVillain(request, callback) {
                return this.rpcCall(findManyVillain, $root.hero.VillainById, $root.hero.Villain, request, callback);
            }, "name", { value: "FindManyVillain" });
    
            /**
             * Calls FindManyVillain.
             * @function findManyVillain
             * @memberof hero.HeroService
             * @instance
             * @param {hero.VillainById} request VillainById message or plain object
             * @returns {Promise<hero.Villain>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link hero.HeroService#findManyVillainStreamIn}.
             * @memberof hero.HeroService
             * @typedef FindManyVillainStreamInCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {hero.Villain} [response] Villain
             */
    
            /**
             * Calls FindManyVillainStreamIn.
             * @function findManyVillainStreamIn
             * @memberof hero.HeroService
             * @instance
             * @param {hero.VillainById} request VillainById message or plain object
             * @param {hero.HeroService.FindManyVillainStreamInCallback} callback Node-style callback called with the error, if any, and Villain
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(HeroService.prototype.findManyVillainStreamIn = function findManyVillainStreamIn(request, callback) {
                return this.rpcCall(findManyVillainStreamIn, $root.hero.VillainById, $root.hero.Villain, request, callback);
            }, "name", { value: "FindManyVillainStreamIn" });
    
            /**
             * Calls FindManyVillainStreamIn.
             * @function findManyVillainStreamIn
             * @memberof hero.HeroService
             * @instance
             * @param {hero.VillainById} request VillainById message or plain object
             * @returns {Promise<hero.Villain>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link hero.HeroService#findManyVillainStreamOut}.
             * @memberof hero.HeroService
             * @typedef FindManyVillainStreamOutCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {hero.Villain} [response] Villain
             */
    
            /**
             * Calls FindManyVillainStreamOut.
             * @function findManyVillainStreamOut
             * @memberof hero.HeroService
             * @instance
             * @param {hero.VillainById} request VillainById message or plain object
             * @param {hero.HeroService.FindManyVillainStreamOutCallback} callback Node-style callback called with the error, if any, and Villain
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(HeroService.prototype.findManyVillainStreamOut = function findManyVillainStreamOut(request, callback) {
                return this.rpcCall(findManyVillainStreamOut, $root.hero.VillainById, $root.hero.Villain, request, callback);
            }, "name", { value: "FindManyVillainStreamOut" });
    
            /**
             * Calls FindManyVillainStreamOut.
             * @function findManyVillainStreamOut
             * @memberof hero.HeroService
             * @instance
             * @param {hero.VillainById} request VillainById message or plain object
             * @returns {Promise<hero.Villain>} Promise
             * @variation 2
             */
    
            return HeroService;
        })();
    
        hero.HeroById = (function() {
    
            /**
             * Properties of a HeroById.
             * @memberof hero
             * @interface IHeroById
             * @property {number|null} [id] HeroById id
             */
    
            /**
             * Constructs a new HeroById.
             * @memberof hero
             * @classdesc Represents a HeroById.
             * @implements IHeroById
             * @constructor
             * @param {hero.IHeroById=} [properties] Properties to set
             */
            function HeroById(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HeroById id.
             * @member {number} id
             * @memberof hero.HeroById
             * @instance
             */
            HeroById.prototype.id = 0;
    
            /**
             * Creates a new HeroById instance using the specified properties.
             * @function create
             * @memberof hero.HeroById
             * @static
             * @param {hero.IHeroById=} [properties] Properties to set
             * @returns {hero.HeroById} HeroById instance
             */
            HeroById.create = function create(properties) {
                return new HeroById(properties);
            };
    
            /**
             * Encodes the specified HeroById message. Does not implicitly {@link hero.HeroById.verify|verify} messages.
             * @function encode
             * @memberof hero.HeroById
             * @static
             * @param {hero.HeroById} message HeroById message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeroById.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                return writer;
            };
    
            /**
             * Encodes the specified HeroById message, length delimited. Does not implicitly {@link hero.HeroById.verify|verify} messages.
             * @function encodeDelimited
             * @memberof hero.HeroById
             * @static
             * @param {hero.HeroById} message HeroById message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeroById.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HeroById message from the specified reader or buffer.
             * @function decode
             * @memberof hero.HeroById
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {hero.HeroById} HeroById
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeroById.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hero.HeroById();
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
             * Decodes a HeroById message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof hero.HeroById
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {hero.HeroById} HeroById
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeroById.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HeroById message.
             * @function verify
             * @memberof hero.HeroById
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HeroById.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };
    
            /**
             * Creates a HeroById message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof hero.HeroById
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {hero.HeroById} HeroById
             */
            HeroById.fromObject = function fromObject(object) {
                if (object instanceof $root.hero.HeroById)
                    return object;
                var message = new $root.hero.HeroById();
                if (object.id != null)
                    message.id = object.id | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a HeroById message. Also converts values to other types if specified.
             * @function toObject
             * @memberof hero.HeroById
             * @static
             * @param {hero.HeroById} message HeroById
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HeroById.toObject = function toObject(message, options) {
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
             * Converts this HeroById to JSON.
             * @function toJSON
             * @memberof hero.HeroById
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HeroById.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for HeroById
             * @function getTypeUrl
             * @memberof hero.HeroById
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HeroById.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/hero.HeroById";
            };
    
            return HeroById;
        })();
    
        hero.VillainById = (function() {
    
            /**
             * Properties of a VillainById.
             * @memberof hero
             * @interface IVillainById
             * @property {number|null} [id] VillainById id
             */
    
            /**
             * Constructs a new VillainById.
             * @memberof hero
             * @classdesc Represents a VillainById.
             * @implements IVillainById
             * @constructor
             * @param {hero.IVillainById=} [properties] Properties to set
             */
            function VillainById(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * VillainById id.
             * @member {number} id
             * @memberof hero.VillainById
             * @instance
             */
            VillainById.prototype.id = 0;
    
            /**
             * Creates a new VillainById instance using the specified properties.
             * @function create
             * @memberof hero.VillainById
             * @static
             * @param {hero.IVillainById=} [properties] Properties to set
             * @returns {hero.VillainById} VillainById instance
             */
            VillainById.create = function create(properties) {
                return new VillainById(properties);
            };
    
            /**
             * Encodes the specified VillainById message. Does not implicitly {@link hero.VillainById.verify|verify} messages.
             * @function encode
             * @memberof hero.VillainById
             * @static
             * @param {hero.VillainById} message VillainById message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VillainById.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                return writer;
            };
    
            /**
             * Encodes the specified VillainById message, length delimited. Does not implicitly {@link hero.VillainById.verify|verify} messages.
             * @function encodeDelimited
             * @memberof hero.VillainById
             * @static
             * @param {hero.VillainById} message VillainById message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VillainById.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a VillainById message from the specified reader or buffer.
             * @function decode
             * @memberof hero.VillainById
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {hero.VillainById} VillainById
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VillainById.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hero.VillainById();
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
             * Decodes a VillainById message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof hero.VillainById
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {hero.VillainById} VillainById
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VillainById.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a VillainById message.
             * @function verify
             * @memberof hero.VillainById
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VillainById.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };
    
            /**
             * Creates a VillainById message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof hero.VillainById
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {hero.VillainById} VillainById
             */
            VillainById.fromObject = function fromObject(object) {
                if (object instanceof $root.hero.VillainById)
                    return object;
                var message = new $root.hero.VillainById();
                if (object.id != null)
                    message.id = object.id | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a VillainById message. Also converts values to other types if specified.
             * @function toObject
             * @memberof hero.VillainById
             * @static
             * @param {hero.VillainById} message VillainById
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VillainById.toObject = function toObject(message, options) {
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
             * Converts this VillainById to JSON.
             * @function toJSON
             * @memberof hero.VillainById
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VillainById.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for VillainById
             * @function getTypeUrl
             * @memberof hero.VillainById
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VillainById.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/hero.VillainById";
            };
    
            return VillainById;
        })();
    
        hero.Hero = (function() {
    
            /**
             * Properties of a Hero.
             * @memberof hero
             * @interface IHero
             * @property {number|null} [id] Hero id
             * @property {string|null} [name] Hero name
             * @property {google.protobuf.Timestamp|null} [birthDate] Hero birthDate
             * @property {google.protobuf.Struct|null} [externalData] Hero externalData
             */
    
            /**
             * Constructs a new Hero.
             * @memberof hero
             * @classdesc Represents a Hero.
             * @implements IHero
             * @constructor
             * @param {hero.IHero=} [properties] Properties to set
             */
            function Hero(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Hero id.
             * @member {number} id
             * @memberof hero.Hero
             * @instance
             */
            Hero.prototype.id = 0;
    
            /**
             * Hero name.
             * @member {string} name
             * @memberof hero.Hero
             * @instance
             */
            Hero.prototype.name = "";
    
            /**
             * Hero birthDate.
             * @member {google.protobuf.Timestamp|null|undefined} birthDate
             * @memberof hero.Hero
             * @instance
             */
            Hero.prototype.birthDate = null;
    
            /**
             * Hero externalData.
             * @member {google.protobuf.Struct|null|undefined} externalData
             * @memberof hero.Hero
             * @instance
             */
            Hero.prototype.externalData = null;
    
            /**
             * Creates a new Hero instance using the specified properties.
             * @function create
             * @memberof hero.Hero
             * @static
             * @param {hero.IHero=} [properties] Properties to set
             * @returns {hero.Hero} Hero instance
             */
            Hero.create = function create(properties) {
                return new Hero(properties);
            };
    
            /**
             * Encodes the specified Hero message. Does not implicitly {@link hero.Hero.verify|verify} messages.
             * @function encode
             * @memberof hero.Hero
             * @static
             * @param {hero.Hero} message Hero message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hero.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.birthDate != null && Object.hasOwnProperty.call(message, "birthDate"))
                    $root.google.protobuf.Timestamp.encode(message.birthDate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.externalData != null && Object.hasOwnProperty.call(message, "externalData"))
                    $root.google.protobuf.Struct.encode(message.externalData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Hero message, length delimited. Does not implicitly {@link hero.Hero.verify|verify} messages.
             * @function encodeDelimited
             * @memberof hero.Hero
             * @static
             * @param {hero.Hero} message Hero message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hero.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Hero message from the specified reader or buffer.
             * @function decode
             * @memberof hero.Hero
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {hero.Hero} Hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hero.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hero.Hero();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.birthDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.externalData = $root.google.protobuf.Struct.decode(reader, reader.uint32());
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
             * Decodes a Hero message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof hero.Hero
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {hero.Hero} Hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hero.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Hero message.
             * @function verify
             * @memberof hero.Hero
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Hero.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.birthDate != null && message.hasOwnProperty("birthDate")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.birthDate);
                    if (error)
                        return "birthDate." + error;
                }
                if (message.externalData != null && message.hasOwnProperty("externalData")) {
                    var error = $root.google.protobuf.Struct.verify(message.externalData);
                    if (error)
                        return "externalData." + error;
                }
                return null;
            };
    
            /**
             * Creates a Hero message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof hero.Hero
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {hero.Hero} Hero
             */
            Hero.fromObject = function fromObject(object) {
                if (object instanceof $root.hero.Hero)
                    return object;
                var message = new $root.hero.Hero();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.birthDate != null) {
                    if (typeof object.birthDate !== "object")
                        throw TypeError(".hero.Hero.birthDate: object expected");
                    message.birthDate = $root.google.protobuf.Timestamp.fromObject(object.birthDate);
                }
                if (object.externalData != null) {
                    if (typeof object.externalData !== "object")
                        throw TypeError(".hero.Hero.externalData: object expected");
                    message.externalData = $root.google.protobuf.Struct.fromObject(object.externalData);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Hero message. Also converts values to other types if specified.
             * @function toObject
             * @memberof hero.Hero
             * @static
             * @param {hero.Hero} message Hero
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Hero.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                    object.birthDate = null;
                    object.externalData = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.birthDate != null && message.hasOwnProperty("birthDate"))
                    object.birthDate = $root.google.protobuf.Timestamp.toObject(message.birthDate, options);
                if (message.externalData != null && message.hasOwnProperty("externalData"))
                    object.externalData = $root.google.protobuf.Struct.toObject(message.externalData, options);
                return object;
            };
    
            /**
             * Converts this Hero to JSON.
             * @function toJSON
             * @memberof hero.Hero
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Hero.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Hero
             * @function getTypeUrl
             * @memberof hero.Hero
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Hero.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/hero.Hero";
            };
    
            return Hero;
        })();
    
        hero.Villain = (function() {
    
            /**
             * Properties of a Villain.
             * @memberof hero
             * @interface IVillain
             * @property {number|null} [id] Villain id
             * @property {string|null} [name] Villain name
             */
    
            /**
             * Constructs a new Villain.
             * @memberof hero
             * @classdesc Represents a Villain.
             * @implements IVillain
             * @constructor
             * @param {hero.IVillain=} [properties] Properties to set
             */
            function Villain(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Villain id.
             * @member {number} id
             * @memberof hero.Villain
             * @instance
             */
            Villain.prototype.id = 0;
    
            /**
             * Villain name.
             * @member {string} name
             * @memberof hero.Villain
             * @instance
             */
            Villain.prototype.name = "";
    
            /**
             * Creates a new Villain instance using the specified properties.
             * @function create
             * @memberof hero.Villain
             * @static
             * @param {hero.IVillain=} [properties] Properties to set
             * @returns {hero.Villain} Villain instance
             */
            Villain.create = function create(properties) {
                return new Villain(properties);
            };
    
            /**
             * Encodes the specified Villain message. Does not implicitly {@link hero.Villain.verify|verify} messages.
             * @function encode
             * @memberof hero.Villain
             * @static
             * @param {hero.Villain} message Villain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Villain.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                return writer;
            };
    
            /**
             * Encodes the specified Villain message, length delimited. Does not implicitly {@link hero.Villain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof hero.Villain
             * @static
             * @param {hero.Villain} message Villain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Villain.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Villain message from the specified reader or buffer.
             * @function decode
             * @memberof hero.Villain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {hero.Villain} Villain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Villain.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hero.Villain();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    case 2: {
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
             * Decodes a Villain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof hero.Villain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {hero.Villain} Villain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Villain.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Villain message.
             * @function verify
             * @memberof hero.Villain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Villain.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };
    
            /**
             * Creates a Villain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof hero.Villain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {hero.Villain} Villain
             */
            Villain.fromObject = function fromObject(object) {
                if (object instanceof $root.hero.Villain)
                    return object;
                var message = new $root.hero.Villain();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };
    
            /**
             * Creates a plain object from a Villain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof hero.Villain
             * @static
             * @param {hero.Villain} message Villain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Villain.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };
    
            /**
             * Converts this Villain to JSON.
             * @function toJSON
             * @memberof hero.Villain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Villain.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Villain
             * @function getTypeUrl
             * @memberof hero.Villain
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Villain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/hero.Villain";
            };
    
            return Villain;
        })();
    
        return hero;
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
    
            protobuf.Empty = (function() {
    
                /**
                 * Properties of an Empty.
                 * @memberof google.protobuf
                 * @interface IEmpty
                 */
    
                /**
                 * Constructs a new Empty.
                 * @memberof google.protobuf
                 * @classdesc Represents an Empty.
                 * @implements IEmpty
                 * @constructor
                 * @param {google.protobuf.IEmpty=} [properties] Properties to set
                 */
                function Empty(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Creates a new Empty instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty=} [properties] Properties to set
                 * @returns {google.protobuf.Empty} Empty instance
                 */
                Empty.create = function create(properties) {
                    return new Empty(properties);
                };
    
                /**
                 * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.Empty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };
    
                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.Empty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Empty message.
                 * @function verify
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Empty.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };
    
                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Empty} Empty
                 */
                Empty.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Empty)
                        return object;
                    return new $root.google.protobuf.Empty();
                };
    
                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.Empty} message Empty
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Empty.toObject = function toObject() {
                    return {};
                };
    
                /**
                 * Converts this Empty to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Empty
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Empty.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Empty
                 * @function getTypeUrl
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Empty";
                };
    
                return Empty;
            })();
    
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
