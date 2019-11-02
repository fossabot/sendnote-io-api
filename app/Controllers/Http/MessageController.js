'use strict'

const Message = use('App/Models/Message')

class MessageController {

  /**
   * Get all user messages
   * @returns {Promise<*>}
   */
  index = async () => await Message.all();

  /**
   * Insert a message in database
   * @param request
   * @returns {Promise<void>}
   */
  insert = async ({request}) => {
    const obj = new Message();
    const data = request.all();

    obj.subject = data.subject;
    obj.message = data.message;
    obj.data = data.data;
    obj.headers = request.headers();

    await obj.save();

    return obj;
  };


  get = async ({params, response}) => {
    const msg = await Message.where({_id: params.id}).fetch();

    if (msg.rows.length != 0) {
      return msg.toJSON();
    } else {
      return response.status(404).send({});
    }
  };

  delete = async ({params, response}) => {
    const msg = await Message.find(params.id);

    if (msg) {
      await msg.delete();
    } else {
      return response.status(404).send({});
    }
  };
}

module.exports = MessageController;
