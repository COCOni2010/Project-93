var firebaseConfig = {
      apiKey: "AIzaSyAkruF3iCEZyxT-whZwrZH7a41Wmo6AceQ",
      authDomain: "kwitter-a40e4.firebaseapp.com",
      databaseURL: "https://kwitter-a40e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-a40e4",
      storageBucket: "kwitter-a40e4.appspot.com",
      messagingSenderId: "618410352298",
      appId: "1:618410352298:web:4ecc2f7b3d05d0393a7ad3"
    };
    
    // Initialize Firebase
    firbease.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
