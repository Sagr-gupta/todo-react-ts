import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem>
        <Box
          maxW="-moz-fit-content"
          borderWidth="1px"
          borderRadius="lg"
          overflow="visible"
          padding="1rem"
          boxShadow="lg"
          bg={"#F4E2FF"}
        >
          <Droppable droppableId="TodosList">
            {(provided) => (
              <Box ref={provided.innerRef} {...provided.droppableProps}>
                <Text decoration={"underline"} marginBottom="0.5rem">
                  Incomplete task
                </Text>
                {todos?.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                  />
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Box>
      </GridItem>
      <GridItem>
        <Box
          maxW="-moz-fit-content"
          borderWidth="1px"
          borderRadius="lg"
          overflow="visible"
          padding="1rem"
          boxShadow="lg"
          bg={"#d4ffdb"}
        >
          <Droppable droppableId="TodosRemove">
            {(provided) => (
              <Box ref={provided.innerRef} {...provided.droppableProps}>
                <Text decoration={"underline"} marginBottom="0.5rem">
                  Completed task
                </Text>
                {completedTodos?.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    key={todo.id}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                  />
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default TodoList;
