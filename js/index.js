//index.js
console.log("test");


let once01 = false;
	window.addEventListener('scroll', function () {
		
		// ターゲットの画面トップからの距離
		taeget_position01 = document.querySelector('.box').getBoundingClientRect().top;
		
		// 画面トップからの距離から画面の高さより小さければ実行する
			if (taeget_position01 <= window.innerHeight && once01 !== true) {
				once01 = true;
                //cssでアニメーションを追加
				document.querySelector(".box").style.animation = "SlideIn 2s";
			}
	});