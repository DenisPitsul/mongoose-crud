const mongoose = require('mongoose');

// mongoose
//   .connect('mongodb://127.0.0.1:27017/new_db')
//   .then(() => console.log('Connection to DB OK'))
//   .catch(err => console.log('Error:', err));

(async function () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/new_db');
    console.log('Connection to DB OK');

    const taskSchema = new mongoose.Schema({ value: String });
    const Task = mongoose.model('Task', taskSchema);

    // const newTask = { value: 'Walk' };
    // const createdTask = await Task.create(newTask);
    // console.log('createdTask:', createdTask);

    // const foundTasks = await Task.find();
    // console.log('foundTasks:', foundTasks);

    // const foundTask = await Task.findById('66f41ee0bb9299418b04d6d4');
    // console.log('foundTask:', foundTask);

    // const updatedTask = await Task.findByIdAndUpdate(
    //   '66f41ee0bb9299418b04d6d4',
    //   { value: 'Updated Task 2' },
    //   { new: true }
    // );
    // console.log('updatedTask:', updatedTask);

    // const deletedTask = await Task.findByIdAndDelete(
    //   '66f41ee0bb9299418b04d6d4'
    // );
    // console.log('deletedTask:', deletedTask);
  } catch (err) {
    console.log('Error:', err);
  }
})();
