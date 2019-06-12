$(document).ready(function() {

    $('[name=q]').keyup(function () {

        if($(this).val().length > 2 ){
            console.log($(this).val());
            $.ajax({
                url: "/posts",
                type: 'GET',
                dataType: 'script',
                data: { q: $(this).val() }
            });
        }
        if(!this.value){
            $.ajax({
                url: "/posts",
                type: 'GET',
                dataType: 'script',
            });           
        }
    });
}) 

