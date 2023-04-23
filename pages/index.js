import React, { Component } from "react";
import { Card, Button, GridColumn } from "semantic-ui-react";
// import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  // static async getInitialProps() {
  // const campaigns = await factory.methods.getDeployedCampaigns().call();
  // return { campaigns };
  // }
  // }

  // renderCampaigns() {
  //   const items = this.props.campaigns.map((address) => {
  //     return {
  //       header: address,
  //       description: (
  //         <Link route={`/campaigns/${address}`}>
  //           <a>View Campaign</a>
  //         </Link>
  //       ),
  //       fluid: true,
  //     };
  //   });
  //   return <Card.Group items={items} />;
  // }

  render() {
    return (
      <Layout>
        <div>
          <div class="ui padded grid">
            <div class="twelve wide column">
              <h3>Recent Transations</h3>
            </div>
            <div class="four wide column">
              <div class="ui vertical buttons" style={{ padding: "0px" }}>
                <Link route="/newcar">
                  <a>
                    {" "}
                    <button class="big ui button" style={{ padding: "20px" }}>
                      Create New Car
                    </button>
                  </a>
                </Link>

                <Link route="/carmaintenance">
                  <a>
                    <button class="big ui button" style={{ padding: "20px" }}>
                      Car Maintenance
                    </button>
                  </a>
                </Link>

                <Link route="/changeowner">
                  <a>
                    <button class="big ui button" style={{ padding: "20px" }}>
                      Second Hand Car{" "}
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
