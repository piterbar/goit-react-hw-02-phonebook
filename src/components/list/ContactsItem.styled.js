import styled from 'styled-components';

export const ContactsItem = styled.li`
  margin-left: 0;
  display: flex;
  width: auto;
  height: 40px;
  padding: ${p => p.theme.space[2]}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.lightGray};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.gray};
  & + & {
    margin-top: 10px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.darkGray};
  background-color: ${p => p.theme.colors.gray};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.darkGray};
  border-radius: 5px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.lightGray};
    background-color: ${p => p.theme.colors.darkGray};
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.gray};
`;
