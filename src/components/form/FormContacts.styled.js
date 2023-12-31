import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Box = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${p => p.theme.space[3]}px;
`;

export const Input = styled(Field)`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  color: ${p => p.theme.colors.darkGray};
  background-color: ${p => p.theme.colors.lightGray};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.gray};
  }
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.gray};
`;

export const SubmitButton = styled.button`
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  justify-content: center;
  width: 140px;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.darkGray};
  background-color: ${p => p.theme.colors.lightGray};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    color: ${p => p.theme.colors.darkGray};
    background-color: ${p => p.theme.colors.gray};
  }
`;
