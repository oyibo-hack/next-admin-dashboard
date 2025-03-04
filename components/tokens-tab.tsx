const TokensTab = ({ userData }) => (
  <div className="bg-gray-800 text-gray-200 rounded-lg p-6 shadow-md">
    {/* Token Balance Section */}
    <div className="text-center mb-6">
      <h3 className="text-xl font-bold mb-2">Your Token Balance</h3>
      <div className="text-4xl font-bold text-blue-400">{userData.tokens}</div>
      <p className="text-sm text-gray-400 mt-1">Level {userData.level}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-600 rounded-full h-2 mt-4">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${(userData.level / 10) * 100}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-400 mt-1">
        {600 - userData.tokens} tokens until Level {userData.level + 1}
      </p>
    </div>

    {/* Token History */}
    {/* <div className="mb-6">
      <h4 className="font-bold mb-3">Token History</h4>
      <div className="space-y-2">
        {userData.history.map((entry, index) => (
          <div
            key={index}
            className="flex justify-between p-2 bg-gray-700 rounded"
          >
            <span>{entry.description}</span>
            <span className="text-green-400">+{entry.amount}</span>
          </div>
        ))}
      </div>
    </div> */}

    {/* Redeem Tokens */}
    <div>
      <h4 className="font-bold mb-3">Redeem Tokens</h4>
      <div className="grid grid-cols-2 gap-3">
          <div
            className="border border-gray-600 rounded-md p-3 text-center hover:bg-gray-700 cursor-pointer"
          >
            <p className="font-bold">Premium Month</p>
            <p className="text-blue-400 font-bold">500 tokens</p>
          </div>
          <div
            className="border border-gray-600 rounded-md p-3 text-center hover:bg-gray-700 cursor-pointer"
          >
            <p className="font-bold">Premium Month</p>
            <p className="text-blue-400 font-bold">500 tokens</p>
          </div>
          <div
            className="border border-gray-600 rounded-md p-3 text-center hover:bg-gray-700 cursor-pointer"
          >
            <p className="font-bold">Premium Month</p>
            <p className="text-blue-400 font-bold">500 tokens</p>
          </div>
      </div>
    </div>
  </div>
);


  export default TokensTab