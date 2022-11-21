import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const Container = styled.div`
    background: gray;
    gap: 8px;
`

export const Title = styled.h1`
    color: white;

`

export const Text = styled.p`

`
export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`
export const Button = styled.button<ButtonProps>`
    width: 200px;
    padding: 10px 20px;
    border-radius: 15px;
    font-size: 16px;
    background: green;
    color: white;
    border: 2px solid green;
    :hover {
        background: transparent;
        color: white;
        border: 2px solid green;
    }
    ${(props) => props.disabled &&
        css`
      background: gray;
      color: #ffffff;
      border: 2px solid black;
      cursor: not-allowed;
    `
    }
`