// Open info-box
$('.js-open-info-box').click(function() {
    window.setTimeout(function(){
        $('.js-open-info-box').fadeOut('slow')
    },0)
    window.setTimeout(function(){
        $('.info-box').slideDown('fast')
    },500)
})

// Close info-box
$('.js-close-info-box').click(function() {
    window.setTimeout(function(){
        $('.info-box').slideUp('slow')
    },0)
    window.setTimeout(function(){
        $('.js-open-info-box').fadeIn('slow')
    },500)
})