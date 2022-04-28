const task_data = require('../data/tasks');
const fs = require("fs");

const getAllTasks = (req, res) => {

    // read the file
    const content = fs.readFileSync("data/tasks.txt");

    let data = content.toString();
    data = data.split('\n\r')

    data.map(item => {
        const row = item.split(",")
        row.map(item => {
            const columns = item
        })
        console.log(row)

    }
    )


    console.log(typeof data);
    // response
    res.send(data)
}

const getTask = (req, res) => {
    res.send("GetTask")

}

const createTask = (req, res) => {
    res.send("crete")


}

const updateTask = (req, res) => {
    res.send("update")

}

const deleteTask = (req, res) => {
    res.send("delete")

}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}