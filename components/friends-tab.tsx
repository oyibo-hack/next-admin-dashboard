import React from "react";

export const FriendsTab = ({friends}) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">Your Referrals</h3>
      <p className="mb-4 text-gray-300">
        Invite friends to earn tokens! Each successful referral gets you 50
        tokens.
      </p>

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-700 bg-gray-800 rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="https://referral.example.com/u/alexj"
            readOnly
          />
          <button className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 transition">
            Copy
          </button>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition">
          Invite via Email
        </button>
      </div>

      <div>
        <h4 className="font-bold mb-2">Your Friends ({friends.length})</h4>
        <div className="space-y-3">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-3 bg-gray-800 rounded-md"
            >
              <div>
                <p className="font-medium">{friend.name}</p>
                <span
                  className={`text-sm ${
                    friend.status === "active"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {friend.status === "active" ? "Active" : "Pending"}
                </span>
              </div>
              {friend.status === "active" && (
                <div className="text-right">
                  <p className="text-sm text-gray-400">Generated for you</p>
                  <p className="font-bold text-blue-400">
                    {friend.tokens} tokens
                  </p>
                  <button
                    className={`mt-2 py-1 px-3 text-sm rounded-md ${
                      friend.claimed
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700 transition"
                    }`}
                    disabled={friend.claimed}
                  >
                    {friend.claimed ? "Claimed" : "Claim"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
