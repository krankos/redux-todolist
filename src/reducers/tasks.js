const tasks = (tasks = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...tasks, action.payload];
        case "DO":
            return tasks.map((task) =>
                task.id === action.payload.id ?
                {
                    ...action.payload,
                    state: action.payload.state === "Done" ? "undone" : "Done",
                } :
                task
            );
        case "DELETE":
            return tasks.filter((task) => task.id !== action.payload.id);

        default:
            return tasks;
    }
};
export default tasks;