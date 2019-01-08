import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/restservice/service.service';

@Component({
  selector: 'app-viewallbooks',
  templateUrl: './viewallbooks.component.html',
  styleUrls: ['./viewallbooks.component.css']
})
export class ViewallbooksComponent implements OnInit {

  constructor(private service: ServiceService) { }
  listofbooks: Object = [];
  ngOnInit() {
    this.service.getAllbooks()
    .subscribe((books: any) => { 
      console.log(books); 
      this.listofbooks = books; 
    });
  }

}
