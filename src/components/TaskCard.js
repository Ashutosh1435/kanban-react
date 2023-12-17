import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TaskCard = ({ item, index }) => {
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
              <div className="profile_info">
                <p className="profile__name">{item?.title}</p>
                <p className="profile__role">
                  {"Reporter" + ": " + item?.Reporter}
                </p>
                <p className="profile__role">
                  {"Assignee" + ": " + item?.assignee}
                </p>
              </div>
            </div>

            <div className="secondary-details mt-2 ">
              <p className="details">{"Sprint -" + item.sprint}</p>
            </div>
            <div className="right-[-40px] ml-[10px] bottom-[-50px] absolute text-6xl w-[105px]">
              <CircularProgressbar
                value={93}
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


