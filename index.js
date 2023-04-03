const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
app.use(cors())
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
const categories=require('./data/Categories.json')
const news=require('./data/News.json')

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.send("this is mmmmmmmmmm me bro")
});


app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.get('/news/:id',(req,res)=>{
    console.log(req.params.id)
    const id=req.params.id;
    const selectedNews=news.find(n=>n._id==id);
    res.send(selectedNews);
})
app.get('/categories/:id',(req,res)=>{
    const id=req.params.id;
    if(id==='08'){
        res.send(news);
    }
    else{
        const categories_news=news.filter(n=>n.category_id===id);
        res.send(categories_news)
    }
  
})
// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
