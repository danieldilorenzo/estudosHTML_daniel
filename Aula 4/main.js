const LinksSocialMedia = {
  github: 'danieldilorenzo',
  youtube: 'UCV2hyT88VsGgCEKQ0xuHi2A',
  facebook: 'daniel.dilorenzoferreira',
  instagram: 'dilorenzo_daniel',
  twitter: 'lorenzodaniel_'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    // alert(li.children[0].href)
    // console.log(social)
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
    }) //pega o conteúdo da url e transforma num json
}

getGithubProfileInfos()
