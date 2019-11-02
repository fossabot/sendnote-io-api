'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: 'alive' }
})

Route.get('/messages', 'MessageController.index');
Route.post('/messages', 'MessageController.insert').validator('MessagesValidator');
Route.get('/messages/:id', 'MessageController.get');
Route.delete('/messages/:id', 'MessageController.delete');
