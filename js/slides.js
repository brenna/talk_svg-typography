// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  //TODO: can i selectively center??
  center: false,
  width: 1060,
  height : 800,
  margin: 0.1,


  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/fade/none


  // Parallax scrolling
  // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
  // parallaxBackgroundSize: '2100px 900px',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'lib/js/jquery-1.11.1.min.js'},
    { src: 'lib/js/live-coding.js', async: true, condition: function() { return !!document.body.classList; }},
    { src: 'lib/js/svg-typography.js', async: true, condition: function() { return !!document.body.classList; }}
  ]
});

