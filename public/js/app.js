/* global jQuery, handle, $, api */
'use strict';

const COMPENDIUM_URL = '/api/v1/spells/';
const WIZARDS_URL = '/api/v1/wizards/';

const renderPage = function (store) {
  if (store.demo) {
    $('.view').css('background-color', 'gray');
    $('#' + store.view).css('background-color', 'white');
  } else {
    $('.view').hide();
    $(`#${store.view}`).show();
  }
};

// const renderResults = function (store) {
//   const listItems = store.list.map((item) => {
//     return `<li id="${item._id}">
//                 <a href="${item.url}" class="compendiumDetail">${item.name}</a>
//               </li>`;
//   });
//   $('#result').empty().append('<ul>').find('ul').append(listItems);
// };

// const renderCompendiumSearchResults = function (store) {
//   //   const listItems = store.compendiumSearchList.map((item) => {
//   //     return `<li id="${item._id}">
//   //                 <a href="${item.url}" class="compendiumSearchDetail">${item.name}</a>
//   //               </li>`;
//   //   });
//   //   $('#result').empty().append('<ul>').find('ul').append(listItems);
//   // };

const renderCompendiumResults = function (store) {

  let levelExpr;

  const compendiumList = {
    cantrips: [],
    levelOne: [],
    levelTwo: [],
    levelThree: [],
    levelFour: [],
    levelFive: [],
    levelSix: [],
    levelSeven: [],
    levelEight: [],
    levelNine: []
  };

  store.compendiumList.map((item) => {
    levelExpr = item.level;

    switch (levelExpr) {
    case 'cantrip':
      compendiumList.cantrips.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '1':
      compendiumList.levelOne.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '2':
      compendiumList.levelTwo.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '3':
      compendiumList.levelThree.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          <div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '4':
      compendiumList.levelFour.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '5':
      compendiumList.levelFive.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '6':
      compendiumList.levelSix.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '7':
      compendiumList.levelSeven.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '8':
      compendiumList.levelEight.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    case '9':
      compendiumList.levelNine.push(
        `<li id="${item._id}" class="compendium-list-item">
          <div>
            <a href="#" class="compendium-detail">${item.name}</a>
          </div>
          <span class="compendium-detail-separator"> // </span>
          <span class="compendium-detail-type">${item.type}</span>
        </li>`
      );
      break;
    default:
      console.log('blah blah');
    }
  });
  $('#compendiumCantrips').empty().append('<h4 class="spell-book-level-cat">Cantrips</h4>').append('<ul>').find('ul').append(compendiumList.cantrips);
  $('#compendiumOne').empty().append('<h4 class="spell-book-level-cat">Level One Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelOne);
  $('#compendiumTwo').empty().append('<h4 class="spell-book-level-cat">Level Two Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelTwo);
  $('#compendiumThree').empty().append('<h4 class="spell-book-level-cat">Level Three Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelThree);
  $('#compendiumFour').empty().append('<h4 class="spell-book-level-cat">Level Four Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelFour);
  $('#compendiumFive').empty().append('<h4 class="spell-book-level-cat">Level Five Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelFive);
  $('#compendiumSix').empty().append('<h4 class="spell-book-level-cat">Level Six Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelSix);
  $('#compendiumSeven').empty().append('<h4 class="spell-book-level-cat">Level Seven Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelSeven);
  $('#compendiumEight').empty().append('<h4 class="spell-book-level-cat">Level Eight Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelEight);
  $('#compendiumNine').empty().append('<h4 class="spell-book-level-cat">Level Nine Spells</h4>').append('<ul>').find('ul').append(compendiumList.levelNine);
};

const renderWizardsResults = function (store) {
  const listItems = store.wizardsList.map((item) => {
    return `<li id="${item._id}">
                <a href="${item.url}" class="this-spell-book"><span class="wizard-name">${item.name}</span> level ${item.level} wizard</a>
              </li>`;
  });
  $('#allWizards').empty().append('<ul>').find('ul').append(listItems);
};

const renderWizardEdit = function (store) {
  const el = $('#edit-wizard');
  const item = store.item;
  el.find('[name=name]').val(item.name);
  el.find('[name=level]').val(item.level);
  el.find('[name=intelligence]').val(item.intelligence);
};

const renderDetail = function (store) {
  const el = $('#compendiumDetail');
  const item = store.item;
  let atHigherLevels = item.higher_levels;
  if (!item.higher_levels) {
    atHigherLevels = 'None';
  }

  $('.add-to-spell-book').show();
  $('.add-to-spell-alert').hide();

  store.spellBookList.map(spell => {
    if (spell.spell_id === item._id) {
      $('.add-to-spell-book').hide();
      $('.add-to-spell-alert').show();
    }
  });

  el.find('.name').text(item.name);
  el.find('.description').text(item.description);
  el.find('.higher-levels').text(atHigherLevels);
  el.find('.casting-time').text(item.casting_time);
  el.find('.duration').text(item.duration);
  el.find('.range').text(item.range);
  el.find('.components').text(item.components.raw);
  el.find('.type').text(item.type);
};

const renderSpellBookDetail = function (store) {
  const el = $('#spell-book-detail');
  const item = store.item;
  let atHigherLevels = item.higher_levels;
  if (!item.higher_levels) {
    atHigherLevels = 'None';
  }
  el.find('.name').text(item.name);
  el.find('.description').text(item.description);
  el.find('.higher-levels').text(atHigherLevels);
  el.find('.casting-time').text(item.casting_time);
  el.find('.duration').text(item.duration);
  el.find('.range').text(item.range);
  el.find('.components').text(item.components.raw);
  el.find('.type').text(item.type);
};

const renderWizardDetail = function (store) {
  const el = $('#wizardDetail');
  const item = store.item;
  el.find('.name').text(item.name);
  el.find('.level').text(item.level);
  el.find('.intelligence').text(item.intelligence);
  el.find('.intelligence-modifier').text(item.intelligenceModifier);
  el.find('.max-prepared').text(item.maxPrepared);
};

const renderSpellBookResults = function (store) {

  let levelExpr;
  let preparedStatus;
  let preparedToggleIcon;

  const spellBookItems = {
    isEmpty: false,
    cantrips: [],
    levelOne: [],
    levelTwo: [],
    levelThree: [],
    levelFour: [],
    levelFive: [],
    levelSix: [],
    levelSeven: [],
    levelEight: [],
    levelNine: []
  };

  const spellBookHeader = `<div class="spell-book-header-name">
                            <a href="#" class="spell-book-wizards-detail">
                              <span class="fas fa-info-circle"></span>
                            </a>
                            <h1>
                              <span class="spell-book-wizard-name">${store.activeWizard.name}</span>
                                level ${store.activeWizard.level} wizard
                            </h1>
                          </div>`;

  if (store.spellBookList.length === 0) {
    spellBookItems.isEmpty = true;
  }

  store.spellBookList.map((item) => {
    
    const spellName = store.spellBookListDetails.find(function (spell){
      return spell._id === item.spell_id;
    });

    if (item.prepared === true) {
      preparedStatus = '<div class="spell-is-prepared"><span class="far fa-check-circle"></span>spell prepared</div>';
      preparedToggleIcon = '<span class="fas fa-toggle-on"></span>';
    } else {
      preparedStatus = '<div class="spell-is-not-prepared"><span class="far fa-circle"></span>spell not prepared</div>';
      preparedToggleIcon = '<span class="fas fa-toggle-off"></span>';
    }

    levelExpr = spellName.level;

    switch (levelExpr) {
    case 'cantrip':
      spellBookItems.cantrips.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '1':
      spellBookItems.levelOne.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '2':
      spellBookItems.levelTwo.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '3':
      spellBookItems.levelThree.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '4':
      spellBookItems.levelFour.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '5':
      spellBookItems.levelFive.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '6':
      spellBookItems.levelSix.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '7':
      spellBookItems.levelSeven.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '8':
      spellBookItems.levelEight.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    case '9':
      spellBookItems.levelNine.push(
        `<div class="spell-book-result-item">
                <div class="spell-book-result-flex" id="${item.spell_id}">
                  <a href="${item.url}" class="see-spell-book-details"><span class="spell-book-name-span">${spellName.name}</span><span class="spell-book-type-span">${spellName.type}</span></a>
                  <a href="${item.url}" class="spell-prepared-toggle">Prepare spell ${preparedToggleIcon}</a>
                  <a href="${item.url}" class="spell-book-remove">Remove spell <span class="fas fa-minus-circle"></span></a>
                </div>
                ${preparedStatus}
              </div>`
      );
      break;
    default:
      console.log('blah blah');
    }
  });
  
  //   return `<li id="${item.spell_id}">
  //               <a href="${item.url}" class="see-spell-book-details">${spellName.name}, ${spellName.type}</a>
  //               <a href="${item.url}" class="spell-prepared-toggle">Prepare spell</a>
  //               <a href="${item.url}" class="spell-book-remove">Remove spell</a>
  //               <p>Prepared? : ${item.prepared}</p>
  //             </li>`;
  // });
  
  $('#spell-book-header').html(spellBookHeader);
  $('#spell-book-result-empty').empty();
  $('#spell-book-result-cantrip').empty();
  $('#spell-book-result-1').empty();
  $('#spell-book-result-2').empty();
  $('#spell-book-result-3').empty();
  $('#spell-book-result-4').empty();
  $('#spell-book-result-5').empty();
  $('#spell-book-result-6').empty();
  $('#spell-book-result-7').empty();
  $('#spell-book-result-8').empty();
  $('#spell-book-result-9').empty();
  if (spellBookItems.isEmpty === true) {
    $('#spell-book-result-empty').append('<h4 class="spell-book-level-cat">No spells found...</h4>');
  }
  if (spellBookItems.cantrips.length !== 0) {
    $('#spell-book-result-cantrip').append('<h4 class="spell-book-level-cat">Cantrips</h4>').append(spellBookItems.cantrips);
  }
  if (spellBookItems.levelOne.length !== 0) {
    $('#spell-book-result-1').append('<h4 class="spell-book-level-cat">Level One Spells</h4>').append(spellBookItems.levelOne);
  }
  if (spellBookItems.levelTwo.length !== 0) {
    $('#spell-book-result-2').append('<h4 class="spell-book-level-cat">Level Two Spells</h4>').append(spellBookItems.levelTwo);
  }
  if (spellBookItems.levelThree.length !== 0) {
    $('#spell-book-result-3').append('<h4 class="spell-book-level-cat">Level Three Spells</h4>').append(spellBookItems.levelThree);
  }
  if (spellBookItems.levelFour.length !== 0) {
    $('#spell-book-result-4').append('<h4 class="spell-book-level-cat">Level Four Spells</h4>').append(spellBookItems.levelFour);
  }
  if (spellBookItems.levelFive.length !== 0) {
    $('#spell-book-result-5').append('<h4 class="spell-book-level-cat">Level Five Spells</h4>').append(spellBookItems.levelFive);
  }
  if (spellBookItems.levelSix.length !== 0) {
    $('#spell-book-result-6').append('<h4 class="spell-book-level-cat">Level Six Spells</h4>').append(spellBookItems.levelSix);
  }
  if (spellBookItems.levelSeven.length !== 0) {
    $('#spell-book-result-7').append('<h4 class="spell-book-level-cat">Level Seven Spells</h4>').append(spellBookItems.levelSeven);
  }
  if (spellBookItems.levelEight.length !== 0) {
    $('#spell-book-result-8').append('<h4 class="spell-book-level-cat">Level Eight Spells</h4>').append(spellBookItems.levelEight);
  }
  if (spellBookItems.levelNine.length !== 0) {
    $('#spell-book-result-9').append('<h4 class="spell-book-level-cat">Level Nine Spells</h4>').append(spellBookItems.levelNine);
  }
};

const handleCompendium = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);
  const spellName = el.find('[name=spellName]').val();
  let query;
  if (spellName) {
    query = {
      title: el.find('[name=spellName]').val()
    };
  }
  api.spellSearch(query)
    .then(response => {
      store.compendiumList = response;
      renderCompendiumResults(store);

      store.view = 'compendiumOfSpells';
      renderPage(store);
    }).catch(err => {
      console.error(err);
    });
};

const handleCompendiumDetails = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const id = el.closest('li').attr('id');
  store.activeSpellId = id;

  api.spellDetails(id)
    .then(response => {
      store.item = response;
      renderDetail(store);

      store.view = 'compendiumDetail';
      renderPage(store);

    }).catch(err => {
      store.error = err;
    });
};

// const handleSpellBookCompendiumSearch = function (event) {
//   event.preventDefault();
//   const store = event.data;
//   const el = $(event.target);
//   const spellName = el.find('[name=spellName]').val();
//   var query;
//   if (spellName) {
//     query = {
//       title: el.find('[name=spellName]').val()
//     };
//   }
//   api.spellSearch(query)
//     .then(response => {
//       store.compendiumSearchList = response;
//       renderCompendiumSearchResults(store);

//       store.view = 'spell-book-compendium-search';
//       renderPage(store);
//     }).catch(err => {
//       console.error(err);
//     });
// };

const handleWizards = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);
  const spellName = el.find('[name=wizardName]').val();
  var query;
  if (spellName) {
    query = {
      title: el.find('[name=wizardName]').val()
    };
  }
  api.wizardSearch(query)
    .then(response => {
      store.wizardsList = response;
      renderWizardsResults(store);

      store.view = 'wizards';
      renderPage(store);
    }).catch(err => {
      console.error(err);
    });
};

const handleCreateWizard = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const document = {
    name: el.find('[name=name]').val(),
    level: el.find('[name=level]').val(),
    intelligence: el.find('[name=intelligence]').val()
  };
  api.wizardCreate(document)
    .then(response => {
      store.item = response;
      store.wizardsList = null; //invalidate cached list results
      store.activeWizard = response;
      createWizardHelper(store);
    }).catch(err => {
      console.error(err);
    });
};

const createWizardHelper = function (store) {

  api.wizardSearch()
    .then(response => {
      store.wizardsList = response;
      renderWizardsResults(store);

      store.view = 'wizards';
      renderPage(store);
    }).catch(err => {
      console.error(err);
    });
};


const handleWizardUpdate = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const document = {
    id: store.activeWizard._id,
    name: el.find('[name=name]').val(),
    level: el.find('[name=level]').val(),
    intelligence: el.find('[name=intelligence]').val()
  };
  api.wizardUpdate(document, store.token)
    .then(() => {
      wizardUpdateHelper(store);
    }).catch(err => {
      console.error(err);
    });
};

const wizardUpdateHelper = function (store) {

  const id = store.activeWizard._id;

  api.wizardDetails(id)
    .then(response => {
      store.item = response;
      renderWizardDetail(store);

      store.view = 'wizardDetail';
      renderPage(store);

    }).catch(err => {
      store.error = err;
    });
};

const handleWizardDetails = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const id = el.closest('li').attr('id');

  api.wizardDetails(id)
    .then(response => {
      store.item = response;
      renderWizardDetail(store);

      store.view = 'wizardDetail';
      renderPage(store);

    }).catch(err => {
      store.error = err;
    });
};

const handleWizardRemove = function (event) {
  event.preventDefault();
  const store = event.data;
  const id = store.item._id;
  api.wizardRemove(id, store.token)
    .then(() => {
      store.wizardsList = null; //invalidate cached list results
      store.activeWizard = {};
      createWizardHelper(store);
    }).catch(err => {
      console.error(err);
    });
};

const handleSpellBookDetails = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const id = el.closest('div').attr('id');

  api.spellDetails(id)
    .then(response => {
      store.item = response;
      renderSpellBookDetail(store);

      store.view = 'spell-book-detail';
      renderPage(store);

    }).catch(err => {
      store.error = err;
    });
};

const handleAddSpell = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const document = {
    _id: store.activeSpellId
  };

  const id = store.activeWizard._id;
  let dupe = null;

  store.spellBookList.map( function (spell) {

    if (spell.spell_id === store.activeSpellId) {
      dupe = 'yep';
    }
  });

  if (dupe) {
    console.log('dupe');
  } else {
    api.spellBookAdd(id, document, store.token)
      .then(results => {
        store.activeSpellId = null; //invalidate cached active spell id
        store.activeWizard._id = results._id;
        store.spellBookList = results.spellBook;

        addSpellHelper(store);
      }).catch(err => {
        store.error = err;
      });  
  }
};

const addSpellHelper = function (store) {

  const id = store.activeWizard._id;
  const detailsPromises = [];

  api.wizardDetails(id)
    .then(wizard => {
      store.activeWizard = wizard;
      store.activeWizard.spellBook.map( spell => {
        detailsPromises.push(api.spellDetails(spell.spell_id));
      });
      return Promise.all(detailsPromises);
    }).then(promises => {
      store.spellBookListDetails = promises;
      api.spellBook(id)
        .then(response => {
          store.spellBookList = response;
          renderSpellBookResults(store);

          store.view = 'spell-book-section';
          renderPage(store);
        }).catch(err => {
          store.error = err;
        });
    });
};

const handleSpellPreparedToggle = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const spellId = el.closest('div').attr('id');
  const id = store.activeWizard._id;

  const document = {
    spell_id: spellId
  };

  api.spellBookToggle(id, document)
    .then((response) => {
      store.spellBookList = response.spellBook;
     
      renderSpellBookResults(store);

      store.view = 'spell-book-section';
      renderPage(store);

    }).catch(err => {
      store.error = err;
    });
};


const handleSpellBookRemove = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const spellId = el.closest('div').attr('id');
  const id = store.activeWizard._id;

  const document = {
    spell_id: spellId
  };

  api.spellBookRemove(id, document)
    .then((response) => {
      store.spellBookList = response.spellBook;
      renderSpellBookResults(store);

      store.view = 'spell-book-section';
      renderPage(store);

    }).catch(err => {
      store.error = err;
    });
};

const handleSpellBookWizardDetails = function (event) {
  event.preventDefault();
  const store = event.data;

  const id = store.activeWizard._id;

  api.wizardDetails(id)
    .then(response => {
      store.item = response;
      renderWizardDetail(store);

      store.view = 'wizardDetail';
      renderPage(store);

    }).catch(err => {
      store.error = err;
    });
};

const handleSpellBook = function (event) {
  event.preventDefault();
  const store = event.data;
  const el = $(event.target);

  const id = store.activeWizard._id || el.closest('li').attr('id');
  const detailsPromises = [];

  api.wizardDetails(id)
    .then(wizard => {
      store.activeWizard = wizard;
      store.activeWizard.spellBook.map( spell => {
        detailsPromises.push(api.spellDetails(spell.spell_id));
      });
      return Promise.all(detailsPromises);
    }).then(promises => {
      store.spellBookListDetails = promises;
      api.spellBook(id)
        .then(response => {
          store.spellBookList = response;
          renderSpellBookResults(store);

          store.view = 'spell-book-section';
          renderPage(store);
        }).catch(err => {
          store.error = err;
        });
    });
};


const handleViewWizards = function (event) {
  event.preventDefault();
  const store = event.data;
  store.activeWizard = {};
  if (!store.wizardsList) {
    handleWizards(event);
    return;
  }
  store.view = 'wizards';
  renderPage(store);
};

const handleViewCompendium = function (event) {
  event.preventDefault();
  const store = event.data;
  if (!store.compendiumList) {
    handleCompendium(event);
    return;
  }
  store.view = 'compendiumOfSpells';
  renderPage(store);
};

const handleViewEditWizard = function (event) {
  event.preventDefault();
  const store = event.data;
  renderWizardEdit(store);

  store.view = 'edit-wizard';
  renderPage(store);
};

const handleViewHome = function (event) {
  event.preventDefault();
  const store = event.data;
  store.view='home';
  renderPage(store);
};

const handleViewCreateWizard = function (event) {
  event.preventDefault();
  const store = event.data;
  store.view='createWizard';
  renderPage(store);
};

//on document ready bind events
jQuery(function ($) {

  const STORE = {
    demo: false,        // display in demo mode true | false
    view: 'list',       // current view: splash page | spell list | spell details | wizards | wizard details | spell book
    query: {},          // search query values
    wizardsList: null,
    compendiumList: null,         // search result - array of objects (documents)
    compendiumSearchList: null,
    spellBookList: null,
    spellBookListDetails: [],
    item: null,   // currently selected document
    activeSpellId: null,        // currently selected spell
    activeWizard: {}   // currently selected wizard
  };

  // home related listener for quick start

  $('#home').on('click', '.viewCreateWizard', STORE, handleViewCreateWizard);

  // compendium related listeners 
  $('#compendiumSpells').on('click', '.compendium-detail', STORE, handleCompendiumDetails);
  $('#compendiumOfSpells').on('click', '.this-spell-book', STORE, handleSpellBook);
  $('#compendiumDetail').on('click', '.back-to-compendium', STORE, handleViewCompendium);
  $('#compendiumDetail').on('click', '.add-to-spell-book', STORE, handleAddSpell);
  // $('#compendiumOfSpells').on('submit', STORE, handleCompendium);

  // wizards related listeners
  $('#createWizard').on('submit', STORE, handleCreateWizard);
  $('#allWizards').on('click', '.wizardsDetail', STORE, handleWizardDetails);
  $('#wizards').on('click', '.viewCreateWizard', STORE, handleViewCreateWizard);
  $('#wizardDetail').on('click', '.view-edit-wizard', STORE, handleViewEditWizard);
  $('#edit-wizard').on('submit', STORE, handleWizardUpdate);
  $('#wizardDetail').on('click', '.delete-wizard', STORE, handleWizardRemove);
  $('#wizardDetail').on('click', '.this-spell-book', STORE, handleSpellBook);

  // spell book related listeners
  $('#allWizards').on('click', '.this-spell-book', STORE, handleSpellBook);
  $('#spell-book-section').on('click', '.spell-book-wizards-detail', STORE, handleSpellBookWizardDetails);
  $('#spell-book-section').on('click', '.spell-book-compendium-search', STORE, handleCompendium);
  $('#spell-book-section').on('click', '.see-spell-book-details', STORE, handleSpellBookDetails);
  $('#spell-book-section').on('click', '.spell-prepared-toggle', STORE, handleSpellPreparedToggle);
  $('#spell-book-section').on('click', '.spell-book-remove', STORE, handleSpellBookRemove);
  $('#spell-book-detail').on('click', '.my-spell-book', STORE, handleSpellBook);


  // nav bar listeners
  $(document).on('click', '.viewWizards', STORE, handleViewWizards);
  // $(document).on('click', '.viewSpellSearch', STORE, handleViewCompendium);
  $(document).on('click', '.viewHome', STORE, handleViewHome);

  // start app by viewing the home page
  $('.viewHome').trigger('click');
});
