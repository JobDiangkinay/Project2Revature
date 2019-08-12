package com.revature.data;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Article;
import com.revature.models.Person;

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
	
	public List<Article> getUserArticles(Integer id){
		String hql = "from Article a WHERE a.person.id = :id";
		Query<Article> query = getSession().createQuery(hql,Article.class);
		query.setParameter("id", id);
		return query.list();
	}
	
	public Article postArticle(Article article) {
		Article newArticle = article;
		getSession().save("Article",newArticle);
		return newArticle;
	}
	
	public List<Article> getAllPendingArticles() {
		String pending = "pending";
		Query<Article> query = getSession().createQuery(
		        "SELECT c FROM Article c WHERE c.articleStatus = :pending", Article.class);
		    return query.setParameter("pending", pending).list();
	}
	
}
