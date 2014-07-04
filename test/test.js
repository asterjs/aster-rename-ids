/* global describe, it */

'use strict';

var assert = require('chai').assert,
	Rx = require('rx'),
	renameIds = require('..'),
	parse = require('esprima').parse,
	generate = require('escodegen').generate;

it('test', function (done) {
	var input = [{
			type: 'File',
			program: parse('obj.publicProp = obj._private1 + obj._private2;'),
			loc: {
				source: 'file.js'
			}
		}],
		expected = ['obj.publicProp = obj.$0 + obj.$1;'];

	var privateIndex = 0;

	// simulating file sequence and applying transformation
	renameIds({
		from: /^_(.*)$/,
		to: function () {
			return '$' + privateIndex++;
		}
	})(Rx.Observable.fromArray(input))
	// checking against array of expected results iteratively
	.pluck('program')
	.map(generate)
	.zip(expected, assert.equal)
	// subscribing to check results
	.subscribe(function () {}, done, done);
});
