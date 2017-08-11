function openPortfolio(evt, portfolioName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(portfolioName).style.display = "block";
    evt.currentTarget.className += " active";
}

function validate()
      {
         var emailID = document.myForm.femail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
      
         if( document.myForm.fname.value == "" )
         {
            alert( "Please provide your name!" );
            document.myForm.fname.focus() ;
            return false;
         }
         
         if( document.myForm.femail.value == "" )
         {
            alert( "Please provide your Email!" );
            document.myForm.femail.focus() ;
            return false;
         }
          if( document.myForm.fmessage.value == "" )
         {
            alert( "Please type your message!" );
            document.myForm.fmessage.focus() ;
            return false;
         }

         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email!")
            document.myForm.EMail.focus() ;
            return false;
         }
         
         
         return( true );
      };var obj ={"data": [
{
    "itemClass":"apps col-xs-6",
    "image_src": "image/app-work.png",
    "title": "Our app work"
  },
  {
    "itemClass": "web col-xs-6",
    "image_src": "image/web-work.png",
    "title": "Our web work"
  },
  {
    "itemClass": "icons col-xs-6",
    "image_src": "image/icon-work.png",
    "title": "Our icon work"  
  }
]}
var x='';
for(var i=0;i<obj.data.length;i++){
  x= obj.data[i].image_src;
  y=obj.data[i].title;
 console.log(obj.data[i].image_src, obj.data[i].title);
   $(document).ready(function(){
    $("#btn1").click(function(){
        $("#json").append('<li><img src='+x+'><p>'+y+'</p></li>');
    });
    $("#btn1").click(function(){
        $("#desapire").remove();
     });

   });
    
    };
        

