import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  book: any = {
    bookId: 0,
    bookName: "",
    bookPrice: 0,
  }
  constructor(public bookService: BookService) { }

  isEdit: boolean = false;

  ngOnInit(): void {
    this.getEditBook();
  }

  getEditBook() {
    this.bookService.bookEdited.subscribe(data => {
      this.book = Object.assign({}, data);
      this.isEdit = true;
    });
  }

  saveBook(bookForm: any) {
    let object = bookForm.value;
    object.id = null;
    this.bookService.saveBook(object).subscribe(() => {
      this.bookService.addBookInform();
      this.isEdit = false;
    });
    bookForm.form.reset();
  }

  updateBook(bookForm: any) {
    this.book = Object.assign({}, bookForm.value);
    this.bookService.updateBook(this.book).subscribe(() => {
      this.bookService.addBookInform();
      this.isEdit = false;
    });
    bookForm.form.reset();
  }
}
