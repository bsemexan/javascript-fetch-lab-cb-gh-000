function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  const username = ''
  const testTest = document.getElementById('title').value = "test"
  document.getElementById('body').value = "test body"
  const repo = 'api.github.com/repos/${username}/javascript-fetch-lab/issues'
  fetch(`${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token c99ad4b28b0936bd2beadbfaddcf249457714200`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'api.github.com/repos/learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token c99ad4b28b0936bd2beadbfaddcf249457714200`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
