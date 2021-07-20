import { Avatar, Container } from '@chakra-ui/react'
import InfoMessage from 'components/commons/InfoMessage'
import { secondaryAvatarUrl } from 'utils/constants'

const Footer = () => {

  return (
    <Container>
      <InfoMessage description={<>This page is <strong>completely accessible</strong>. If you want to use your keyboard, go ahead and try it!</>} />
      <InfoMessage description={<>You can also edit todo item by pressing <code><strong>space</strong></code> key in your keyboard while focusing to todo label.</>} />
      <InfoMessage description={<>If you want to filter your todo items, no problem. Just use the filter buttons</>} />
      <InfoMessage description={<>To remove an item press <code><strong>delete</strong></code> key in your keyboard when you focus to TODO item.</>} />
      <InfoMessage description={<>You can also delete todo by hovering the item and then press the <code><strong>delete</strong></code> button.</>} />
      <InfoMessage
        id="authorParagraph"
        tabIndex={0}
        className="author"
        aria-label="Made With Love by Abdullah Furkan Ozbek"
        description={<>
          <span className="desc">Made with
            <span role="img" aria-labelledby="authorParagraph"> ❤️</span> by
          </span>
          <a className="o-app__author"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="To Visit Creator's Github Page, please press enter button"
            href="https://github.com/afozbek">
            <span className="text-name">Abdullah Furkan Özbek</span>
            <Avatar src={secondaryAvatarUrl} size="sm" />
          </a>
        </>}

      />
    </Container>
  )
}

export default Footer
