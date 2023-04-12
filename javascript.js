function getFormValues() {
   let FirstName = document.getElementById('firstName').value;
   let LastName = document.getElementById('lastName').value;
   let Gender = document.getElementById('gender').value;
   let Password = document.getElementById('password').value;

    console.log(`First Name : ${FirstName} 
    Last Name:${LastName}\n
    Gender:${Gender}\n
    Password:${Password}`
    );
    
  }