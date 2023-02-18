import styled from 'styled-components'

const Container = styled.section`
  .todo {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;

    &.reminder {
      border-left: 5px solid green;
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export default Container
