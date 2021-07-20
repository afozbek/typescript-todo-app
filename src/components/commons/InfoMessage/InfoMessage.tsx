import { englishVermillion } from 'config/variables'
import React from 'react'
import styled from 'styled-components'
import { rotate360 } from 'utils/styled-mixins'

interface Props {
  description: React.ReactElement,
}

const StyledInfoMessage = styled.p`
    text-align: justify;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom: 10px;
    /* animation: ${rotate360} 2s linear infinite; */

    code {
      font-size: 12px;
    }

    &.author {
      text-align: center;
      margin-top: 30px;

      .desc {
        margin-right: 5px;
      }
      
      a {
        text-decoration: none;
        color: ${englishVermillion};
        display: inline-flex;
        justify-content: center;
        align-items: center;

        .text-name {
          margin-right: 5px;
        }
      }
    }
`

const InfoMessage = ({ description, ...rest }: Props & React.HTMLAttributes<any>) => {
  return (
    <StyledInfoMessage tabIndex={0} {...rest}>
      {description}
    </StyledInfoMessage>
  )
}

export default InfoMessage
