import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(public bookService: BookService) { }

  public books: any

  ngOnInit(): void {
    this.bookService.bookAdded.subscribe(() => {
      this.getAllBooks();
    });
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBookDetails().subscribe(data => {
      this.books = data;
      console.log(this.books);
    });
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book).subscribe(() => {
      this.getAllBooks();
    });
  }

  editBook(book: Book) {
    this.bookService.editBookInform(book);
  }

}
