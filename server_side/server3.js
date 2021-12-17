const { response } = require("express");
const express = require("express");
const app = express();

app.use((request, response, next) => {
    console.log("有人请求服务器3了");
    next();
});

app.get("/search/users", (request, response) => {
    const users = [
        {
            "login": "such",
            "id": 1303925,
            "node_id": "MDQ6VXNlcjEzMDM5MjU=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1303925?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/such",
            "html_url": "https://github.com/such",
            "followers_url": "https://api.github.com/users/such/followers",
            "following_url": "https://api.github.com/users/such/following{/other_user}",
            "gists_url": "https://api.github.com/users/such/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/such/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/such/subscriptions",
            "organizations_url": "https://api.github.com/users/such/orgs",
            "repos_url": "https://api.github.com/users/such/repos",
            "events_url": "https://api.github.com/users/such/events{/privacy}",
            "received_events_url": "https://api.github.com/users/such/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1
        },
        {
            "login": "suchipi",
            "id": 1341513,
            "node_id": "MDQ6VXNlcjEzNDE1MTM=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1341513?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/suchipi",
            "html_url": "https://github.com/suchipi",
            "followers_url": "https://api.github.com/users/suchipi/followers",
            "following_url": "https://api.github.com/users/suchipi/following{/other_user}",
            "gists_url": "https://api.github.com/users/suchipi/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/suchipi/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/suchipi/subscriptions",
            "organizations_url": "https://api.github.com/users/suchipi/orgs",
            "repos_url": "https://api.github.com/users/suchipi/repos",
            "events_url": "https://api.github.com/users/suchipi/events{/privacy}",
            "received_events_url": "https://api.github.com/users/suchipi/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1
        },
        {
            "login": "nicksuch",
            "id": 509564,
            "node_id": "MDQ6VXNlcjUwOTU2NA==",
            "avatar_url": "https://avatars.githubusercontent.com/u/509564?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nicksuch",
            "html_url": "https://github.com/nicksuch",
            "followers_url": "https://api.github.com/users/nicksuch/followers",
            "following_url": "https://api.github.com/users/nicksuch/following{/other_user}",
            "gists_url": "https://api.github.com/users/nicksuch/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nicksuch/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nicksuch/subscriptions",
            "organizations_url": "https://api.github.com/users/nicksuch/orgs",
            "repos_url": "https://api.github.com/users/nicksuch/repos",
            "events_url": "https://api.github.com/users/nicksuch/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nicksuch/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1
        },
        {
            "login": "suchismita004",
            "id": 88958930,
            "node_id": "MDQ6VXNlcjg4OTU4OTMw",
            "avatar_url": "https://avatars.githubusercontent.com/u/88958930?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/suchismita004",
            "html_url": "https://github.com/suchismita004",
            "followers_url": "https://api.github.com/users/suchismita004/followers",
            "following_url": "https://api.github.com/users/suchismita004/following{/other_user}",
            "gists_url": "https://api.github.com/users/suchismita004/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/suchismita004/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/suchismita004/subscriptions",
            "organizations_url": "https://api.github.com/users/suchismita004/orgs",
            "repos_url": "https://api.github.com/users/suchismita004/repos",
            "events_url": "https://api.github.com/users/suchismita004/events{/privacy}",
            "received_events_url": "https://api.github.com/users/suchismita004/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1
        }
    ];
    let searcheParams = request.query;
    console.log(searcheParams);
    response.send(users);
});

app.get("");

app.listen(5000, (err) => {
    if (!err) {
        console.log("服务器5000启动了，请求地址为：http://localhost:5000/search/users");
    }
});