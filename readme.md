# WIZARDLY 5E

A 5e DnD Wizard Spell Book Organizer App

<p align='center'>
    <img width='600' height='450'src='https://i.imgur.com/7zTRyKK.png'>	
</p>

*by Wade Collier*

## Overview

Wizardly 5e is an app for managing spells as a Wizard in DnD 5e.
The user can create a Wizard profile and manage that Wizard's spell book.

Via the spell book, the user can dynamically add to/remove from the spell book, see all relevant details for spells included in the spell book, and set prepared status for spells in spell book.

See it live at **https://wizardly-5e.herokuapp.com/**

## Wizardly 5e API

Wizardly 5e maintains a RESTful API on the back end for exposing all resources related to user-created Wizards, the spell books of user-created Wizards, and spell data.

**all API endpoints reside in server.js**

The database for Wizardly 5e contains two collections: **Wizards** and **Spells**

 * All Wizards related requests work off of the **/api/v1/wizards** endpoint - GET, POST, PUT, and DELETE requests    are supported by this endpoint, where **/api/v1/wizards/:id** can be used to expose an indivudal wizard by id     and **/api/v1/wizards/:id/spellbook** can be pinged to expose an individual wizard's spell book.

 * Spells data is exposed via the **api/v1/spells** endpoint for all spells and the **api/v1/spells/:id** endpoint    for individual spells. Only GET requests are supported for spells in the Wizardly 5e API, as this app is          intended to provide official 5th edition D&D spells as a static resource for inspecting, adding to, or
    removing from the wizard's spell book.

## Technologies used:

**On the front-end:**
 * JavaScript, HTML, and CSS
 * [jQuery](https://jquery.com/)

**On the back-end:**
  * [Node.js](https://nodejs.org/en/) & [Express](https://expressjs.com/)
  * [MongoDB](https://www.mongodb.com/)
  * [Mongoose](http://mongoosejs.com/)
  * [Mocha](https://mochajs.org/)
  * [Chai](http://www.chaijs.com/)