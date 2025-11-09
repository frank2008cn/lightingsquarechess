 function toggleLinks() {
  var links = document.getElementById("links");
  links.style.display = links.style.display != "block" ? "block" : "none";
}


(function() {
  // image slideshow
  var slides = [    
    "https://i.ibb.co/bghCVL3/IMG-9373.jpg",
    "https://i.ibb.co/cvSbJWw/IMG-9368.jpg",  
    "https://i.ibb.co/HTFH29C/IMG-9371.jpg",    
    "https://i.ibb.co/hZFs9jz/IMG-9374.jpg",
    "https://i.ibb.co/5Fq1WWK/IMG-9375.jpg",
    "https://i.ibb.co/2P6LBCf/IMG-9378.jpg",
    "https://i.ibb.co/Bc4Cbny/IMG-9383.jpg",
    "https://i.ibb.co/4KrJdtd/IMG-0261.jpg",
    "https://i.ibb.co/9YyPYbP/IMG-0374.jpg",
    "https://i.ibb.co/gVPrfPC/IMG-9627.jpg",
    "https://i.ibb.co/vmH5kyw/IMG-9916.jpg",
    "https://i.ibb.co/Sytf8mJ/IMG-9624.jpg",
    "https://i.ibb.co/7QWbbX7/IMG-8740.jpg",
    "https://i.ibb.co/8Xzgq3Y/IMG-9633.jpg"
  ];










  var current = 0;
  var timer = null;
  var width = $("#slideshow").width() + 16
  var count = slides.length;
  var last = count - 1;


  window.createSlides = function() {
      var html = "<div id='slide-images'>";        
      for (var i = 0; i < count; i++) {
          var x = i == count - 1 ? -width: width * i;
          var cls = i == 0 ? " active" : "";
          html += '<div style="transform:translate3d(' + x + 'px, 0, 0)" id="slide-' + i + '" class="slide'
              + cls + '" onclick="slideTo(' + i + ')"><div class="slide-image" style="background-image:url(' + slides[i]
              + ')"></div></div>';
      }      
      html += '</div>';
      $("#slideshow").html(html);


      html = '<div class="dots">';
      for (var i = 0; i < count; i++) {
          var cls = i == 0 ? " active" : "";
          html += '<div id="dot-' + i + '" class="dot' + cls + '" onclick="slideTo(' + i + ')"></div>';
      }
      html += '</div>';
      $("#dots").html(html);


      next();
  }


  function next() {
      timer != null && clearTimeout(timer);
      timer = setTimeout(function() {
          slideTo(current == last ? 0 : current + 1);
      }, 3000);        
  }


  window.onresize = function() {
      setTimeout(function() {
          for (var i = 0; i < count; i++) {
              var x = i == count - 1 ? -width: width * i;
              $("#slide-" + last).animate({transform: 'translate3d(' + x + 'px, 0, 0)'}, 0);
          }
          slideTo(0);
      }, 0);        
  };


  window.slideTo = function(index) {
      if (index == current) {
          return;
      }


      $(".slide").removeClass("active");
      $("#slide-" + index).addClass("active");


      $(".dot").removeClass("active");
      $("#dot-" + index).addClass("active");


      if (index == 0 && current == last) {
          $("#slide-images").animate({transform: "translate3d(-" + (last + 1) * width + "px, 0, 0)"}, 300);
      } else if (index == last && current == 0) {
          $("#slide-images").animate({transform: "translate3d(" + width + "px, 0, 0)"}, 300);
      } else {
          $("#slide-images").animate({transform: "translate3d(-" + index * width + "px, 0, 0)"}, 300);
      }


      setTimeout(function() {
          if (index == 0) {
              $("#slide-" + last).animate({transform: "translate3d(-" + width  + "px, 0, 0)"}, 0);
              $("#slide-images").animate({transform: "translate3d(0, 0, 0)"}, 0);
          } else {            
              $("#slide-" + last).animate({transform: "translate3d(" + last * width + "px, 0, 0)"}, 0);
              $("#slide-images").animate({transform: "translate3d(-" + index * width + "px, 0, 0)"}, 0);
          }


          if (index == last) {
              $("#slide-0").animate({transform: "translate3d(" + (last + 1) * width + "px, 0, 0)"}, 0);
          } else {
              $("#slide-0").animate({transform: "translate3d(0, 0, 0)"}, 0);
          }
      }, 300);


      current = index;        
      next();        
  };


  window.toggleLinks = function() {
      var links = document.getElementById("links");
      links.style.display = links.style.display != "block" ? "block" : "none";
    }
})();
