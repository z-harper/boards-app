import { FaLayerGroup, FaUserFriends, FaRegObjectGroup, FaFileImage } from 'react-icons/fa';

const style = { color: '#d2a850', fontSize: '3rem' }

const navLinks = [
  {
    displayAs: 'My Projects',
    linkTo: '/projects',
    icon: <FaLayerGroup style={style} />,
  },
  {
    displayAs: 'My Groups',
    linkTo: '/groups',
    icon: <FaRegObjectGroup style={style} />,
  },
  {
    displayAs: 'My Friends',
    linkTo: '/friends',
    icon: <FaUserFriends style={style} />,
  },
]

const editProfile = {
  displayAs: 'Edit Profile',
  linkTo: '/edit-profile',
  uploadIcon: <FaFileImage style={{ color: '#d2a850', fontSize: '5rem' }} />,
  uploadText: 'Add a profile image!',
}

export const data = {
  links: navLinks,
  profile: editProfile,
}