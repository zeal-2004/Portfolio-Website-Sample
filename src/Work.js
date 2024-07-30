export default function Work() {
  const headStyle = {
    color: "#344054",
    fontFamily: "Lufga-logo",
  };
  const paraStyle = {
    color: "#98A2B3",
    fontFamily: "Lufga",
  };
  const circle = {
    backgroundColor: "#FD853A",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
  };
  const circleMiddle = {
    backgroundColor: "#344054",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
  };
  const vl = {
    borderRight: "3px dashed #344054",
    height: "100px",
    position: "relative",
    left: "-26px",
  };
  return (
    <div class="my-5">
      <h1 style={headStyle} class="text-center">
        My <span style={{ color: "#FD853A" }}>Work Experience </span>
      </h1>
      <div class="d-flex justify-content-between align-items-center container mt-5">
        <div style={headStyle}>
          <h2>Cognizant, Mumbai</h2>
          <p style={paraStyle}>Sept 2016-July 2020</p>
          <br />
          <br />
          <h2>Sugee Pvt limited, Mumbai</h2>
          <p style={paraStyle}>Sept 2020-July 2023</p>
          <br />
          <br />
          <h2>Cinetstox, Mumbai</h2>
          <p style={paraStyle}>Sept 2023</p>
        </div>
        <div>
          <div
            style={{
              borderRadius: "50%",
              border: "3px dashed",
              padding: "5px",
            }}
          >
            <div style={circle}></div>
          </div>
          <div style={vl}></div>
          <div
            style={{
              borderRadius: "50%",
              border: "3px dashed",
              padding: "5px",
            }}
          >
            <div style={circleMiddle}></div>
          </div>
          <div style={vl}></div>
          <div
            style={{
              borderRadius: "50%",
              border: "3px dashed",
              padding: "5px",
            }}
          >
            <div style={circle}></div>
          </div>
        </div>
        <div class="w-25" style={headStyle}>
          <h2>Experience Designer</h2>
          <p style={paraStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales{" "}
          </p>
          <br />
          <h2>UI/UX Designer</h2>
          <p style={paraStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales{" "}
          </p>
          <br />
          <h2>Lead UX Designer</h2>
        </div>
      </div>
    </div>
  );
}
