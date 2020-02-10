import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from '../app/list/book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=TyG637kz2pqFCwgoolnytZzKkpNXewb1')
  }
}
