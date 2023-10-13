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
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.birthDate != null && message.hasOwnProperty("birthDate"))
                    object.birthDate = $root.google.protobuf.Timestamp.toObject(message.birthDate, options);
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
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
