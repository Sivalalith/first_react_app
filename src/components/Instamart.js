import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-2 border border-black">
      <h2 className="font-bold text-xl inline">{title}</h2>
      {!isVisible && (
        <button
          className="pl-5 pr-2 font-semibold underline"
          onClick={() => setIsVisible("show")}
        >
          Show
        </button>
      )}
      {isVisible && (
        <>
          <button
            className="pl-5 pr-2 font-semibold underline"
            onClick={() => setIsVisible("hide")}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

const Instamart = () => {
  const [sectionVisible, setSectionVisible] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a tortor interdum, scelerisque magna id, aliquet nisl. Suspendisse faucibus rutrum odio, vitae aliquet metus gravida non. In hac habitasse platea dictumst. Aliquam eu elit arcu. Fusce lacinia leo tincidunt vehicula aliquet. Sed ultrices facilisis leo, vitae lobortis justo eleifend eu. Quisque faucibus purus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi suscipit, magna vel malesuada tempor, nulla nulla commodo velit, a consequat nisi est sit amet eros. Cras ornare gravida ipsum, vel cursus neque sodales quis. Donec mattis arcu lacinia enim feugiat sollicitudin. Aliquam a justo non quam interdum molestie. Curabitur odio metus, rhoncus quis purus eu, lacinia varius tellus."
        }
        isVisible={sectionVisible === "about"}
        setIsVisible={(input) => {
          if (input === "show") {
            setSectionVisible("about");
          } else {
            setSectionVisible("");
          }
        }}
      />
      <Section
        title={"Team of Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a tortor interdum, scelerisque magna id, aliquet nisl. Suspendisse faucibus rutrum odio, vitae aliquet metus gravida non. In hac habitasse platea dictumst. Aliquam eu elit arcu. Fusce lacinia leo tincidunt vehicula aliquet. Sed ultrices facilisis leo, vitae lobortis justo eleifend eu. Quisque faucibus purus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi suscipit, magna vel malesuada tempor, nulla nulla commodo velit, a consequat nisi est sit amet eros. Cras ornare gravida ipsum, vel cursus neque sodales quis. Donec mattis arcu lacinia enim feugiat sollicitudin. Aliquam a justo non quam interdum molestie. Curabitur odio metus, rhoncus quis purus eu, lacinia varius tellus."
        }
        isVisible={sectionVisible === "team"}
        setIsVisible={(input) => {
          if (input === "show") {
            setSectionVisible("team");
          } else {
            setSectionVisible("");
          }
        }}
      />
      <Section
        title={"Features of Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a tortor interdum, scelerisque magna id, aliquet nisl. Suspendisse faucibus rutrum odio, vitae aliquet metus gravida non. In hac habitasse platea dictumst. Aliquam eu elit arcu. Fusce lacinia leo tincidunt vehicula aliquet. Sed ultrices facilisis leo, vitae lobortis justo eleifend eu. Quisque faucibus purus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi suscipit, magna vel malesuada tempor, nulla nulla commodo velit, a consequat nisi est sit amet eros. Cras ornare gravida ipsum, vel cursus neque sodales quis. Donec mattis arcu lacinia enim feugiat sollicitudin. Aliquam a justo non quam interdum molestie. Curabitur odio metus, rhoncus quis purus eu, lacinia varius tellus."
        }
        isVisible={sectionVisible === "features"}
        setIsVisible={(input) => {
          if (input === "show") {
            setSectionVisible("features");
          } else {
            setSectionVisible("");
          }
        }}
      />
    </div>
  );
};

export default Instamart;
