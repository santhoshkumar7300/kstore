import Styles from "./Store.module.css";
import wallet from "../../../Assets/wallet.svg";
import OurServices from "./OurServices";
import leftDraw from "../../../Assets/leftDraw.svg";
import rightDraw from "../../../Assets/rightDraw.svg";
import earning from "../../../Assets/kstore_earning.svg";
import networth from "../../../Assets/kstore_networth.svg";
import search from "../../../Assets/search.svg";
import RecentActivity from "./RecentActivity";
import PaymentDetails from "./Payment";
import Wallet from "./Wallet";
import Chart from "./Chart";

export default function Store() {
  return (
    <div className={Styles.overallContainer}>
      <div className={Styles.leftContainer}>
        <div className={Styles.leftChildContainer}>
          <div className="mt-3">
            <h2 className="kstoreFont fs-3 text-uppercase">
              Wallet <span className="orange">Details</span>
            </h2>
            <div className={Styles.wallet}>
              <img
                className={Styles.walletInnerImg}
                src={wallet}
                alt="wallet"
              />
              <div className={Styles.walletContent}>
                <h3 className="text-white kstoreFont">Balance</h3>
                <h4 className="text-white kstoreFont">₹ 34772.90</h4>
              </div>
              <p className={Styles.balHistory}>Balance History</p>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="kstoreFont fs-3 text-uppercase">
              Track <span className="orange">fb1313</span>
              <div className={Styles.trackContainer}>
                <h4
                  className={
                    Styles.trackOrderId + " kstoreFont fs-6 text-uppercase"
                  }
                >
                  order id
                </h4>
                <div className={Styles.trackInputContainer}>
                  <input
                    className={Styles.trackInput + " kstoreFont2"}
                    type="text"
                    placeholder="Enter Order id"
                  />
                </div>
                <div className={Styles.trackBtnContainer}>
                  <button className={Styles.trackBtn}>Track Order</button>
                </div>
              </div>
            </h2>
          </div>
          <div className="mt-5">
            <h2 className="kstoreFont fs-3 text-uppercase">
              Our <span className="orange">Services</span>
            </h2>
            <div className={Styles.servicesContainer}>
              {[...new Array(12)].map((e) => (
                <OurServices />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.rightContainer}>
        <div>
          <div>
            <h2 className="kstoreFont fs-3 text-uppercase">
              Monthly <span className="orange">Sales</span>
            </h2>
            <div className={Styles.rightChartContainer}>
              <div className={Styles.leftSideChart}>
                <Chart />
                {/* <p>santhosh</p> */}
              </div>
              <div className={Styles.rightSideChart}>
                <div className={Styles.rightSideChild}>
                  <div className={Styles.rightContentContainer}>
                    <p className={Styles.rightSideTitle}>Total Revenue</p>
                    <p className="fw-bold text-white mb-0">₹ 2,500.00</p>
                    <p className={Styles.rightSideOrder}>273 Orders</p>
                  </div>
                  <img className={Styles.drawImg} src={leftDraw} alt="left" />
                </div>
                <div className={Styles.rightSideChild2}>
                  <div className={Styles.rightContentContainer}>
                    <p className={Styles.rightSideTitle}>Subscribers</p>
                    <p className="fw-bold text-white mb-0">2,769</p>
                    <p className={Styles.rightSideOrder}>Response Time</p>
                  </div>
                  <img className={Styles.drawImg} src={rightDraw} alt="right" />
                </div>
              </div>
            </div>
            <div className={Styles.moneyContainer}>
              <div className={Styles.moneyChildContainer}>
                <div>
                  <div className="mt-3">
                    <p className={Styles.moneyTitle + " mb-0 mt-4"}>
                      Total Balance
                    </p>
                    <p className={Styles.money}>₹2,500.00</p>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <button className={Styles.transferBtn + " moneyBtn"}>
                      Transfer
                    </button>
                    <button className={Styles.requestBtn + " moneyBtn"}>
                      Request
                    </button>
                  </div>
                </div>
              </div>
              <div className={Styles.moneyChildContainer}>
                <div className="d-flex justify-content-center mt-3">
                  <div className={Styles.earningContainer}>
                    <img
                      className={Styles.earnImg}
                      src={earning}
                      alt="earning"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className={Styles.moneyTitle + " mb-0"}>Total Earning</p>
                  <p className={Styles.money + " mb-0"}>₹10,500.00</p>
                </div>
              </div>
              <div className={Styles.moneyChildContainer}>
                <div className="d-flex justify-content-center mt-3">
                  <div className={Styles.earningContainer}>
                    <img
                      className={Styles.earnImg}
                      src={networth}
                      alt="earning"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className={Styles.moneyTitle + " mb-0"}>Total Networth</p>
                  <p className={Styles.money + " mb-0"}>₹5,500.00</p>
                </div>
              </div>
            </div>

            <div className={Styles.recentActivityContainer + " mt-5"}>
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.lastContainer}>
        <div className="d-flex justify-content-center mt-3">
          <div className={Styles.searchChildContainer}>
            <input
              className={Styles.searchInput}
              type="text"
              placeholder="Search, Payment Customer......"
            />
            <div className="align-self-center">
              <img className={Styles.searchImg} src={search} alt="search" />
            </div>
          </div>
        </div>
        <div className={Styles.paymentContainer + " mt-4"}>
          <div className="d-flex justify-content-between">
            <h3 className="kstoreFont fs-2">Payments</h3>
            <span className={Styles.clearall + " orange align-self-center"}>
              Clear All
            </span>
          </div>
          <div className={Styles.paymentDetailsParent}>
            {[...new Array(4)].map((e) => (
              <div className={Styles.paymentDetailsContainer}>
                <PaymentDetails />
              </div>
            ))}
          </div>
        </div>
        <div className={Styles.walletContainer + " mt-4"}>
          <div className="d-flex justify-content-between">
            <h4 className="kstoreFont fs-3">Wallet</h4>
            <div className={Styles.walletFilterContainer}>
              <span className={Styles.walletFilter}>Month</span>
              <span className={Styles.walletFilter}>Week</span>
              <span className={Styles.walletFilter}>Today</span>
            </div>
          </div>
          <div className={Styles.WalletParent}>
            {[...new Array(10)].map((e) => (
              <Wallet />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
