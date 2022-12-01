const login = async (event) => {
    event.preventDefault()
    const formData = {
        email: document.getElementById('emaillogin').value,
        password: document.getElementById('pwdlogin').value
    }
    const response = await fetch('/signupin', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) 
    });
    console.log(response)
    if(response.status === 200) {
        window.location = '/'
    }
}

const signInButton = document.getElementById("loginbtn");

signInButton.addEventListener('click', login)