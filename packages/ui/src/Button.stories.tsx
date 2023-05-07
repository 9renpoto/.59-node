const Button = ({ children }: { children: Element | string }) => (
  <button>{children}</button>
);

export default {
  title: "Button",
  component: Button,
};

const Template = () => <Button>hello</Button>;

export const Basic = Template.bind({});
