import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      user: Model,
      shoppingList: Model.extend({
        presentItems: Model,
      }),
    },

    routes() {
        this.namespace = 'api';
      
        this.post('/login', (schema, request) => {
          const attrs = JSON.parse(request.requestBody);
          return schema.users.findBy({ username: attrs.username });
        });
      
        this.post('/shopping-lists/add-item', (schema, request) => {
          const attrs = JSON.parse(request.requestBody);
          let list = schema.shoppingLists.find(attrs.listId);
          list.update({ presentItems: [...list.presentItems, attrs.item] });
          return list;
        });
      
        this.post('/shopping-lists/new', (schema, request) => {
          const attrs = JSON.parse(request.requestBody);
          let newList = schema.shoppingLists.create({ owner: attrs.owner, presentItems: [], isArchived: false });
          let user = schema.users.findBy({ username: attrs.owner });
          user.update({ present: [...user.present, newList.id] });
          return user;
        });
      
        this.delete('/shopping-lists/:id/delete-item', (schema, request) => {
          let id = request.params.id;
          const attrs = JSON.parse(request.requestBody);
          let list = schema.shoppingLists.find(id);
          let updatedItems = list.presentItems.filter(item => item !== attrs.item);
          list.update({ presentItems: updatedItems });
          return list;
        });
      
        this.patch('/shopping-lists/:id/mark-resolved', (schema, request) => {
          let id = request.params.id;
          const attrs = JSON.parse(request.requestBody);
          let list = schema.shoppingLists.find(id);
          let updatedItems = list.presentItems.map(item => 
            item === attrs.item ? { ...item, resolved: true } : item
          );
          list.update({ presentItems: updatedItems });
          return list;
        });
      
        this.get('/shopping-lists/:id', (schema, request) => {
          let id = request.params.id;
          return schema.shoppingLists.find(id);
        });
      
        this.patch('/shopping-lists/:id/rename', (schema, request) => {
          let id = request.params.id;
          const attrs = JSON.parse(request.requestBody);
          let list = schema.shoppingLists.find(id);
          if (list.owner === attrs.username) {
            list.update({ name: attrs.newName });
          }
          return list;
        });
      
        this.post('/shopping-lists/:id/leave', (schema, request) => {
          let id = request.params.id;
          const attrs = JSON.parse(request.requestBody);
          let list = schema.shoppingLists.find(id);
          let user = schema.users.findBy({ username: attrs.username });
          if (list.owner !== attrs.username) {
            user.update({ present: user.present.filter(listId => listId !== id) });
          }
          return user;
        });
      }
    }
  );
}
