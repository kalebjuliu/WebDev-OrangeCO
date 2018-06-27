const items = document.querySelectorAll('.item');
for(let i = 0 ; i < items.length; i++ ){
  setTimeout(function(){
    items[i].classList.add('is-showing')
  },350 * [i]);
}

const items1 = document.querySelectorAll('.item-1');
for(let i = 0 ; i < items1.length; i++ ){
  setTimeout(function(){
    items1[i].classList.add('is-showing-1')
  },400 * [i]);
}



anime({
  targets: '#box-1 .colorLayer',
  left: '0px',
  easing: 'easeInOutQuad'
});
anime({
  targets: '#box-1 .colorLayer',
  left: '650px',
  easing: 'easeInOutQuad',
  delay: 500
});
anime({
  targets: '#box-1 .title',
  left: '0px',
  easing: 'easeInOutQuad',
  delay: 400
});

anime({
  targets: '#box-2 .colorLayer',
  left: '0px',
  easing: 'easeInOutQuad'
});
anime({
  targets: '#box-2 .colorLayer',
  left: '650px',
  easing: 'easeInOutQuad',
  delay: 500
});
anime({
  targets: '#box-2 .title',
  left: '0px',
  easing: 'easeInOutQuad',
  delay: 400
});
anime({
  targets: '.box-desc',
  opacity: 1,
  easing: 'easeInOutQuad',
  delay: 1000
});



var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '.model-1',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    delay: 1800
  })
  .add({
    targets: '.model-2',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    offset: '-=600'
  })
  .add({
    targets: '.model-3',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    offset: '-=700'
  })
  .add({
    targets: '.model-4',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    offset: '-=800'
  })
  .add({
    targets: '.model-5',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    offset: '-=900'
  })
  .add({
    targets: '.model-6',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    offset: '-=1000'
  })
  .add({
    targets: '.model-7',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    offset: '-=1100'
  })
  .add({
    targets: '.model-8',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    offset: '-=1200'
  })
  .add({
    targets: '.model-9',
    left: '0px',
    opacity: 1,
    easing: 'easeOutExpo',
    offset: '-=1300'
  });
