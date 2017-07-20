"use strict"
var loaderUtils = require("loader-utils"),
	path = require("path");
module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
	if(this.cacheable) this.cacheable();
	return [
		"var content = require(" + loaderUtils.stringifyRequest(this, "!!" + remainingRequest) + ");",
		"var store = require('server-render-style-loader/store');",
		"if (typeof content === 'string') { content = [[module.id, content, '']]; }",
		"store.addStyle(content.toString())",
		"module.exports = content.locals || {};",
		"module.exports.$$getCss = function() { return content.toString(); }"
	].join("\n")
};
