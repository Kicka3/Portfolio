import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import work3 from "../../../../assets/images/Rectangle2.png"
import {BgXWork} from "../../../../components/BgXWork";


type WorkPropsType = {
    title: string,
    text: string,
    src: string,

}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork style={{backgroundImage: `url(${work3})`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            <BgXWork/>

            <div style={{
                display: 'flex',

                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'white',
                padding: '20px 30px',
                borderRadius: ' 0px 0px 26px 26px',
            }}>
                <Title>{props.title}</Title>

                <FlexWrapper justify={"flex-start"} gap={"21px"} >



                    <FlexWrapper justify={"space-between"} gap={"11px"}>
                        <Button padding={"1px 5px"} fSize={"14px"} color={"#FFF"}
                                background={"#2157F2"}
                                borderRadius={"12px"}  width={"109px"} height={"29px"}>
                            <span>Live Preview</span>
                        </Button>
                    </FlexWrapper>

                    <FlexWrapper gap={"11px"}>
                        <Button padding={"1px 5px"} fSize={"14px"} color={"#FFF"}
                                background={"#2157F2"}
                                borderRadius={"12px"} width={"109px"} height={"29px"}>
                            <span>View Code</span>
                        </Button>
                    </FlexWrapper>

                </FlexWrapper>
            </div>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  max-width: 270px;
  height: 394px;
  cursor: pointer;
  border-radius: 26px 26px;
  background-color: #F9F9FC;

  position: relative;
  z-index: 99999;

  //padding-bottom: 152px;
  //background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAAGIBAMAAABxTQxaAAAAD1BMVEUAAAAfXPUVVf8cVf8YXv+dCcSnAAAABXRSTlMAGQwJFVp/uGIAAATdSURBVHja7MGBAAAAAICg/akXqQIAAAAAAAAAAGB26IA0ggAGAuClxMCUCqiUj39Tb2IJHGQkzDnnnHPOOeecuJ/njfw/71N+n/fhhdnFC7N5YXYRy+7Ps4Rc9vw9O4pYdrOUTS572MkuYtnNUja57GEnu4hlN0vZ5LKHnewilt0sZZPLHnayi1h2s5RNLnvYyS5i2c1SNrnsYSe7iGU3S9nksoed7CKW3Sxlk8sedrKLWHazlE0ue9jJLmLZzVI2uexhJ7uIZTdL2eSyh53sIpbdLGWTyx52sutLDb2dKBQAQRRcFhNojMAMzD86D/j+7MswdlcIJY1lU72ULdnZfjXZq9VkO9VL2dJcNtU72VSPZVO9lC3NZVO9k031WDbVS9nSXDbVO9lUj2VTvZQtzWVTvZNN9Vg21UvZ0lw21TvZVI9lU72ULc1lU72TTfVYNtVL2dJcNtU72f/SWDbVW9mXuWyq+7JPMlxTso1qnf9Cst3qjGyzOiPbrc7INqszst3qjGyzOiPbrc7INqszst3qjGyzOiPbrc7INqszst3qjGyzOiPbrc7INqszst3qjGy7OiHbr07IPlD9++yfVx/IDqg+kJ1QfSA7oNrNRkK1n51Q/ZXdU/2Z3VP9kd1U/c5uqn5ld1U/s7uqH9lt1ffstmqypb5qsguryW6sJruwmuzGarILq8lurCa7sJrsxmqyC6vJbqy+UXPHJgoAUBQEuRKuJPtvykVENPzZmxYmXjZskDpskTpskDpskTpskDpskTpskDpskTpskDpskTpskDpskTpskDpskTpskDpskTpskDpskTpskDpskTpskDpskTpskDpskfqEPXSsPGHv7EFN7D8S+/EPYlc3gdhRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9hRg9hRe9gvag77Ra1hv6kx7De1hf2hprA/1BL2FzWE/UXtYP9QM9inScVKynD7gax0IyfqlW7kRr0S6ZyoVyKdG/VKEXWiXimibtQr+dmJeiU/u1GvtH4n6pXW70a9ElY+2bmDEwZgGIaitTuJ91+y/95LDEIokL+A4J3jrKhTHlbuqFNesa6oU16x7qhTngyvqFOeDO+oU95nr6hT3mfvqFMew6+oUx7D76hTLg9W1CmXBzvqlDOPFXXKmceOOuWmpjbUOTc1G+qcA6Y6p046YDqnTroWq1PqrGuxU+qs07xaUAuxPw5sqJXYKBiwGVlgWw5lNSPtpKbSjIyTmjQj7aSm0oyMk5o0I+2kptKMjJOaNCPtpKbSjIyTmjQj7aSm0oyMk5o0I+2kptKMjJOaNCPtpKbSjIyTmjQj7aSm0oyMk5o0I+2kptKMjJOaNCPtpKbSjIyTmv5GaF87qak0I+OkJs1IO6mpNCPjpCbNSDupqTQj46QmzUg7qak0I+OkJs1IO6mpNCPjpCbNSDupqTQj46QmzUg7qak0I+OkJs1IO6np+5E0Yd+VntVRP8MeNxdSg30jNdgXUoN9IzXYF1KDfSM12BdSg30j9ev1er1er9fr9WsPDgkAAAAABP1/7QkjAAAAAAAAAAAAALAIrzZXoWn3tQ8AAAAASUVORK5CYII=);
  //background-repeat: no-repeat;
  //background-position-y: bottom;
  //background-position-x: right;
`;

const Title = styled.h3`
  padding-left: 33px;
  padding-right: 33px;
  margin-bottom: 29px;
  text-align: left;
  font-size: 20px;
  color: #2157F2;
  overflow: hidden;

  //Ограничить ширину!!
  width: 250px;
`;


// const Image = styled.img`
//   border-radius: 26px;
//   max-width: 270px;
//   height: 394px;
//   flex-shrink: 0;
//   object-fit: contain;
//   margin-bottom: 17px;
// `;

// const TitleWrapper = styled.div`
//   width: 270px;
//   height: 154px;
//   flex-shrink: 0;
// `;

// const Text = styled.p`
//   margin-bottom: 21px;
//   padding-right: 32px;
//   padding-left: 29px;
// `;
//
// const Link = styled.a`
//   color: #000;
//   font-family: Poppins, sans-serif;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 26px;
//   text-decoration-line: underline;

//   :hover {
//     background-color: #A6BCFA;
//   }
// `;
