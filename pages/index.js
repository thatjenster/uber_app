import tw from "tailwind-styled-components"
import Map from './components/Map'

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="./uber-logo.png"/>
          <Profile>
            <Name>Jenny Dinh</Name>
            <UserImage src="./placeholder-image.jpeg"/>
          </Profile>
        </Header>
        <ActionBtnContainer>
          <ActionBtn>
            <ActionBtnImg src='./uber-x.jpeg'/>
            Uber X
          </ActionBtn>
          <ActionBtn>
            <ActionBtnImg src='./uber-black.jpeg'/>
            Uber Black
          </ActionBtn>
          <ActionBtn>
            <ActionBtnImg src='./reserve.jpeg'/>
            Reserve
          </ActionBtn>
        </ActionBtnContainer>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex 
  flex-col 
  h-screen
`

const ActionItems = tw.div`
  flex-1
  p-4
`

const Header = tw.div`
  flex
  justify-between
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex
  items-center
`

const Name = tw.div`
  mr-4
  text-sm
  w-20
`

const UserImage = tw.img`
  h-12
  w-12
  rounded-full
  border
  border-gray-200
  p-px
  object-cover
`
const ActionBtnContainer = tw.div`
  flex
`

const ActionBtn = tw.div`
  flex-1
  m-1
  h-32
  flex
  items-center
  flex-col
  justify-center
  rounded-lg
  border
  border-gray-500
  transform
  hover:scale-105
  transition
  text-xl
`

const ActionBtnImg = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20
  bg-gray-200
  p-4
  flex
  items-center
  mt-8
`
