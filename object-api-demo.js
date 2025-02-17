const express = require('express')
const app = express()

app.listen(1234)

let youtuber1 = {
    channelTitle : "십오야",
    sub : "593만명",
    videoNum : "993개"
}

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "227만명",
    videoNum : "6600개"
}

app.get('/:nickname', function(req, res){
    const {nickname} = req.params

    if (nickname == "@15ya.fullmoon"){
        res.json(youtuber1)
    }else if (nickname == "@ChimChakMan_Official"){
        res.json(youtuber2)
    }
})