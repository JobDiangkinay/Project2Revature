package com.revature.data;

import java.util.List;

import javax.persistence.EntityManager;
import org.hibernate.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Article;

@Repository
@Transactional
public class ArticleRepository {
	
	@Autowired
	private EntityManager entityManager;
	
	private Session getSession() {
		return entityManager.unwrap(Session.class);
	}
	
	public List<Article> getAllArticles(){
		return getSession().createQuery("from Article",Article.class).list();
	}
	
	public Article postArticle(Article article) {
		Article newArticle = article;
		getSession().save("Article",newArticle);
		return newArticle;
	}
}
