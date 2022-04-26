const addTask = (task) => {
    return {
        type: "ADD",
        payload: task,
    };
};

const doTask = (task) => {
    return {
        type: "DO",
        payload: task,
    };
};

const deleteTask = (task) => {
    return {
        type: "DELETE",
        payload: task,
    };
};

export { addTask, doTask, deleteTask };