import { Btn, Input, Form } from './Form.styled';

export const SearchForm = ({ value, onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
      <Btn type="submit">Search</Btn>
    </Form>
  );
};
