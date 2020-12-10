let url = 'https://content.guardianapis.com/search?api-key=ef6b069d-b935-412c-ac90-17c9dfaea52f&page-size=100';

const newsTitle = document.getElementById('news-title');
const date = document.getElementById('date');
const description = document.getElementById('description');
const link = document.getElementById('linkArticle');
const newsBlock = document.getElementById('newsBlock');
const pageTitle = document.getElementById('pageTitle');
const newsButton = document.getElementById('newsButton');

async function getNews() {
	const resp = await fetch(url);
	const dat = await resp.json();
	let randomNews = Math.floor(Math.random() * 101);

	let newsUrl =
		dat.response.results[randomNews].apiUrl +
		'?api-key=ef6b069d-b935-412c-ac90-17c9dfaea52f&show-fields=headline,lastModified,trailText';

	newsBlock.classList.remove('hidden');
	pageTitle.innerHTML = 'Just like you asked';
	newsButton.innerHTML = 'Another one ?';
	newsButton.classList.remove('animate-bounce');

	const response = await fetch(newsUrl);
	const data = await response.json();
	const news = data.response.content;

	let modifiedDate = news.fields.lastModified;
	modifiedDate = modifiedDate.slice(0, -10);
	newsTitle.innerHTML = news.fields.headline;
	date.innerHTML = modifiedDate;
	description.innerHTML = news.fields.trailText;
	link.setAttribute('href', news.webUrl);
}
