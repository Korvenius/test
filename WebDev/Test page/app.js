
 // Initialize Firebase
var config = {
	apiKey: "AIzaSyA2ZrV9mdTto4YJAvtK1IuGYG7umdoBtqI",
	authDomain: "sausageroll-d3ee6.firebaseapp.com",
	databaseURL: "https://sausageroll-d3ee6.firebaseio.com",
	projectId: "sausageroll-d3ee6",
	storageBucket: "sausageroll-d3ee6.appspot.com",
	messagingSenderId: "35721907022"
 };
 firebase.initializeApp(config);
 
 const txtEmail=document.getElementById('txtEmail');
 const txtPassword=document.getElementById('txtPassword');
 const btnLogin=document.getElementById('btnLogin');
 const btnSignup=document.getElementById('btnSignup');
 const btnLogout=document.getElementById('btnLogout');
 
 btnLogin.addEventListener('click', e =>{
	 //get email and pass
	 const email= txtEmail.value;
	 const pass=txtPassword.value;
	 const auth= firebase.auth();
	 
	 //sign in
	 const promise= auth.signInWithEmailAndPassword(email, pass);
	 promise.catch(e => console.log(e.message));
 });

 btnSignup.addEventListener('click', function signUp(){
	 //get email and pass
	 var user = firebase.auth().currentUser;
	 
	 const email= txtEmail.value;
	 const pass=txtPassword.value;
	 const auth= firebase.auth();
	
	 
	 //sign up
	 const promise = auth.createUserWithEmailAndPassword(email, pass);
	 promise.catch(e => console.log(e.message));
	 
	


/*function verifyUser(){

	var user = firebase.auth().currentUser;
	
	user.sendEmailVerification().then(function(){
	//Email sent
		window.alert("An email has been sent to verify your account")

	}).catch(function(error){
	//error occurred
		window.alert("Error"+ error.message);

	});*/

});

btnVerify.addEventListener('click', function verifyUser(){

	var user = firebase.auth().currentUser;
	
	user.sendEmailVerification().then(function(){
	//Email sent
		window.alert("An email has been sent to verify your account")

	}).catch(function(error){
	//error occurred
		window.alert("Error"+ error.message);

	});

});

btnLogout.addEventListener('click', function logOut(){
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
	}else{
		console.log("not logged in");
		btnLogout.classList.add('hide');
	}
});


/*const preObject =document.getElementById('object');

const dbRefObject =firebase.database().ref().child('object');

dbRefObject.on('value', snap => console.log(snap.val()));*/