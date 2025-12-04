function Logic() {

}

Logic.prototype.registerUser = function (name, email, username, password, repeatPassword) {
    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 2) throw new Error('Invalid name length')

    if (typeof email !== 'string') throw new Error('invalid email type')
    if (email.length < 7) throw new Error('invalid name length')

    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 2) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid pass lenght')

    if (typeof repeatPassword !== 'string') throw new Error('invalid password type')
    if (repeatPassword.length < 8) throw new Error('invalid pass lenght')
}