const Profile = () => {
    return (
        <div className="mt-14 h-full flex justify-center">
            <div className="w-4/5 flex flex-col">

                <div className="h-96 bg-zinc-400 rounded-b-2xl">
                    <div className="absolute bottom-0 h-0 gap-4 w-full flex items-center">
                        <div className="h-40 w-40 border-8 border-white rounded-full flex-shrink-0 bg-zinc-300"></div>

                        <div className="w-full flex flex-col justify-between gap-4">
                            <div className="h-9 flex items-center">
                                <span className="text-2xl font-bold text-zinc-800">
                                    Username
                                </span>
                            </div>
                            <div className="h-9 flex items-center">
                                bio here
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;