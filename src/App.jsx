// style
import './App.css'
// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userlist/UserList'
import NewUser from './components/newuser/NewUser'
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  //delete user function
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }
  // close Modal function
  const closeModal = (e) => {
    if (e.target.className === "overlay") {
      setShowModal(false)
    }
    if (e.key === "Escape") {
      setShowModal(false)
    }
  }

  // add user function
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev , user]
    })
    setShowModal(false)
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar userslength={users.length} />
      <main>
        <div className='no-users'>
          {users.length === 0 && <h2>No users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUser addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className='create-user'>Create user</button>
      <Footer />
    </div>
  )
}

export default App
