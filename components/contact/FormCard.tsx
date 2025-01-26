import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "react-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

type FormCardProps = {
  title: string;
  icon: FontAwesomeIconProps["icon"];
  itemDetail: string;
};

const FormCard = ({ title, icon, itemDetail }: FormCardProps) => {
  return (
    <div className="flex flex-col border border-gray-400 rounded-md w-full h-[5rem]">
      <span className="rounded-full w-[2rem] h-[2rem] border border-blue-500 mx-auto">
        <FontAwesomeIcon icon={icon} />
      </span>
      <h3 className="text-sm">{title}</h3>
      <p className="text-sm">{itemDetail}</p>
    </div>
  );
};

export default FormCard;
