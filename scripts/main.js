const BASE_URL = 'https://api.github.com/users/richardsummer'

function buildRepoHTML(data) {
  console.log(data)
  // the template you want to use is the source value
  const source = document.getElementById("repo-template").innerHTML;
  // return value of Handlebards.compile is a function that you will later call to marry your template and JS Values
  const template = Handlebars.compile(source);


  const context = { repos: data };
  const html = template(context);

  console.log('html',html)

  document.querySelector('.repos').innerHTML = html;
}


fetch(`${BASE_URL}/repos`)
  .then(response => response.json())
  .then(data => {
    buildRepoHTML(data);
  });
