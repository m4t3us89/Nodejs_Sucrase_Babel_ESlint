import api from '../../services/api'
import Todos from '../models'

class Todo {
  async list (req, res) {
    // try {
    // const { data: todos } = await api.get('todos')
    const usersdfa = await Todos.User.findAll({})
    console.log('sadfasdfasdfasdfasd')
    return res.status(201).send('usersdfa')
    // } catch (err) {
    //   return res.status(400)
    // }
  }
}

export default new Todo()
