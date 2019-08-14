import { Component, OnInit, ViewChild} from '@angular/core';
import { Article } from "../userarticle/article";
import { EditorHandleArticleService } from './editor-handle-article.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-editor-handle-article',
  templateUrl: './editor-handle-article.component.html',
  styleUrls: ['./editor-handle-article.component.css']
})
export class EditorHandleArticleComponent implements OnInit {
  selArticle: Article;
  showSelArticle: boolean = false;
  pendingArticleTry: Article[];
  pendingArticles: Observable<Article[]>;
  displayedColumns: string[] = ['id', 'title', 'name', 'date'];
  dataSource;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(private editorHandleArticleService: EditorHandleArticleService) { }

  ngOnInit() {
    this.pendingArticles = this.editorHandleArticleService.getPendingArticles();
    this.editorHandleArticleService.getPendingArticles().subscribe(articles => { this.pendingArticleTry = articles, this.pendingArticlesDataSource(articles) });
  }

  refreshButton(){
    this.editorHandleArticleService.getPendingArticles().subscribe(articles => { this.pendingArticleTry = articles, this.pendingArticlesDataSource(articles) });
  }

  pendingArticlesDataSource(articles: Article[]) {
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

  closeHandleSpecArticle() {
    this.selArticle = null;
    this.showSelArticle = false;
  }

  handleSpecArticle(curArticle: Article) {

    this.selArticle = curArticle;
    this.showSelArticle = true;
  }
}
