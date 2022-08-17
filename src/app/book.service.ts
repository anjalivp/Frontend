import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  server_address: string = 'api';

  item={
    book:'',
    author:'',
    genre:'',
    imageUrl:''
  }

  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get(`${this.server_address}/books`);
  }
  getBook(id:any){
    return this.http.get(`${this.server_address}`+id);
  }
  newBook(item:any)
  {
    return this.http.post(`${this.server_address}/insert`, {"book":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {
    return this.http.delete(`${this.server_address}/remove/`+id);
  }
  editBook(book:any)
  {
    console.log('book update');
    return this.http.put(`${this.server_address}/update`,book)
    .subscribe(data =>{console.log(data)})
  }
}
