import { useRouter } from "next/router";
import Layout from "../../components/commonlayout";

export default function Name() {
  const router = useRouter();
  return (
    <h1>
      商品
      {router.query.name}
      のページです
    </h1>
  );
}

Name.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
