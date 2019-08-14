import { Component, OnInit, ViewChild } from '@angular/core';
import { UserarticleService } from './userarticle.service';
import { UserinfoService } from '../userinfo/userinfo.service';
import { Observable } from 'rxjs';
import { Article} from './article';
import { Person } from '../userinfo/person';
import { MatTableDataSource, MatPaginator, MatSort, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-userarticle',
  templateUrl: './userarticle.component.html',
  styleUrls: ['./userarticle.component.css']
})
export class UserarticleComponent implements OnInit {

  userArticles: Article[];
  savedArticles: Article[];
  showCreate: boolean = false;
  newArticle: Article;
  personSpec: Person;
  
  displayedColumns: string[] = ['id', 'date', 'category', 'status'];
  dataSource;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(
    private userArticleService: UserarticleService,
    private userInfoService: UserinfoService) { }

  ngOnInit() {
      this.userInfoService.getCurrentPerson().subscribe(person => this.personSpec = person);
      this.userArticleService.getUserArticles().subscribe(articleList => {this.userArticles = articleList, this.userArticlesDataSource(articleList)});
      //this.userArticleService.getSavedArticles().subscribe(savedArticleList => this.savedArticles = savedArticleList);
  }

  userArticlesDataSource(articles: Article[]) {
    this.dataSource = new MatTableDataSource<Article>(articles);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createArticle(formData){
    let newArticle = new Article(0,formData.newTitle,formData.newContent,this.getDate(),formData.category,"Pending",this.personSpec);
    this.userArticleService.createArticle(newArticle).subscribe(article => this.ngOnInit());
    this.showCreate = false;
    this.ngOnInit();
  }

  showCreateComponent(){
    this.showCreate = !this.showCreate;
  }

  getDate(){
    let today = new Date();
    let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    return date;
  }
}