import React from 'react'
import styled from 'styled-components'
import img from "../Sociail/FORTIZ-removebg-preview.png"
import { AiOutlineHome, AiFillHome, AiFillSetting } from 'react-icons/ai';
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

function SocailHeaders() {
  const dispatch = useDispatch();
  const filData = useSelector((state) => state.socailReducer.friends)

  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={img} />
        </Logo>
        <MenuIcon>
          <Nav to="/">
            <AiFillHome />
          </Nav>
          <Nav to="/firends">
            <FaUserFriends />
            <span>{filData.length}</span>
          </Nav>
          <Nav>
            <AiFillSetting />
          </Nav>


        </MenuIcon>

      </Wrapper>
    </Container>
  )
}

export default SocailHeaders

const Nav = styled(Link)`
width: 80px;
height: 50px;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
font-size: 25px;
transition: all 350ms;
transform: scale(1);

span{
  font-size: 9px;
    width: 15px;
    height: 15px;
}



:hover{
  transform: scale(1.2000);
  background-color: rgba(255, 255, 255, 0.6);
  color: white;

  span{
    font-size: 9px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
  }

}
`
const Logo = styled.div`
width: 70px;
height: 70px;
border-radius: 10px;

img{
width: 70px;
height: 70px;
border-radius: 10px;
}

`
const MenuIcon = styled.div`
display: flex;
`
const Container = styled.div`
color: while;
position: fixed;
z-index: 1;
width: 100%;
  height: 120px;
`
const Wrapper = styled.div`
height: 70px;
background-color: #003E3E;
display: flex;
align-items: center;

`