import React, { Component } from 'react';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    let that = this;
    fetch('https://reqres.in/api/users?page=2')
      .then(function (users) {
        return users.json()
      }).then(function (users) {
        let list = users.data.map(user => {
          return (
            <article key={user.id}>
              <div className="user">
                <img src={user.avatar} alt={user.title} className="avatar" alt="" role="presentation" />

                <p>{user.first_name} {user.last_name}</p>
              </div></article>
          )
        })
        that.setState({ users: list })
      })
  }
  render () {
    return (
      <main>
        <section id="users">{this.state.users}</section>
      </main>
    )
  }
}
export default Users;