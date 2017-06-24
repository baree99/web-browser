function Renderer(){
  this.htmlContent = '';
}

Renderer.prototype.printContent = function (parsedHtml, fn) {
  for ( var i = 0; i < parsedHtml.length; i++ ) {
    if (Array.isArray(parsedHtml[i])) {
      this.printContent(parsedHtml[i], fn);
    } else if ( parsedHtml[i][0] !== '<' &&
                /<[^>]*script\s*?/igm.test(parsedHtml[i - 1]) !== true &&
                /<[^>]*script\s*?/igm.test(parsedHtml[i + 1]) !== true &&
                /<[^>]*style\s*?/igm.test(parsedHtml[i - 1]) !== true ) {
      fn(parsedHtml[i]);
    }
  }
};

// Renderer.prototype.printContent = function (parsedHtml) {
//   this._printContent(parsedHtml);
//   return this.htmlContent;
// }

module.exports = Renderer;
