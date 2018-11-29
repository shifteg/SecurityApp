//var x='/users/locationcar';
// var xc=setloc();
// function setVariable(){
    
//     //var a = xc;

//     return setloc();
//   }

//   function getVariable(){
//     return setVariable();
//   }
  
function StartConnection(child)
{
    var config = {
        apiKey: "AIzaSyCNUUjo5aSLQnLluxYjxw1CH4bPPAqU9TQ",
        authDomain: "standout-26f0f.firebaseapp.com",
        databaseURL: "https://standout-26f0f.firebaseio.com",
        projectId: "standout-26f0f",
        storageBucket: "standout-26f0f.appspot.com",
        messagingSenderId: "320589238294"
        };
        firebase.initializeApp(config);
        return firebase.database().ref(child);

}
