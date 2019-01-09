import React from 'react'
import ProfileNav from './ProfileNav'
import SideBar from './SideBar'
import MyReviews from './MyReviews'

function UserProfile() {
  return (
    <div>
      <ProfileNav />
      <SideBar />
      <MyReviews />
    </div>
  )
}

export default UserProfile;