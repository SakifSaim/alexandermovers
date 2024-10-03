window.addEventListener('scroll', function () {
  const hero = document.getElementById('hero')
  let scrollPosition = window.scrollY
  hero.style.backgroundPositionY = scrollPosition * 0.1 + 'px' // Parallax effect
})

// JavaScript for Show More / Show Less functionality
const loadMoreButton = document.getElementById('load-more')
const hiddenItems = document.querySelectorAll('.hidden')

let isMoreShown = false // Track whether more items are shown

loadMoreButton.addEventListener('click', () => {
  if (!isMoreShown) {
    hiddenItems.forEach((item) => item.classList.remove('hidden')) // Show hidden items
    loadMoreButton.textContent = 'Show Less' // Change button text
  } else {
    hiddenItems.forEach((item) => item.classList.add('hidden')) // Hide additional items
    loadMoreButton.textContent = 'Show More' // Change button text
  }
  isMoreShown = !isMoreShown // Toggle state
})

// testiomonial
const testimonials = document.querySelectorAll('.testimonial')
const loadMoreTestimonialsBtn = document.getElementById(
  'loadMoreTestimonialsBtn'
)
const showLessBtn = document.getElementById('showLessBtn')

let currentIndex = 0
const itemsToShow = 6

function showTestimonials() {
  for (let i = 0; i < itemsToShow; i++) {
    if (currentIndex + i < testimonials.length) {
      testimonials[currentIndex + i].classList.remove('hidden')
    }
  }
  currentIndex += itemsToShow

  // Hide Load More button if all testimonials are shown
  if (currentIndex >= testimonials.length) {
    loadMoreTestimonialsBtn.classList.add('hidden')
  }

  // Show the Show Less button once some testimonials are visible
  if (currentIndex > itemsToShow) {
    showLessBtn.classList.remove('hidden')
  }
}

function hideTestimonials() {
  currentIndex = itemsToShow // Reset to show only the initial number of testimonials
  testimonials.forEach((testimonial, index) => {
    if (index >= itemsToShow) {
      testimonial.classList.add('hidden')
    }
  })

  // Show the Load More button again and hide the Show Less button
  loadMoreTestimonialsBtn.classList.remove('hidden')
  showLessBtn.classList.add('hidden')
}

loadMoreTestimonialsBtn.addEventListener('click', showTestimonials)
showLessBtn.addEventListener('click', hideTestimonials)

// Initial call to show the first set of testimonials
showTestimonials()
