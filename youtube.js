const searchBar = document.querySelector('.search-bar');
const searchInsideContainer = document.querySelector('.search-inside-container');
const clearBtn = document.querySelector('.clear-search-btn');
const searchContainer = document.querySelector('.search-container');

/*--search-btn--*/

searchBar.addEventListener('click', function() {
    searchInsideContainer.classList.remove('active-icon');
});

document.addEventListener('click', function(e) {
    if (!searchContainer.contains(e.target)) {
        searchInsideContainer.classList.add('active-icon');
    }
})

/*--show-clear-search--*/
searchBar.addEventListener('input', function() {
    clearBtn.classList.remove('active-icon');
});
searchBar.addEventListener('input', function() {
    if (searchBar.value === '') {
        clearBtn.classList.add('active-icon');
    }
});

//clear search
clearBtn.addEventListener('click', function() {
    searchBar.value = '';
    clearBtn.classList.add('active-icon');
});

//slidebar visibility

const hamburgerIcon = document.querySelector('.hamburger-menu');
const smallSidebar = document.querySelector('#small-sidebar');
const longSidebar = document.querySelector('#long-sidebar');
const videoGrid = document.querySelector('#video-grid');
const body = document.body;

hamburgerIcon.addEventListener('click', function() {

    smallSidebar.classList.toggle('active');
    longSidebar.classList.toggle('active');
    if (smallSidebar.classList.contains('active')) {
        videoGrid.classList.toggle('video-grid');
        videoGrid.classList.toggle('video-grid-after');
        body.style.paddingLeft = '260px';
    } else {
        videoGrid.classList.toggle('video-grid');
        videoGrid.classList.toggle('video-grid-after');
        body.style.paddingLeft = '96px';
    }
    /* if (smallSidebar.classList.contains('active')) {
    smallSidebar.classList.remove('active');
    longSidebar.classList.add('active');
    videoGrid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    body.style.paddingLeft = '96px';

} else if (longSidebar.classList.contains('active')) {
    longSidebar.classList.remove('active');
    smallSidebar.classList.add('active');

    videoGrid.style.gridTemplateColumns = '1fr 1fr 1fr';
    body.style.paddingLeft = '260px';
}*/
})

//sidebar show more

const showMore = document.querySelector('#show-more');
const hiddenDiv = document.querySelectorAll('#hiden-div');
const showMoreIcon = document.querySelector('.show-more-icon');

showMore.addEventListener('click', function() {
    for (let i = 0; i < hiddenDiv.length; i++) {
        hiddenDiv[i].classList.toggle('hiden-div');
    }

    if (showMoreIcon.src.endsWith('caret-down-light.svg')) {
        showMoreIcon.src = 'icons/caret-up-light.svg';
    } else {
        showMoreIcon.src = 'icons/caret-down-light.svg';
    }
})

const showChannel = document.querySelector('#show-more-channel');
const hiddenChnl = document.querySelectorAll('#hidden-channel');
const showMoreChannel = document.querySelector('.show-channel-icon');

showChannel.addEventListener('click', function() {
    for (let i = 0; i < hiddenChnl.length; i++) {
        hiddenChnl[i].classList.toggle('hiden-div');
    }

    if (showMoreChannel.src.endsWith('caret-down-light.svg')) {
        showMoreChannel.src = 'icons/caret-up-light.svg';
    } else {
        showMoreChannel.src = 'icons/caret-down-light.svg';
    }
})

//slidebar
const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('mousemove', function(e) {

    sliderContainer.scrollLeft -= e.movementX;
});