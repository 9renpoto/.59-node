export default function SSR({ framework }: { framework: string }) {
  return <div>{framework} ssr example</div>;
}

export function getServerSideProps() {
  return {
    props: { framework: "preact" },
  };
}
