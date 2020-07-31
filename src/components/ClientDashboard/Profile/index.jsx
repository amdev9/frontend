
import React from 'react'
import WidgetLayout from '../../WidgetLayout'

Profile.title =  'Профиль';
function Profile() {

  const mobilePhone = '+7(977)123-12-32'
  return (
    <WidgetLayout name={ Profile.title } id="Profile">
      {/* customHeader={ this.getCustomHeader() } */}
      <label>Мобильный</label>
      <span>{ mobilePhone }</span>
    </WidgetLayout>
  )
}

export default Profile