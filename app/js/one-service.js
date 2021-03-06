import {webp, headerPopup, vhFix, instagramSlider, initModal, openModal} from './base';
import Swiper, {Pagination} from "swiper";

webp();
headerPopup();
vhFix();

Swiper.use(Pagination);

instagramSlider();

document.querySelectorAll('#svg-map path').forEach(path => {
  document.querySelectorAll(`[data-path-ref="${path.getAttribute('id')}"]`).forEach(infoBlock => {
    if (!infoBlock || infoBlock.classList.contains('disable')) return;
    path.addEventListener('mouseenter', () => {
      // infoBlock.classList.add('active');
      path.classList.add('active');
    });
    path.addEventListener('mouseleave', () => {
      // infoBlock.classList.remove('active');
      path.classList.remove('active');
    });
  });
});

const listController = document.getElementById('js__extend-list-controller')
if (listController) {
  listController.addEventListener('click', ({ target }) => {
    const listControl = document.getElementById('js__extend-list-control')
    if (listControl) 
      listControl.classList.add('extended');
    target.parentNode.removeChild(target);
  });
}

initModal('.modal-reserve');
document.querySelectorAll('.js__open-modal-reserve').forEach(el =>
  el.addEventListener('click', e => {
    openModal('.modal-reserve');
    e.stopPropagation();
  })
);
