(function iifeGeneratingEventHandlers(eventNames, convenienceApi, privilegedEnvelope) {
	/*global eventNames, convenienceApi, privilegedEnvelope */

	// This file contains a few functions which (purposely) fail linting because they are feaures of es6 or later.
	// Relativity Forms event handler files are expected to be confined to JavaScript which is es5.1 or lower.
	// This requirement is to satisfy cross-browser compatibility with Internet Explorer 11.

	// MOST es6/esNext features are not supported in IE11. These items are a few examples of what
	// is caught by linting, as they would fail outright when trying to create an Event Handlers
	// Object in Internet Explorer.

	var vars = privilegedEnvelope || {};
	var eventHandlers = {};

	vars.failsLint = {/* to enable failure, remove the space between the star and slash at the end of this line. * /
		arrayFrom: function() {
			vars.arrayMadeFromArguments = Array.from(arguments);
		},
		arrowFunction: function() {
			["a","b","c"].forEach((item) => {
				return item;
			});
		},
		classUse: function makeRectangle(h, w) {
			class Rectangle {
				constructor(height, width) {
					this.height = height;
					this.width = width;
				}
			}
			return new Rectangle(h, w);
		},
		computedPropertyNames: function() {
			var computedPropName = "thatComputedProperty";
			return {
				[computedPropName]: 17
			};
		},
		destructuringAssignment: function() {
			var a, b, c, x, y, z;

			// Arrays
			[x, y] = [10, 20];

			// Objects
			z = { oa: 1, ob: 2, oc: 3 };
			({ oa: a, ob: b, oc: c } = z);

			// nothing is wrong with the return statement below;
			return [a, b, c, x, y, z];
		},
		destructuringParameters: function({ a, b, c }) {
			// nothing is wrong with the return statement below;
			return [ a, b, c ];
		},
		mapObjectUse: function getMap() {
			return new Map();
		},
		shorthandProperties: function() {
			var a, b;

			a = 10;
			b = 20;

			return {
				a,
				b
			};
		},
		templateStrings: function(a) {
			return `Parameter a: ${a}`;
		}/* */
	};

	return eventHandlers;
}(eventNames, convenienceApi, privilegedEnvelope));

// eof
