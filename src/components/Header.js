import React from 'react'

const Header = ({backBtn}) => {
  return (
    <header>
        <i class='bx bx-left-arrow-alt' onClick={backBtn}>←</i>Weather App
    </header>
  )
}

export default Header