$("ul").on("click","li",function(){
    $(this).toggleClass('done');
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
    var text = $(this).val();
    if(event.which === 13){
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + text + "</li>");
        $(this).val("");
    } 
});

$('.fa-plus').click(function(){
    $('input').fadeToggle(300);
});