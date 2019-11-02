'use strict'

const {test, trait} = use('Test/Suite')('Homepage')

trait('Test/ApiClient');

test('Home page should response a JSON response of alive', async ({client}) => {
  const response = await client.get('/').end();

  response.assertStatus(200);
  response.assertJSONSubset({status: 'alive'});
})
