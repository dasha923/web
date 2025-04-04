class User {
  constructor(full_name, date_birth, uid, rol,) {

    this.full_name = full_name
    this.date_birth = date_birth
    this.uid = uid
    this.rol = rol


  }
}
class RepositoryUsers {
  user_list = [new User("Иванов Иван Федорович", "11.12.1991", 4, false)]


  isExts(uid) {
    const m = this.getByuid(uid)
    if (m)
      return true
    return false

  }
  canEdituser(auid, uid) {
    const s = this.getByuid(auid)

  return s.rol

  }
  getuid() {
    let u = 0;
    for (let i of this.user_list) {
      if (i.uid >= u) {
        u = i.uid

      }
    }
    return u + 1
  }
  getByuid(uid) {
    for (let i of this.user_list) {
      if (i.uid = uid)
        return i
    }
    return null
  }
  saveUser(full_name, date_birth, uid,rol) {
    let b = this.getByuid(uid)
    if (b) {
      b.full_name = full_name
      b.date_birth = date_birth
      b.rol=rol
    }
    else {
      b = new User(full_name, date_birth, uid)
      this.user_list.push(b)
    }
  }
  getAlluser() {
    console.log("##",this.user_list )
    return this.user_list
  }

}
exports.RepositoryUsers = RepositoryUsers 