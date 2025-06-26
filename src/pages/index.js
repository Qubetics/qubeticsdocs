import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Card from "../components/Card";

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="Qubetics Network Docs">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: "750" }}>
          Welcome to Qubetics Network Docs
        </h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="./protocol"
                header={{
                  label: "Learn about Qubetics",
                }}
                body={{
                  label:
                    "Discover why Qubetics",
                }}
              />
              <Card
                to="./develop/api"
                header={{
                  label: "API Reference",
                }}
                body={{
                  label:
                    "Qubetics Api Reference to build your custom dapp",
                }}
              />

              <Card
                to="./develop/smart-contracts"
                header={{
                  label: "Launch dApp on Qubetics",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM smart contracts",
                }}
              />

              <Card
                to="./protocol/qubetics-cli"
                header={{
                  label: "Join the chain",
                }}
                body={{
                  label:
                    // "Getting started on Qubetics is simple and easy with a local node",
                    "Learn how to run a qubetics node",
                }}
              />
              <Card
                to="./validate"
                header={{
                  label: "Become a Validator",
                }}
                body={{
                  label:
                    "Join qubetics's Proof-of-Stake protocol to help secure the network and earn rewards",
                }}
              />

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
