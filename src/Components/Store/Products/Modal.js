import Styles from "./Modal.module.css";
import Modal from "react-bootstrap/Modal";
import { Accordion, Button, Carousel } from "react-bootstrap";
import ProductImg from "../../../Assets/kstore_products.svg";
import { useState } from "react";
import filledStar from "../../../Assets/filledStar.svg";
import EmptyStar from "../../../Assets/EmptyStar.svg";
import Rating from "react-rating";
import like from "../../../Assets/product_like.svg";
import share from "../../../Assets/product_share.svg";
import offerPoints from "../../../Assets/offer_points.svg";
import reviewProfile from "../../../Assets/review_profile.svg";
export default function ModalView(props) {
  const [index, setIndex] = useState(0);

  const [offerdata, setOfferdata] = useState([
    { description: "Cash on Delivery Eligible" },
    { description: "Shipping Speed to Delivery" },
    { description: "EMIs from $100/month." },
    { description: "Bank Offer Extra 5% off* with Axis Bank Buzz Credit Card" },
  ]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Modal
        show={props.state}
        onHide={props.onHide}
        // {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // style={{ maxWidth: "1024px" }}
      >
        <Modal.Body>
          <div className={Styles.overallContainer}>
            <div className={Styles.leftContainer}>
              <div className={Styles.modalImgContainer}>
                <img
                  className={Styles.modalImg}
                  src={ProductImg}
                  alt="modalimg"
                />
              </div>
              <div className="mt-3">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item className={Styles.modalItemContainer}>
                    {[...new Array(3)].map((e) => (
                      <div className={Styles.modalSmallImgContainer}>
                        <img
                          className={Styles.modalSmallImg}
                          src={ProductImg}
                          alt="First slide"
                        />
                      </div>
                    ))}
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className={Styles.rightContainer}>
              <div
                onClick={props.onHide}
                className="d-flex justify-content-end"
              >
                <div className={Styles.cancelContainer}>
                  <span>x</span>
                </div>
              </div>
              <div>
                <p className="orange text-decoration-underline fw-bold">
                  Electronic Prodcuts
                </p>
                <h4 className="kstoreFont">WH-XB910N Wireless Noise</h4>
                <p className={Styles.rightDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  morbi integer malesuada non adipiscing quis odio. Feugiat eu
                  in massa pretium, elit est mauris feugiat massa. Gravida
                  venenatis id ullamcorper nunc, leo rhoncus. Sed sed senectus
                  augue mi ultrices. Iaculis etiam duis odio metus libero. Fusce
                  tellus aenean aliquet justo, maecenas sit in nec est.{" "}
                </p>
                <div>
                  <span className={Styles.oldPrice}>₹ 1200.00</span>
                  <span className={Styles.newPrice}>₹ 800.00</span>
                </div>
                <div>
                  <div className={Styles.ratingContainer}>
                    <Rating
                      placeholderRating={3.5}
                      initialRating={4}
                      emptySymbol={<img src={EmptyStar} className="icon" />}
                      placeholderSymbol={
                        <img src={EmptyStar} className="icon" />
                      }
                      fullSymbol={<img src={filledStar} className="icon" />}
                    />
                  </div>
                </div>
                <div>
                  <span className="kstoreFont fs-4">Quantity</span>
                  <input
                    className={Styles.productCount}
                    type="number"
                    defaultValue={1}
                  />
                  <button className={Styles.addtocartBtn}>add to cart</button>
                </div>
                <div className="d-flex mt-3">
                  <div className={Styles.likeContainer}>
                    <img className={Styles.likeImg} src={like} alt="like" />
                  </div>
                  <span className={Styles.title}>Add To Wishlist</span>
                  <div className={Styles.likeContainer}>
                    <img className={Styles.likeImg} src={share} alt="like" />
                  </div>
                  <span className={Styles.title}>Add To Compare</span>
                </div>
                <div className={Styles.offerParentContainer + " mt-3"}>
                  {offerdata.map((e) => (
                    <div>
                      <img
                        className={Styles.offerImg}
                        src={offerPoints}
                        alt="points"
                      />
                      <span className={Styles.offerDescription}>
                        {e.description}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Accordion>
                    <Accordion.Item eventKey="0" className={Styles.items}>
                      <Accordion.Header className="kstoreFont text-capitalize">
                        Description
                      </Accordion.Header>
                      <Accordion.Body className={Styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className={Styles.items}>
                      <Accordion.Header className="kstoreFont text-capitalize">
                        Feautures & Specification
                      </Accordion.Header>
                      <Accordion.Body className={Styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className={Styles.items}>
                      <Accordion.Header className="kstoreFont text-capitalize">
                        Reviews
                      </Accordion.Header>
                      <Accordion.Body className={Styles.description}>
                        <div className="d-flex">
                          <div className={Styles.reviewProfileContainer}>
                            <img
                              className={Styles.reviewProfile}
                              src={reviewProfile}
                              alt="profile"
                            />
                          </div>
                          <div className={Styles.profileContent}>
                            <p className="kstoreFont mb-0">John Abraham</p>
                            <div className={Styles.ratingContainer}>
                              <Rating
                                placeholderRating={3.5}
                                initialRating={4}
                                emptySymbol={
                                  <img src={EmptyStar} className="icon" />
                                }
                                placeholderSymbol={
                                  <img src={EmptyStar} className="icon" />
                                }
                                fullSymbol={
                                  <img src={filledStar} className="icon" />
                                }
                              />
                            </div>
                            <p className={Styles.profileDescription}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. A morbi integer malesuada non adipiscing
                              quis odio. Feugiat eu in massa pretium, elit est
                              mauris feugiat massa.{" "}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="kstoreFont fs-5 mb-0">Add review</p>
                        </div>
                        <div>
                          <form>
                            <div className="d-flex justify-content-between">
                              <input
                                className={Styles.input}
                                type="text"
                                placeholder="Name"
                              />
                              <input
                                className={Styles.input}
                                type="Email"
                                placeholder="Email"
                              />
                            </div>
                            <div className="mt-3">
                              <textarea className={Styles.textarea} />
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                              <div className={Styles.reviewUserRatingContainer}>
                                <span className={Styles.ratings}>
                                  Your Ratings :
                                </span>
                                <div className={Styles.ratingContainer}>
                                  <Rating
                                    placeholderRating={3.5}
                                    initialRating={4}
                                    emptySymbol={
                                      <img src={EmptyStar} className="icon" />
                                    }
                                    placeholderSymbol={
                                      <img src={EmptyStar} className="icon" />
                                    }
                                    fullSymbol={
                                      <img src={filledStar} className="icon" />
                                    }
                                  />
                                </div>
                              </div>
                              <button
                                className={Styles.reviewSubmitBtn}
                                type="submit"
                              >
                                submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
