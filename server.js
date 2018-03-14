'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');

// const data = require('./spells-seed-data');

const {Spell, Wizard}=require('./models');

// console.log(data);

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

const jsonParser = bodyParser.json();

// endpoints for spells

app.get('/api/v1/spells', (req, res) => {
  const orderBy = req.query.orderby || 'name';
  Spell
    .find( {classes: { $in: [ 'wizard' ] } })
    .where()
    .sort(orderBy)
    .then(spells => {
      res.status(200).json(spells);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong.'});
    });
});

app.get('/api/v1/spells/:id', (req, res) => {
  Spell
    .findById(req.params.id)
    .then(spell => {
      res.status(200).json(spell);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong.'});
    });
});

// get endpoints for wizards

app.get('/api/v1/wizards', (req, res) => {
  Wizard
    .find()
    .then(wizards => {
      res.status(200).json(wizards);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong.'});
    });
});

app.get('/api/v1/wizards/:id', (req, res) => {
  Wizard
    .findById(req.params.id)
    .then(wizard => {
      res.status(200).json(wizard);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong.'});
    });
});

// post endpoint for wizards

app.post('/api/v1/wizards', (req, res) => {
  const requiredFields = ['name', 'level', 'intelligence'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  let intMod = Math.floor((req.body.intelligence - 10) / 2 );
  let maxPrep = (intMod + parseInt(req.body.level, 10));

  Wizard
    .create({
      name: req.body.name,
      level: req.body.level,
      intelligence: req.body.intelligence,
      intelligenceModifier: intMod,
      maxPrepared: maxPrep,
      spellBook: []
    })
    .then(wizard => res.status(201).json(wizard))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong.'});
    });
});

// put endpoint for wizards
app.put('/api/v1/wizards/:id', (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  let intMod = Math.floor((req.body.intelligence - 10) / 2 );
  let maxPrep = (intMod + parseInt(req.body.level, 10));

  Wizard
    .findByIdAndUpdate(req.params.id,
      { name: req.body.name,
        level: req.body.level,
        intelligence: req.body.intelligence,
        intelligenceModifier: intMod,
        maxPrepared: maxPrep},
      {new: true})
    .then(() => {
      res.status(204).end();
    })
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});

// delete endpoint for wizards
app.delete('/api/v1/wizards/:id', (req, res) => {
  Wizard
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).json({message: 'wizard successfully deleted'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong'});
    });
});

// get endpoint for spellbook
app.get('/api/v1/wizards/:id/spellbook', (req, res) => {
  Wizard
    .findById(req.params.id)
    .then(wizard => {
      res.status(200).json(wizard.spellBook);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong'});
    });
});

// add to the spellbook for a specific wizard

app.post('/api/v1/wizards/:id/spellbook', jsonParser, (req, res) => {
  Wizard
    .findByIdAndUpdate(req.params.id,
      { '$push': {
        'spellBook': {spell_id: req.body._id, prepared: false}
      } },
      {new: true}
    ).then(results => {
      res.status(201).json(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong.'});
    });
});

// remove spell from spellbook for a specific wizard

app.delete('/api/v1/wizards/:id/spellbook', (req, res) => {
  Wizard
    .findByIdAndUpdate(req.params.id,
      { '$pull': {
        'spellBook': { 'spell_id': req.body.spell_id } } },
      {new: true}
    ).then(results => {
      res.status(201).json(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong.'});
    });
});

//update spell in a spellbook (prepared:true/false)

app.put('/api/v1/wizards/:id/spellbook', (req, res) => {
  Wizard
    .findOne({'spellBook.spell_id': req.body.spell_id})
    .select('spellBook.$.prepared')
    .then(wizard => {
      console.log('spell', wizard);
      return Wizard
        .findOneAndUpdate({_id: req.params.id, 'spellBook.spell_id': req.body.spell_id},
          { $set: {'spellBook.$.prepared': !wizard.spellBook[0].prepared} },
          {new: true}
        );
    }).then(results => {
      console.log('results', results);
      res.json(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong.'});
    });
});

let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
  
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, {useMongoClient: true}, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise ((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
  // app.listen(process.env.PORT || 8080, function () {
  //   console.info(`App listening on ${this.address().port}`);
  // });
}

module.exports = {app, runServer, closeServer};