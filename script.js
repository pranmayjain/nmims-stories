'use strict';

let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let rightNav = document.querySelector('.right-nav');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});

const stories = {
    1: {'title': 'College Funeral',
        'len': 8},
    2: {'title': 'Humans can Lick too',
        'len': 4},
    3: {'title': 'Wrong Email Address',
        'len': 3},
    4: {'title': 'Last Night',
        'len': 3},
    5: {'title': 'Examhall',
        'len': 7},
    6: {'title': 'Solo Trip',
        'len': 3},
    7: {'title': 'Love Story of Two IITians',
        'len': 7},
    8: {'title': 'Strange Partner',
        'len': 5},
    9: {'title': 'Hey Are you Single',
        'len': 8},
    10: {'title': 'Kalank',
        'len': 4},
    11: {'title': 'Terror on the Fort Part - 1',
        'len': 9},
    12: {'title': 'Trumpets of the Gods',
        'len': 9},
    13: {'title': 'Choti Diwali',
        'len': 10},
    14: {'title': 'Gatecrash',
        'len': 10},
    15: {'title': 'Kedarnath - Way to Heaven',
        'len': 10},
    16: {'title': 'Yeh No. 1 Yaari Hai',
        'len': 5},
    17: {'title': 'Truth or Dare',
        'len': 7},
    18: {'title': 'Mystery Girlfriend',
        'len': 9},
    // 19: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 20: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 21: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 22: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 23: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 24: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 25: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 26: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 27: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 28: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 29: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 30: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 31: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 32: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 33: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 34: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 35: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 36: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 37: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 38: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 39: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 40: {'title': 'Trumpets of the Gods',
    //     'len': 9},
    // 41: {'title': 'Trumpets of the Gods',
    //     'len': 9},
};

let lenObj = Object.keys(stories).length;
let storyTitle;

function searchBar() {
    let search = document.getElementById('search').value.toUpperCase();

    for (let i = 1; i <= lenObj; i++) {
        if(search === stories[i].title.toUpperCase()){
            localStorage["storyName"] = stories[i].title;
            storyTitle = localStorage["storyName"];
            document.title = storyTitle;
            location.href = 'display.html';
        }
    }
}

function storiesPage(clicked_id) {
    localStorage["storyName"] = document.getElementById(clicked_id).innerText;
    location.href = 'display.html';
}

function pageUpdate() {
    let image = document.getElementById('img-change');
    storyTitle = localStorage["storyName"];
    document.title = storyTitle;
    document.querySelector('.story-title').innerText = storyTitle;
    image.src = `/Stories/${storyTitle}/1.png`;
}

function leftSwipe() {
    let image = document.getElementById('img-change');
    let ttl = storyTitle;
    let lnt;
    const path = document.getElementById('img-change').src;
    let parts = path.split('.png');
    parts = parts[0].split('/');
    let l = parts.length;
    l = parseInt(parts[l-1]);

    for (let i = 1; i <= lenObj; i++) {
        if(ttl === stories[i].title)
            lnt = stories[i].len;
    }
    
    if (l > 1) {
        image.src = `/Stories/${storyTitle}/${l-1}.png`;
        l--;
    }
}

function rightSwipe() {
    let image = document.getElementById('img-change');
    let ttl = storyTitle;
    let lnt;
    const path = document.getElementById('img-change').src;
    let parts = path.split('.png');
    parts = parts[0].split('/');
    let l = parts.length;
    l = parseInt(parts[l-1]);

    for (let i = 1; i <= lenObj; i++) {
        if(ttl === stories[i].title)
            lnt = stories[i].len;
    }
    
    if (l < lnt) {
        image.src = `/Stories/${storyTitle}/${l+1}.png`;
        l++;
    }
}
