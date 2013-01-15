/*
    jQuery Mobile Portfolio
    Author: Sam Deering (samdeering.com)
    Article: jquery4u.com/mobile/jquery-mobile-portfolio/
    Demo: jquery4u.com/demos/mobileportfoliosite/
*/

(function($,W,D,undefined)
{
    //manage portfolio button clicks to populate page content

    W.JQMP = W.JQMP || {};
    W.JQMP = {

        init: function()
        {

            //contact page
            $('a[href=#contact]').bind('click', function(e)
            {
                $.getScript('js/jquery.validate.min.js', function()
                {
                    $.getScript('js/contact.js', function()
                    {
                        $.mobile.hidePageLoadingMsg();
                    });
                });
            });

            //portfolio gallery pages
            $('a[href=#portfolio3]').bind('click', function(e)
            {
                var myPhotoSwipe1 = $("#gallery1 a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
            });

            //portfolio gallery pages
            $('a[href=#portfolio4]').bind('click', function(e)
            {
                var myPhotoSwipe2 = $("#gallery2 a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
            });

            //social links - version 1 all links open direct in new window
            $('#social-links a').bind('click', function(e)
            {
                e.preventDefault();
                var sn = $(this).attr('href').replace('#','');
                console.log(sn);
                W.location = W.JQMP.SETTINGS.SOCIAL[sn];
            });

        }
    }

    $(D).ready(function()
    {
        JQMP.init();
    });

})(jQuery,window,document);