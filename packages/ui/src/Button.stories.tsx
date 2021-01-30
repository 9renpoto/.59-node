const Button = ({ children }: { children: JSX.Element | string }) => (
  <button>{children}</button>
);

export default {
  title: "Button",
  component: Button,
};

const Template = () => <Button>hello</Button>;

export const Basic = Template.bind({});
