import type { GetStaticProps, NextPage } from "next";

interface Props {
  framework: string;
}

const SSG: NextPage<Props> = ({ framework }) => (
  <div>{framework} ssg example</div>
);

export default SSG;

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { framework: "preact" },
});
