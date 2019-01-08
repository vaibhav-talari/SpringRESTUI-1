import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/restservice/service.service';
import { ActivatedRoute } from '@angular/router';
import{Router} from '@angular/router'

declare var $:any;

@Component({
  selector: 'app-viewsinglebook',
  templateUrl: './viewsinglebook.component.html',
  styleUrls: ['./viewsinglebook.component.css']
})
export class ViewsinglebookComponent implements OnInit {
  servicebook:Object={};
  editbook:Object={};
  editbookid: number;
  isDeleted:boolean;
  Isupdated:boolean;
  constructor(private service:ServiceService,private getparam:ActivatedRoute,private auto:Router) {
    this.getparam.params
      .subscribe(params=>{
      console.log(params);
      this.editbookid=Number(params.bookid);
    });
   }

  
  ngOnInit() {
    this.service.getSinglebook(this.editbookid)
    .subscribe((returnedvalue)=>{
      console.log(returnedvalue);
      this.servicebook=returnedvalue;
      console.log(this.servicebook);

    });

  }

  loadBookforUpdate()
  {
    this.editbook={
      bookid:this.servicebook['bookid'],
      title:this.servicebook['title'],
      price:this.servicebook['price'],
      volume:this.servicebook['volume'],
      publishDate:this.servicebook['publishDate'],

    };
    $('#updatemodel').modal('show');

  }

  updateBook(){
    console.log(this.editbook);
    this.service.update(this.editbook)
    .subscribe((resp)=>{
      console.log(resp)
this.Isupdated=true;


    });
    setTimeout(()=>{
      $('#updatemodel').modal('hide');
      this.auto.navigate(['viewall']);
       },3000);
  }

  deleteBook(id){
    this.service.deleteBook(id)
    .subscribe((status)=>{
      console.log(status);
      this.isDeleted=true;
    });
    setTimeout(()=>{
      //$('#updatemodel').modal('hide');
      this.auto.navigate(['viewall']);
       },1000);
      }
}
