
const EventRoom = require('../models/EventRoom')

module.exports = {
  async store(request, response) {
    const { name, capacity } = request.body;
    if (name === "") {
      return response.status(401).json({ "message": "Você precisa preencher o nome idiota!!!" });
    } else if (capacity === "") {
      return response.status(401).json({ "message": "Você precisa preencher o lotação idiota!!!" });
    } else {
      eventRoom = await EventRoom.create({ name, capacity });
      return response.status(200).json(eventRoom);
    }
  },

  
};