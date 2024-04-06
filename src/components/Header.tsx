'use client';
import styled from 'styled-components';
import '../styles/header.scss';

const HeaderWrapper = styled.div`
  background-color: black;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderWrapper className="z-50">
      <div className="body">
        <div role="button">
          <div>
            <div className="px-[24px] md:px-[60px] flex justify-between w-full items-center">
              <img
                className="scale-50 md:scale-90"
                src="./logo.svg"
                alt="logo"
              />
              <div className="text-[18px] md:text-[25px]">GENEX DESIGN</div>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}
