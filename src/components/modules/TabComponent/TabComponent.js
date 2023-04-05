import Button from "@/components/elements/Button/Button";
import React, { useState } from "react";
import classes from "./TabComponent.module.scss";

const TabComponent = function ({ btnTitles, children }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabClickHandler = function (activeTabIndex) {
    setActiveTabIndex(activeTabIndex);
  };

  return (
    <div className={classes["TabComponent"]}>
      <div className={classes["TabComponent__btns"]}>
        {btnTitles.map((title, index) => (
          <Button
            onClick={() => tabClickHandler(index)}
            type="dark-blue"
            key={index}
            active={index === activeTabIndex}
          >
            {title}
          </Button>
        ))}
      </div>
      {React.Children.map(children, (child, index) => {
        const activeClass = index === activeTabIndex ? classes["active"] : "";
        return React.cloneElement(child, {
          className: `${classes["TabComponent__text"]} ${activeClass}`,
        });
      })}
    </div>
  );
};

export default TabComponent;
