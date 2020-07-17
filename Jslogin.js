//Login function
function logIn(){
  var username = document.getElementById("name").value;
  var password = document.getElementById("password").value; 
      for(var i=0;i<user.length;i++){
        if((username===user[i].name+"-"+user[i].surname)&&(password===user[i].password)) {
           confirm('Welcome M./Mr :'+user[i].name+" "+user[i].surname);
           location.replace("file:///C:/Users/21620/Desktop/Yassine/index.html")
            return true;
        }
    } 
     {  
       confirm('Ouups sorry you are not a member');
          return false;
  }
}



