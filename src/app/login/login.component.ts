import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:string;
  password:string;

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }



  submit(){


    console.log(this.email);

    this.apiService.registerData(this.email, this.password).subscribe(res =>{

      console.log(res);
    })


  }

}
