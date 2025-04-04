const repositoryPost = require('./ap')
const repository = new repositoryPost.RepositoryPost();

class ServicePost {

  edit(uid, text, pid) {

    const isExsist = repository.isExts(pid)

    if (!isExsist) throw new Error('Такого поста не существует')

    const canEdit = repository.canEdit(pid, uid)
    if (!canEdit) throw new Error('.... ')
    repository.save(pid, text, uid)

  }
  createPost(text, writter) {
    const p = repository.getId()
    repository.save(p, text, writter)

  }

  getByid(id) {
    console.log(repository)
    return repository.getBy(id)
  }

  getAll() {
    return repository.getAllUser()

  }
}
exports.ServicePost = ServicePost
