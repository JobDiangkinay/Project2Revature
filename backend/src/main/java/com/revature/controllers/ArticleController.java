package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.data.ArticleRepository;
import com.revature.models.Article;

@RestController
@RequestMapping(path = "articles")
public class ArticleController {
	
	@Autowired
	ArticleRepository articleRepository;

	public ArticleRepository getArticleRepository() {
		return articleRepository;
	}

	public void setArticleRepository(ArticleRepository articleRepository) {
		this.articleRepository = articleRepository;
	}
	
	@GetMapping("/")
    public List<Article> getAllArticles() {
        return getArticleRepository().getAllArticles();
    }
	
//	@GetMapping("/userarticle/{id}")
//	public List<Article> getUserArticles(@PathVariable Integer id){
//		return getArticleRepository().getUserArticles(id);
//	}
	
	@GetMapping("/userarticle/")
	public List<Article> getUserArticles(HttpSession session){
		int personId = (int)session.getAttribute("personId");
		System.out.println("This is "+personId);
		return getArticleRepository().getUserArticles(personId);
	}
	
//	@GetMapping("/savedarticle/")
//	public List<Article> getSavedArticles(HttpSession session){
//		int personId = (int)session.getAttribute("personId");
//		return getArticleRepository().getSavedArticles(personId);
//	}
 
	@PostMapping("/")
    public Article postArticle(@RequestBody Article article) {
        return getArticleRepository().postArticle(article);
    }
	
	@GetMapping("/pending")
	public List<Article> getPendingArticles(){
		return getArticleRepository().getAllPendingArticles();
	}
	
	@PostMapping("/update")
	public Article updateArticle(@RequestBody Article article) {
		return getArticleRepository().updateArticle(article);
	}

}
