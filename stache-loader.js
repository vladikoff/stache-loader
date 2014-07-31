var path = require('path');
var jsEscape =  function (content) {
  return content.replace(/(['\\])/g, '\\$1')
    .replace(/[\f]/g, "\\f")
    .replace(/[\b]/g, "\\b")
    .replace(/[\n]/g, "\\n")
    .replace(/[\t]/g, "\\t")
    .replace(/[\r]/g, "\\r")
    .replace(/[\u2028]/g, "\\u2028")
    .replace(/[\u2029]/g, "\\u2029");
};

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var moduleName = JSON.stringify('stache!' + path.basename(this.context) + '/' + path.basename(this.resourcePath, '.mustache'));
  var buildTemplateSource = "define({moduleName}, ['mustache'], function (Mustache) { var template = '{content}'; Mustache.parse( template ); return function( view ) { return Mustache.render( template, view ); } });\n";
  var output = buildTemplateSource
    .replace('{moduleName}', moduleName)
    .replace('{content}', jsEscape(content));
  return output;
};
