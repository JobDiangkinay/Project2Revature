import { tableservice } from '../table-service.service';
import {article} from '../article';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {CHARACTERS} from '../Mock-data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Data:article[];
  constructor(private ts: tableservice) {
  }

  ngOnInit() {
    this.getArticles();
  }
 
  getArticles() : void{
    this.ts.getArticles().subscribe(Data => this.Data=Data)
  }

}