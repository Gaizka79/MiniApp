require('dotenv').config();
const express = require('express');
const multer = require('multer');
const firebase = require('./firebase');
const morgan = require('./middlewares/morganConfig');
const router = require('./routes/route');
const mongoose = require('./models/mongoConfig');

const app = express();
const PORT = process.env.LOCAL_PORT || 5000;

app.use(morgan(':date[clf] :method :referrer :host :status :param[id] - :response-time ms :body'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({extended: false}));
app.use(express.static("public"));

const upload = multer({
    storage: multer.memoryStorage()
})
app.use(upload.single());





app.post('/upload', upload.single('file'), (req, res) => {
    if(!req.file) {
        res.status(400).send('Error: No hay archivos');
    } else {
        const blob = firebase.bucket.file(req.file.filename);

        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        })

        blobWriter.on('error', (err) => {
            console.log(err);
        })

        blobWriter.on('finish', () => {
            res.status(200).send("File uploaded.")
        })

        blobWriter.end(req.file.buffer)
        console.log("File upload API")
    }
});

/*
app.post('/upload', (req, res) => {
    if(!req.file) {
        res.status(400).send('Error: No hay archivos');
    }
    console.log('File upload API');
});*/

app.use('/', router)

app.set('view engine', 'pug');
app.set('views', './views');

app.listen(PORT, () => console.log(`API REST en el puerto secreto ${PORT} que no deberías ver, a las ${Date()}`));
