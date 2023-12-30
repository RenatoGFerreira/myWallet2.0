import styled from "styled-components"

export default function LogoMyWallet() {
    return (
        <Text>MyWallet 2.0</Text>
    )
}

const Text = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    color: #000;
    @media (max-width: 1200px) {
      color: #fff;
      font-size: 42px;
    }
`