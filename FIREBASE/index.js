
// select BUTTOM
const btn = document.querySelector('button')
// ADD CLICK LISTENER TO THE BUTTON WE SELECTED
btn.addEventListener('click',e =>{
	// GET FILE FROM THE  FILE INPUT 
	const file = document.querySelector('input').files[0]
// MAKE A REFERNCE TO FIREBASE .
	const storageRef = firebase.storage().ref()
	// MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
const final =storageRef.child(`images/${file}`)
// THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
	const task = final.put(file)

task.on('state_changed',
		// PROGRESS FUNCTION
		function progress(progress){

			console.log(progress.bytesTransferred / progress.totalBytes *100)
		},  
		function error(err){
			console.log('There was An Err ' + err)
		},
		 function completed(){
		 	final.getDownloadURL()
		 	// RETURN A PROMISE
		 	.then(url=>{
		 		// SELECTING THE BODY AND APPENDING AN IMG TAG WITH  THE URL
		 		document.querySelector('body').innerHTML =`<img src=${url} />`
		 	})
		 }

		)

})


