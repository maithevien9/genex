'use client';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  :focus {
    outline: none;
  }

  textarea {
    font: 20px 'Nippo-Regular';
    color: #ffffff;
    padding: 0 16px !important;
    width: 100%;
    font-size: 20px;
    box-sizing: border-box;
    letter-spacing: 1px;
    padding-top: 20px !important;
    background-color: hsla(0, 0%, 100%, 0.2) !important;
    height: 100px;
    border-radius: 0px;
  }
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: 0.5px;
    font-size: 16px;
  }

  :focus {
    outline: none;
  }

  .col-3 {
    float: left;
    width: 100%;
    position: relative;
  }
  /* textarea {
    font: 20px 'Nippo-Medium';
    color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    height: 100px;
  } */

  .effect-16,
  .effect-17,
  .effect-18 {
    border: 0;
    padding: 4px 0;
    /* border-bottom: 1px solid #ccc; */
    background-color: transparent;
  }

  .effect-16 ~ .focus-border {
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.7);
    transition: 0.4s;
  }
  .effect-16:focus ~ .focus-border,
  .has-content.effect-16 ~ .focus-border {
    width: 100%;
    transition: 0.4s;
  }
  .effect-16 ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: -4px;
    color: rgba(255, 255, 255, 0.3);
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }

  .effect-16:focus,
  .effect-16:not(:placeholder-shown) {
    background-color: rgba(255, 255, 255, 0.3) !important;
  }
`;

interface Props {
  label: string;
  onChange?: (value: string) => void;
}

export default function TextArea({ label, onChange }: Props) {
  return (
    <Wrapper>
      <div className="col-3 input-effect">
        <textarea
          className="effect-16 text-[16px] w-full translate-y-1 mt-[-4px]"
          placeholder={label}
          onChange={(event) => onChange && onChange(event.target.value)}
        />
        <span className="focus-border"></span>
      </div>
    </Wrapper>
  );
}
