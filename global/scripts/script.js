$('#open').click(function(){
    $('.search-div').toggleClass('hidden');
    $(this).toggleClass('hidden');
})
$('#closed').click(function(){
    $('.search-div').toggleClass('hidden');
    $('#open').toggleClass('hidden');
})