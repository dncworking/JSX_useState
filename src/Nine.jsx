import { useState } from "react";

function Nine() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    if (activeTab === "Home") return <p>Wellcome too Home Page</p>;
    if (activeTab === "About") return <p>Wellcome too About Page</p>;
    if (activeTab === "Contact") return <p>Wellcome too Contact Page</p>;
  };

  return (
    <>
    <br />
      <button
        onClick={() => setActiveTab("Home")}
        style={{ backgroundColor: activeTab === "Home" ? "yellow" : "white" }}
      >
        Home
      </button>
      <button
        onClick={() => setActiveTab("About")}
        style={{ backgroundColor: activeTab === "About" ? "yellow" : "white" }}
      >
        About
      </button>
      <button
        onClick={() => setActiveTab("Contact")}
        style={{
          backgroundColor: activeTab === "Contact" ? "yellow" : "white",
        }}
      >
        Contact
      </button>

      {renderContent()}
    </>
  );
}
export default Nine;
