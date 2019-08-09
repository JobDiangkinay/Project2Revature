package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
 
 @PostMapping("/")
    public Article postArticle(@RequestBody Article article) {
        return getArticleRepository().postArticle(article);
    }
}
