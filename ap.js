class Post {

  constructor(writter, id, text) {

    this.writter = writter
    this.id = id
    this.text = text


  }
}

class RepositoryPost {
  post_list = [new Post(1, 2, 'text')]
  isExts(id) {
    console.log('============', id)
    const m = this.getBy(id)
    if (m)
      return true
    return false

  }

  canEdit(id, uid) {
    const s = this.getBy(id)
    if (s) return s.writter == uid;
    return false
  }

  getBy(id) {
    for (let i of this.post_list) {
      if (i.id == id) return i

    }
    return null

  }
  save(id, text, uid) {
    let b = this.getBy(id)
    if (b) {
      b.text = text
      b.uid = uid
    }
    else {
      b = new Post(uid, id, text)
      this.post_list.push(b)
    }
  }

  getId() {
    let p = 0

    for (let i of this.post_list) {

      if (i.id >= p) {
        p = i.id

      }
    }
    return p + 1
  }
  getAll() {
    return this.post_list
  }
}
exports.RepositoryPost = RepositoryPost
