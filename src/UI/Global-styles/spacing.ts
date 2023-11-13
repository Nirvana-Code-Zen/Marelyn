import { createGlobalStyle } from 'styled-components'

export const Spacing = createGlobalStyle`
  .my{
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }

  .my-2{
    margin-top: 1rem;
    margin-bottom: 2.2rem;
  }

  .mt{
    margin-top: 1.2rem;
  }

  .mt-2{
    margin-top: 2.4rem;
  }

  .mt-5{
    margin-top: 5rem;
  }

  .mb{
    margin-bottom: 1.2rem;
  }

  .mb-2{
    margin-bottom: 2.4rem;
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`