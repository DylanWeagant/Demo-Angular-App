import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { Book } from '../list/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  obj = {title : "title"}
  books: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getBooks().subscribe(data => {
      this.books = data
      console.log(this.books);
    });
  }

}
