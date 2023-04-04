import Image from "next/image";
import Heading from "../elements/Heading/Heading";
import bannerImg from "@assets/FinishOrderPage/banner.png";

const FinishOrderPage = function () {
  return (
    <main>
      <Heading
        style={{ margin: "100px 0 50px", textAlign: "center" }}
        type="h1"
      >
        Thanks for your order
      </Heading>
      <Image
        style={{ marginBottom: "240px" }}
        src={bannerImg}
        width="100%"
        height={450}
      />
    </main>
  );
};

export default FinishOrderPage;
