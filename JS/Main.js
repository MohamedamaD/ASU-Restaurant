$(()=>{
    // click Li 
    $('.toggleUl li').click(function(){
        $(this).addClass('Active').siblings().removeClass('Active');
    });
    // Slider Control
    // Get Data 
    let $sliderTextLi = $('.sliderText li'),
            $sliderCount = $('.sliderText li').length,
                count = 0, 
                    setIntervalTime = 4000,
                        $iconLeft = $('#header i.left'),
                            $iconRight = $('#header i.right');
        // setInterval function
        setInterval(function(){
            // Dynamic Condition 
            if($sliderCount - 1 > count){
                // Increment Counter
                ++count;
                // Edit Css To Move Box To Author
                $sliderTextLi.css({
                    transform : `translateX(calc(${count} * -100%)) `
                });
            }else{
                // Reset Counter
                count = 0;
                // Edit Css To Move Box To Author
                $sliderTextLi.css({
                    transform : `translateX(calc(${count} * -100%)) `
                });
            }
        },setIntervalTime);
        // Click Right Icon
        // Same Setting
        $iconRight.on('click',()=>{
            if ($sliderCount - 1 > count) {
                ++count;
                $sliderTextLi.css({
                    transform : `translateX(calc(${count} * -100%)) `
                });
            }else{
                count = 0;
                $sliderTextLi.css({
                    transform : `translateX(calc(${count} * -100%)) `
                });
            }
        });
        // Click Left Icon
        $iconLeft.on('click',()=>{
            // Count Don't === 0 
            if (count > 0 && $sliderCount > count) {
                // Decrement Counter
                count--;
                $sliderTextLi.css({
                    transform : `translateX(calc(${count} * -100%)) `
                });
            }else{
                // Get Last Box
                count = $sliderCount - 1;
                $sliderTextLi.css({
                    transform : `translateX(calc(${count} * -100%)) `
                });
            }
        });
        // Scroll Control
        $('.toggleUl li').click(function(){
            let position = $(this).data('section');
            $('html').animate({
                scrollTop : $(document).find(`section#${position}`).offset().top
            },500);
        });
        // Auto Slider 
        (function autoSlider(){
            // Target Active Box
            $('section#testimonials .Box .boxItem.Active').show(1000).delay(3000).hide(2000,function(){
                $(this).removeClass('Active').next().addClass('Active');
                // Trigger Function Agine 
                autoSlider();
            })
            // Reset Active To Box Number 1
            if ($('section#testimonials .Box .boxItem.Active').is(':last-child')) {
                $(this).removeClass('Active');
                        // Target Box Number 1
                $('section#testimonials .Box .boxItem:first-of-type').addClass('Active');
            }
        }());
        // Love Icon
        $('section#portfolio .imgshuffle .imageBox .Info i').click(function(){
            $(this).toggleClass('far fa-heart fa fa-heart');
            let countOfLove = $(this).text();
            if ($(this).hasClass('fa fa-heart')) {
                $(this).css('color','#F00');
                $(this).text(+countOfLove + 1);
            }
            else{
                $(this).css('color','#FFF');
                $(this).text(+countOfLove - 1);
            }
        });
        let $MyShffleBtn = $('section#portfolio .Btns button'),
                $boxShuffle = $('section#portfolio .imgshuffle .imageBox');
        $MyShffleBtn.click(function(){
            // Trigger Button
            $(this).addClass('Active').siblings().removeClass('Active');
            $boxShuffle.each((ind , ele)=>{
                if($(ele).hasClass($(this).data('fillter'))){
                    $(ele).show(1000);
                }else{
                    $(ele).hide(1000);
                }
            });
        });
        // Bars Icon
        $('header#header .barsIcon').click(function(){
            $('header#header .Navbar .toggleUl').slideToggle().css('display','flex');
        });
});
