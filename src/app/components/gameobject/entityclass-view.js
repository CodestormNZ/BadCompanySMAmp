var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.entityclass,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Name': '[data-hook~=name]',
    'model.Class': '[data-hook~=class]',
    'model.Archetype': '[data-hook~=archetype]',
    'model.Skin': '[data-hook~=skin]',
    'model.IsEnemy': '[data-hook~=isenemy]',
    'model.IsAnimal': '[data-hook~=isanimal]',
    'model.IsMale': '[data-hook~=ismale]',
    'model.Model': '[data-hook~=model]',
    'model.Experience': '[data-hook~=experience]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  }
});
