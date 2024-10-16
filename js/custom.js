(function ($) {
  "use strict";

  // BACKGROUND SLIDER
  $('body').vegas({
      slides: [
          { src: 'images/slides/1.jpeg'  },
          { src: 'images/slides/2.jpg'  },
          { src: 'images/slides/3.jpg'  },
          { src: 'images/slides/4.jpg'  },
          { src: 'images/slides/5.jpg'  },
          { src: 'images/slides/6.webp' },
          { src: 'images/slides/7.jpg'  },
          { src: 'images/slides/8.webp' },
          { src: 'images/slides/9.jpg'  },
          { src: 'images/slides/10.jpg'}
      ],
      delay: 7000, // delay between slide transition
      timer: false, // disable timer
      shuffle: true, // shuffle images
      firstTransition: 'fade', // fade into first slide
      firstTransitionDuration: 5000, // ^ lasts five seconds
      transition: 'blur', // blur transition for rest of slides
      transitionDuration: 2000 // ^ lasts two seconds
  });

  $('.home-info').tilt({
    maxTilt: 20, // max tilt
    scale: 1.3, // zoom scale
    perspective: 700, // tilt agressiveness
    speed: 3000, // enter/exit anim speed
  });
  
})(jQuery);

// COPY DISCORD TO CLIPBOARD
function copyDiscord() {
  const discordTag = 'Yoru#9197';
  navigator.clipboard.writeText(discordTag);
  alert('Copied! ' + discordTag);
}
