import React, { useCallback, useRef, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { useEffect } from "react";
import { debounce } from "lodash";

const Kanban = () => {
  // state variables
  const [columns, setColumns] = useState([]);
  const [searchText, setSearchText] = useState();
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
  }, []);
  // handle functions
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      const updatedBoard = {
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      };
      setColumns(updatedBoard);
      handleUpdateBoard(updatedBoard);
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      const updatedBoard = {
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      };
      setColumns(updatedBoard);
      handleUpdateBoard(updatedBoard);
    }
  };
  // handle borad update
  const handleUpdateBoard = (updatedBoard) => {
    fetch("http://localhost:3001/updateTasks", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBoard),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.error("Update Error : ", err));
  };
  // search debounce
  const searchHandler = useCallback(
    debounce((value) => {
      fetch(`http://localhost:3001/tasks/${value}`, {
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
    }, 1000),
    []
  );
  // handle search change
  const handleSearchTextChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    searchHandler(value);
  };
  return (
    <>
      {Object.keys(columns).length ? (
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <div className="container">
            <div className="search-container">
              <input
                autoFocus
                value={searchText}
                onChange={handleSearchTextChange}
                placeholder="Search Tasks"
                type="text"
                className="searck-input"
              />
            </div>
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
                        <div className="title">
                          {column.title + ` (${column.items.length})`}
                        </div>
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
