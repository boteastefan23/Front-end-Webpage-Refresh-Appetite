var users = [
	{ // botea
		username: "botea",
		password: "botea123"
	},
	{ // doman
		username: "doman",
		password: "doman123"
	},
	{ // admin
		username: "admin",
		password: "admin123"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < users.length; i++) {
		// check if user input = username and password from user
		if(username == users[i].username && password == users[i].password) {
			console.log(username + " is logged in!!!")
            if(username == 'doman' || username == 'botea'){
			window.location.href = "html/cart.html";
			}else {
			window.location.href = "html/admin.html";
			}
			return
		}
	}
	document.getElementById("errorlog").innerHTML +=  
              "Wrong password or username!"; 
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}