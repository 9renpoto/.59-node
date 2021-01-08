import type { GetServerSideProps, NextPage } from "next";

interface Props {
  framework: string;
}

const SSR: NextPage<Props> = ({ framework }) => (
  <div>{framework} ssr example</div>
);

export default SSR;

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
  props: { framework: "preact" },
});
