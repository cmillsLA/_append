/* Append html to selector, append scripts to head.
  Accepts:
    1. String with or without html.
    2. Javascript, external and internal.
    3. CSS, external and internal.
    4. Combinations of any of the above.
  IE8 +, maybe older browsers too.
*/
function append(selector, d) {
  var content = d;
  content = Array.prototype.concat( [], content );

  if(content.length) {

    var frag = document.createDocumentFragment();

    var tmp = frag.appendChild( document.createElement('div'));

    tmp.innerHTML = 'X' + content;

    var scripts = tmp.getElementsByTagName('script');
    // Append html.
    if(selector) {
      selector.insertAdjacentHTML('beforeend', content);
    } else {
      console.log('Invalid selector provided.');
    }
    for(var i=0; i<scripts.length; i++) {
      var newScript = document.createElement('script');
      if(scripts[i].id) {
        newScript.id = scripts[i].id;
      }
      if(scripts[i].src) {
        newScript.type = 'text/javascript';
        newScript.src = scripts[i].src;
        document.getElementsByTagName('head')[0].appendChild(newScript)
      } else {
        var nscript = document.createElement('script');
        var js = scripts[i].innerHTML;
        nscript.type = 'text/javascript';
        nscript.text = js;
        document.getElementsByTagName('head')[0].appendChild( nscript ).parentNode.removeChild( nscript );
      }
    }
  }
};