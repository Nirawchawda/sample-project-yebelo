import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StorageServicesService } from './services/storage-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-project-yebelo';
  
  constructor(private router:Router, private storage:StorageServicesService) {
    if(storage.getItem('auth') == "true"){
      this.navigateToHome();
    }else{
      this.navigateToLogin();
    }
  }

  navigateToLogin(){
    this.router.navigate(['auth']);
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }
}
