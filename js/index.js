

(function($){
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
    
    $('.dlsone .dl .dt').on('mouseenter',function(){
        let iIndex = $(this).index();
         $('.header .header-nav .nav .menus .dlsone .dd').css('display', 'block');
    })
    $('.dlsone .dl').on('mouseleave',function(){
        let iIndex = $(this).index();
        $('.header .header-nav .nav .menus .dlsone .dd').css('display', 'none');       
    })
     

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
    

    //第三部分，商品当鼠标滑过时，出现遮挡层。
    // $('.layout .gds-img').on('mouseenter',function(){
    //     let iIndex = $(this).index();
    //     $('.mia-icon2').css({display:'block'});
    // })
    // $('.layout .gds-img').on('mouseleave',function(){
    //     $('.mia-icon2').css({display:'none'});
    // })
   


    // let iIndex = $(this).index();
    //  $('layouta .gds-img').bind('mouseenter',function(){
        
    //       console.log(iIndex)
    //       $('.mia-icon2').css({display:'block'});
    //   })
    //   $('.layouta .gds-img').bind('mouseleave',function(){
    //       $('.mia-icon2').css({display:'none'});
    //   })

      


















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

