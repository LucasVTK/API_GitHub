document.addEventListener('DOMContentLoaded', function(){

    const avatarGit = document.getElementById('avatar')
    const nomeGit = document.getElementById('nome')
    const username = document.getElementById('username')
    const repositorios = document.getElementById('repositorios')
    const seguidores = document.getElementById('seguidores')
    const seguindo = document.getElementById('seguindo')
    const linkPerfil = document.getElementById('linkPerfil')
    const API = ('https://api.github.com/users/LucasVTK')

    //requisição de API
    fetch(API)
        .then(function(res){
            //transformando RES EM JSON
        return res.json()
        
    })
    .then(function(json){
        //console.log(json)
        avatarGit.src = json.avatar_url
        nomeGit.innerHTML = json.name
        username.innerHTML = json.login
        repositorios.innerHTML = json.public_repos
        seguidores.innerHTML = json.followers
        seguindo.innerHTML = json.following
        linkPerfil.href = json.html_url
        

    })
})


