//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyBkMwD9JWVZolMGmhWVgVacU9LXCbs7uKU",
    authDomain: "fishtopia-b902f.firebaseapp.com",
    databaseURL: "https://fishtopia-b902f-default-rtdb.firebaseio.com",
    projectId: "fishtopia-b902f",
    storageBucket: "fishtopia-b902f.appspot.com",
    messagingSenderId: "488055241304",
    appId: "1:488055241304:web:d8ea38804dcd11cb46282d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
         name : user_name, 
         message : msg, 
         Like : 0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();