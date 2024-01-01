const mastodon = require("mastodon-api");

const M = new Mastodon({
    client_key: "iyP8Bm-Z9d8EOj7q0GDdVSRk8s4ix89EapoSg6KruCQ",
    client_secret: "2Epsz8fFrxnjYsYNGij4Fe-iOEqQSExrE9GkRtut9oI",
    access_token: 'QuwPjbES-KJ4WkPR8VzxuEY5WjL3qfQvVo36CUN2cUs',
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    api_url: 'https://mastodon.social/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
})