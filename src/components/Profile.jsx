import React from 'react';

const Profile = () => {
    return (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-auto transform transition hover:scale-105 duration-300 border border-white/50">
            <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-400 mb-6 shadow-lg">
                    <img
                        src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix"
                        alt="Profile Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Takeshi</h2>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">Frontend Developer</p>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    React と Tailwind CSS で美しい UI を作るのが大好きです。
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 shadow-md">
                        Follow
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full border border-gray-300 transition duration-300 shadow-sm">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
