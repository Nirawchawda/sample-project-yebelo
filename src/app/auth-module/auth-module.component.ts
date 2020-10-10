import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StorageServicesService } from './../services/storage-services.service';
@Component({
  selector: 'app-auth-module',
  templateUrl: './auth-module.component.html',
  styleUrls: ['./auth-module.component.scss']
})
export class AuthModuleComponent implements OnInit {

  constructor(private router: Router,private storage : StorageServicesService) { }
  username: string;
  
  ngOnInit(): void {
    this.storage.setItem('auth',"false")
    this.storage.setItem('list',[])
  }

  proceedToHome(){
    this.router.navigate(['home']);
  }
}
