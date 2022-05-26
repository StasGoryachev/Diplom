//? BURGER

document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
  document.body.classList.add("lock");
})
document.querySelector(".nav-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
  document.body.classList.remove("lock");
})

const headerLinks = document.querySelectorAll('.header__link');

for (let link of headerLinks) {
  link.addEventListener('click', function(event){
    event.preventDefault();

    let headerNav = document.querySelector('.header__nav');

    if (headerNav.classList.contains('active')){
      headerNav.classList.remove('active')
      document.body.classList.remove('lock');
    };
  });
};

document.querySelector(".projects__tolltip").addEventListener("click", function() {
  document.querySelector(".tolltip-bg").classList.toggle("active");
  document.querySelector(".projects__tolltip").classList.toggle("active");
})


const anchors = document.querySelectorAll('a[href*="#"')


for ( let anchor of anchors) {
  anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

//? FORM

document.querySelector(".form-btn-open").addEventListener("click", function(e) {
  e.stopPropagation();
  document.querySelector(".form").classList.add("form__active");
  document.querySelector(".form-btn-close").classList.add("active");
  this.classList.add("active");
})

document.querySelector(".form-btn-close").addEventListener('click', function(e) {
  e.stopPropagation();
  document.querySelector(".form").classList.remove('form__active');
  document.querySelector(".form-btn-open").classList.remove("active");
  this.classList.remove("active");
})

// document.addEventListener("click", function(e) {
//   let target = e.target;
//   let form = document.querySelector(".form");
//   if (!target.closest(".form-wrapper")) {
//   form.classList.remove("form__active");
//     form.querySelector("input").value = "";
//     document.querySelector(".form-btn__open").classList.remove("active")
//   }
// })

//? Tooltip

tippy('.projects__tolltip', {
  trigger: 'click',
  maxWidth: 265,
  offset: [0, 12],
  animation: 'fade',
  theme: 'purple',
});

//? TABS


document.addEventListener("DOMContentLoaded", function() {
  function tabsActive(tabPath, tabTarget) {
      document.querySelectorAll(tabPath).forEach(item => {
          item.addEventListener("click", function(e) {
              let path = e.currentTarget.dataset.path;
              document.querySelectorAll(tabTarget).forEach(el => {
                  el.classList.remove("active");
              })
              document.querySelectorAll(tabPath).forEach(el => {
                  el.classList.remove("active");
              })
              document.querySelector(`[data-target="${path}"]`).classList.add("active");

              this.classList.add("active");
          })
      })
  };
  tabsActive(".accordion-btn", ".tab-content")
})
// ? \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//? SWIPERS

let hero = new Swiper('.hero-swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  autoplay: {
    delay: 1500
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

});


let gallerySlider = new Swiper(".swiper-right-content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});



let eventslider = new Swiper(".events__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  pagination: {
      el: ".events-pagination",
      type: "bullets",
      clickable: true
  },
  navigation: {
      nextEl: ".events-btn-next",
      prevEl: ".events-btn-prev"
  },

  breakpoints: {
      320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
      },
      662: {
          spaceBetween: 34,
          slidesPerView: 2,
          slidesPerGroup: 1,

      },
      1004: {
          spaceBetween: 50,
          spaceBetween: 27,
          slidesPerView: 3,

      },
      1200: {
          spaceBetween: 50,
          slidesPerView: 3,
          slidesPerGroup: 1,
      }
  },

  a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
  }

});

let projectsSwiper = new Swiper(".projects__swiper", {
  direction: 'horizontal',
  slidesPerView: 3,
  // slidesPerGroup: 3,
  spaceBetween: 50,
  navigation: {
      nextEl: '.swiper-button-next-project',
      prevEl: '.swiper-button-prev-project',
  },
  breakpoints: {
      320: {
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
      },
      768: {
          spaceBetween: 34,
          slidesPerView: 2,
          slidesPerGroup: 1,
      },
      1024: {
          spaceBetween: 50,
          slidesPerView: 2,
          slidesPerGroup: 1,
      },
      1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50
      }
  },

});

// !? DROPDOWN
document.addEventListener('DOMContentLoaded', () => {
	/*
		1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	*/

	const menuBtns = document.querySelectorAll('.menu__btn');
	const drops = document.querySelectorAll('.dropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('menu__btn--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
			currentBtn.classList.toggle('menu__btn--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.menu')) {
			menuBtns.forEach(el => {
				el.classList.remove('menu__btn--active');
			});

			drops.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	});
});

//? simplebar

document.querySelectorAll(".dropdown__list").forEach(item => {
  new SimpleBar(item, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 28,
});
})


//? choices

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  noResultsText: 'Ничего не найдено'
});


//? MAP


ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.759063, 37.611243],
    zoom: 14,
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts_mark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0],
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
};


var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);


new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: 'true',
            minLength: 2,
            maxLength: 10,

        },
        tel: {
            required: 'true',
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length == 10
            },

        },
    },
    messages: {
        name: 'Недопустимый формат',
        tel: 'Недопустимый формат'
    },
    colorWrong: '#D11616',
});
