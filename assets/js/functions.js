//1.  menu-fluide
$(document).ready(function() {
	function nav() {
	  $('.nav-toggle').click(function() {
		$('.nav').toggleClass('open');
	  });
  
	  $('.nav a').click(function(event) {
		event.preventDefault();
  
		const targetId = $(this).attr('href');
		const targetPosition = $(targetId).offset().top;
  
		$('html, body').animate(
		  {
			scrollTop: targetPosition
		  },
		  2000
		);
	  });
	}
  
	nav();
  });
  
	//2.  slider
	
	document.addEventListener('DOMContentLoaded', function() {
		var slider = document.getElementById('full-slide');
		var slides = Array.from(slider.querySelectorAll('.banner li'));
		var currentIndex = slides.findIndex(function(slide) {
		  return slide.classList.contains('active');
		});
	  
		function showSlide(index) {
		  slides.forEach(function(slide) {
			slide.classList.remove('active');
		  });
	  
		  slides[index].classList.add('active');
		}
	  
		function nextSlide() {
		  currentIndex = (currentIndex + 1) % slides.length;
		  showSlide(currentIndex);
		}
	  
		function prevSlide() {
		  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		  showSlide(currentIndex);
		}
	  
		slider.querySelector('.next').addEventListener('click', nextSlide);
		slider.querySelector('.prev').addEventListener('click', prevSlide);
	  
		showSlide(currentIndex);
	  });


	  var map = L.map('map').setView([45.500572, 286.4328], 13);
	  
	  
	  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([45.500572, 286.4328]).addTo(map)
    .bindPopup('Apollo')
    .openPopup();

	

	