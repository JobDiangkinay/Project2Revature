package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "articles")
public class Article {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "title")
	private String title;
	@Column(name = "content")
	private String articleContent;
	@Column(name = "date")
	private String date;
	@Column(name = "category")
	private String category;
	@Column(name = "status")
	private String articleStatus;
	
	@ManyToOne
	@JoinColumn(name = "author_id")
	private Person person;
	
	public Article() {
		super();
	}

	public Article(int id, String title, String articleContent, String date, String category, String articleStatus,
			Person person) {
		super();
		this.id = id;
		this.title = title;
		this.articleContent = articleContent;
		this.date = date;
		this.category = category;
		this.articleStatus = articleStatus;
		this.person = person;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getArticleContent() {
		return articleContent;
	}

	public void setArticleContent(String articleContent) {
		this.articleContent = articleContent;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getArticleStatus() {
		return articleStatus;
	}

	public void setArticleStatus(String articleStatus) {
		this.articleStatus = articleStatus;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}
	
}
