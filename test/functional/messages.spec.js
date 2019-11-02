'use strict'

const {test, trait} = use('Test/Suite')('Messages API');
const faker = use('faker/locale/en');

trait('Test/ApiClient');

/**
 * Case 1
 */
test('Get list of messages', async ({client}) => {

  const response = await client.get('/messages').end();

  response.assertStatus(200);

});

/**
 * Case 2 - Insertion
 */
test('Insert a new message', async ({client}) => {
  const body = {
    subject: 'Testing case 2',
    message: faker.lorem.paragraphs(1),
  };

  const response = await client
    .post('/messages')
    .send(body)
    .end();


  response.assertStatus(200);
  response.assertJSONSubset(body);
});

/**
 * Case 3 - Testing not found
 **/
test('Test not found on message', async ({client}) => {
  const response = await client.get('/messages/lorem').end();
  response.assertStatus(404);
});

/**
 * Case 4 - Deleting a not found message
 */
test('Removing a not found message', async ({client}) => {
  const response = await client.delete('/messages/lorem').end();
  response.assertStatus(404);
});
