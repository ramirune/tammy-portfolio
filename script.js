'use strict';

const tabs = document.querySelectorAll('.projects_items');
const tabContainer = document.querySelector('.project_tab-container');
const tabSlide = document.querySelectorAll('.project__slide');

tabContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.projects_items');
	console.log(clicked);

	if (!clicked) return;

	tabs.forEach(t => t.classList.remove('project_tab--active'));
	tabSlide.forEach(c => c.classList.remove('project__slide--active'));

	clicked.classList.add('project_tab--active');

	document
		.querySelector(`.project__slide--${clicked.dataset.tab}`)
		.classList.add('project__slide--active');
});
