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
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex 
  flex-col 
  bg-red-300
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

