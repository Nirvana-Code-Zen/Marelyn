import style from "styled-components";

export default style.button`
  padding: .3rem 1rem;
  background: ${(props) => props.theme.colors.secondary};
  color: '#fff';
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;

  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  color: #FFF;
  padding: 1em 1.8em;
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;

  & .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.black};
  }

  &:hover .arrow {
    background-color: #FFF;
  }

  & .arrow {
    margin-top: 1px;
    width: 10px;
    background: ${(props) => props.theme.colors.primary};
    height: 2px;
    position: relative;
    transition: 0.2s;
  }

  & .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: 0 solid #FFF;
    border-width: 0 2px 2px 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }

  &:hover .arrow:before {
    right: 0;
  }
`;
