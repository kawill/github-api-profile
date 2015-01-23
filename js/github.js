// var token = "adda8a308deacb8dba13c1d33634caf91fd66e1b";

// var githubUsername = "kawill";
// var profile_url = "https://api.github.com/users/" + githubUsername + "?access_token=" + token;
// var left_template_url = "./templates/left.html"

// // var githubRepo = "repos"
// // var urlRepo = "https://api.github.com/users/" + githubUsername+ "/" + githubRepo + "?access_token=" + token;

// // var promise1 = $.get(url).then(drawProfile);
// // var promise2 = $.get(url).then(drawRepo);

// var promise1 = $.get(left_template_url); //presentation
// var promise2 = $.get(profile_url); //data


// $.when(promise1, promise2).then(drawProfile) //same as $.when(promise1, promise2).then(function(resultsofPromise1, resultsofPromise2){});

// function drawProfile() {
// var template = arguments[0]
// var data = arguments[1]
// document.body.innerHTML += _.template(template[0], data[0]);
// }

function GithubClient(username, token) {  
    this.username = username;  
    this.token = token;  
    this.drawToPage();
}

GithubClient.prototype.getUserInfo = function() {  
    return $.get("http://api.github.com/users/" + this.username + "?access_token=" + this.token)
};

GithubClient.prototype.getReposInfo = function() {  
    return $.get("http://api.github.com/users/" + this.username + "/repos?access_token=" + this.token)
};

GithubClient.prototype.getTemplateLeft = function() {  
    return $.get("./templates/left.html")
};

GithubClient.prototype.getTemplateRightRepo = function() {  
    return $.get("./templates/rightrepo.html")
};

GithubClient.prototype.getAllData = function() {  
    return $.when(this.getUserInfo(), this.getReposInfo(), this.getTemplateLeft(), this.getTemplateRightRepo())
};

// this gave no results with line 28 and line 62 and down out
// function becomeObject(repoInfo) {
//             var rI = {};
//             for (var i = 0; i < repoInfo.length; i++) {
//                 rI[i] = repoInfo[i];
//                 return rI;
//             }
//             console.log(rI);
//             // document.body.innerHTML += _.template(templateRight[0], rI[0]);
//         };

GithubClient.prototype.drawToPage = function() {  
    this.getAllData().then(function(userInfo, repoInfo, templateLeft, templateRight) {


        // console.log(
        //     userInfo[0], //an object literal
        //     repoInfo[0], //an array of object literals
        //     templateLeft[0], //string
        //     templateRight[0] //string
        //
        // debugger;
        // var userInfo = argument[0]
        // var repoInfo = argument[1]
        // var templateLeft = argument[2]
        // var templateRight = argument[3]
        // document.body.innerHTML += _.template(templateLeft[0] + templateRight[0], userInfo[0] + repoInfo[0]);


        document.body.innerHTML += _.template(templateLeft[0], userInfo[0]);


        // console.log(typeof (userInfo[0] + repoInfo[0]));
        // document.body.innerHTML += _.template(templateRight[0] , repoInfo[0]);



        function becomeObject(repoInfo) {
            var rI = {};
            for (var i = 0; i < repoInfo.length; i++) {
                rI[i] = repoInfo[i];
                return rI;
            }
            document.body.innerHTML += _.template(templateRight[0], rI[0]);
        };
        //// do something with the arguments...
        // like...
        // var template = arguments[0]
        // var data = arguments[1]
        // document.body.innerHTML += _.template(template[0], data[0]);
    })
};
