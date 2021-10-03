import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookAdded = new Subject();
  bookEdited = new Subject();


  baseURL: any = 'http://localhost:8080/books/';

  constructor(public httpClient: HttpClient) { }


  getAllBookDetails() {
    return this.httpClient.get(this.baseURL);
  }

  getBookDetails(bookId:any) {
    return this.httpClient.get(this.baseURL +  `${bookId}`);
  }

  saveBook(book: Book) {
    return this.httpClient.post(this.baseURL, book);
  }

  updateBook(book: Book) {
    return this.httpClient.put(this.baseURL + `${book.bookId}`, book);
  }

  deleteBook(book: Book) {
    return this.httpClient.delete(this.baseURL + `${book.bookId}`);
  }

  addBookInform() {
    this.bookAdded.next();
  }

  editBookInform(book: Book) {
    this.bookEdited.next(book);
  }


}
