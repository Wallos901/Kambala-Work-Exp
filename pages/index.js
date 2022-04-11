import Layout from "../components/Layout";
import Divider from "../components/Divider";
import OldButtonsSection from "../components/old-buttons/OldButtonsSection";
import YourButtonsSection from "../components/your-buttons/YourButtonsSection";
import IdealButtonsSection from "../components/ideal-buttons/IdealButtonsSection";

const Home = () => {
  return (
    <Layout>
      <OldButtonsSection />
      <Divider />
      <YourButtonsSection />
      <Divider />
      <IdealButtonsSection />
    </Layout>
  );
};

export default Home;
