const PuzzleTab = () => (
  <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-bold mb-4">Daily Puzzle</h3>
    <p className="mb-4 text-gray-300">Play the daily puzzle to earn 10 tokens!</p>

    <div className="bg-gray-800 rounded-lg p-4 mb-6">
      <p className="font-medium text-blue-400">Todays Challenge:</p>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        <button className="bg-gray-700 border border-gray-600 rounded-md p-4 text-center hover:bg-gray-600 transition">
          <span className="font-bold text-white">Tic-Tac-Toe</span>
        </button>
        <button className="bg-gray-700 border border-gray-600 rounded-md p-4 text-center hover:bg-gray-600 transition">
          <span className="font-bold text-white">Hangman</span>
        </button>
        <button className="bg-gray-700 border border-gray-600 rounded-md p-4 text-center hover:bg-gray-600 transition">
          <span className="font-bold text-white">Tenzi</span>
        </button>
      </div>
    </div>

    <div>
      <h4 className="font-bold mb-3">Previous Puzzles</h4>
      <div className="space-y-2">
        <div className="flex justify-between p-2 bg-gray-800 rounded">
          <span className="text-gray-300">March 1: Tic-Tac-Toe</span>
          <span className="text-green-400">Completed ✓</span>
        </div>
        <div className="flex justify-between p-2 bg-gray-800 rounded">
          <span className="text-gray-300">February 28: Hangman</span>
          <span className="text-green-400">Completed ✓</span>
        </div>
        <div className="flex justify-between p-2 bg-gray-800 rounded">
          <span className="text-gray-300">February 27: Tenzi</span>
          <span className="text-red-400">Missed ✗</span>
        </div>
      </div>
    </div>
  </div>
);


export default PuzzleTab;
