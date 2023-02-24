import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
 
  constructor(private router: Router){}
  registrar(){
    this.router.navigate(['/formUser']);
  }
  // preguntar a fernando para aplicar esto // Example starter JavaScript for disabling form submissions if there are invalid fields
  // (function () {
  //   'use strict'
  
  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //   var forms = document.querySelectorAll('.needs-validation')
  
  //   // Loop over them and prevent submission
  //   Array.prototype.slice.call(forms)
  //     .forEach(function (form) {
  //       form.addEventListener('submit', function (event) {
  //         if (!form.checkValidity()) {
  //           event.preventDefault()
  //           event.stopPropagation()
  //         }
  
  //         form.classList.add('was-validated')
  //       }, false)
  //     })
  // })()
}
