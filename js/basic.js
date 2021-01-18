$(document).ready(function(){
    
            $('#fullpage').fullpage({
				scrollBar:true/*fullpage 사용시 반드시 적용되는 옵션*/
			})//end fullpage
			
			$('.produt').bxSlider({auto:true,
			mode:'fade'
			})// end bxslide

			$('#brand').bxSlider({auto:true,
			slideWidth:380,
			maxSlides:3,
			minSlides:3,
			slideMargin:20,
			moveSlides:1, /*특별히 지정하지 않으면 maxSlide 갯수만큼*/
			pager:false
			})
			
            $('.bt').on('click',function(){
                $('header').toggleClass('on');
                $('.menu').toggleClass('on');
            })// click event

			console.log($(window).height())
			console.log($('body').height())

			/*위로가기 버튼 */
			$('.quickmenu>a:first').on('click',function(event){
				$('html,body').animate({scrollTop:0},600)
				event.preventDefault()
			})

			/*페이지 하단 이동 버튼 */
			$('.quickmenu>a:last').on('click',function(event){
				var wheight=$(window).height() // 창의 높이값
				var bheight=$('body').height() // 페이지 전체 높이
				$('html,body').animate({scrollTop:bheight-wheight},600)
				event.preventDefault()
			})
			
			/*다음코드를 입력하여 콘솔에서 확인하세요..
			$(window).scrollTop() 은 창의 스크롤바 위치를 알고 싶을때 사용
			반대로 $(window).scrollTop(200) 이렇게 입력하시면 
			윈도우 스크롤바탑의 위치를 200 으로 지정. */
			$(window).on('scroll',function(){
				// 스크롤이 발생되면 .quickmenu 가 보이게 합니다.
				// 스크롤이 발생되었다는 의미는 $( window).scrollTop() 의 위치가 //0 보다 크다는 의미로 잡으면 되겠죠..
				
				if ($(window).scrollTop()>0) // 스크롤의 위치가 0보다 크면
				{
					$('.quickmenu').show()
				}else{
					$('.quickmenu').hide()
				}
				console.log($(window).scrollTop())
			})

        })//end ready