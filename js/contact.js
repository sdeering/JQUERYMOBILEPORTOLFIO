/*
    jQuery Mobile Portfolio
    Author: Sam Deering (samdeering.com)
    Article: jquery4u.com/mobile/jquery-mobile-portfolio/
    Demo: jquery4u.com/demos/mobileportfoliosite/
*/

(function($,W,D,undefined)
{
    //contact page form validation

        /* FORM VALIDATION
        --------------------------------------------------------------------------------------*/

        var $theForm = $("form#contact");
        $theForm.find(':input').removeAttr('disabled'); //unlock form

         //form validation rules
         $theForm.validate({
             rules:
             {
                    name:
                    {
                        required: true,
                        minlength: 3,
                        maxlength: 50
                    },
                    email:
                    {
                        email: true,
                        required: true
                    },
                    message:
                    {
                        required: true,
                        minlength: 10
                    }
             },
             submitHandler: function(form)
             {
                var formData = $theForm.serialize(); //get form data

                $theForm.find('.submit-error').remove(); //clear previous error msgs
                $theForm.find(':input').attr('disabled', 'disabled'); //lock form

                $.ajax(
                {
                    type: "POST",
                    url: '../php/contact.php',
                    dataType: "html",
                    data: formData+'&contact_name='+JQMP.SETTINGS.CONTACT.name+'&contact_email='+JQMP.SETTINGS.CONTACT.email,
                    success: function(ret)
                    {
                        console.dir(ret);
                        if(ret == 'true')
                        {
                            alert('Your message was sent.');
                        }
                        else
                        {
                            if (ret == 'false')
                            {
                                alert('Oops there seems to be a problem please try again.');
                            }
                            else
                            {
                                alert(ret);
                            }

                        }
                    },
                    error: function(xhr, textStatus, errorThrown)
                    {
                        console.log(xhr, textStatus, errorThrown + 'error');
                        return false;
                    },
                    complete: function()
                    {
                        $theForm.find(':input').removeAttr('disabled'); //unlock form
                    }
                });
             }
         });

})(jQuery, window, document);