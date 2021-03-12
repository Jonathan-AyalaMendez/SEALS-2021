
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Models
const Journal = require('./Models/journal');

const port = process.env.PORT || 8888;
const mongoUri = process.env.URI;
const server = express();

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

mongoose.set('useNewUrlParser', true);

// Connecting to mongodb
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to Mongo.'));
db.once('open', () => {
    console.log('Connection to Mongo Established!');
})

server.get('/', () => {
    console.log('server ok');
})

// create journal entry
server.post('/add-journal', (req, res) => {
    const incomingData = req.body;
    const newJournal = new Journal(incomingData);

    newJournal.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: 'Error Occured.'
            })
        }

        res.status(200).send({
            message: 'Journal Created.',
            document: doc
        })
    })
});

// Insert many Journal Entries
// is is for your benefit if you ever need to have test data on your mongodb
server.post('/add-many-journals', (req, res) => {
    const incomingData = req.body.journals;

    Journal.insertMany(incomingData, (err, doc) => {
        if (err) {
            res.status(500).send({
                status: 500,
                msg: 'Could not add journals'
            });
        }

        res.status(200).send({
            status: 200,
            msg: 'All Journals.',
            document: doc
        })
    });
});

server.get('/get-all-journals', (req, res) => {
    Journal.find({}, (err, journals) => {
        if (err) {
            res.status(500).send({
                status: 500,
                msg: 'No Journals'
            });
        }
        res.status(200).send({
            status: 200,
            msg: 'All journals found',
            document: journals
        });
    })
});

// Remove journal entry
server.post('/remove-journal', (req, res) => {
    Journal.findOne({}, (err, doc) => {

    })
});

// Remove by Id
server.post('/remove-by-id', (req, res) => {
    Journal.findByIdAndRemove({}, (err, doc) => {

    })
});

server.post('/update-journal', (req, res) => {
    const incomingData = req.body;
    Journal.findByIdAndUpdate({ _id: incomingData._id }, { content: incomingData.content }, (err, doc) => {
        if (err) {
            res.status(500).send({
                status: 500,
                msg: 'Error: Could not find journal'
            })
        }

        res.status(200).send({
            status: 200,
            msg: 'Updated journal',
            document: doc
        })
    })
});

server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})