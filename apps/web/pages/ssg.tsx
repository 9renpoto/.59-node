export default function SSG({ framework }: { framework: string }) {
  return <div>{framework} ssg example</div>;
}

export function getStaticProps() {
  return {
    props: { framework: "preact" },
  };
}
