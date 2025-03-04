const TasksTab = ({ tasks }) => (
  <div className="bg-gray-800 text-gray-200 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-bold mb-4">Your Tasks</h3>
    <p className="mb-4">Complete tasks to earn tokens and level up!</p>

    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="border border-gray-700 rounded-md p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  task.completed ? "bg-green-600 text-white" : "bg-gray-700 text-gray-400"
                }`}
              >
                {task.completed ? "✓" : "○"}
              </div>
              <span
                className={`ml-3 font-medium ${
                  task.completed ? "text-gray-500 line-through" : ""
                }`}
              >
                {task.title}
              </span>
            </div>
            <div className="text-green-400 font-bold">+{task.reward}</div>
          </div>
          {!task.completed && (
            <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-500">
              Complete Now
            </button>
          )}
        </div>
      ))}
    </div>

    {/* Daily Bonus Section */}
    <div className="mt-6 p-4 bg-gray-700 rounded-md border border-gray-600">
      <h4 className="font-bold text-blue-400 mb-2">Daily Bonus</h4>
      <p className="text-sm text-gray-300 mb-2">
        Log in 5 days in a row to get a 50 token bonus!
      </p>
      {/* <div className="flex space-x-2">
        {userData.dailyStreak.map((day, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              day.completed ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-400"
            }`}
          >
            {day.completed ? "✓" : index + 1}
          </div>
        ))}
      </div> */}
    </div>
  </div>
);


export default TasksTab;
