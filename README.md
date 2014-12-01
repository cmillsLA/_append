_append
=======

jquery.append() in native javascript.

Append html to selector, append scripts to head.
  Accepts:
    1. String with or without html.
    2. Javascript, external and internal.
    3. CSS, external and internal.
    4. Combinations of any of the above.
  IE8 +, maybe older browsers too.
  
Example: append(document.getElementById('someSelector'),'<p>Some html string with javascript and css.</p><link rel="stylesheet" href="pathto/css.css" /><script type="text/javascript" src="linkto/javascript.js"></script>')
