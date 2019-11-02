'use strict'

class MessagesValidator {
  get rules() {
    return {
      subject: 'required',
      message: 'required'
    }
  }
}

module.exports = MessagesValidator;
