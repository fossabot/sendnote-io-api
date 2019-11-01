'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {
  subject; // message subject
  data; // message data, payload, anything
  message; // message text content
  headers; // message header
}

module.exports = Message
