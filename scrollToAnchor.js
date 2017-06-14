window.onload = function () {
	var M = location.hash;//获取#coupon样子的哈希值
	if(M!=''){
		$('html, body').animate({scrollTop: $(M).offset().top
        }, 500);
	}
}