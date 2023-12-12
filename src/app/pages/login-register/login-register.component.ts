import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {

//ตัวแปล
message:string="Hello Angular";


//ตัวแปล object
profile= {
  //ซ้าย key ขวา value
"name":"Poohdy",
"tel":"0969496002",
"gender":"Male"
}

//2 Way data binding
userData = {
  "email":"",
  "password":""
}

constructor(private router:Router){}


ngOnInit(): void {

}

submitLogin(){
//alert("hey angular")
if(this.userData.email == "admin@email.com" && this.userData.password == "1234"){
  //alert("Login Success");
  this.router.navigate(['backend']);
}else{
  alert("Login Fail!!")
}
}
}
