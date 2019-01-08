import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/restservice/service.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private addbookservice:ServiceService,private auto:Router) { }

  ngOnInit() {
  }
issaved:boolean=false;
isnotsaved:boolean=false;
addbook:Object={};
AddBook()
{
console.log(this.addbook);
this.addbookservice.createBook(this.addbook)
.subscribe((booksaved:any)=>
{
  console.log(booksaved);
  this.issaved=true;
}
);
//setTimeout(()=>{
  //$('#updatemodel').modal('hide');
  //this.auto.navigate(['viewall']);
   //},3000);

  }

}

