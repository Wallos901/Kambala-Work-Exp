import styled from "styled-components";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Divider from "../components/Divider";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Heading>Old Button</Heading>
        <button>Hi</button>
      </Section>
      <Divider />
      <Section>
        <Heading>Your Button</Heading>
        <button>Hi</button>
      </Section>
      <Divider />
      <Section>
        <Heading>Ideal Button</Heading>
        <button>Hi</button>
      </Section>
    </Layout>
  );
};

export default Home;
