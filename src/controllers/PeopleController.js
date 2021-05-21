
const People = require('../models/People')

module.exports = {
  async store(request, response) {
    const { firstName, lastName } = request.body;

    if (firstName === "") {
      return response.status(401).json({ "message": "Você precisa preencher o nome idiota!!!" });
    } else if (lastName === "") {
      return response.status(401).json({ "message": "Você precisa preencher o sobrenome idiota!!!" });
    }else{
      people = await People.create({ firstName, lastName });
      return response.status(200).json(people);
    }
  }
};