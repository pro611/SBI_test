const left_1 = document.getElementById('bt_left1');
const right_1 = document.getElementById('bt_right1');
const left_2 = document.getElementById('bt_left2');
const right_2 = document.getElementById('bt_right2');
const left_3 = document.getElementById('bt_left3');
const right_3 = document.getElementById('bt_right3');

const bt_box = document.getElementById('bt_box');
const bt_b1 = document.getElementById('bt_b1');
const bt_b2 = document.getElementById('bt_b2');
const bt_b3 = document.getElementById('bt_b3');

const s_sign1 = document.getElementById('s_sign1');
const s_sign2 = document.getElementById('s_sign2');
const s_sign3 = document.getElementById('s_sign3');

const main_slide_1 = document.getElementById('main_slide_1');
const main_img1 = document.getElementById('main_img1');
const main_img2 = document.getElementById('main_img2');
const main_img3 = document.getElementById('main_img3');
const main_img4 = document.getElementById('main_img4');
const main_img5 = document.getElementById('main_img5');

// 왼쪽으로
left_2.addEventListener('click', function () {
    bt_box.style.transform = 'translateX(1200px)';
    s_sign1.style.backgroundColor = '#5D40FF';
    s_sign2.style.backgroundColor = '#000';
    s_sign3.style.backgroundColor = '#000';

    bt_b1.style.visibility = 'visible';
    bt_b2.style.visibility = 'hidden';
    bt_b3.style.visibility = 'hidden';

    main_slide_1.style.transform = 'translateX(701px)';

    main_img2.style.width = '1028px';
    main_img2.style.height = '586px';
    
    main_img3.style.width = '671px';
    main_img3.style.height = '382px';
});

// 왼쪽에서 오른쪽으로
right_1.addEventListener('click', function () {
    bt_box.style.transform = 'translateX(0px)';
    s_sign1.style.backgroundColor = '#000';
    s_sign2.style.backgroundColor = '#5D40FF';
    s_sign3.style.backgroundColor = '#000';

    bt_b1.style.visibility = 'hidden';
    bt_b2.style.visibility = 'visible';
    bt_b3.style.visibility = 'hidden';

    main_slide_1.style.transform = 'translateX(0px)';

    main_img3.style.width = '1028px';
    main_img3.style.height = '586px';
    
    main_img2.style.width = '671px';
    main_img2.style.height = '382px';
});


// 오른쪽으로
right_2.addEventListener('click', function () {
    bt_box.style.transform = 'translateX(-1200px)';
    s_sign1.style.backgroundColor = '#000';
    s_sign2.style.backgroundColor = '#000';
    s_sign3.style.backgroundColor = '#5D40FF';

    bt_b1.style.visibility = 'hidden';
    bt_b2.style.visibility = 'hidden';
    bt_b3.style.visibility = 'visible';

    main_slide_1.style.transform = 'translateX(-701px)';

    main_img4.style.width = '1028px';
    main_img4.style.height = '586px';
    
    main_img3.style.width = '671px';
    main_img3.style.height = '382px';
});

// 오른쪽에서 왼쪽으로
left_3.addEventListener('click', function () {
    bt_box.style.transform = 'translateX(0px)';
    s_sign1.style.backgroundColor = '#000';
    s_sign2.style.backgroundColor = '#5D40FF';
    s_sign3.style.backgroundColor = '#000';

    bt_b1.style.visibility = 'hidden';
    bt_b2.style.visibility = 'visible';
    bt_b3.style.visibility = 'hidden';

    main_slide_1.style.transform = 'translateX(0px)';

    main_img3.style.width = '1028px';
    main_img3.style.height = '586px';
    
    main_img4.style.width = '671px';
    main_img4.style.height = '382px';
});




// 마우스오버
const c1_img_c1 = document.getElementById('c1_img_c1');
const c1_img_c2 = document.getElementById('c1_img_c2');
const c1_img_c3 = document.getElementById('c1_img_c3');
const c1_img_c4 = document.getElementById('c1_img_c4');
const c1_img_c5 = document.getElementById('c1_img_c5');
const c1_img_c6 = document.getElementById('c1_img_c6');
const c1_bt_1 = document.getElementById('c1_bt_1');
const c1_bt_2 = document.getElementById('c1_bt_2');
const c1_bt_3 = document.getElementById('c1_bt_3');
const c1_bt_4 = document.getElementById('c1_bt_4');
const c1_bt_5 = document.getElementById('c1_bt_5');
const c1_bt_6 = document.getElementById('c1_bt_6');

c1_img_c1.addEventListener('mouseenter', () => {
    c1_bt_1.style.backgroundColor = '#000';
    c1_bt_1.style.color = '#fff';
});
c1_img_c1.addEventListener('mouseleave', () => {
    c1_bt_1.style.backgroundColor = '';
    c1_bt_1.style.color = '';
});

c1_img_c2.addEventListener('mouseenter', () => {
    c1_bt_2.style.backgroundColor = '#000';
    c1_bt_2.style.color = '#fff';
});
c1_img_c2.addEventListener('mouseleave', () => {
    c1_bt_2.style.backgroundColor = '';
    c1_bt_2.style.color = '';
});

c1_img_c3.addEventListener('mouseenter', () => {
    c1_bt_3.style.backgroundColor = '#000';
    c1_bt_3.style.color = '#fff';
});
c1_img_c3.addEventListener('mouseleave', () => {
    c1_bt_3.style.backgroundColor = '';
    c1_bt_3.style.color = '';
});

c1_img_c4.addEventListener('mouseenter', () => {
    c1_bt_4.style.backgroundColor = '#000';
    c1_bt_4.style.color = '#fff';
});
c1_img_c4.addEventListener('mouseleave', () => {
    c1_bt_4.style.backgroundColor = '';
    c1_bt_4.style.color = '';
});

c1_img_c5.addEventListener('mouseenter', () => {
    c1_bt_5.style.backgroundColor = '#000';
    c1_bt_5.style.color = '#fff';
});
c1_img_c5.addEventListener('mouseleave', () => {
    c1_bt_5.style.backgroundColor = '';
    c1_bt_5.style.color = '';
});

c1_img_c6.addEventListener('mouseenter', () => {
    c1_bt_6.style.backgroundColor = '#000';
    c1_bt_6.style.color = '#fff';
});
c1_img_c6.addEventListener('mouseleave', () => {
    c1_bt_6.style.backgroundColor = '';
    c1_bt_6.style.color = '';
});




const news_text1 = document.getElementById('news_text1');
const news_text2 = document.getElementById('news_text2');
const news_text3 = document.getElementById('news_text3');
const news_text4 = document.getElementById('news_text4');

const news_img_c = document.getElementById('news_img_c');

const news_text_c1 = document.getElementById('news_text_c1');
const news_text_c2 = document.getElementById('news_text_c2');
const news_text_c3 = document.getElementById('news_text_c3');
const news_text_c4 = document.getElementById('news_text_c4');

news_text1.addEventListener('mouseenter', () => {
    news_img_c.style.transform = 'translateY(0px)';

    news_text_c1.style.backgroundColor = '#DEE0F2';
    news_text_c2.style.backgroundColor = '';
    news_text_c3.style.backgroundColor = '';
    news_text_c4.style.backgroundColor = '';
});
news_text2.addEventListener('mouseenter', () => {
    news_img_c.style.transform = 'translateY(-480px)';
    
    news_text_c1.style.backgroundColor = '';
    news_text_c2.style.backgroundColor = '#DEE0F2';
    news_text_c3.style.backgroundColor = '';
    news_text_c4.style.backgroundColor = '';
});
news_text3.addEventListener('mouseenter', () => {
    news_img_c.style.transform = 'translateY(-960px)';
    
    news_text_c1.style.backgroundColor = '';
    news_text_c2.style.backgroundColor = '';
    news_text_c3.style.backgroundColor = '#DEE0F2';
    news_text_c4.style.backgroundColor = '';
});
news_text4.addEventListener('mouseenter', () => {
    news_img_c.style.transform = 'translateY(-1440px)';

    news_text_c1.style.backgroundColor = '';
    news_text_c2.style.backgroundColor = '';
    news_text_c3.style.backgroundColor = '';
    news_text_c4.style.backgroundColor = '#DEE0F2';
});






// Intersection Observer 설정
const observerOptions = {
    root: null, // 뷰포트 기준
    rootMargin: '0px', // 관찰 범위 조정
    threshold: 0.1, // 10% 보일 때 트리거
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // hidden 클래스를 visible로 변경
        if (entry.target.classList.contains('hidden')) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        }
  
        // hidden2 클래스를 visible2로 변경
        if (entry.target.classList.contains('hidden2')) {
          entry.target.classList.add('visible2');
          entry.target.classList.remove('hidden2');
        }
  
        // 한 번만 실행되도록 관찰 중지
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 모든 타겟 요소 선택
  const targets = document.querySelectorAll('.hidden, .hidden2');
  
  // Intersection Observer로 관찰 시작
  targets.forEach(target => observer.observe(target));