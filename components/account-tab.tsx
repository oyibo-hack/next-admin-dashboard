// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from "react";

const AccountTab = ({ userData }) => {
  return (
    <div className="bg-gray-800 text-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">Manage Account</h3>

      {/* Profile Information */}
      <div className="mb-6">
        <h4 className="font-bold mb-3">Profile Information</h4>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={userData.name}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={userData.email}
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition">
            Update Profile
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-6">
        <h4 className="font-bold mb-3">Notification Settings</h4>
        <div className="space-y-2">
          {[
            { id: "email_notif", label: "Email notifications", checked: true },
            { id: "referral_notif", label: "Referral updates", checked: true },
            {
              id: "puzzle_notif",
              label: "Daily puzzle reminders",
              checked: true,
            },
          ].map((notif) => (
            <div key={notif.id} className="flex items-center">
              <input
                type="checkbox"
                id={notif.id}
                className="h-4 w-4 text-blue-500 bg-gray-700 border-gray-600 rounded"
                defaultChecked={notif.checked}
              />
              <label htmlFor={notif.id} className="ml-2">
                {notif.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Account Actions */}
      <div>
        <h4 className="font-bold mb-3">Account Actions</h4>
        <div className="space-y-2">
          <button className="w-full py-2 px-4 border border-gray-600 rounded-md bg-gray-700 hover:bg-gray-600 text-left transition">
            Change Password
          </button>
          <button className="w-full py-2 px-4 border border-gray-600 rounded-md bg-gray-700 hover:bg-gray-600 text-left transition">
            Download Your Data
          </button>
          <button className="w-full py-2 px-4 border border-red-500 text-red-500 rounded-md bg-gray-700 hover:bg-red-500 hover:text-white text-left transition">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
