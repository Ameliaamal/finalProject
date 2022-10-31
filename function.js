const handlesignup = () => {
  const formvalue = {
    fname : document.getElementById('fname').value,
    lname : document.getElementById('lname').value,
    email : document.getElementById('email').value,
    password : document.getElementById('password').value,
  }
  
console.log(formvalue);
}



const validateSignup = (formvalue) => {
  if(!formvalue.email || formvalue.email === '' || !formvalue.email.includes('@')) {
   showError('please enter a valid email')
   return false;
  }

  if(formvalue.password ==='' ){
    showError('please enter a valid password')
    return false;
  }
  else
  if(document.getElementById('clicksignup').addEventListener("click", myFunction)){
    
    function myFunction() {
    window.location.href="./fieldspage.html";
    }}

  }


const showError = (errormessage) => {
  const body = document.getElementByTagName('body')[0]
  console.log( body)
  const randomNumber = Math.random()
  const id = `toast-${randomNumber}`
  body.insertAdjacentHTML('beforeend', `    
  <div id="${id}" class="toast errorToast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
          <div class="toast-body">
              ${errormessage}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
              aria-label="Close" onClick="closeError('${id}')"></button>
      </div>
  </div>`)
}

const closeError = (id) => {
  const toast = document.getElementById(id)
  console.log(toast)
  toast.style.display = 'none'
}



const clickbuttom = document.getElementById('clicksignup');
clickbuttom.addEventListener('click', handlesignup);
clickbuttom.validateSignup(formvalue);

//design bb

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  

  //changer entre login et sign in
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);

    
    
  })
