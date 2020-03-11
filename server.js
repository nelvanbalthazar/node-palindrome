const port = process.env.PORT || 8000;

const express = require('express');
const palindrome = require('./functions/palindrome.js');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const router = express.Router();

router.route('/palindrome')
    .post((req, res) => {
        
        const str = req.body.name;

        if(palindrome(str)) res.status(200).json('IS A PALINDROME');
        else res.status(400).send('IS NOT A PALINDROME');
    });

app.use('/api', router);

app.listen(port, () => {
    console.log('We are live on ' + port);
});

