// Perloader

window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");

  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});

// Portfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter");
(filterBtns = filterContainer.children),
  (totalFilterBtn = filterBtns.length),
  (portfolioItems = document.querySelectorAll(".portfolio-item")),
  (totalPortfolioItem = portfolioItems.length);

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

// Portfolio Lightbox

const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxCounter = lightbox.querySelector(".caption-count");

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
  portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}

function prevItem() {
  if (itemIndex == 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItem;
}

// close Lightbox

lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

// Aside

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSectionClass();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");

    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];

  document.querySelector("#" + target).classList.add("active");
}

function navUpdate(element) {
  for (let i = 0; i < totalSection; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  navUpdate(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});

// Nav toggle

const navToggleBtn = document.querySelector(".nav-toggle"),
  aside = document.querySelector(".aside");

navToggleBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navToggleBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

const data =
{
  "title": "IB Precious",
  "description": "My Information",
  "type": "object",
  "name": {
    "lastName": "Ibeagi",
    "firstName": "Precious",
    "nameAbbrv": "IC Precious",
    "job": "Full Stack Engineer",
    "linkedin": "",
    "twitter": "",
    "whatsapp": "https://api.whatsapp.com/send?phone=08097218247&text=Hi%20There!",
    "profile": "../images/me.jpeg"
  },
  "birthday": {
    "day": 15,
    "month": "April",
    "year": "199_"
  },
  "stack": [
    {
      "name": "html",
      "progress": "90%"
    },
    {
      "name": "css",
      "progress": "80%"
    },
    {
      "name": "react",
      "progress": "60%"
    },
    {
      "name": "vue",
      "progress": "90%"
    },
    {
      "name": "javascript",
      "progress": "50%"
    },
    {
      "name": "PHP",
      "progress": "70%"
    },
    {
      "name": "laravel",
      "progress": "70%"
    },
    {
      "name": "Node",
      "progress": "70%"
    },
    {
      "name": "mySQL",
      "progress": "70%"
    },
    {
      "name": "ngnix",
      "progress": "70%"
    },
    {
      "name": "Docker",
      "progress": "70%"
    },
    {
      "name": "mongodb",
      "progress": "70%"
    }
  ],
  "workXp": [
    {
      "date": "2019-2020",
      "role": "Backend Web Developer at Mira Technologies"
    },
  ],
  "detail": {
    "website": "",
    "websitename": "",
    "email": "preciousaang@gmail.com",
    "degree": "Bsc. Computer Science",
    "phone": "+2348097218247",
    "city": "Lagos",
    "freelance": "Available"
  },
  "school": [
    {
      "date": "2015 - 2019",
      "name": "University of Benin, Benin-City, Edo State."
    },
  ],
}

const website = document.querySelector('#website');
const email = document.querySelector('#email');
const degree = document.querySelector('#degree');
const phoneNumber = document.querySelector('#phoneNumber');
const city = document.querySelector('#city');
const available = document.querySelector('#available');

const stack = document.querySelector('#stack');

const education = document.querySelector('#education');

const workXp = document.querySelector('#workexp');

const portfolioData = document.querySelector('#portfolioData');

website.innerHTML = `</span><a href="${data.detail.website}" target="_blank" rel="noopener noreferrer">${data.detail.websitename}</a>`
email.innerHTML = `<a href="mailto:${data.detail.email}">${data.detail.email}</a>`
degree.innerHTML = `${data.detail.degree}`
phoneNumber.innerHTML = `<a href="tel:${data.detail.phone}">${data.detail.phone}</a>`
city.innerHTML = `${data.detail.city}`
available.innerHTML = `${data.detail.freelance}`

data.stack.forEach(data => {
  stack.insertAdjacentHTML('beforeend', `<div class="skill-item pad-15 mb-3">
<h5>${data.name}</h5>
<div class="progress">
  <div class="progress-in" style="width: ${data.progress};"></div>
    <div class="skill-present">
      ${data.progress}
    </div>
  </div>
</div>`)

});

data.school.forEach(data => {
  education.insertAdjacentHTML('beforeend', ` <div class="time-line-item">
  <div class="circle-dot"></div>
  <h6 class="time-line-date">
    <i class="fa fa-calendar" aria-hidden="true"></i>
    ${data.date}
  </h6>
  <h4 class="time-line-title">
    ${data.name}
  </h4>
</div>`)

});

data.workXp.forEach(data => {
  workXp.insertAdjacentHTML('beforeend', `<div class="time-line-item">
  <div class="circle-dot"></div>
  <h6 class="time-line-date">
    <i class="fa fa-calendar" aria-hidden="true"></i>
    ${data.date}
  </h6>
  <h4 class="time-line-title">
    ${data.role}
  </h4>
</div>`)

});
