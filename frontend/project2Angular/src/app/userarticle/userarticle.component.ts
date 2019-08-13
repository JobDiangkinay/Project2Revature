import { Component, OnInit } from '@angular/core';
import { UserarticleService } from './userarticle.service';
import { UserinfoService } from '../userinfo/userinfo.service';
import { Observable } from 'rxjs';
import { Article} from './article';
import { Person } from '../userinfo/person';

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

  constructor(
    private userArticleService: UserarticleService,
    private userInfoService: UserinfoService) { }

  ngOnInit() {
//    this.userInfoService.getPersonById(1).subscribe(hero => this.personSpec = hero);
//    this.userArticleService.getUserArticles(this.personSpec.id).subscribe(articleList => this.articles = articleList);
      this.userInfoService.getCurrentPerson().subscribe(person => this.personSpec = person);
      this.userArticleService.getUserArticles().subscribe(articleList => this.userArticles = articleList);
      this.userArticleService.getSavedArticles().subscribe(savedArticleList => this.savedArticles = savedArticleList);
  }

  createArticle(formData){
    let newArticle = new Article(0,formData.newTitle,formData.newContent,this.getDate(),formData.category,"Pending",this.personSpec);
    this.userArticleService.createArticle(newArticle).subscribe();
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