import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TaskCard = ({ item, index }) => {
  //   console.log("task :", item);
  const percentage = 93;
  return (
    <Draggable key={index} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="taskinfo relative overflow-hidden">
            <div className="profile__info__container">
              <img src={item.profile} alt="" srcSet="" />
              <div className="profile_info">
                <p className="profile__name">{item?.name}</p>
                <p className="profile__role">{item?.role}</p>
              </div>
            </div>

            <div className="secondary-details mt-2 ml-2 ">
              <p className="details flex flex-row items-center">
                <FaRegBuilding className="text-[#6F3EB2]" />
                {item?.company}
              </p>
              <p className="details flex flex-row items-center">
                <IoLocationOutline className="text-[#6F3EB2]" />
                {item.location}
              </p>
            </div>
            <div className="right-[-40px] ml-[10px] bottom-[-50px] absolute text-6xl w-[105px]">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathColor: `#2B1845`,
                })}
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;


