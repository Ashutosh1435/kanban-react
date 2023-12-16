import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { useEffect } from "react";

const Kanban = () => {
  // state variables
  const [columns, setColumns] = useState([]);
  // use effects
  useEffect(() => {
    fetch("http://localhost:3001/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setColumns(data.data);
      })
      .catch((err) => console.error("Error : ", err));
  }, [columns]);
  // handle functions
  const onDragEnd = (result, columns, setColumns) => {
    console.log("on drag end ==>", result);
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <>
      {Object.keys(columns).length ? (
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <div className="container">
            <div className="taskColumnStyles">
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <Droppable key={index} droppableId={columnId}>
                    {(provided, snapshot) => (
                      <div
                        className="tasklist"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {provided.placeholder}
                        <div className="title">{column.title}</div>
                        {column.items.map((item, idx) => (
                          <TaskCard key={idx} item={item} index={idx} />
                        ))}
                      </div>
                    )}
                  </Droppable>
                );
              })}
            </div>
          </div>
        </DragDropContext>
      ) : null}
    </>
  );
};

export default Kanban;
