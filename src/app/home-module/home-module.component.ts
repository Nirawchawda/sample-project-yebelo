import { Component, OnInit } from '@angular/core';
import { StorageServicesService } from './../services/storage-services.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.scss']
})
export class HomeModuleComponent implements OnInit {

  list: {category:string, subcategory: string, modify?: boolean}[] = [];
  categories : string[] = ["Electronics", "Games", "Fruits", "Furniture"];
  category: string;
  subcategory: string;
  errMsg : string;
  
  constructor(private storage : StorageServicesService, private router: Router) { }

  ngOnInit(): void {
    this.storage.setItem('auth',"true")
    this.list = this.storage.getItem('list') || [];
  }

  goBack(){
    this.storage.setItem('auth',"false")
    this.router.navigate(['auth']);
  }

  add(item){
    if(item.category && item.subcategory){
      this.list.push(item);
      this.storage.setItem('list',this.list)
      this.category = null;
      this.subcategory = null;
      this.errMsg = null;
    }else{
      this.errMsg = (item.category) ? "Please Input Subcategory" : "Please Input Category"; 
    }
  }

  delete(index){
    this.list.splice(index,1);
    this.storage.setItem('list',this.list)
  }
  modify(index){
    this.list[index].modify = true;
    this.storage.setItem('list',this.list)
  }
  save(index){
    this.list[index].modify = false;
    this.storage.setItem('list',this.list)
  }
  reload(){
    window.location.reload();
  }
}
