

(function($){
    $.noConflict();
    //购物车消失
    $(document).ready(function(){
        $('.func-cart').bind('mouseover', function(){
            $('.cart-more').css('display','block');
            $('.emptybox').css('display','block');
            $('.emempoty').css('display','block');
       });
    $('.func-cart').bind('mouseleave', function(){
            $('.cart-more').css('display','none');
            $('.emptybox').css('display','none');
            $('.emempoty').css('display','block');
    })

    //正品保证clearInterval(iTimer);
    $('.promise').bind('mouseenter',function(){             
            $('.choice').css('display','block');           
    }) 
    $('.promise').bind('mouseleave',function(){
        var iTimer=setInterval(function(){ 
            $('.choice').css('display','none');
      },3000)  
    })
   
    //选项卡
    // $('.header .header-nav .nav .menus .dlsone .dl').bind('mouseenter',function(){
    //     let iIndex = $(this).index();
    //     console.log(1);
    //      $('.header .header-nav .nav .menus .gooddds').css('display', 'block');
    // })
    // $('.dlsone .dl').bind('mouseleave',function(){
    //     let iIndex = $(this).index();
    //     $('.header .header-nav .nav .menus .gooddds').css('display', 'none');       
    // })


    //按照小米方式做选项卡

        let 
        oMenuHover = $('.header .header-nav .nav .menus .dlsone .dl'),
        oGoods     = $('.header .header-nav .nav .menus .gooddds'),
        aGoodsdd   = $('.gooddds .dd');
      
        let iTimer = null;
        oMenuHover.on('mouseenter',function(){
            // clearTimeout(iTimer);
            oGoods.css('display', 'block');
            let iIndex = oMenuHover.index($(this));
            console.log(1)
            aGoodsdd.css('display', 'none').eq(iIndex).css('display', 'block');
        });
        oMenuHover.on('mouseleave',function(){
            iTimer = setTimeout(function(){
                 oGoods.animate({ height: 0 }, 120, function () {
                                 $(this).css('display', 'none');
                    });                    
                //  oGoods.style.position ='15 0';
           },4000)
        });
        // oGoods.hover(function () {
        //        clearTimeout(iTimer);
        //      }, function () {
        //                oGoods.stop(true).animate({ height: 0 }, 120, function () {
        //                $(this).css('display', 'none');
        //          });
        //  });


    //小米粘过来的
    // (function ($) {
    //     $.noConflict();
    //     $(function () {
    //         let
    //             oMenuHover = $('#menu .hover'),
    //             oGoods     = $('#goods'),
    //             aGoodsUl   = $('#goods ul');
            
    //         let iTimer = null;
    //         oMenuHover.on('mouseenter', function () {
    //             clearTimeout(iTimer);
    //             oGoods.css('display', 'block').stop(true).animate({height: 220},120);
    //             let iIndex = oMenuHover.index($(this));
    //             aGoodsUl.css('display', 'none').eq(iIndex).css('display', 'block');
    //         });
    
    //         oMenuHover.on('mouseleave', function () {
    //             iTimer = setTimeout(function () {
    //                 oGoods.stop(true).animate({ height: 0 }, 120, function () {
    //                     $(this).css('display', 'none');
    //                 });
    //             }, 50);
    //         });
    
    //         oGoods.hover(function () {
    //             clearTimeout(iTimer);
    //         }, function () {
    //             oGoods.stop(true).animate({ height: 0 }, 120, function () {
    //                 $(this).css('display', 'none');
    //             });
    //         });
            
    //     });
    // })(jQuery);
     //小米粘过来的

    //轮播图
    function lunbotu(){  
        $(".picBox").animate({margintop:"-600px" },4000,"linear",function(){  
            $(this).css({margintop:"0px"});  
            $(this).children("li").first().remove().clone(true).appendTo(".picBox");  
        });  
    }  
    var startRollOne=setInterval(lunbotu,3000);  
    $(".carousel").hover(function () {  
        clearInterval(startRollOne);  
    }, function () {  
        startRollOne=setInterval(lunbotu,3000);  
    });

    // $('.carousel .flash_btn').on('mouseenter' ,function(){
    //     this.btns.forEach((v,k) =>{
	// 		v.className = '';
	// 		this.btns[this.index].className = 'active';
	// 	})
    // })
    

    //第三部分，商品当鼠标滑过时，出现遮挡层。 老师在css中直接设置了opacity为.5
    // let iIndex = $(this).index();
    //  $('layouta .gds-img').bind('mouseenter',function(){
        
    //       console.log(iIndex)
    //       $('.mia-icon2').css({display:'block'});
    //   })
    //   $('.layouta .gds-img').bind('mouseleave',function(){
    //       $('.mia-icon2').css({display:'none'});
    //   })

    //侧边栏

    var navOffset=$(".header-nav").offset().top;
$(window).scroll(function(){  
    scrollPos=$(window).scrollTop(); 
    // console.log(navOffset); 
    if(scrollPos >=navOffset){  
        $('.sidebar').css('display', 'block'); 
    }else{  
        $('.sidebar').css('display', 'none');  
    }  
});




    
// var oSelefive = $('.selection-five'); 
// var aSelefive = oSelefive.find('a'); 
// var ofloor = $('.floor'); 
// aSelefive.click(function() {
//     let index=$(this).index();
//     let change = '870';
//     // $('body,html').animate({"scrollTop": change}, 200);
//     $('body,html').animate({"scrollTop": change},500);
//     $(this).addClass('anchor').siblings().removeClass('anchor');
    
// });
//...................................判断吸顶效果........................
// var navOffset=$(".selection-five").offset().top; 
// $(window).scroll(function(){  
//     scrollPos=$(window).scrollTop(); 
//     // console.log(navOffset); 
//     if(scrollPos >=navOffset){  
//         oSelefive.addClass('fixed'); 
//     }else{  
//         oSelefive.removeClass('fixed'); 
//     }  
// });

      














  })
})(jQuery);

// //搜索数据，同源策略
// var  oSearchList    = $('.search-list');//获取消失盒子的li
// var  oSearchContent = $('.search-content');
// oSearchContent.oninput = oSearchContent.onpropertychange =function(){
//     var sVal = this.value;
//     oSearchList.innerHTML = '';
//     if( sVal !== '' ){
//         var oScript = document.createElement('script');
//         oScript.src='https://search.mi.com/search/expand?keyword='+ sVal +'&jsonpcallback=xmsearch';     
//         document.body.appendChild(oScript);
//     }

// };
// //声明回调函数
// function xmsearch(data){
//     data.forEach((v) => {
//         var oLi = document.createElement('li');
//         oLi.innerHTML = `<span>${v.Key}</span>-<span>${v.Rst}</span>`;
//         oSearchList.appendChild(oLi);
//     })
// }

