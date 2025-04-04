const s = require('./RepositoryUser')
const repositoryuser = new s.RepositoryUsers()
class ServiceUser {
  Useredit(full_name, date_birth, uid, rol,auid) {


    const isExsist = repositoryuser.isExts(uid)

    if (!isExsist) throw new Error('Такого пользователя не существует')

    const canEdit = repositoryuser.canEdituser(uid, auid)
    if (!canEdit) throw new Error('.... ')
    repositoryuser.saveUser(full_name, date_birth, uid, rol)
  }

  createUser(full_name, date_birth) {
    const s = repositoryuser.getuid()
    repositoryuser.saveUser(full_name, date_birth, s)
  }
  getbyuid(uid) {
    console.log(repositoryuser)
    return repositoryuser.getByuid(uid)
  }
  getAllUser() {
    return repositoryuser.getAlluser()
  }
}
exports.ServiceUser = ServiceUser