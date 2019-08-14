package com.revature.data;

import java.util.List;

import javax.persistence.EntityManager;

import javax.servlet.http.HttpSession;


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
	

//	public List<Article> getSavedArticles(int personId){
//		int[] articleId = savedArray(personId);
//		String hql = "SELECT c FROM Article c, ";
//		Query<Article> query = getSession().createQuery();
//	}

	public Article updateArticle(Article article) {
		Article updateArticle = article;
		getSession().update("Article",updateArticle);
		return updateArticle;
	}
	
	public Article getArticleById(int id) {
		Query<Article> query = getSession().createQuery("SELECT c FROM Article c WHERE c.id = :id",Article.class);
		return query.setParameter("id", id).getSingleResult();
	}
	
	public List<Article> getAllPendingArticles() {
		String pending = "pending";
		Query<Article> query = getSession().createQuery(
		        "SELECT c FROM Article c WHERE c.articleStatus = :pending", Article.class);
		    return query.setParameter("pending", pending).list();
	}
	
	public List<Article> getScienceArticles(){
		String hql = "From Article a WHERE a.category = :category and a.articleStatus = :status";
		Query<Article> query = getSession().createQuery(hql,Article.class);
		query.setParameter("category", "Science");
		query.setParameter("status", "approved");
		return query.list();
	}
	
	public List<Article> getTechArticles(){
		String hql = "From Article a WHERE a.category = :category and a.articleStatus = :status";
		Query<Article> query = getSession().createQuery(hql,Article.class);
		query.setParameter("category", "Technology");
		query.setParameter("status", "approved");
		return query.list();
	}
	
	public List<Article> getMathArticles(){
		String hql = "From Article a WHERE a.category = :category and a.articleStatus = :status";
		Query<Article> query = getSession().createQuery(hql,Article.class);
		query.setParameter("category", "Mathematics");
		query.setParameter("status", "approved");
		return query.list();
	}
	
//	public int[] savedArray(int personId) {
//		int[] query = (int[]) getSession().createQuery("SELECT p.saved from Person p where p.id= :id").setParameter("id", personId).uniqueResult();
//		return query;
//	}
	
}
