import express from 'express';

const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World');
});
//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [{
        id:1,
        title:'a joke',
        content:"Why don't scientists trust atoms? Because they make up everything.",
       },{  
        id:2,
        title:'a joke',
        content:"Why don't eggs tell jokes? They'd crack each other up.",
       }, {
        id:3,
        title:'a joke',
        content:"Why did the tomato turn red? Because it saw the salad dressing.",
        },{
            id:4,
        title:'a joke',
           content: "What do you call a fake noodle? An impasta."
       } ,{
        id:5,
        title:'a joke',
        content:"Why did the scarecrow win an award? Because he was outstanding in his field."
      }  ];
        res.json(jokes);
        });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});