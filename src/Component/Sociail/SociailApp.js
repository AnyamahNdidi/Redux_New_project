import React, { useEffect } from 'react'
import styled from "styled-components"
import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import data from "../Global/database.json"
import { adduser, addfriend } from "../Global/socail"

function SociailApp() {
  const dispatch = useDispatch()
  const file = useSelector((state) => state.socailReducer.user)

  useEffect(() => {
    dispatch(adduser(data))
    console.log(file)
  }, [])

  return (
    <Container>
      <Wrapper>
        {
          file.map((props) => (
            <Card>
              <Image>
                <img src={props.img} />

              </Image>
              <Content>
                <ConName>
                  {props.name}
                </ConName>
                <Email>
                  Anyamah@gmail.com
                </Email>
                <Stack>
                  Full stack
                </Stack>
                <Decs>

                </Decs>

                < ConButton>
                  <Button
                    onClick={
                      () => {
                        dispatch(addfriend(props))
                      }
                    }
                  >
                    ADD FRIEND
                  </Button>
                </ConButton>
              </Content>
            </Card>
          ))
        }

      </Wrapper>
    </Container>
  )
}

export default SociailApp

const ConButton = styled.div``

const Decs = styled.div``
const Stack = styled.div``
const Email = styled.div``
const ConName = styled.div``

const Image = styled.div`
height: 250px;
width: 100%;
background: grey;
border-radius: 5px;

img{
  height: 250px;
width: 100%;
background: grey;
border-radius: 5px;
object-fit: cover;
}

`

const Content = styled.div`
display: flex;
flex-direction: column;
`

const Card = styled.div`
height: 400px;
width: 350px;
background-color: cyan;
border-radius: 5px;
transition: all 500ms;
transform: scale(1);
display: flex;
flex-direction: column;
padding: 5px;
margin: 20px;

:hover{
  cursor: pointer;
  transform: scale(1.04);
}
`

const Container = styled.div``

const Wrapper = styled.div`
height: 100%;
min-height: 100vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`