window.addEventListener("load", init);
window.addEventListener("resize", init);

function init(e) {
  document.querySelectorAll('.bc18_lettermark_a, .bc18_lettermark_b')
    .forEach(function(elem) {
      elem.addEventListener('mouseover', function(){
        document.querySelectorAll('.egg').forEach(function(elem) {
          elem.classList.add('expand');
        });
      });
  });

  function findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
    return el;
  }
  
  var draggableElems = document.querySelectorAll('.drag');
  var draggies = [];
  var editor = document.querySelector('[contenteditable]');

  // MOBILE
  if (window && window.outerWidth <= 768) {
    // Remove inline styles on mobile
    for ( var i=0; i < draggableElems.length; i++ ) {
      if (draggableElems[i].style && !draggableElems[i].dataset.style) {
        // save a backup of styles
        draggableElems[i].dataset.style = draggableElems[i].getAttribute('style');
      }
        // erase styles
        draggableElems[i].setAttribute('style', '');
      
    }
    // Disable notepad editing on mobile
    editor.setAttribute('contenteditable', false);
  }

  // NOT MOBILE
  else {
    // Keep links clickable despite editable note
    editor.addEventListener('click', function(e) {
      if (e.target.tagName == 'A') {
        window.open(e.target.getAttribute('href'));
      }
    });
    // Make windows draggable if not mobile
    for ( var i=0; i < draggableElems.length; i++ ) {
      var backup = draggableElems[i].dataset.style;
      if (backup) {
        draggableElems[i].setAttribute('style',backup);
      }
      // enable editing
      editor.setAttribute('contenteditable', true);

      var draggableElem = draggableElems[i];
      var draggie = new Draggabilly( draggableElem, {
        handle: '.handle'
      });
      draggie.on('dragStart', function(event, pointer) {
        findAncestor(event.target, ".drag").classList.add('moved');
      });
      draggies.push( draggie );
    }
  }
}