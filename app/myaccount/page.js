"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Profile from "@/app/_component/Profile";
import CommonButton from "../_component/commenComponent/CommonButton";
import Order from "../_component/Order";
import Overview from "@/app/_component/Overview";
import Wishlist from "../_component/Wishlist";
import CreateCategory from "../_component/CreateCategeory";
import CreateProduct from "../_component/CreateProduct";

const Dashboard = () => {
  const [role, setRole] = useState("");
  const [dynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    const browseAuthData = localStorage.getItem("auth");
    if (browseAuthData) {
      const parsedData = JSON.parse(browseAuthData);
      setRole(parsedData?.user?.role === 1 ? "admin" : "user");
    }
  }, []);

  const renderDynamicComponent = () => {
    switch (dynamicComponent) {
      case "overView":
        return <Overview />;
      case "profile":
        return <Profile />;
      case "order":
        return <Order />;
      case "wishlist":
        return <Wishlist />;
      case "createCategory":
        return <CreateCategory />;
      case "createProduct":
        return <CreateProduct />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <Row>
        <Col sm={3}>
          <div className="d-flex flex-column">
            <CommonButton
              clickme={() => setDynamicComponent("overView")}
              title={"OverView"}
              className={"p-3 border-0 bg-transparent text-black "}
            />
            <CommonButton
              clickme={() => setDynamicComponent("profile")}
              title={"My Profile"}
              className={"p-3 border-0 bg-transparent text-black "}
            />
            <CommonButton
              clickme={() => setDynamicComponent("order")}
              title={"My Order"}
              className={"p-3 border-0 bg-transparent text-black "}
            />
            <CommonButton
              clickme={() => setDynamicComponent("wishlist")}
              title={"My Wishlist"}
              className={"p-3 border-0 bg-transparent text-black "}
            />
            {role === "admin" && (
              <div className="d-flex flex-column">
                <CommonButton
                  clickme={() => setDynamicComponent("createCategory")}
                  title={"Create Category"}
                  className={"p-3 border-0 bg-transparent text-black "}
                />
                <CommonButton
                  clickme={() => setDynamicComponent("createProduct")}
                  title={"Create Product"}
                  className={"p-3 border-0 bg-transparent text-black "}
                />
              </div>
            )}
          </div>
        </Col>

        <Col sm={9}>{renderDynamicComponent()}</Col>
      </Row>
    </>
  );
};

export default Dashboard;
