import { createGlobalStyle } from 'styled-components'

const Sizing = createGlobalStyle`
.width{
  width: 100%;
}

.w-0{
  width: 0px;
}

.w-2-5{
  width: 0.625rem; /* 10px */
}

.w-3{
  width: 0.75rem; /* 12px */
}

.w-3-5{
  width: 0.875rem; /* 14px */
}

.w-4{
  width: 1rem; /* 16px */
}

.w-5 {
  width: 1.25rem; /* 20px */
}

.w-6 {
  width: 1.5rem; /* 24px */
}
.w-7 {
  width: 1.75rem; /* 28px */
}
.w-8 {
  width: 2rem; /* 32px */
}
.w-9{
  width: 60px;
  height: 60px;
}

.w-1-2{
  width: 50%;
}

.w-1-3{
  width: 33.333333%;
}

.w-2-3{
  width: 66.666667%;
}

.w-1-4{
  width: 25%;
}

.w-3-4{
  width: 75%;
}

.w-1-5{
  width: 20%;
}

.w-2-5{
  width: 40%;
}

.w-3-5{
  width: 60%;
}

.w-4-5{
  width: 80%;
}

.w-1-6{
  width: 16%;
}

.w-1-6{
  width: 16.666667%;
}

.w-5-6{
  width: 83.333333%;
}

.w-11-12{
  width: 91.666667%;
}

.w-full{
  width: 100%;
}

.w-screen{
  width: 100vw;
}

.w-min{
  width: min-content;
}

.w-max{
  width: max-content;
}
.w-fit{
  width: fit-content;
}

.min-w-0{
  min-width: 0px;
}

`

export default Sizing
