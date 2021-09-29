import React from 'react'
import styled from 'styled-components'
import img from "../Sociail/FORTIZ-removebg-preview.png"
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from "react-router-dom"

function SocailHeaders() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={img} />
        </Logo>
        <MenuIcon>
          <AiOutlineHome
            style={{
              color: "white"

            }}
          />

        </MenuIcon>

      </Wrapper>
    </Container>
  )
}

export default SocailHeaders

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
const MenuIcon = styled.div``
const Container = styled.div``
const Wrapper = styled.div`
height: 70px;
background-color: #003E3E;
display: flex;
align-items: center;

`