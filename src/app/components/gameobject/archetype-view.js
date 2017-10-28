var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.archetype,
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.Type': '[data-hook~=type]',
    'model.IsMale': '[data-hook~=ismale]',
    'model.HairColor': '[data-hook~=haircolor]',
    'model.EyeColor': '[data-hook~=eyecolor]',
    'model.SkinColor': '[data-hook~=skincolor]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  }
});
