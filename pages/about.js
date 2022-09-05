import Layout from "../components/commonlayout";

export default function AboutPage() {
  return <div>About us</div>;
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
