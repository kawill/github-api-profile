window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"}
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?

        var token = "adda8a308deacb8dba13c1d33634caf91fd66e1b";

        var githubUsername = "kawill";
        var url = "https://api.github.com/users/"+githubUsername+"?access_token="+token;

        // var githubRepo = "repos"
        // var urlRepo = "https://api.github.com/users/" + githubUsername+ "/" + githubRepo + "?access_token=" + token;

        // var promise1 =
        $.get(url).then(drawProfile);
        // var promise2 = $.get(url).then(drawRepo);


        function drawProfile(data) {
            debugger;
            document.body.innerHTML = [
                '<img class = "avatar" src = https://avatars.githubusercontent.com/u/10356084?v=3>',
                '<h2>',
                data.name,
                '</h2>',
                '<h3>',
                data.login,
                '</h3>',
                '<h4>',
                data.location,
                '</h4>',
                '<h4>',
                data.email,
                '</h4>',
                '<h4> blog:',
                data.blog,
                '</h4>'
                // '<div>',
                // data.repos_url,
                // '</div>'
                // "status:",
                // arguments[1],
                // '<h3>',
                // data.repo_url,
                // '</h3>',
                ].join('')


        }

        var repo = ['data.repo_url'];
        repo.toString();

        console.log(repo);

        // function drawRepo(data) {
        //     document.body.innerHTML = [

        //     ]
        // }

// $.when(promise1, promise2).then(function(resultsofPromise1, resultsofPromise2){


//     });

        //var githubRepo = "repo";
        // var urlRepo = "https://api.github.com/users/" + githubUsername+ "?access_token=" + "/repos"; //+githubRepo;

        // $.get(urlRepo).then(drawRepo);

        // function drawRepo(data) {
        //     debugger;
        //     document.body.innerHTML =
        //     '<h1>'
        //     '</h1>'
        // }


    })

}

