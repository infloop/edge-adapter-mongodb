
module.exports = IAdapterInterface;

/**
 *
 * @interface IAdapterInterface
 */
function IAdapterInterface() {}

/**
 *
 * @param connection
 * @param {Array<String>} collections
 * @param {Function} cb
 */
IAdapterInterface.prototype.registerConnection  = function(connection, collections, cb){ throw new Error('not implemented'); };

/**
 * Teardown
 *
 * Closes the connection pool and removes the connection object from the registry.
 *
 * @param {String|Function} connectionName
 * @param {Function} cb
 */
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

/**
 * Count
 *
 * Return a count of the number of records matching a criteria.
 *
 * @param {String} connectionName
 * @param {String} collectionName
 * @param {Object} options
 * @param {Function} cb
 */
IAdapterInterface.prototype.count               = function(connectionName, collectionName, options, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.join                = function(connectionName, collectionName, criteria, cb){ throw new Error('not implemented'); };

/**
 * Stream
 *
 * Stream one or more objects from the collection
 * using where, limit, skip, and order
 * In where: handle `or`, `and`, and `like` queries
 *
 * @param {String} connectionName
 * @param {String} collectionName
 * @param {Object} options
 * @param {Object} stream
 */
IAdapterInterface.prototype.stream              = function(connectionName, collectionName, options, stream){ throw new Error('not implemented'); };
IAdapterInterface.prototype.increment           = function(connectionName, collectionName, key, increment, cb){ throw new Error('not implemented'); };
IAdapterInterface.prototype.decrement           = function(connectionName, collectionName, key, decrement, cb){ throw new Error('not implemented'); };

IAdapterInterface.prototype.getIdentity         = function() { throw new Error('not implemented'); };

