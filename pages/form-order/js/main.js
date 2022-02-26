
(function ($) {
    "use strict";
    /*==================================================================
    [ Validate after type ]*/
    var input = $('.validate-input .input100');
    $('.validate-input .input100').each(function(){
        $(this).on('change', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
            var check = true;
            
            for(var i=0; i<input.length; i++) {
                console.log("forloop")
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
                console.log(input[i], validate(input[i]))
            }
            if(check == true){
                $(".contact100-form-btn").prop("disabled",false);
            }
            else{
                $(".contact100-form-btn").prop("disabled",true);
            }
            
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        // validateSelect(document.getElementsByClassName("js-select2")[0]);
        return check;
    });


    function validateSelect(select){
        if(select.selectedIndex===0){
            return false;
            // showValidate(select);
        }
    }

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });


     function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else if($(input).attr('name') == 'phone'){
            var vnf_regex = /(^(\+84){1}(3|5|7|8|9))+([0-9]{8})$/;
            if(!$(input).val().trim().match(vnf_regex)) {
                return false;
            }
        } 
		else if($(input).attr('name')=='service'){
           return (validateSelect(input));
        }
        else if($(input).attr('name')=='message'){
            return true;
        }
        else{
            if($(input).val().trim() == ''){  
                return false;  
            }  
        }
        return true;
    }




    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }
    
    

})(jQuery);