import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:Http) { }

  //create
  createBook(bookdata)
  {
    console.log(bookdata);
   return this.http.post("http://localhost:8081/springcoreweb/addbook",bookdata)
    //receive responce from REST API
    .pipe(map(response => {
      console.log(response);
      return response.json();
      
        }
      ));
  }

  getAllbooks(){
    //console.log("inside service");
    //send the request to the rest api url
    return this.http.get("http://localhost:8081/springcoreweb/getbooks")
    //receive the response
    .pipe(map(response => {
      console.log(response);
      return response.json();
        }
      ));

    //channelise it back tot he component by return
  }

  getSinglebook(id){
    console.log("http://localhost:8081/springcoreweb/getbook/"+id);
    return this.http.get("http://localhost:8081/springcoreweb/getbook/"+id)
    .pipe(map(response => {
      console.log(response);
      return response.json();
        }
      ));
  }

  update(test)
  {
    console.log(test);
    console.log(test.bookid);
    return this.http.put("http://localhost:8081/springcoreweb/updatebook/"+test.bookid,test)
    .pipe(map(response => {
     console.log(response);
      return response.json();
    }
  ));
  }

  deleteBook(id){
      return this.http.delete("http://localhost:8081/springcoreweb/deletebook/"+id)
      .pipe(map(response => {
      console.log(response);
      return response.json();
    }
  ));
  }

  }

