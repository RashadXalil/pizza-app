import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const index = () => {
  return (
    <div className="custom__header">
      <div className="custom__header__left">
        <div className="custom__header__left__item">
          <img
            src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="custom__header__right">
        <div className="active custom__header__right__logined">
          <span>UserName UserSurname</span>
          <Link className="custom__header__link" to="/logout">
            Log Out
          </Link>
        </div>
        <div className="  custom__header__right__notlogined">
          <Link className="custom__header__link" to="/login">
            Login
          </Link>
          <Link className="custom__header__link" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index
