
module.exports = IAdapterInterface;

/**
 *
 * @interface IAdapterInterface
 */
function IAdapterInterface() {}

/**
 *
 * @param connection
 * @param collections
 * @param {Function} cb
 */
IAdapterInterface.prototype.registerConnection  = function(connection, collections, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.teardown            = function(connectionName, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.describe            = function(connectionName, collectionName, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.define              = function(connectionName, collectionName, definition, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.drop                = function(connectionName, collectionName, relations, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.find                = function(connectionName, collectionName, options, cb) { throw new Error('not implemented'); };
IAdapterInterface.prototype.native              = function(connectionName, collectionName, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.create              = function(connectionName, collectionName, data, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.createEach          = function(connectionName, collectionName, data, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.update              = function(connectionName, collectionName, options, values, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.destroy             = function(connectionName, collectionName, options, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.count               = function(connectionName, collectionName, options, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.join                = function(connectionName, collectionName, criteria, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.stream              = function(connectionName, collectionName, options, stream){ throw new Error('not implemented'); };

IAdapterInterface.prototype.getIdentity         = function() { throw new Error('not implemented'); };

