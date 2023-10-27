var links = {
    setcolor:function(color){
        $('a').css('color', color);
        //$('a')는 웹페이지의 모든 a를 제이쿼리로 검색하겠다는 뜻.

        // var alist = document.querySelectorAll('a');
        // i = 0;
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1
        // }
    }   
}
    var body = {
        setcolor: function(color){
            //document.querySelector('body').style.color = color;
            $('body').css('color', color);
        },
        setbackgroundColor: function(color){
            //document.querySelector('body').style.backgroundColor = color;
            $('body').css('backgroundColor', color);
        }
    }
function nightdayhandler(self){ //self 라는 매개변수에 this가 들어가게 됨.
    if(self.value ==='night'){
        body.setbackgroundColor('black');
        body.setcolor('white');
        self.value = 'day';

        links.setcolor('powderblue');

        } else {
        body.setbackgroundColor('white');
        body.setcolor('black');
        self.value = 'night';

        links.setcolor('blue');
        }
    }
    
    
