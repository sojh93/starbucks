const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); /* html 속성 부여 */
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if((window.scrollY) > 500) {
        console.log('scrollY 값!!' ,window.scrollY)
        // 배지 숨기기
        gsap.to(요소, 지속시간, 옵션);
    } else {
        // 배지 보이기
        
    }
}, 300));  /* 300 단위는 밀리세컨즈. 따라서, 0.3초가 됨 */
// _.throttle(함수, 시간)