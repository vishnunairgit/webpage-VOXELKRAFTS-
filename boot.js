//first owi-carousal

$('.first-owi-carousal .owl-carousel').owlCarousel({
  default: 4,
  items:3,
  loop: true,
  margin: 10,
  nav:true,
  dot:true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true

    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
})

