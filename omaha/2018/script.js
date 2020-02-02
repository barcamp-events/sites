window.addEventListener("load", init);
window.addEventListener("resize", init);

function startTime() {
  var today = new Date();
  var d = today.getDate();
  var mo = (today.getMonth() + 1);
  var y = today.getFullYear();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  d = checkTime(d);
  mo = checkTime(mo);
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('.clock').innerHTML =
  mo + "/" + d + "/" + y + " " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function unsleepMe(){
  var b = document.querySelector('.sleep');
  b.style.top = '-150%';
}
function sleepMe () {
  var b = document.querySelector('.sleep');
  b.style.top = '0';
}

function openNoteMobile(note) {
  var ans = document.querySelector('.note.' + note);
  if (ans.classList.contains('hidden')) {
    ans.classList.remove('hidden');
  } else {
    ans.classList.add('hidden');
  }
}

function switchNote(note, elem) {
  var notes = document.querySelectorAll('.note');
  for(i = 0; i < notes.length; i++) {
    notes[i].classList.add('hidden');
  }
  document.querySelector('.note.' + note).classList.remove('hidden');
  document.querySelector('.notes li.active').classList.remove('active');
  elem.classList.add('active');
  document.querySelector('.notes .all').scrollTop = 0;
}

function openTrack(track) {
  var track = document.querySelector('.track.'+track);
  track.style.display = "block";
  track.classList.remove('closed');
  track.style.zIndex = track.style.zIndex + 1;
}

function init(e) {
  startTime();

  var all = document.querySelectorAll(".track");
  var prev = false;
  for(i = 0; i < all.length; i++) {
    all[i].addEventListener("click", function(){
      if (prev) { prev.style.zIndex = 1; }
      this.style.zIndex = 1000;
      prev = this;
    })
  }

  var trackTitles = document.querySelectorAll('.track h3');
  for ( var i=0; i < trackTitles.length; i++ ) {
    var track = trackTitles[i];
    track.addEventListener("click", function(event){
      var ans = findAncestor(event.target, ".track");
      if (ans.classList.contains('closed')) {
        ans.classList.remove('closed');
      } else {
        ans.classList.add('closed');
      }
    });
  }

  function findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
    return el;
  }
  
  var draggableElems = document.querySelectorAll('.drag');
  var draggies = [];

  // MOBILE
  // if (window && window.outerWidth <= 768) {
  //   // Remove inline styles on mobile
  //   for ( var i=0; i < draggableElems.length; i++ ) {
  //     if (draggableElems[i].style && !draggableElems[i].dataset.style) {
  //       // save a backup of styles
  //       draggableElems[i].dataset.style = draggableElems[i].getAttribute('style');
  //     }
  //     // erase styles
  //     draggableElems[i].setAttribute('style', '');
  //   }
  // }

  // NOT MOBILE
  // else {
    var prev = false;
    // Make windows draggable if not mobile
    for ( var i=0; i < draggableElems.length; i++ ) {
      // var backup = draggableElems[i].dataset.style;
      // if (backup) {
      //   draggableElems[i].setAttribute('style',backup);
      // }

      var draggableElem = draggableElems[i];
      var draggie = new Draggabilly( draggableElem, {
        handle: '.handle'
      });
      draggie.on('dragStart', function(event) {
        var ans = findAncestor(event.target, ".drag");
        ans.style.right = "auto";
        if (ans) { ans.classList.remove('hidden') }

        if (prev) { prev.style.zIndex = 1; }
        ans.style.zIndex = 1000;
        prev = ans;
      });
      draggies.push( draggie );
    }
  // }
}