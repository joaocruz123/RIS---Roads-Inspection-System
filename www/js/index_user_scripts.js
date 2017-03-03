/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_3"));  
    });
    
        /* button  .uib_w_10 */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_11").modal("toggle");  
    });
    
        /* button  .uib_w_9 */
    
    
        /* button  .uib_w_9 */
    
    
        /* button  .uib_w_31 */
    
    
        /* button  .uib_w_14 */
    
    
        /* button  .uib_w_14 */
    $(document).on("click", ".uib_w_14", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  .uib_w_14 */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  .uib_w_9 */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#painel_user"); 
    });
    
        /* button  .uib_w_30 */
    $(document).on("click", ".uib_w_30", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#sobre"); 
    });
    
        /* button  .uib_w_42 */
    $(document).on("click", ".uib_w_42", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* graphic button  Localização do Ônibus */
    $(document).on("click", ".uib_w_39", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#localizacao"); 
    });
    
        /* graphic button  Denúncia */
    $(document).on("click", ".uib_w_40", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#denuncia"); 
    });
    
        /* graphic button  Usuarios Online */
    $(document).on("click", ".uib_w_70", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_71").modal("toggle");  
    });
    
        /* graphic button  Usuarios Online */
    $(document).on("click", ".uib_w_76", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_71").modal("toggle");  
    });
    
        /* graphic button  Chat */
    $(document).on("click", ".uib_w_41", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chat"); 
    });
    
        /* button  .uib_w_31 */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /*global activate_page */
         activate_page("#painel_user"); 
    });
    
        /* button  .uib_w_77 */
    $(document).on("click", ".uib_w_77", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#principal"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
