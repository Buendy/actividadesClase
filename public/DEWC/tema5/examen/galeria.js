$(function(){

    $('img').eq(1).hide();
    $('img').eq(2).hide();
    $('img').eq(3).hide();
    $('img').eq(4).hide();
    $('img').eq(5).hide();
    $('img').eq(6).hide();

    $('body').click(animacion);

    function animacion(){
        $('img').eq(0).hide(3500, function(){
            $('img').eq(0).insertAfter($('[src=\'7.jpg\']'));
            $('[src=\'2.jpg\']').show(3500, function(){
                $('[src=\'2.jpg\']').hide(3500);
                $('[src=\'2.jpg\']').insertAfter($('[src=\'1.jpg\']'));
                $('[src=\'3.jpg\']').show(3500, function(){
                    $('[src=\'3.jpg\']').hide(3500);
                    $('[src=\'3.jpg\']').insertAfter($('[src=\'2.jpg\']'));
                    $('[src=\'4.jpg\']').show(3500, function(){
                        $('[src=\'4.jpg\']').hide(3500);
                        $('[src=\'4.jpg\']').insertAfter($('[src=\'3.jpg\']'));
                        $('[src=\'5.jpg\']').show(3500, function(){
                            $('[src=\'5.jpg\']').hide(3500);
                            $('[src=\'5.jpg\']').insertAfter($('[src=\'4.jpg\']'));
                            $('[src=\'6.jpg\']').show(3500, function(){
                                $('[src=\'6.jpg\']').hide(3500);
                                $('[src=\'6.jpg\']').insertAfter($('[src=\'5.jpg\']'));
                                $('[src=\'7.jpg\']').show(3500, function(){
                                    $('[src=\'7.jpg\']').hide(3500);
                                    $('[src=\'7.jpg\']').insertAfter($('[src=\'6.jpg\']'));
                                    $('img').eq(0).show(3500);
                                    animacion();
                                });
                            });
                        });
                    });
                });
            });
        });

    }

});