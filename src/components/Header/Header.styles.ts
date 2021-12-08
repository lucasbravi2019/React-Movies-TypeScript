import styled from 'styled-components'


export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px; 
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);

    a {
        color: var(--white);
        text-decoration: none;
    }

    .login-button {
        border: 1px solid var(--medGrey);
        padding: 10px;
        border-radius: 20px;
        transition: all 0.3s ease-in-out;
    }

    .login-button:hover {
        background: var(--medGrey);
    }
`

export const LogoImg = styled.img`
    width: 200px;
    @media (max-width: 500px) {
        width: 150px;
    }
`

export const TMDBLogoImg = styled.img`
    width: 100px;
    @media (max-width: 500px) {
        width: 80px;
    }
`

