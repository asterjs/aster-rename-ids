'use strict';

var traverse = require('aster-traverse');

module.exports = function (options) {
	var from = options.from;
	var to = options.to;

	return traverse({
		enter: function (node) {
			if (node.type === 'Identifier' && from.test(node.name)) {
				node.name = node.name.replace(from, to);
			}
		}
	});
};
